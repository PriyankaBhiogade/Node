let unitConversion = require('./conversionUnit');

class QuantityMeasurment {

    compareUnits(unit, unitValue) {
        if(unit.key == unitConversion.allEnum.FAHRENHEIT || unit.key == unitConversion.allEnum.CELSIUS)
            return unitConversion.conversionUnit.convertTemp(unitValue,unit)
        else
            return unitConversion.conversionUnit.convert(unitValue, unit);
    }

    addition(val1, val2) {
        return val1 + val2;
    }
}
module.exports = new QuantityMeasurment;