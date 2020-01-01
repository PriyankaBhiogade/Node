let assert = require('assert');
let quantityMeasurment = require("./quantityMeasurment copy");
let lengthUnit = require('./length');
let volumeUnit = require('./volume');
let weightUnit = require('./weights');

// describe(`Length Unit validation Test` ,() => {
// 	it(`given 0Feet And 0Feet When equal should return true `,() =>{
//         let feet1 = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.FEET,1);
//         let feet2 = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.INCH,12);
//         assert.equal(feet1,feet2);
//     });

//     it(`given 1INCH And 1INCH When equal should Return true `,() =>{
//         let inch1 = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.INCH,1);
//         let inch2 = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.INCH,1);
// 		assert.equal(inch1,inch2);
//     });

//     it(`given 1Feet And Null Feet When Not equal should return false `,() =>{
//         let feet1 = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.FEET,1);
//         let feet2 = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.FEET,null);
// 		assert.notEqual(feet1,feet2);
//     });

//     it(`given 1Feet And empty string Feet When not equal should return false `,() =>{
//         let feet1 = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.FEET,1);
//         let feet2 = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.FEET," ");
// 		assert.notEqual(feet1,feet2);
//     });

//     it(`given 1Feet And 12Inch When Equal should return true `,() =>{
//         let feet = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.FEET,1);
//         let inch = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.INCH,12);
// 		assert.equal(feet,inch);
//     });

//     it(`given 0.0833Feet And 1Inch When Equal should return true `,() =>{
//         let feet = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.FEET,0.0833);
//         let inch = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.INCH,1);
// 		assert.equal(feet,inch);
//     });

//     it(`given 3Feet And 1Yard When Equal should return true `,() =>{
//         let feet = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.FEET,3);
//         let yard = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.YARD,1);
// 		assert.equal(feet,yard);
//     });


//     it(`given 1Feet And 1Yard When Not Equal should return false `,() =>{
//         let feet = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.FEET,1);
//         let yard = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.YARD,1);
// 		assert.notEqual(feet,yard);
//     });

//     it(`given 1Inch And 1Yard When Not Equal should return false `,() =>{
//         let inch = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.INCH,1);
//         let yard = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.YARD,1);
// 		assert.notEqual(inch,yard);
//     });

//     it(`given 1Yard And 36Inch When Equal should return true `,() =>{
//         let yard = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.YARD,1);
//         let inch = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.INCH,36);
// 		assert.equal(yard,inch);
//     });

//     it(`given 36Inch And 1Yard When Equal should return true `,() =>{
//         let inch = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.INCH,36);
//         let yard = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.YARD,1);
//         assert.equal(yard,inch);
//     });

//     it(`given 1Yard And 3Feet When Equal should return true `,() =>{
//         let yard = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.YARD,1);
//         let feet = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.FEET,3);
// 		assert.equal(yard,feet);
//     });

//     it(`given 2Inch And 5Cm When Equal should return true `,() =>{
//         let inch = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.INCH,2);
//         let cm = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.CENTIMETER,5);
// 		assert.equal(inch,cm);
//     });

//     it(`given 2Inch And 2Inch When sum is Equal to 4inch should return true `,() =>{
//         let inch1 = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.INCH,2);
//         let inch2 = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.INCH,2);
//         let sum = quantityMeasurment.addition(inch1,inch2);
// 		assert.equal(4,sum);
//     });

//     it(`given 1Feet And 2Inch When sum is Equal to 14inch should return true `,() =>{
//         let feet = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.FEET,1);
//         let inch = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.INCH,2);
//         let sum = quantityMeasurment.addition(feet,inch);
// 		assert.equal(14,sum);
//     });

//     it(`given 1Feet And 1Feet When sum is Equal to 24inch should return true `,() =>{
//         let feet1 = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.FEET,1);
//         let feet2 = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.FEET,1);
//         let sum = quantityMeasurment.addition(feet1,feet2);
// 		assert.equal(24,sum);
//     });

//     it(`given 2Inch And 2.5cm When sum is Equal to 3inch should return true `,() =>{
//         let inch = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.INCH,2);
//         let cm = quantityMeasurment.compareLengthUnits(lengthUnit.lengthEnum.CENTIMETER,2.5);
//         let sum = quantityMeasurment.addition(inch,cm);
// 		assert.equal(3,sum);
//     });
// });

describe(`Volume Unit validation Test`, () => {
    it(`given 1Gallon And 3.78litres When Equal should return true `, () => {
        let gallon = quantityMeasurment.compareVolumeUnits(volumeUnit.volumeEnum.GALLON, 1);
        let litres = quantityMeasurment.compareVolumeUnits(volumeUnit.volumeEnum.LITRES, 3.78);
        assert.equal(gallon, litres);
    });

    it(`given 1litres And 1000Ml When Equal should return true `, () => {
        let litres = quantityMeasurment.compareVolumeUnits(volumeUnit.volumeEnum.LITRES, 1);
        let ml = quantityMeasurment.compareVolumeUnits(volumeUnit.volumeEnum.MILLILITERS, 1000);
        assert.equal(litres,ml);
    });
    
    it(`given 1Gallon And 3.78 litres When sum is Equal  7.57 litres should return true `, () => {
        let gallon = quantityMeasurment.compareVolumeUnits(volumeUnit.volumeEnum.GALLON, 1);
        let litres = quantityMeasurment.compareVolumeUnits(volumeUnit.volumeEnum.LITRES, 3.78);
        let sum = quantityMeasurment.addition(gallon,litres)
        assert.equal(7.56,sum);
    });

    it(`given 1litres And 1000ml When sum is Equal 2litres should return true `, () => {
        let litres = quantityMeasurment.compareVolumeUnits(volumeUnit.volumeEnum.LITRES, 1)
        let ml = quantityMeasurment.compareVolumeUnits(volumeUnit.volumeEnum.MILLILITERS,1000);
        let sum = quantityMeasurment.addition(ml,litres)
        assert.equal(2,sum);
    });
});

describe(`Weight Unit validation Test`, () => {
    it(`given 1KG And 1000Grams When Equal should return true `, () => {
        let kg = quantityMeasurment.compareWeightUnits(weightUnit.weightEnum.KILOGRAMS,1);
        let grams = quantityMeasurment.compareWeightUnits(weightUnit.weightEnum.GRAMS,1000);
        assert.equal(kg, grams);
    });

    it(`given 1Tonne And 1000kg When Equal should return true `, () => {
        let tonne = quantityMeasurment.compareWeightUnits(weightUnit.weightEnum.TONNES,1);
        let kg = quantityMeasurment.compareWeightUnits(weightUnit.weightEnum.KILOGRAMS,1000);
        assert.equal(tonne,kg);
    });

    it(`given 1Tonne And 1000gm When is Equal to 1001kg should return true `, () => {
        let tonne = quantityMeasurment.compareWeightUnits(weightUnit.weightEnum.TONNES,1);
        let gm = quantityMeasurment.compareWeightUnits(weightUnit.weightEnum.GRAMS,1000);
        let sum = quantityMeasurment.addition(tonne,gm)
        assert.equal(1001,sum);
    });
});
