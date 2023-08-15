# deno-vue-email-test

## Node
1. Run `npm install`
2. Run `npm run dev`

## Deno
1. [Install Deno](https://deno.land/manual@v1.36.1/getting_started/installation)
2. Run `deno task dev`
3. See Error in console:
```
error: Uncaught TypeError: worker_threads2.MessageChannel is not a constructor
    at startWorkerThreadService (file:///C:/Users/NiklasLausch/code/deno-vue-email-test/node_modules/.deno/esbuild@0.15.18/node_modules/esbuild/lib/main.js:2180:48)
    at transformSync (file:///C:/Users/NiklasLausch/code/deno-vue-email-test/node_modules/.deno/esbuild@0.15.18/node_modules/esbuild/lib/main.js:1972:29)
    at importFromStringSync (file:///C:/Users/NiklasLausch/code/deno-vue-email-test/node_modules/.deno/vue-email@0.6.3/node_modules/module-from-string/dist/index.mjs:242:37)
    at templateRender (file:///C:/Users/NiklasLausch/code/deno-vue-email-test/node_modules/.deno/vue-email@0.6.3/node_modules/vue-email/dist/compiler.mjs:122:21)
    at Object.render (file:///C:/Users/NiklasLausch/code/deno-vue-email-test/node_modules/.deno/vue-email@0.6.3/node_modules/vue-email/dist/compiler.mjs:192:14)
    at file:///C:/Users/NiklasLausch/code/deno-vue-email-test/deno.ts:10:33
```