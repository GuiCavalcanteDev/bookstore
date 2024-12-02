export const http = {
  post: async (url, body, token) =>
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)  // Converte o objeto para JSON
    })
      .then(response => {
        return response.json()
      })
      .catch(error => {
        console.error('Erro:', error);
      }),

  get: async (url, token) =>
    fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`, // Adicionando o token no cabeçalho
        'Content-Type': 'application/json'  // Cabeçalho opcional, dependendo da API
      }
    })
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.error('Erro:', error);
      }),

  delete: async (url, token) =>
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.error('Erro:', error);
      }),
  put: async (url, body, token) =>
    fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .catch((error) => {
        console.error('Erro:', error);
      })
}