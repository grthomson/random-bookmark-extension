# Random Bookmark Extension 🎲🔖

[![CI](https://github.com/grthomson/random-bookmark-extension/actions/workflows/ci.yml/badge.svg)](https://github.com/grthomson/random-bookmark-extension/actions/workflows/ci.yml)

A Chrome extension (Manifest V3, TypeScript) that opens a **random bookmark** on startup.  
Mostly a playground for TypeScript, esbuild, Vitest, and GitHub Actions.

![Extension Icon](icons/icon128.png)  

## Quick start

### 1 Clone the repo and navigate to root

```
git clone https://github.com/grthomson/random-bookmark-extension.git
cd random-bookmark-extension
```

### 2 Install dependencies and build

```
npm install
npm run typecheck
npm test
npm run build
```

### 3 Load in Chrome

1. Go to `chrome://extensions`
2. Enable **Developer mode**
3. **Load unpacked** → select the `dist/` folder created when you ran `npm run build`
