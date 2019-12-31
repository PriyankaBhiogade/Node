let lUnit = require('./length');
let vUnit = require('./volume');

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

}
module.exports = new QuantityMeasurment();