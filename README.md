# template_nuxtjs-spa

> My funkadelic Nuxt.js project

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


## Basic認証
- nuxt-basic-auth-moduleインストール
```
npm install nuxt-basic-auth-module
```

- nuxt.config.jsに★★★部分を追加
```
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    'nuxt-basic-auth-module' ★★★
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  basic: {  ★★★
    name: 'admin',
    pass: 'pass'
  },
```