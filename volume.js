let Enum = require('enum');
const volumeEnum = new Enum({
    GALLON:3.78,LITRES:1 ,MILLILITERS:0.001

});
class Volume {
    check(unit) {
        if (unit == volumeEnum.GALLON) 
            return volumeEnum.getValue(`GALLON`);
         else if (unit == volumeEnum.LITRES) 
            return volumeEnum.getValue(`LITRES`);
         else if (unit == volumeEnum.MILLILITERS) 
            return volumeEnum.getValue(`MILLILITERS`);
    }

    conversion(unitValue,unit) {
        return unitValue * this.check(unit);
    }
}
module.exports = {
    volume: new Volume,
    volumeEnum: Object.freeze(volumeEnum)
};
