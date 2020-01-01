let assert = require('assert');
let quantityMeasurment = require("../Main/quantityMeasurment");
let lengthUnit = require('../Main/length');
let volumeUnit = require('../Main/volume');
let weightUnit = require('../Main/weights');
let temperatureUnit = require('../Main/temperature');


describe(`Length Unit validation Test`, () => {
    it(`given 0Feet And 0Feet When equal should return true `, () => {
        let feet1 = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.FEET, 1);
        let feet2 = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.INCH, 12);
        assert.equal(feet1[0], feet2[0]);
    });

    it(`given 1INCH And 1INCH When equal should Return true `, () => {
        let inch1 = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.INCH, 1);
        let inch2 = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.INCH, 1);
        assert.equal(inch1[0], inch2[0]);
    });

    it(`given 1Feet And Null Feet When Not equal should return false `, () => {
        let feet1 = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.FEET, 1);
        let feet2 = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.FEET, null);
        assert.notEqual(feet1[0], feet2[0]);
    });

    it(`given 1Feet And empty string Feet When not equal should return false `, () => {
        let feet1 = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.FEET, 1);
        let feet2 = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.FEET, " ");
        assert.notEqual(feet1[0], feet2[0]);
    });

    it(`given 1Feet And 12Inch When Equal should return true `, () => {
        let feet = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.FEET, 1);
        let inch = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.INCH, 12);
        assert.equal(feet[0], inch[0]);
    });

    it(`given 0.0833Feet And 1Inch When Equal should return true `, () => {
        let feet = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.FEET, 0.0833);
        let inch = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.INCH, 1);
        assert.equal(feet[0], inch[0]);
    });

    it(`given 3Feet And 1Yard When Equal should return true `, () => {
        let feet = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.FEET, 3);
        let yard = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.YARD, 1);
        assert.equal(feet[0], yard[0]);
    });


    it(`given 1Feet And 1Yard When Not Equal should return false `, () => {
        let feet = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.FEET, 1);
        let yard = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.YARD, 1);
        assert.notEqual(feet[0], yard[0]);
    });

    it(`given 1Inch And 1Yard When Not Equal should return false `, () => {
        let inch = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.INCH, 1);
        let yard = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.YARD, 1);
        assert.notEqual(inch[0], yard[0]);
    });

    it(`given 1Yard And 36Inch When Equal should return true `, () => {
        let yard = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.YARD, 1);
        let inch = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.INCH, 36);
        assert.equal(yard[0], inch[0]);
    });

    it(`given 36Inch And 1Yard When Equal should return true `, () => {
        let inch = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.INCH, 36);
        let yard = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.YARD, 1);
        assert.equal(yard[0], inch[0]);
    });

    it(`given 1Yard And 3Feet When Equal should return true `, () => {
        let yard = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.YARD, 1);
        let feet = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.FEET, 3);
        assert.equal(yard[0], feet[0]);
    });

    it(`given 2Inch And 5Cm When Equal should return true `, () => {
        let inch = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.INCH, 2);
        let cm = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.CENTIMETER, 5);
        assert.equal(inch[0], cm[0]);
    });

    it(`given 2Inch And 2Inch When sum is Equal to 4inch should return true `, () => {
        let inch1 = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.INCH, 2);
        let inch2 = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.INCH, 2);
        let sum = quantityMeasurment.addition(inch1[0], inch2[0]);
        assert.equal(4, sum);
    });

    it(`given 1Feet And 2Inch When sum is Equal to 14inch should return true `, () => {
        let feet = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.FEET, 1);
        let inch = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.INCH, 2);
        let sum = quantityMeasurment.addition(feet[0], inch[0]);
        assert.equal(14, sum);
    });

    it(`given 1Feet And 1Feet When sum is Equal to 24inch should return true `, () => {
        let feet1 = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.FEET, 1);
        let feet2 = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.FEET, 1);
        let sum = quantityMeasurment.addition(feet1[0], feet2[0]);
        assert.equal(24, sum);
    });

    it(`given 2Inch And 2.5cm When sum is Equal to 3inch should return true `, () => {
        let inch = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.INCH, 2);
        let cm = quantityMeasurment.compareUnits(lengthUnit.lengthEnum.CENTIMETER, 2.5);
        let sum = quantityMeasurment.addition(inch[0], cm[0]);
        assert.equal(3, sum);
    });
});

describe(`Volume Unit validation Test`, () => {
    it(`given 1Gallon And 3.78litres When Equal should return true `, () => {
        let gallon = quantityMeasurment.compareUnits(volumeUnit.volumeEnum.GALLON, 1);
        let litres = quantityMeasurment.compareUnits(volumeUnit.volumeEnum.LITRES, 3.78);
        assert.equal(gallon[1], litres[1]);
    });

    it(`given 1litres And 1000Ml When Equal should return true `, () => {
        let litres = quantityMeasurment.compareUnits(volumeUnit.volumeEnum.LITRES, 1);
        let ml = quantityMeasurment.compareUnits(volumeUnit.volumeEnum.MILLILITERS, 1000);
        assert.equal(litres[1], ml[1]);
    });

    it(`given 1Gallon And 3.78 litres When sum is Equal  7.57 litres should return true `, () => {
        let gallon = quantityMeasurment.compareUnits(volumeUnit.volumeEnum.GALLON, 1);
        let litres = quantityMeasurment.compareUnits(volumeUnit.volumeEnum.LITRES, 3.78);
        let sum = quantityMeasurment.addition(gallon[1], litres[1])
        assert.equal(7.56, sum);
    });

    it(`given 1litres And 1000ml When sum is Equal 2litres should return true `, () => {
        let litres = quantityMeasurment.compareUnits(volumeUnit.volumeEnum.LITRES, 1)
        let ml = quantityMeasurment.compareUnits(volumeUnit.volumeEnum.MILLILITERS, 1000);
        let sum = quantityMeasurment.addition(ml[1], litres[1])
        assert.equal(2, sum);
    });
});

describe(`Weight Unit validation Test`, () => {
    it(`given 1KG And 1000Grams When Equal should return true `, () => {
        let kg = quantityMeasurment.compareUnits(weightUnit.weightEnum.KILOGRAMS, 1);
        let grams = quantityMeasurment.compareUnits(weightUnit.weightEnum.GRAMS, 1000);
        assert.equal(kg[2], grams[2]);
    });

    it(`given 1Tonne And 1000kg When Equal should return true `, () => {
        let tonne = quantityMeasurment.compareUnits(weightUnit.weightEnum.TONNES, 1);
        let kg = quantityMeasurment.compareUnits(weightUnit.weightEnum.KILOGRAMS, 1000);
        assert.equal(tonne[2], kg[2]);
    });

    it(`given 1Tonne And 1000gm When is Equal to 1001kg should return true `, () => {
        let tonne = quantityMeasurment.compareUnits(weightUnit.weightEnum.TONNES, 1);
        let gm = quantityMeasurment.compareUnits(weightUnit.weightEnum.GRAMS, 1000);
        let sum = quantityMeasurment.addition(tonne[2], gm[2])
        assert.equal(1001, sum);
    });
});

describe(`Temperature Unit validation Test`, () => {
    it(`given 212F And 100C When Equal should return true `, () => {
        let fahrenheit = quantityMeasurment.compareUnits(temperatureUnit.temperatureEnum.FAHRENHEIT, 212);
        let celsius = quantityMeasurment.compareUnits(temperatureUnit.temperatureEnum.CELSIUS, 100);
        assert.equal(fahrenheit[3], celsius[3]);
    });

    it(`given 100F And 38C When Equal should return true `, () => {
        let fahrenheit = quantityMeasurment.compareUnits(temperatureUnit.temperatureEnum.FAHRENHEIT, 100);
        let celsius = quantityMeasurment.compareUnits(temperatureUnit.temperatureEnum.CELSIUS, 38);
        assert.equal(fahrenheit[3], celsius[3]);
    });
});
