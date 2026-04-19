<div align="center">

<img src="https://games.guebly.com.br/gueblygames.png" alt="Guebly Games" width="320" />

<br />
<br />

<img src="https://games.guebly.com.br/gueblyicon.png" alt="Guebly Icon" width="64" />

# Virtual Drum Kit

**An interactive virtual drum kit with audio visualizer and pattern composer.**  
Built with React, Web Audio API & styled-components — part of the Guebly Games web collection.

<br />

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![React](https://img.shields.io/badge/React-18.3-61dafb?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff?style=flat-square&logo=vite)](https://vitejs.dev)
[![styled-components](https://img.shields.io/badge/styled--components-6.1-db7093?style=flat-square&logo=styled-components)](https://styled-components.com)

<br />

<img src="GitHub/Mockup.png" alt="Virtual Drum Kit Mockup" width="100%" />

</div>

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Controls](#controls)
- [Composer / Sequencer](#composer--sequencer)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [About Guebly Games](#about-guebly-games)
- [License](#license)

---

## About

**Virtual Drum Kit** is a browser-based interactive drum machine developed by [Guebly Games](https://games.guebly.com.br). It lets you play nine drum pads in real time using your keyboard or mouse/touch, watch a live frequency visualizer react to your beats, and compose full drum patterns using a built-in sequencer.

The project features a dark cyberpunk aesthetic — glowing neon pads, an animated grid background, ring-out impact animations, and a custom Guebly Games design system.

> Available in [Português (pt-BR)](README.pt-BR.md)

---

## Features

| Feature | Description |
|---|---|
| **9 Drum Pads** | Bass, Snare, Hi-Hat, Tom 1/2/3, Crash, Ride, Open Hi-Hat |
| **Keyboard Input** | Play any pad with Q W E A S D Z X C |
| **Mouse / Touch** | Click or tap any pad on mobile or desktop |
| **Audio Visualizer** | 28-bar real-time frequency visualizer powered by Web Audio API |
| **Ring-out Effect** | Expanding neon ring animation on each pad hit |
| **Pattern Composer** | Write drum sequences and play them back at custom BPM |
| **Low Latency Audio** | AudioContext + AudioBuffer decoding for near-zero lag |
| **Responsive Design** | Works on mobile, tablet, and desktop |
| **Dark Theme** | Cyberpunk neon aesthetic — blue, magenta, and lime accents |

---

## Controls

| Key | Drum Sound | Color |
|-----|-----------|-------|
| `Q` | Bass | ![#00A3FF](https://placehold.co/12x12/00A3FF/00A3FF.png) Blue |
| `W` | Snare | ![#C800FF](https://placehold.co/12x12/C800FF/C800FF.png) Magenta |
| `E` | Hi-Hat | ![#00FF88](https://placehold.co/12x12/00FF88/00FF88.png) Green |
| `A` | Tom 1 | ![#FF6B00](https://placehold.co/12x12/FF6B00/FF6B00.png) Orange |
| `S` | Tom 2 | ![#FFB800](https://placehold.co/12x12/FFB800/FFB800.png) Yellow |
| `D` | Tom 3 | ![#FF0066](https://placehold.co/12x12/FF0066/FF0066.png) Pink |
| `Z` | Crash | ![#A855F7](https://placehold.co/12x12/A855F7/A855F7.png) Purple |
| `X` | Ride | ![#06B6D4](https://placehold.co/12x12/06B6D4/06B6D4.png) Cyan |
| `C` | Open Hi-Hat | ![#84CC16](https://placehold.co/12x12/84CC16/84CC16.png) Lime |

---

## Composer / Sequencer

The built-in **Composer** lets you write and replay drum patterns without manually pressing keys.

1. Type a sequence using pad keys separated by spaces — e.g. `q w e q w e a s`
2. Set the delay between hits in milliseconds (50–1200 ms)
3. Press **Play** — the sequencer will fire each pad in order with the chosen timing

**Example patterns:**

```
Basic Rock Beat:    q w e q w e q w
Snare-only Roll:    w w w w w w w w
Full Groove:        q e w e q q w e a s d
```

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| **Framework** | React | 18.3.1 |
| **Build Tool** | Vite | 5.4.0 |
| **Styling** | styled-components | 6.1.8 |
| **Audio** | Web Audio API (native) | — |
| **Fonts** | Google Fonts | Bebas Neue, Orbitron, Rajdhani, Space Mono |
| **Language** | JavaScript (ES Modules) | ES2022+ |
| **Deployment** | Static Site | Vite build → `/dist` |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18 or higher
- npm (included with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/GueblyGames/drum.git
cd drum

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser and start playing.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder, ready to deploy to any static host.

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
drum/
├── public/
│   ├── branding/           # Guebly Games brand assets
│   │   ├── gueblygames.png
│   │   ├── games.png
│   │   ├── icon.png
│   │   └── slogan_icon.png
│   ├── images/
│   │   ├── logo.png
│   │   └── icon.png
│   └── sounds/             # WAV drum samples
│       ├── keyq.wav         # Bass
│       ├── keyw.wav         # Snare
│       ├── keye.wav         # Hi-Hat
│       ├── keya.wav         # Tom 1
│       ├── keys.wav         # Tom 2
│       ├── keyd.wav         # Tom 3
│       ├── keyz.wav         # Crash
│       ├── keyx.wav         # Ride
│       └── keyc.wav         # Open Hi-Hat
├── src/
│   ├── App.jsx              # Main component — all logic & UI
│   └── main.jsx             # React entry point
├── GitHub/
│   └── Mockup.png           # Project preview image
├── index.html               # HTML shell
├── vite.config.js           # Vite configuration
├── package.json
├── README.md                # This file (English)
├── README.pt-BR.md          # Portuguese documentation
└── CONTRIBUTING.md          # Contribution guidelines
```

---

## About Guebly Games

<div align="center">

<img src="https://games.guebly.com.br/slogan_icon.png" alt="Guebly Games — Creating Universes, Connecting People" width="280" />

</div>

<br />

**Guebly Games** is a Brazilian game studio building web-based interactive experiences. Virtual Drum Kit is part of a growing collection of free browser games and tools available at [games.guebly.com.br](https://games.guebly.com.br).

| Resource | Link |
|---|---|
| Main Portal | [games.guebly.com.br](https://games.guebly.com.br) |
| Store | [store.games.guebly.com.br](https://store.games.guebly.com.br) |
| Game Engine | [engine.games.guebly.com.br](https://engine.games.guebly.com.br) |
| GitHub | [github.com/GueblyGames](https://github.com/GueblyGames) |

> *Creating Universes, Connecting People*

---

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on the workflow, code style, and commit conventions.

---

## License

**MIT** — © 2026 Guebly Games

<div align="center">

<br />

<img src="https://games.guebly.com.br/games.png" alt="Guebly Games" width="180" />

</div>
