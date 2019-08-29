---
title: Cara Memeriksa array pada JavaScript berisi nilai tertentu
slug: cara-memeriksa-array-javascript-berisi-nilai-tertentu
date: '2019-08-29'
minute2read: 10
description: Jika ada array , bagaimana cara memeriksa array tersebut mngandung item tersebut?
---
coba pakai `include()`method pada array tersebut
```javascript
['red', 'green'].includes('red') //true ✅

['red', 'green'].includes('yellow') //false ❌
```