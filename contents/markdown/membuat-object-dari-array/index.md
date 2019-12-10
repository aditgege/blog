---
title: Mebuat Object dari array di javascript
slug: membuat-object-dari-array
date: '2019-10-04'
minute2read: 15
description: Membuat object dari suatu array pada javascript
---
---

Cara simple :
```javascript
const obj = {};
for (const key of youArray){
    obj[key] = whatever
}

```
cara fucntional style : 
```javascript 
const obj = youArray.reduce((o,key) => Object.assign( o, { [key]: whatever }), {});
```

menggunakan modern object spread operator : 
```javascript
const obj = yourArray.reduce((o, key) => ({ ...o, [key]: whatever}), {})
```

contoh : 
```javascript
let array = [
  { id: 10, color: "red" },
  { id: 20, color: "blue" },
  { id: 30, color: "green" }
]

const result = array.reduce((acc,curr)=> ({...acc,[cur.color]: cur.id}), {})
// output {red: 10, blue: 20, green: 30}

```

`reduce` is initialized with an empty object (empty `{}` at the end), therefore first iteration variables are `acc = {} cur = { id: 10, color: "red" }`. Function returns an object - this is why function body is wrapped in parentheses `=> ({ ... })`. Spread operator doesn't do anything on the first iteration, so `red: 10 `is set as first item.

On the second iteration variables are` acc = { red: 10 } cur = { id: 20, color: "blue" }`. Here the spread operator expands `acc` and the function returns `{ red: 10, blue: 20 }`.

Third iteration `acc = { red: 10, blue: 20 } cur = { id: 30, color: "green" }`, so when `acc` is spread inside the object, our function returns the final value.

