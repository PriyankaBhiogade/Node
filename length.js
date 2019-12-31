let Enum = require('enum');
const lengthEnum = new Enum({
    FEET: 12.0,
    INCH: 1.0,
    YARD: 36.0,
    CENTIMETER: 0.4
});
class Length {
    conversion(unit) {
        if (unit == lengthEnum.INCH) {
            return lengthEnum.getValue(`INCH`);
        } else if (unit == lengthEnum.FEET) {
            return lengthEnum.getValue(`FEET`);
        } else if (unit == lengthEnum.YARD) {
            return lengthEnum.getValue(`YARD`);
        } else if (unit == lengthEnum.CENTIMETER) {
            return lengthEnum.getValue(`CENTIMETER`);
        }else{
            return 0;
        }
    }
}
module.exports = {
    length: new Length,
    lengthEnum: Object.freeze(lengthEnum)
};
