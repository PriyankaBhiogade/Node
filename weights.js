
let Enum = require('enum');
const weightEnum = new Enum({
    KILOGRAMS: 1.0,
    GRAMS: 0.001,
    TONNES: 1000,
});
class Weight {
    check(unit) {
        if (unit == weightEnum.KILOGRAMS) {
            return weightEnum.getValue(`KILOGRAMS`);
        } else if (unit == weightEnum.GRAMS) {
            return weightEnum.getValue(`GRAMS`);
        } else if (unit == weightEnum.TONNES) {
            return weightEnum.getValue(`TONNES`);
        }
    }

    conversion(unitValue, unit) {
        return Math.round(unitValue * this.check(unit));
    }
}
module.exports = {
    weight: new Weight,
    weightEnum: Object.freeze(weightEnum)
};



