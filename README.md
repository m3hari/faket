# Faket 
![Under Development](https://img.shields.io/badge/under-development-orange.svg)
[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?maxAge=2592000)](LICENSE.md)
[![Build Status](https://travis-ci.org/m3hari/faket.svg?branch=master)](https://travis-ci.org/m3hari/faket)

A library for generating Ethopic fake data such as names, addresses, and phone numbers.
Faket is  highly inspired by   
[![fzaninotto/Faker](https://img.shields.io/badge/PHP-fzaninotto%2FFaker-blue.svg)](https://github.com/fzaninotto/Faker) *&* 
[![Faker](https://img.shields.io/badge/Marak-fakerjs-green.svg)](https://github.com/Marak/faker.js)


## Usage
```js
const faket = require('../faket')
const FEMALE = 2;
faket.name.firstName()          // አበበ || ፍቅርተ
faket.name.firstName(FEMALE)    // ፍቅርተ 
faket.name.fullName()           // ሰብለ መኮነን ንጉስ


```
## Contributing
1. Fork it!
2. Create your feature branch
3. Submit a pull request :D

### TODO
- [ ] collect dataset
- [ ] design & implement clear API
- [ ] support javascript the browser
- [ ] publish on npm
- [ ] build and deploy micro-service
- [ ] playground github page
- [ ] . . .
