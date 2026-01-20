# Tour of Heroes – Angular App

A modernized version of Angular’s **Tour of Heroes** tutorial project.

This project uses **Angular standalone components**, **SCSS styling**, and a clean project structure.
It’s meant to be easy to understand, easy to restyle, and suitable for school submissions or portfolio demos.

## Tech Stack

- Angular (Standalone Components)
- TypeScript
- SCSS
- Angular CLI
- Node.js (LTS recommended)

## Project Structure

```
src/
├─ app/
│  ├─ dashboard/
│  ├─ heroes/
│  ├─ hero-detail/
│  ├─ messages/
│  ├─ services/
│  ├─ app.component.ts
│  └─ app.routes.ts
├─ styles.scss
└─ main.ts
```

## Setup & Run

### 1. Install dependencies

```bash
npm install
```

### 2. Start dev server

```bash
ng serve
```

Then open:  
http://localhost:4200

The app reloads automatically on file changes.

## Styling

- Global styles live in `src/styles.scss`
- Each component has its own `.scss` file
- No external UI libraries are used
- Design is intentionally minimal and clean

## Common Issues

### Blank screen after `ng serve`

Check:

- No errors in the browser console
- Templates use `{{ title }}` (not `title()`)
- At least one route matches `/`
- `main.ts` bootstraps the correct root component

### Styles not applying

- Files use `.scss`, not `.css`
- `styleUrl` / `styleUrls` paths are correct
- Restart `ng serve` after renaming style files

## Purpose

This project is:

- Educational
- Easy to read
- Easy to modify
- Safe for exams and school grading

Not production-ready — intentionally.

## 🔗 Related Project

Related Angular version: https://github.com/davide-muzzi/tour-of-heroes-ionic

---

Built with Angular · Standalone Components
