# Super Simple UI
Super Simple UI is a simple, tree shakeable, dependency-free, minimally styled vanilla Javascript component UI library. This is the monorepo for the component library package and [documentation site](https://ui.josephmasongsong.com).
## Workspaces
### Example
Contains the code for documentation site. The static site uses Webpack as a build tool. Run `npm run dev` to use BrowserSync for development. `npm run build` will minify the JS and CSS and output them to the `dist` folder.
### Package
Contains the code for the component library itself. It uses Rollup to output browser and ES module versions of the Javascript. Type `npm run build` to run Rollup after you've made changes, and `npm publish` when you want to publish the changes to NPM.