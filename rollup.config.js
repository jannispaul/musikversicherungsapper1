import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import commonjs from "rollup-plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import config from "sapper/config/rollup.js";
import pkg from "./package.json";
import getPreprocessor from "svelte-preprocess";
import postcss from "rollup-plugin-postcss";
import PurgeSvelte from "purgecss-from-svelte";
import path from "path";

const mode = process.env.NODE_ENV;
const dev = mode === "development";
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
  (warning.code === "CIRCULAR_DEPENDENCY" &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning);
const dedupe = (importee) =>
  importee === "svelte" || importee.startsWith("svelte/");

const postcssPlugins = (purgecss = false) => {
  return [
    require("postcss-import")(),
    require("postcss-url")(),
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer")(),
    // Do not purge the CSS in dev mode to be able to play with classes in the browser dev-tools.
    purgecss &&
      require("@fullhuman/postcss-purgecss")({
        content: ["./**/*.svelte", "./src/template.html"],
        extractors: [
          {
            extractor: PurgeSvelte,

            // Specify the file extensions to include when scanning for
            // class names.
            extensions: ["svelte", "html"],
          },
        ],
        // Whitelist selectors to stop Purgecss from removing them from your CSS.
        whitelist: [],
      }),
    !dev && require("cssnano"),
  ].filter(Boolean);
};

const preprocess = [
  getPreprocessor({
    transformers: {
      postcss: {
        plugins: postcssPlugins(), // Don't need purgecss because Svelte handle unused css for you.
      },
    },
  }),
];

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
      svelte({
        dev,
        hydratable: true,
        emitCss: true,
        preprocess: {},
        // Warnings are normally passed straight to Rollup. You can
        // optionally handle them here, for example to squelch
        // warnings with a particular code
        onwarn: (warning, handler) => {
          // e.g. don't warn on a11y-autofocus
          if (warning.code === "a11y-autofocus") return;

          // let Rollup handle all other warnings normally
          handler(warning);
        },
      }),
      resolve({
        browser: true,
        dedupe,
      }),
      commonjs(),
      !legacy &&
        babel({
          extensions: [".js", ".mjs", ".html", ".svelte"],
          exclude: ["node_modules/@babel/**"],
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-proposal-object-rest-spread",
          ],
        }),

      legacy &&
        babel({
          extensions: [".js", ".mjs", ".html", ".svelte"],
          runtimeHelpers: true,
          exclude: ["node_modules/@babel/**"],
          presets: [
            [
              "@babel/preset-env",
              {
                // spec: true,
                targets: "> 0.25%, ie >= 11, not dead",
              },
            ],
          ],
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            [
              "@babel/plugin-transform-runtime",
              {
                useESModules: true,
              },
            ],
          ],
        }),

      !dev &&
        terser({
          module: true,
        }),
    ],
    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      replace({
        "process.browser": false,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
      svelte({
        generate: "ssr",
        dev,
        preprocess: {},
        // Warnings are normally passed straight to Rollup. You can
        // optionally handle them here, for example to squelch
        // warnings with a particular code
        onwarn: (warning, handler) => {
          // e.g. don't warn on a11y-autofocus
          if (warning.code === "a11y-autofocus") return;

          // let Rollup handle all other warnings normally
          handler(warning);
        },
      }),
      resolve({
        dedupe,
      }),
      commonjs(),
      postcss({
        plugins: postcssPlugins(!dev),
        extract: path.resolve(__dirname, "./static/global.css"),
      }),
    ],

    external: Object.keys(pkg.dependencies).concat(
      require("module").builtinModules ||
        Object.keys(process.binding("natives"))
    ),
    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
      commonjs(),
      !dev && terser(),
    ],
    onwarn,
  },
};
