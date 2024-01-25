// Exemplo usando Promises + then (onReject e onFulfilled)

// Função assíncrona que retorna uma Promise
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = 'Dados da API';
        // Simulação de erro
        // const error = 'Erro ao obter os dados da API';
  
        if (data) {
          resolve(data);
        } else {
          reject('Erro ao obter os dados da API');
        }
      }, 2000);
    });
  }
  
  // Exemplo usando then (onReject e onFulfilled)
  fetchData()
    .then((data) => {
      console.log('Dados obtidos:', data);
    })
    .catch((error) => {
      console.log('Erro:', error);
    });
  
  
  // Exemplo usando async/await
  
  async function fetchAsyncData() {
    try {
      const data = await fetchData();
      console.log('Dados obtidos:', data);
    } catch (error) {
      console.log('Erro:', error);
    }
  }
  
  // Chamada da função assíncrona usando async/await
  fetchAsyncData();
  