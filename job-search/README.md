# job-search

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

## Course Alignment (Udemy Vue Masterclass)

Course: [Vue Masterclass](https://www.udemy.com/course/vue-masterclass/)

This repo is intentionally kept minimal while following the course.

### Current Setup Policy

- Keep only core Vue + Vite setup.
- Keep linting, formatting, and testing enabled.
- Add TypeScript and other advanced tooling only when introduced in the course.

### Milestone Checkpoints

- Milestone 1: Vue fundamentals
  - Focus on components, props, events, and state.
  - Avoid adding extra configuration not covered yet.
- Milestone 2: Quality tools in daily workflow
  - Run `npm run lint` regularly.
  - Use format-on-save (Prettier) in VS Code.
  - Run `npm run test:unit` as tests are introduced.
- Milestone 3: Advanced tooling (later lessons)
  - Add TypeScript settings only when the course introduces them.
  - Add any additional project config in the same lesson order as the instructor.

### Quick Weekly Sync

- Compare your project structure to the instructor's version.
- If something differs, prefer reverting to the lesson baseline first.
- Keep commits small and lesson-based (one concept per commit when possible).

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
