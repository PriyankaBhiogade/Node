let lUnit = require('./length');

class QuantityMeasurment{

    compareUnits(unit,unitValue){
        if(unitValue == null)
            return 0;
        else if(unitValue == "")
            return 0;
        else
         return Math.round(unitValue * lUnit.length.conversion(unit));
    }
    addition(val1,val2){
        return val1 + val2;
    }
    
}
module.exports = new QuantityMeasurment();