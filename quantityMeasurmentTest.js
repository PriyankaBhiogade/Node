let assert = require('assert');
let quantityMeasurment =  require("./quantityMeasurment");
let lUnit = require('./length');

describe(`Length Unit validation Test` ,() => {
	it(`given0FeetAnd0Feet_WhenCorrect_return true `,() =>{
        let feet1 = quantityMeasurment.compareUnits(lUnit.enum.FEET,1);
        let feet2 = quantityMeasurment.compareUnits(lUnit.enum.INCH,12);
    });

    it(`given1FeetAnd12Inch_WhenCorrect_return true `,() =>{
        let feet1 = quantityMeasurment.compareUnits(lUnit.enum.INCH,1);
        let feet2 = quantityMeasurment.compareUnits(lUnit.enum.INCH,1);
		assert.equal(feet1,feet2);
    });
});
