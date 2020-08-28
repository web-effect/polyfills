# Polyfills

- babel polyfill
- whatwg-fetch
- ie11-custom-properties
- url-search-params-polyfill
- closest(), NodeList.forEach(), CustomEvent

## Подключение
В head добавить:
```html
<script nomodule src='path-to-polyfills/dist/polyfills.js'></script> 
```
Современные браузеры не загрузят скрипт с *nomodule*.