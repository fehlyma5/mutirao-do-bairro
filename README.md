# 🛠️ Mutirão do Bairro

Uma aplicação web desenvolvida em React para gerenciamento e organização de tarefas de mutirões comunitários no bairro.

---

## 📋 Requisitos
Para rodar este projeto localmente, você precisará de:
* **Node.js** (versão 18 ou superior)
* **npm** (gerenciador de pacotes)

---

## 🚀 Instalação

1. Clone o repositório para a sua máquina:
   '''bash
   git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)

2. Acesse a pasta do seu projeto:
   '''bash
   cd seu-repositorio

3. Instale as dependencias:
   npm install

4. Execute o modo desenvolvedor:
   npm run dev
   (se tudo der certo em nome de Jesus, vai aparecer um localhost parecido com: https: localhost/5170) pode clicar em cima sem medo.

## 📦 Build e Preview
5. Para gerar a compilação final de produção e testar o build localmente:
  npm run build
  (aqui estamos gerando os arquivos otimizados)

7. Execute a pré-visualização do build de produção:
   npm run preview
   (e pronta você verá a aplicação no seu navegador, fique a vontade para testar)

   <img width="895" height="718" alt="image" src="https://github.com/user-attachments/assets/7eb455f6-d4a0-4c61-bb5c-fce6126087c7" />


## ✨ Funcionalidades
Gerenciamento de Estado Global (TarefasContext): Compartilhamento de dados sem prop drilling.

Navegação com React Router: SPA configurada com 6 rotas principais (/, /nova, /tarefas, /relatorio, /sugestoes, /sobre), rotas dinâmicas (/tarefas/:tarefaId) e página 404 personalizada.

Formulários Controlados: Cadastro com validação de campos obrigatórios sem uso de alertas nativos do navegador.

Persistência de Dados (localStorage): Sincronização automática do estado com tolerância a falhas e inicialização preguiçosa (lazy initialization).

Integração com API Externa: Busca de sugestões com controle de requisição via AbortController e tratamento dos estados de carregamento, sucesso e erro.

Efeitos e Título Dinâmico: Sincronização do título da aba do navegador para exibir a contagem de tarefas pendentes em tempo real.

## Sobre o desenvolvedor:
Fiz essa atividade como forma de avaliação final do módulo 4 do curso de full stack, cujo o foco era essa inserção no mundo fantástico do react.
Prof Virgilio Junior conduziu essa jornada do saber com carga 220 mas deu para tirar o maior proveito possível.
Grato ao ITEAM pela oportunidade.
Dúvidas, apontamentos, arguições. Estou a disposição.
