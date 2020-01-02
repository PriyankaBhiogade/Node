let Enum = require('enum');
const allEnum = new Enum({
    FEET: 12.0,
    INCH: 1.0,
    YARD: 36.0,
    CENTIMETER: 0.4,
    GALLON: 3.78,
    LITRES: 1,
    MILLILITERS: 0.001,
    KILOGRAMS: 1.0,
    GRAMS: 0.001,
    TONNES: 1000,
    FAHRENHEIT: 32.0,
    CELSIUS: 1.0,
});
class ConversionUnit {
    getConversionValue(unit) {
        return allEnum.getValue(unit);
    }

    convert(unitValue, unit) {
        return Math.round(unitValue * this.getConversionValue(unit));
    }

    convertTemp(unitValue, unit) {
        if (unit.key == allEnum.FAHRENHEIT)
            return Math.round((unitValue - this.getConversionValue(unit)) * 5 / 9);
        else
            return (unitValue * this.getConversionValue(unit));
    }
}
module.exports = {
    conversionUnit: new ConversionUnit,
    allEnum: Object.freeze(allEnum)
};
