<div align="center">

<img src="https://games.guebly.com.br/gueblygames.png" alt="Guebly Games" width="280" />

# Contributing to Virtual Drum Kit

Thank you for your interest in contributing to **Virtual Drum Kit** — a Guebly Games open source project.  
Please read this guide before opening a pull request.

</div>

---

## Table of Contents

- [Getting Started](#getting-started)
- [Workflow](#workflow)
- [Code Style](#code-style)
- [Commit Convention](#commit-convention)
- [Project Structure](#project-structure)
- [Reporting Issues](#reporting-issues)

---

## Getting Started

```bash
# 1. Fork this repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/drum-kit.git
cd drum-kit

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see your changes live.

---

## Workflow

1. **Fork** this repository
2. **Create a branch** from `main` with a descriptive name:
   ```bash
   git checkout -b feat/my-new-feature
   # or
   git checkout -b fix/pad-click-bug
   ```
3. **Make your changes** and test them locally (`npm run dev`)
4. **Build** to confirm nothing is broken:
   ```bash
   npm run build
   ```
5. **Commit** following the [commit convention](#commit-convention) below
6. **Push** your branch and open a **Pull Request** targeting `main`

---

## Code Style

| Rule | Detail |
|---|---|
| **Components** | React functional components only — no class components |
| **Styling** | styled-components — no inline styles, no plain CSS files |
| **Language** | JavaScript (ES2022+, ES Modules) — no TypeScript required |
| **State** | `useState`, `useRef`, `useCallback`, `useEffect` — keep logic inside `App.jsx` unless extracting a clearly reusable hook |
| **Audio** | Web Audio API only — do not add external audio libraries |
| **Formatting** | 2-space indentation, single quotes, no trailing commas |

---

## Commit Convention

Use the following prefixes for commit messages:

| Prefix | When to use |
|---|---|
| `feat:` | New feature or pad / sound addition |
| `fix:` | Bug fix |
| `style:` | Visual / CSS-only changes |
| `refactor:` | Code restructure without behavior change |
| `docs:` | Documentation only |
| `chore:` | Build, config, or dependency changes |

**Examples:**

```bash
git commit -m "feat: add velocity sensitivity to pad hits"
git commit -m "fix: audio context not resuming on mobile Safari"
git commit -m "docs: update keyboard controls table"
```

---

## Project Structure

```
drum-kit/
├── public/sounds/      # WAV drum samples — one per pad key
├── src/App.jsx         # All component logic and UI (main file)
├── src/main.jsx        # React entry point
├── index.html          # HTML shell + Google Fonts
└── vite.config.js      # Vite config
```

Most contributions will touch `src/App.jsx`. Keep components and styled-components in the same file unless they grow large enough to warrant splitting.

---

## Reporting Issues

Found a bug or have a feature request? Open an issue on GitHub with:

- A clear title
- Steps to reproduce (for bugs)
- Expected vs. actual behavior
- Browser and OS info

---

<div align="center">

<img src="https://games.guebly.com.br/slogan_icon.png" alt="Guebly Games — Creating Universes, Connecting People" width="220" />

<br />

*Creating Universes, Connecting People* — [games.guebly.com.br](https://games.guebly.com.br)

</div>
