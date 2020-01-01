
let Enum = require('enum');
const temperatureEnum = new Enum({
    FAHRENHEIT: 32.0,
    CELSIUS: 1.0,
});

class Temperature {
    conversion(unit) {
        if (unit == temperatureEnum.FAHRENHEIT) {
            return temperatureEnum.getValue(`FAHRENHEIT`);
        } else if (unit == temperatureEnum.CELSIUS) {
            return temperatureEnum.getValue(`CELSIUS`);
        }
    }
}

module.exports = {
    temperature: new Temperature,
    temperatureEnum: Object.freeze(temperatureEnum)
};