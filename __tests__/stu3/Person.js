const personValidateFunction = require("../../stu3/js/Person");

describe("Person", () => {
	 test("validate Person-example.json", () => {
		 const personExample1 = require("../stu3-resources/Person-example.json");
		 expect(personValidateFunction(personExample1)).toBe(true);
	 });

	 test("validate Person-f002.json", () => {
		 const personExample2 = require("../stu3-resources/Person-f002.json");
		 expect(personValidateFunction(personExample2)).toBe(true);
	 });

	 test("validate Person-grahame.json", () => {
		 const personExample3 = require("../stu3-resources/Person-grahame.json");
		 expect(personValidateFunction(personExample3)).toBe(true);
	 });

	 test("validate Person-pd.json", () => {
		 const personExample4 = require("../stu3-resources/Person-pd.json");
		 expect(personValidateFunction(personExample4)).toBe(true);
	 });

	 test("validate Person-pp.json", () => {
		 const personExample5 = require("../stu3-resources/Person-pp.json");
		 expect(personValidateFunction(personExample5)).toBe(true);
	 });

});