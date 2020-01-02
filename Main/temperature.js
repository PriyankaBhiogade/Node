let Enum = require('enum');
const temperatureEnum = new Enum({
    FAHRENHEIT: 32.0,
    CELSIUS: 1.0,
});

class Temperature {
    checkUnit(unit) {
        if (unit == temperatureEnum.FAHRENHEIT) {
            return temperatureEnum.getValue(`FAHRENHEIT`);
        } else if (unit == temperatureEnum.CELSIUS) {
            return temperatureEnum.getValue(`CELSIUS`);
        }
    }

    conversionFtoC(unitValue, unit) {
        if (unit.key == 'FAHRENHEIT')
            return Math.round((unitValue - this.checkUnit(unit)) * 5 / 9);
        else
            return (unitValue * this.checkUnit(unit));
    }
}

module.exports = {
    temperature: new Temperature,
    temperatureEnum: Object.freeze(temperatureEnum)
};