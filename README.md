# clothingWebsite

## SASS / SCSS
```bash
$ npm install --save-dev sass sass-loader@10
```

---

## Tailwind CSS
```bash
#建立包含所有預設值的設定檔
$ npx tailwindcss init --full
```

### `tailwind.config.js`
```bash
module.exports = {
    #jit模式為靜態提取class
    mode: 'jit',
    purge: {
        content: [
            "./components/**/*.{js,vue,ts}",
            "./layouts/**/*.vue",
            "./pages/**/*.vue",
        ],
        safelist: [
            'nuxt-link-exact-active',
            'nuxt-link-active'
        ]
    },
    darkMode: 'class',
}
```

### `tailwind.css`
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {}
@layer components {}
@layer utilities {}
```

---

## PostCSS / AutoPrefixer

### `nuxt.config.js`
```bash
build: {
    postcss: {
        plugins: {
            #Tailwind 的設定檔
            tailwindcss: {},
            autoprefixer: {
                overrideBrowserslist: [
                    '> 1%',
                    'last 5 versions',
                    'Firefox >= 45',
                    'ios >= 8',
                    'ie >= 10'
                ]
            },
        },
    },
},
```

---

## serverMiddleware
```bash
$ npm install express
```


### `nuxt.config.js`
```bash
serverMiddleware: ['~/api/index'],
```

### `api/index.js`
```bash
const express = require('express')
const app = require('express')()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

module.exports = {
    path: '/api/',
    handler: app
}
```

---

## mongoDB
```bash
$ npm install mongoose
```

### `api/index.js`
```bash
const mongoose = require("mongoose");
const mongoDB = 'mongodb://localhost:27017/資料庫名稱';

mongoose.connect(mongoDB, { useNewUrlParser: true })
    .then(() => {
        console.log("連線成功");
    })
    .catch(err => {
        console.log("連線失敗", err);
    });
```

---

## [nuxtjs/i18n](https://i18n.nuxtjs.org/)
```bash
$ npm install @nuxtjs/i18n
```

### `lang/en.js`
```bash
export default {
    welcome: 'Welcome'
}
```

### `.vue/.html`
```bash
<p> {{ $t('welcome') }} </p>
```
> nuxt-鏈接
```bash
#localePath 前往指定頁面 URL
#第一個參數可以是路徑的路徑或名稱，也可以是更複雜的路徑的對象。
<nuxt-link :to="localePath('/')">HomePage</nuxt-link>
#第二個參數傳遞以生成特定語言的鏈接
<nuxt-link :to="localePath('/', 'en')">HomePage in English</nuxt-link>
```
```bash
#switchLocalePath 指向當前頁面的鏈接
<nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
```
```bash
#Router鏈接
@click="$router.push(localeLocation('/'))"
@click="$router.push(switchLocalePath('en'))"
this.$router.push(this.localeLocation('/'))
this.$router.push(this.switchLocalePath('en'))
```

> 語言環境
```bash
$i18n.locale
#$i18n.locale在組件內部進行更改不會更新根區域設置。
#如果依賴 root 語言環境，請使用$root.$i18n.locale而不是$i18n.locale.
```

### `nuxt.config.js`
```bash
modules: ['@nuxtjs/i18n'],

i18n: {
    locales: [
        {
            code: 'en',
            file: 'en.js'
            iso: 'en-US', #SEO
            name: 'English'
        },
        {
            code: 'zh',
            file: 'zh.js'
            iso: 'zh-Hant', #SEO
            name: '中文'
        },
    ],
    #啟用翻譯延遲加載
    lazy: true,
    #langDir選項設置為包含翻譯文件的目錄（不能為空）。
    langDir: 'lang/',
    #prefix為每個語言環境添加語言環境前綴
    strategy: 'prefix',
    defaultLocale: 'zh',
    #瀏覽器語言檢測
    detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        redirectOn: 'root',  #默認值
    }
},
```
> 搜索引擎優化 $nuxtI18nHead
```bash
export default {
    head () {
        return this.$nuxtI18nHead({ addSeoAttributes: true })
    }
}
```
```bash
#想添加自己的元數據
export default {
    head () {
        const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
        return {
            htmlAttrs: {
                ...i18nHead.htmlAttrs
            },
            meta: [
                ...i18nHead.meta
            ],
            link: [
                ...i18nHead.link
            ]
        }
    }
}
```