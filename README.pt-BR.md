<div align="center">

<img src="https://games.guebly.com.br/gueblygames.png" alt="Guebly Games" width="320" />

<br />
<br />

<img src="https://games.guebly.com.br/gueblyicon.png" alt="Ícone Guebly" width="64" />

# Bateria Virtual

**Bateria virtual interativa com visualizador de áudio e compositor de padrões.**  
Desenvolvida com React, Web Audio API e styled-components — parte da coleção web da Guebly Games.

<br />

[![Licença MIT](https://img.shields.io/badge/licença-MIT-blue.svg?style=flat-square)](LICENSE)
[![React](https://img.shields.io/badge/React-18.3-61dafb?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff?style=flat-square&logo=vite)](https://vitejs.dev)
[![styled-components](https://img.shields.io/badge/styled--components-6.1-db7093?style=flat-square&logo=styled-components)](https://styled-components.com)

<br />

<img src="GitHub/Mockup.png" alt="Mockup da Bateria Virtual" width="100%" />

</div>

---

## Índice

- [Sobre](#sobre)
- [Funcionalidades](#funcionalidades)
- [Controles](#controles)
- [Compositor / Sequenciador](#compositor--sequenciador)
- [Tecnologias](#tecnologias)
- [Como rodar](#como-rodar)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Sobre a Guebly Games](#sobre-a-guebly-games)
- [Licença](#licença)

---

## Sobre

A **Bateria Virtual** é uma drum machine interativa para navegador desenvolvida pela [Guebly Games](https://games.guebly.com.br). Permite tocar nove pads de bateria em tempo real pelo teclado ou mouse/toque, acompanhar um visualizador de frequência reagindo às batidas ao vivo e compor padrões completos usando o sequenciador integrado.

O projeto apresenta uma estética cyberpunk dark — pads neon brilhantes, fundo de grade animado, animações ring-out de impacto e o design system próprio da Guebly Games.

> Disponível em [English](README.md)

---

## Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| **9 Pads de Bateria** | Bumbo, Caixa, Hi-Hat, Tom 1/2/3, Crash, Ride, Hi-Hat Aberto |
| **Entrada por Teclado** | Toque qualquer pad com Q W E A S D Z X C |
| **Mouse / Toque** | Clique ou toque em qualquer pad — funciona no celular |
| **Visualizador de Áudio** | 28 barras de frequência em tempo real via Web Audio API |
| **Efeito Ring-out** | Anel neon expansivo animado a cada batida |
| **Compositor de Padrões** | Escreva sequências e reproduza com BPM customizável |
| **Áudio de Baixa Latência** | AudioContext + decodificação AudioBuffer para lag quase zero |
| **Design Responsivo** | Funciona em celular, tablet e desktop |
| **Tema Dark** | Estética cyberpunk neon — azul, magenta e verde limão |

---

## Controles

| Tecla | Som | Cor |
|-------|-----|-----|
| `Q` | Bumbo | ![#00A3FF](https://placehold.co/12x12/00A3FF/00A3FF.png) Azul |
| `W` | Caixa | ![#C800FF](https://placehold.co/12x12/C800FF/C800FF.png) Magenta |
| `E` | Hi-Hat | ![#00FF88](https://placehold.co/12x12/00FF88/00FF88.png) Verde |
| `A` | Tom 1 | ![#FF6B00](https://placehold.co/12x12/FF6B00/FF6B00.png) Laranja |
| `S` | Tom 2 | ![#FFB800](https://placehold.co/12x12/FFB800/FFB800.png) Amarelo |
| `D` | Tom 3 | ![#FF0066](https://placehold.co/12x12/FF0066/FF0066.png) Rosa |
| `Z` | Crash | ![#A855F7](https://placehold.co/12x12/A855F7/A855F7.png) Roxo |
| `X` | Ride | ![#06B6D4](https://placehold.co/12x12/06B6D4/06B6D4.png) Ciano |
| `C` | Hi-Hat Aberto | ![#84CC16](https://placehold.co/12x12/84CC16/84CC16.png) Lima |

---

## Compositor / Sequenciador

O **Compositor** integrado permite escrever e reproduzir padrões de bateria sem precisar pressionar as teclas manualmente.

1. Digite uma sequência com as teclas dos pads separadas por espaço — ex: `q w e q w e a s`
2. Defina o delay entre as batidas em milissegundos (50–1200 ms)
3. Pressione **Play** — o sequenciador vai disparar cada pad em ordem no tempo escolhido

**Exemplos de padrões:**

```
Rock básico:       q w e q w e q w
Rolada de caixa:   w w w w w w w w
Groove completo:   q e w e q q w e a s d
```

---

## Tecnologias

| Camada | Tecnologia | Versão |
|---|---|---|
| **Framework** | React | 18.3.1 |
| **Build** | Vite | 5.4.0 |
| **Estilização** | styled-components | 6.1.8 |
| **Áudio** | Web Audio API (nativo) | — |
| **Fontes** | Google Fonts | Bebas Neue, Orbitron, Rajdhani, Space Mono |
| **Linguagem** | JavaScript (ES Modules) | ES2022+ |
| **Deploy** | Site estático | Vite build → `/dist` |

---

## Como Rodar

### Pré-requisitos

- [Node.js](https://nodejs.org) v18 ou superior
- npm (incluído com Node.js)

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/GueblyGames/drum.git
cd drum

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no navegador e comece a tocar.

### Build para Produção

```bash
npm run build
```

O resultado ficará na pasta `dist/`, pronta para deploy em qualquer host estático.

### Visualizar Build de Produção

```bash
npm run preview
```

---

## Estrutura do Projeto

```
drum/
├── public/
│   ├── branding/           # Assets de marca da Guebly Games
│   │   ├── gueblygames.png
│   │   ├── games.png
│   │   ├── icon.png
│   │   └── slogan_icon.png
│   ├── images/
│   │   ├── logo.png
│   │   └── icon.png
│   └── sounds/             # Samples WAV da bateria
│       ├── keyq.wav         # Bumbo
│       ├── keyw.wav         # Caixa
│       ├── keye.wav         # Hi-Hat
│       ├── keya.wav         # Tom 1
│       ├── keys.wav         # Tom 2
│       ├── keyd.wav         # Tom 3
│       ├── keyz.wav         # Crash
│       ├── keyx.wav         # Ride
│       └── keyc.wav         # Hi-Hat Aberto
├── src/
│   ├── App.jsx              # Componente principal — toda a lógica e UI
│   └── main.jsx             # Entry point React
├── GitHub/
│   └── Mockup.png           # Imagem de preview do projeto
├── index.html               # Shell HTML
├── vite.config.js           # Configuração Vite
├── package.json
├── README.md                # Documentação em inglês
├── README.pt-BR.md          # Este arquivo
└── CONTRIBUTING.md          # Guia de contribuição
```

---

## Sobre a Guebly Games

<div align="center">

<img src="https://games.guebly.com.br/slogan_icon.png" alt="Guebly Games — Criando Universos, Conectando Pessoas" width="280" />

</div>

<br />

A **Guebly Games** é um estúdio brasileiro de jogos que desenvolve experiências interativas para a web. A Bateria Virtual faz parte de uma coleção crescente de jogos e ferramentas gratuitas disponíveis em [games.guebly.com.br](https://games.guebly.com.br).

| Recurso | Link |
|---|---|
| Portal Principal | [games.guebly.com.br](https://games.guebly.com.br) |
| Loja | [store.games.guebly.com.br](https://store.games.guebly.com.br) |
| Engine | [engine.games.guebly.com.br](https://engine.games.guebly.com.br) |
| GitHub | [github.com/GueblyGames](https://github.com/GueblyGames) |

> *Criando Universos, Conectando Pessoas*

---

## Contribuindo

Contribuições são bem-vindas! Leia o [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes sobre o fluxo de trabalho, estilo de código e convenções de commit.

---

## Licença

**MIT** — © 2026 Guebly Games

<div align="center">

<br />

<img src="https://games.guebly.com.br/games.png" alt="Guebly Games" width="180" />

</div>
