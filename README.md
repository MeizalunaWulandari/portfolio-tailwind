## Ragam kesalahan
### Warna default tidak berfungi
kesalahan terjadi akibat penulisan `colors` diluar `extend` `theme`
#### kode salah
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope']
      },
    },
    colors: {
      primary: '#00b9e1',
      normal: '#66676a',
      dark: '#3c3c3d',
      light: '#f5f5f6'
    }
  },
  plugins: [],
}
````
#### kode benar

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope']
      },
      colors: {
        primary: '#00b9e1',
        normal: '#66676a',
        dark: '#3c3c3d',
        light: '#f5f5f6'
      }
    },
  },
  plugins: [],
}

```
### Tidak center
Masalah belum belum bisa diselesaikan

## Catatan
 Jika ingin membuat 2 element bersebelahan gunakan `flex` & `flex-wrap`