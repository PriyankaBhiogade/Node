let lUnit = require('./length');
let vUnit = require('./volume');
let wUnit = require('./weights');
let tUnit = require('./temperature')
const lEnum = ['FEET', 'INCH', 'CENTIMETER', 'YARD'];
const vEnum = ['GALLON', 'LITRES', 'MILLILITERS'];
const wEnum = ['KILOGRAMS', 'GRAMS', 'TONNES'];
const tEnum = ['FAHRENHEIT','CELSIUS'];
const allEnum = [lEnum, vEnum, wEnum,tEnum]

class QuantityMeasurment {
    compareUnits(unit, unitValue) {
        return allEnum.map(unit1 => {
            if (lEnum === unit1)
                return lUnit.length.conversion(unitValue, unit);
            else if (vEnum === unit1)
                return vUnit.volume.conversion(unitValue, unit);
            else if (wEnum === unit1)
                return wUnit.weight.conversion(unitValue, unit);
            else if (tEnum === unit1)
                return tUnit.temperature.conversionFtoC(unitValue, unit);
        })
    }

    addition(val1, val2) {
        return val1 + val2;
    }
}
module.exports = new QuantityMeasurment();