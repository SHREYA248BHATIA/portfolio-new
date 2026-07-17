# Shreya Bhatia — Portfolio

My personal portfolio website, built with React.

Live at: [shreya248bhatia.github.io/portfolio-new](https://shreya248bhatia.github.io/portfolio-new/)

## Getting started

```bash
npm install
npm start
```

Runs the app locally at [http://localhost:3000/portfolio-new](http://localhost:3000/portfolio-new).

## Editing content

All site content (name, skills, experience, education, projects, contact info) lives in `src/portfolio.js`. Update the relevant object there and the corresponding page will reflect the change.

## Committing changes

All development happens on the `main` branch.

```bash
git add <files>
git commit -m "short description of the change"
git push origin main
```

## Building

```bash
npm run build
```

Produces a production build in the `build/` folder.

## Deploying

```bash
npm run deploy
```

This runs `npm run build` automatically, then publishes the contents of `build/` to the `gh-pages` branch. GitHub Pages serves the live site from `gh-pages`, so a deploy is required any time you want your changes to show up at the live URL — pushing to `main` alone does not update the live site.
