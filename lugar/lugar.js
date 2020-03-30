const axios = require('axios');

const fnLugar = async(dir) => {
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURI(dir)}`,
        headers: { 'X-RapidAPI-Key': '7b8d732f13msh6448962b0fcab9ap132167jsnc03c131cf314' }
    });

    const res = await instance.get()

    if (res.data.Results.length === 0) throw new Error(`No hay datos que mostrar para ${dir}`)

    const { name, lat, lon } = res.data.Results[0]

    return {
        name,
        lat,
        lon
    }
}

module.exports = {
    fnLugar
}