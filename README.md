# Catálogo Pokémon

## Sobre o projeto

Esse projeto foi desenvolvido em React utilizando a PokéAPI para criar um catálogo de Pokémons.

A aplicação permite visualizar os Pokémons, pesquisar pelo nome e ver algumas informações como imagem, tipos, altura e peso.

O objetivo do trabalho foi praticar o uso de componentes, hooks, consumo de API e estilização com Tailwind CSS.

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- Tailwind CSS
- PokéAPI

## Funcionalidades

- Listagem de Pokémons
- Busca por nome
- Exibição de detalhes do Pokémon
- Loading durante carregamento
- Layout responsivo

## API utilizada

API oficial:
https://pokeapi.co/

Endpoint utilizado:
https://pokeapi.co/api/v2/pokemon


## Como executar o projeto

Primeiro instale as dependências:

npm install

Depois execute o projeto:

npm run dev


## Estrutura do projeto

src/
├── components/
│   ├── PokemonCard.jsx
│   ├── PokemonList.jsx
│   ├── SearchForm.jsx
│   ├── PokemonDetails.jsx
│   └── LoadingSpinner.jsx
│
├── hooks/
│   └── useFetch.js
│
├── pages/
│   └── Home.jsx
│
├── services/
│   └── api.js
│
├── App.jsx
├── main.jsx
└── index.css

Nomes: Anderson Bauer & João Vitor Daitx
