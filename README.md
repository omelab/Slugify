# Slugify 

[![npm-version]][npm] [![coveralls-status]][coveralls]

```js
var slugify = require('@omelab/slugify')

slugify('Hello World') // hello-world

// if you want to change '-' as separator
slugify('Hello World', '_')  // hello_world
```

### Options

```js
slugify('some string', {
  seperator: '-',  // replace spaces with replacement character, defaults to `-` 
  lower: false,    // convert to lower case, defaults to `false`
})
```

```shell

# npx tsc --skipLibCheck
```