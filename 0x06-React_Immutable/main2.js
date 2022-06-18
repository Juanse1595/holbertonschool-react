import f from './2-nested.js'

console.log(f({
    name: {
         first: "Guillaume",
         last: "Salva"
    }
}, ['name', 'first']))