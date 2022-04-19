# Super Simple UI

Super Simple UI is a simple, tree shakeable, dependency-free, minimally styled vanilla Javascript component UI library. This is the monorepo for the component library package and example site.

## Getting started

```bash
npm install super-simple-component-ui
```

[Read the docs](https://ui.josephmasongsong.com) for full component list and usage.

### Workspaces

For those interested in cloning the repo and exploring the package source:

#### example/

Contains the code for documentation site. The static site uses Webpack as a build tool. Run `npm run dev` to use BrowserSync for development. `npm run build` will minify the JS and CSS and output them to the `dist` folder.

TODO: Fix asset paths in `src` templates for BrowserSync.

#### package/

Contains the code for the component library itself. It uses Rollup to output browser and ES module versions of the Javascript. Type `npm run build` to run Rollup after you've made changes to the Javascript files.
