const BASE_URL = import.meta.env.VITE_API_URL || "https://jsonplaceholder.typicode.com";

export async function buscarSugestoes(signal) {
  const resposta = await fetch(`${BASE_URL}/posts?_limit=4`, { signal });
  
  if (!resposta.ok) {
    throw new Error(`Erro na requisição: ${resposta.status}`);
  }
  
  return await resposta.json();
}