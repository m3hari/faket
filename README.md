# Faket 
![Under Development](https://img.shields.io/badge/under-development-orange.svg)
![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?maxAge=2592000)

A library for generating Ethopic fake data such as names, addresses, and phone numbers.
Faket is  inspired by ![fzaninotto/Faker](https://img.shields.io/badge/PHP-fzaninotto%2FFaker-blue.svg) and by ![Faker](https://img.shields.io/badge/Ruby-stympy%2Ffaker-red.svg).


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

## License
This project is licensed under the MIT License - [LICENSE.md](LICENSE.md)