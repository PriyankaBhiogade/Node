let Enum = require('enum');
const volumeEnum = new Enum({
    GALLON:3.78,LITRES:1 ,MILLILITERS:0.001

});
class Volume {
    conversion(unit) {
        if (unit == volumeEnum.GALLON) 
            return volumeEnum.getValue(`GALLON`);
         else if (unit == volumeEnum.LITRES) 
            return volumeEnum.getValue(`LITRES`);
         else if (unit == volumeEnum.MILLILITERS) 
            return volumeEnum.getValue(`MILLILITERS`);
    }
}
module.exports = {
    volume: new Volume,
    volumeEnum: Object.freeze(volumeEnum)
};
