const names = require('./dataset/names')

function name(){
    return names[Math.floor((Math.random()*names.length))]
}

module.exports.name = name;