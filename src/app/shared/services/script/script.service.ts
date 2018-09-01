import { Injectable } from '@angular/core';

const NAMESPACE = 'appScriptService';


@Injectable()
export class ScriptService {

  constructor() {

    window[NAMESPACE] = window[NAMESPACE] || {
      styles: [],
      scripts: [],
    };

  }

  load(scriptUrl: string, scriptNamespace: string) {

    return new Promise((resolve, reject) => {

      const scriptLoaded = window[NAMESPACE].scripts[scriptNamespace];

      if (scriptLoaded) {

        const script = window[scriptNamespace];

        resolve(script);

      } else {

        const scriptTag = document.createElement('script');

        scriptTag.setAttribute('src', scriptUrl);

        scriptTag.setAttribute('type', 'text/javascript');

        scriptTag.onload = () => {

          window[NAMESPACE].scripts[scriptNamespace] = true;

          const script = window[scriptNamespace];

          resolve(script);

        };

        scriptTag.onerror = reject;

        document.getElementsByTagName('head')[0].appendChild(scriptTag);

      }

    });

  }

  loadStyle(styleUrl: string) {

    return new Promise((resolve, reject) => {

      const styleLoaded = window[NAMESPACE].styles[styleUrl];

      if (styleLoaded) {

        resolve();

      } else {

        const linkTag = document.createElement('link');

        linkTag.setAttribute('rel', 'stylesheet');
        linkTag.setAttribute('type', 'text/css');
        linkTag.setAttribute('media', 'all');
        linkTag.setAttribute('href', styleUrl);

        linkTag.onload = () => {

          window[NAMESPACE].styles[styleUrl] = true;

          resolve();

        };

        linkTag.onerror = reject;

        document.getElementsByTagName('head')[0].appendChild(linkTag);

      }

    });

  }

  loadStyleAndScript(styleUrl, scriptUrl, scriptNamespace) {

    return this.loadStyle(styleUrl).then(() => {

      return this.load(scriptUrl, scriptNamespace);

    });

  }

}
