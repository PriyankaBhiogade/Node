let lUnit = require('./length');
let vUnit = require('./volume');
let wUnit = require('./weights');

class QuantityMeasurment {

    compareLengthUnits(unit, unitValue) {
        return Math.round(unitValue * lUnit.length.conversion(unit));
    }
    addition(val1, val2) {
        return val1 + val2;
    }

    compareVolumeUnits(unit, unitValue) {
        return (unitValue * vUnit.volume.conversion(unit));
    }


    compareWeightUnits(unit, unitValue) {
        return (unitValue * wUnit.weight.conversion(unit));
    }

}
module.exports = new QuantityMeasurment();