# Student portal standalone without wordpress

> Proof of concept for cutting out wordpress from student portal

Plan is:
* Create single page application using VUE to code everything we needed from wordpress here. (skeleton of the application and 'wordpress admin panel') 
* * This can be nicely achieved by utilizing Nuxt (the vue framework). It gives us easy serverside rendering support, search engine optimization and routes based on directory structure. Although Nuxt is not mandatory, it can speed things up and enforce some structure of the files.
* Move existing portal logic written in knockout and slowly convert it to vue step by step.

This proof of concept shows that this is possible.

It takes my previous proof of concept of portal written in knockout using components and puts it into VUE website **WITHOUT ANY MODIFICATIONS**. (maybe some paths needed to be adjusted)

Knockout code is put into /static/knockout-components folder as it was in previous proof of concept project without modifying the components.

Require.js takes care of bootstrapping knockout code as is't being used on VUE pages.


## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
