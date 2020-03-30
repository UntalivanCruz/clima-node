const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')
const argv = require('yargs')
    .option({
        description: {
            alias: 'd',
            demand: true,
            desc: 'Ingrese el nombre del pais'
        }
    })
    .help()
    .argv

/*lugar.fnLugar(argv.description)
    .then(data => console.log(data.name, data.lat, data.lon))
    .catch(error => console.log(error))
*/
const fnInfo = async direccion => {
    try {
        const coord = await lugar.fnLugar(direccion)
        const temp = await clima.fnclima(coord.lat, coord.lon)
        return `La temperatura de ${direccion} es de ${temp} Celsius`
    } catch (error) {
        return `No se puede obtener los datos de ${direccion}`
    }
}

fnInfo(argv.description)
    .then(console.log)
    .catch(console.log)

//clima.fnclima(14.090000, -87.220001).then(console.log)