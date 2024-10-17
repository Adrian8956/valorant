Descrição
Este projeto é uma aplicação web desenvolvida em React, com o objetivo de consumir a API do Valorant. O projeto exibe informações dos agentes, mapas, armas, ranques e skins do jogo, proporcionando uma interface responsiva e moderna para os usuários explorarem os detalhes do jogo. A aplicação utiliza rotas para navegação entre diferentes páginas, e cada página exibe informações específicas, como detalhes de agentes e suas habilidades, mapas, arsenal de armas e suas respectivas skins, além de informações sobre ranques.

Funcionalidades
Página de Agentes: Exibe todos os agentes do Valorant, mostrando seus ícones, habilidades e informações detalhadas.
Página de Mapas: Lista todos os mapas do jogo com imagens e coordenadas.
Página de Armas: Apresenta as armas disponíveis no jogo, mostrando suas imagens e nomes.
Página de Skins de Armas: Para cada arma, é possível visualizar suas skins disponíveis.
Página de Ranques: Exibe os ranques competitivos disponíveis, com ícones e nomes.
Navegação entre páginas com destaque para o menu ativo.
Layout totalmente responsivo para telas pequenas e grandes.
Tecnologias Utilizadas
React: Biblioteca JavaScript para construção da interface.
React Router DOM: Para navegação entre as páginas.
Axios: Cliente HTTP para realizar requisições à API.
Valorant API: API externa utilizada para obter os dados do jogo.
CSS: Para estilização dos componentes, garantindo responsividade e usabilidade.
Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

Git
Node.js
Um editor de código como o VSCode
Como rodar o projeto
1. Clone o repositório
bash
Copiar código
git clone https://github.com/Adrian8956/valorant.git
2. Acesse a pasta do projeto
bash
Copiar código
cd valorant-react-app
3. Instale as dependências
bash
Copiar código
npm install
4. Inicie a aplicação
bash
Copiar código
npm start
A aplicação estará rodando em http://localhost:3000.

Estrutura do Projeto
php
Copiar código
valorant-react-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header/        # Componente de navegação superior (menu)
│   ├── pages/
│   │   ├── Agentes.js     # Página de listagem de agentes
│   │   ├── Armas.js       # Página de listagem de armas
│   │   ├── Mapas.js       # Página de listagem de mapas
│   │   ├── Skins.js       # Página de listagem de skins por arma
│   │   └── Ranques.js     # Página de listagem de ranques
│   ├── services/
│   │   └── api.js         # Configuração de Axios para consumir a API
│   ├── App.js             # Componente principal que define as rotas
│   ├── index.js           # Arquivo principal de entrada
│   └── styles/
│       └── global.css     # Arquivo global de estilos
└── package.json           # Configurações e dependências do projeto
Endpoints da API
O projeto faz uso dos seguintes endpoints da API do Valorant:

Agentes: /agents?language=pt-BR
Mapas: /maps?language=pt-BR
Armas: /weapons?language=pt-BR
Ranques: /competitivetiers?language=pt-BR
Implementação Detalhada
1. Consumo da API com Axios
javascript
Copiar código
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://valorant-api.com/v1'
});

export default api;
2. Exemplo de componente (Página de Agentes)
javascript
Copiar código
import { useEffect, useState } from 'react';
import api from '../../services/api';

function Agentes() {
  const [agentes, setAgentes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAgentes() {
      const response = await api.get('/agents', { params: { language: 'pt-BR' } });
      setAgentes(response.data.data);
      setLoading(false);
    }
    loadAgentes();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="list-agentes">
      {agentes.map(agente => (
        <div key={agente.uuid} className="card-agente">
          <img src={agente.displayIcon} alt={agente.displayName} />
          <h2>{agente.displayName}</h2>
          <h3>Classe: {agente.role.displayName}</h3>
        </div>
      ))}
    </div>
  );
}

export default Agentes;
3. Estilização (CSS)
css
Copiar código
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.list-agentes, .list-armas, .list-skins, .list-ranques {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card-agente, .card-arma, .card-skin, .card-ranque {
  background-color: #1e1e1e;
  color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: calc(50% - 40px);
  transition: transform 0.3s;
}

.card-agente img, .card-arma img, .card-skin img, .card-ranque img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.card-agente:hover, .card-arma:hover, .card-skin:hover, .card-ranque:hover {
  transform: scale(1.05);
}
Melhorias Futuras
Implementar uma busca para facilitar a localização de agentes, armas ou mapas específicos.
Adicionar um filtro por classe de agente e tipo de arma.
Integrar autenticação para acessar recursos exclusivos.
Contribuições
Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias e correções no projeto. Feedbacks e contribuições são sempre bem-vindos!






