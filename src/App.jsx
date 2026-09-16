import "./App.css";

/*
  MUTIRÃO DO BAIRRO — ponto de partida.

  Este arquivo está propositalmente quase vazio. Construir a aplicação é a
  atividade. Leia ATIVIDADE.md e docs/01-GUIA-DE-ETAPAS.md antes de escrever
  a primeira linha.

  Ordem sugerida (cada etapa tem critérios de aceite no ATIVIDADE.md):
    E2  componentes, lista com map() e key estável
    E3  props, callback do filho para o pai, children
    E4  useState, atualização imutável, excluir, valor derivado
    E5  formulário controlado, select, validação, filtro
    E6  useEffect, persistência no navegador, limpeza
    E7  contexto, rotas, requisição HTTP com quatro estados

  As pastas já existem para orientar a organização:
    src/components  src/context  src/layouts  src/pages  src/services

  Antes de pedir ajuda, passe pelo docs/04-PROTOCOLO-DE-DEPURACAO.md.
*/

export default function App() {
  const cartoes = [
    { id: 1, titulo: "B.U teste 1", descricao: "Descrição do primeiro cartão." },
    { id: 2, titulo: "B.U teste 2", descricao: "Descrição do segundo cartão." },
    { id: 3, titulo: "B.U teste 3", descricao: "Descrição do terceiro cartão." },
  ];

  return (
    <div className="container">
      {cartoes.map((item) => (
        <div key={item.id} className="card">
          <h3>{item.titulo}</h3>
          <p>{item.descricao}</p>
        </div>
      ))}
    </div>
  );
}
