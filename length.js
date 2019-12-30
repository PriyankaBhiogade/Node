var Enum = require('enum');
const myEnum = new Enum({
    FEET: 12.0,
    INCH: 1.0,
    YARD: 36.0,
    CENTIMETER: 0.4
});
class Length {
    
    conversion(unit) {
        if (unit == myEnum.INCH) {
            return myEnum.getValue(`INCH`);
        } else if (unit == myEnum.FEET) {
            return myEnum.getValue(`FEET`);
        } else if (unit == myEnum.YARD) {
            return myEnum.getValue(`YARD`);
        } else if (unit == myEnum.CENTIMETER) {
            return myEnum.getValue(`CENTIMETER`);
        }
    }                           
}
module.exports = {
    length: new Length,
    enum: Object.freeze(myEnum)
};
