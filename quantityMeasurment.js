let lUnit = require('./length');

class QuantityMeasurment{
 
    
    compareUnits(unit,unitValue){
        let result = unitValue * lUnit.length.conversion(unit);
        return result;
    }
    
}
module.exports = new QuantityMeasurment();