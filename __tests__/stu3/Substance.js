const substanceValidateFunction = require("../../stu3/js/Substance");

describe("Substance", () => {
	 test("validate Substance-example.json", () => {
		 const substanceExample1 = require("../stu3-resources/Substance-example.json");
		 expect(substanceValidateFunction(substanceExample1)).toBe(true);
	 });

	 test("validate Substance-f201.json", () => {
		 const substanceExample2 = require("../stu3-resources/Substance-f201.json");
		 expect(substanceValidateFunction(substanceExample2)).toBe(true);
	 });

	 test("validate Substance-f202.json", () => {
		 const substanceExample3 = require("../stu3-resources/Substance-f202.json");
		 expect(substanceValidateFunction(substanceExample3)).toBe(true);
	 });

	 test("validate Substance-f203.json", () => {
		 const substanceExample4 = require("../stu3-resources/Substance-f203.json");
		 expect(substanceValidateFunction(substanceExample4)).toBe(true);
	 });

	 test("validate Substance-f204.json", () => {
		 const substanceExample5 = require("../stu3-resources/Substance-f204.json");
		 expect(substanceValidateFunction(substanceExample5)).toBe(true);
	 });

});