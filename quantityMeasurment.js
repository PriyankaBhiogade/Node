let lUnit = require('./length');
const lEnum =(['FEET','INCH','CENTIMETER','YARD']);
const vEnum = (['GALLON','LITRES','MILLILITERS'])
const allEnum = ([lEnum,vEnum])
class QuantityMeasurment {

    constructor(unit, value) {
        this.value = value;
        this.units = unit;
    }

    compareUnits(unit, unitValue) {
        console.log("unit1121",unit);
        console.log("value123",unitValue)
        for(let i =0;i<= allEnum.length; i++){
            if(allEnum[i] == lEnum || allEnum[i] == vEnum)
            if(lEnum[i] == unit.key){
                console.log("unit key",unit.key)
            return Math.round(unitValue * lUnit.length.conversion(unit));
        }else
         return "Type not matching";
        }

    }
    // addition(val1, val2) {
    //     return val1 + val2;
    // }

    // compareUnits(o1,o2){
    //     this.equals(o1,o2)
    // }


    // equals(o1,o2) {
    //     if(o1 === o2){
    //         return true;
    //     }else if(                                                                                                                                                                                                                                                                     )
    //     if (this == o) return true;
    //     if (o == null || getClass() != o.getClass()) return false;
    //     return Objects.equals(value, that.value) &&
    //             Objects.equals(units, that.units);
    // }


}
module.exports = new QuantityMeasurment();