let assert = require('assert');
let quantityMeasurment =  require("./quantityMeasurment");
let lengthUnit = require('./length');

describe(`Length Unit validation Test` ,() => {
	it(`given 0Feet And 0Feet When equal should return true `,() =>{
        let feet1 = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.FEET,0);
        let feet2 = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.FEET,0);
        assert.equal(feet1,feet2);
    });

    it(`given 1INCH And 1INCH When equal should Return true `,() =>{
        let inch1 = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.INCH,1);
        let inch2 = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.INCH,1);
		assert.equal(inch1,inch2);
    });

    it(`given 1Feet And Null Feet When Not equal should return false `,() =>{
        let feet1 = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.FEET,1);
        let feet2 = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.FEET,null);
		assert.notEqual(feet1,feet2);
    });

    it(`given 1Feet And empty string Feet When not equal should return false `,() =>{
        let feet1 = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.FEET,1);
        let feet2 = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.FEET," ");
		assert.notEqual(feet1,feet2);
    });

    it(`given 1Feet And 12Inch When Equal should return true `,() =>{
        let feet = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.FEET,1);
        let inch = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.INCH,12);
		assert.equal(feet,inch);
    });

    it(`given 0.0833Feet And 1Inch When Equal should return true `,() =>{
        let feet = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.FEET,0.0833);
        let inch = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.INCH,1);
		assert.equal(feet,inch);
    });

    it(`given 3Feet And 1Yard When Equal should return true `,() =>{
        let feet = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.FEET,3);
        let yard = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.YARD,1);
		assert.equal(feet,yard);
    });


    it(`given 1Feet And 1Yard When Not Equal should return false `,() =>{
        let feet = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.FEET,1);
        let yard = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.YARD,1);
		assert.notEqual(feet,yard);
    });

    it(`given 1Inch And 1Yard When Not Equal should return false `,() =>{
        let inch = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.INCH,1);
        let yard = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.YARD,1);
		assert.notEqual(inch,yard);
    });

    it(`given 1Yard And 36Inch When Equal should return true `,() =>{
        let yard = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.YARD,1);
        let inch = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.INCH,36);
		assert.equal(yard,inch);
    });

    it(`given 36Inch And 1Yard When Equal should return true `,() =>{
        let inch = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.INCH,36);
        let yard = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.YARD,1);
        assert.equal(yard,inch);
    });

    it(`given 1Yard And 3Feet When Equal should return true `,() =>{
        let yard = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.YARD,1);
        let feet = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.FEET,3);
		assert.equal(yard,feet);
    });

    it(`given 2Inch And 5Cm When Equal should return true `,() =>{
        let inch = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.INCH,2);
        let cm = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.CENTIMETER,5);
		assert.equal(inch,cm);
    });

    it(`given 2Inch And 2Inch When sum is Equal to 4inch should return true `,() =>{
        let inch1 = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.INCH,2);
        let inch2 = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.INCH,2);
        let sum = quantityMeasurment.addition(inch1,inch2);
		assert.equal(4,sum);
    });

    it(`given 1Feet And 2Inch When sum is Equal to 14inch should return true `,() =>{
        let feet = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.FEET,1);
        let inch = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.INCH,2);
        let sum = quantityMeasurment.addition(feet,inch);
		assert.equal(14,sum);
    });

    it(`given 1Feet And 1Feet When sum is Equal to 24inch should return true `,() =>{
        let feet1 = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.FEET,1);
        let feet2 = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.FEET,1);
        let sum = quantityMeasurment.addition(feet1,feet2);
		assert.equal(24,sum);
    });

    it(`given 2Inch And 2.5cm When sum is Equal to 3inch should return true `,() =>{
        let inch = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.INCH,2);
        let cm = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.CENTIMETER,2.5);
        let sum = quantityMeasurment.addition(inch,cm);
		assert.equal(3,sum);
    });
});
