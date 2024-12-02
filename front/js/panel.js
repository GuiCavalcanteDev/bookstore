import { Book } from "./model/postBook.js";
import { addBook, DeleteBook, editBook, GetBookById, GetBooks } from "./service/booksService.js";


const listDados = document.getElementById("listDados")
const editFilm = document.getElementById("edit-film");

var titleForm = document.getElementById("title-form");
var author = document.getElementById("author-form");
var priceForm = document.getElementById("price-form");

var Books = []

document.addEventListener("DOMContentLoaded", async () => {

    let response = await GetBooks();

    if(response.status == 401 || response == null || response == undefined){
        sessionStorage.clear()
        window.location.replace('/login.html');
        return
    }

   await LoadBooks(response);
})

export var ListBooks = (data) => {
    
    let dados = document.createElement("div")
        let title = document.createElement("span")
        let autor = document.createElement("span")
        let price = document.createElement("span")
        let crud = document.createElement("span")
            let edit = document.createElement("i")
            let delet = document.createElement("i")

    let priceBRL = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(data.price);    

    title.innerHTML = data.title
    autor.innerHTML = data.author
    price.innerHTML = priceBRL

    dados.setAttribute("id", "dados")
    dados.setAttribute("class", "line")
        crud.setAttribute("class", "icon-crud")
        edit.setAttribute("class", "fa-solid fa-pen-to-square")
        edit.setAttribute("idBook", data.id)
        delet.setAttribute("class", "fa-solid fa-trash-can delete")
        delet.setAttribute("idBook", data.id)

    listDados.appendChild(dados)
    dados.appendChild(title)
    dados.appendChild(autor)
    dados.appendChild(price)
    dados.appendChild(crud)
        crud.appendChild(edit)
        crud.appendChild(delet)

    edit.addEventListener('click', async () => {
            
            let id = edit.getAttribute('idBook')


            let response = await GetBookById(id)

            console.log(response)

            document.getElementById("title-edit").value = response.title;
            document.getElementById("author-edit").value = response.author;
            document.getElementById("price-edit").value = response.price;

            document.getElementById("confirmEdit").setAttribute("idBook", id)

            editFilm.style.display = "flex";
            document.getElementById("crud-Films").style.filter = "blur(8px)"
    })    

    delet.addEventListener('click', async () => {
        let id = delet.getAttribute('idBook')
        let confirmDelete = confirm('Deseja realmente excluir o Livro?')
      
        if(confirmDelete){
            let response = await DeleteBook(id);


            if(response.status == 200){
                alert('Registro excluído com sucesso!')
                let response = await GetBooks()
                await LoadBooks(response);
            }else if(response.status == 401) {
                alert("Sessão expirada")
                window.location.replace('/login.html');
                return
            }else{
                alert('Não foi possível excluir o registro.')
            }
        }
    
    })
    
}


var LoadBooks = async (data) => {
    Books = []
    listDados.innerHTML = ''

    Books.push(data)

    console.log(Books[0])

    Books[0].forEach(data => {
        ListBooks(data)
    });
 
}

document.getElementById("exit-edit").addEventListener("click", () => {
    editFilm.style.display = "none";
    document.getElementById("crud-Films").style.filter = "none"
})

document.getElementById("confirmForm").addEventListener("click", async () => {
    if(titleForm.value == '' || author.value == '' || priceForm.value == ''){
        alert('Todos os campos precisa estar preenchido.')
        return
    }

    let book = new Book(
        titleForm.value, 
        author.value,
        priceForm.value
    );

    let response = await addBook(book);

  

    if(response.status == 201){
        alert("Criado com Sucesso!")
        let response = await GetBooks();
        await LoadBooks(response)
    }else {
        alert("Não foi possivel criar o registro.")
    }

    titleForm.value = '' 
    author.value = ''
    priceForm.value = ''
})

document.getElementById("clearForm").addEventListener("click", () => {
    titleForm.value = '' 
    author.value = ''
    priceForm.value = ''
})

document.getElementById("confirmEdit").addEventListener("click", async () => {
    let titleEdit = document.getElementById("title-edit");
    let authorEdit = document.getElementById("author-edit");
    let priceEdit = document.getElementById("price-edit");

    let id = document.getElementById("confirmEdit").getAttribute("idBook")

    let book = new Book(
        titleEdit.value,
        authorEdit.value,
        priceEdit.value
    );

    let response = await editBook(id, book);
    
    if(response.status == 200){
        alert("Registro editado com sucesso!")
        editFilm.style.display = "none";
        document.getElementById("crud-Films").style.filter = "none"

        let response = await GetBooks();
        await LoadBooks(response)
    }else if(response.status == 401) {
        alert("Sessão expirada")
        window.location.replace('/login.html');
        return
    }else {
        alert("Não foi possivel editar o registro.")
    }
})
