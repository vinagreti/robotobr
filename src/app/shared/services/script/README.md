#ScriptService


Used to lazy load scripts and styles.

##Instalation
`import { ScriptModule } from '@app/shared/services/script'`

##Usage
`import { ScriptService } from '@app/shared/services/script';`

### Loading JS

`SCRIPT_WINDOW_NAMESPACE` is the name used to attach the script to the DOM. Like JQuery that uses `window['$']` or Pannellum that uses `window['pannellum']`

```js
  this.script.load(SCRIPT_URL, SCRIPT_WINDOW_NAMESPACE)
  .then((loadedScript: any) => {
    // do your stuff here
  });
```

Loading JQuery would be
```js
  this.script.load(JQUERY_URL, '$')
  .then((jquery: any) => {
    // do your stuff here
  });
```

### Loading Style

```js
  this.script.loadStyle(STYLE_URL)
  .then(() => {
    // do your stuff here
  });
```

### Loading Style + JS

```js
  this.script.loadStyleAndScript(STYLE_URL, SCRIPT_URL, SCRIPT_WINDOW_NAMESPACE)
  .then((loadedScript: any) => {
    // do your stuff here
  });

```