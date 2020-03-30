const axios = require('axios');

const fnclima = async(lat, lon) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f02cded7683832d71f65d801086dbdde&units=metric`)
    return res.data.main.temp
}

module.exports = {
    fnclima
}