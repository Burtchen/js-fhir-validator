const listValidateFunction = require("../../r4/js/List");

describe("List", () => {
	 test("validate List-current-allergies.json", () => {
		 const listExample1 = require("../r4-resources/List-current-allergies.json");
		 expect(listValidateFunction(listExample1)).toBe(true);
	 });

	 test("validate List-example-empty.json", () => {
		 const listExample2 = require("../r4-resources/List-example-empty.json");
		 expect(listValidateFunction(listExample2)).toBe(true);
	 });

	 test("validate List-example-simple-empty.json", () => {
		 const listExample3 = require("../r4-resources/List-example-simple-empty.json");
		 expect(listValidateFunction(listExample3)).toBe(true);
	 });

	 test("validate List-example.json", () => {
		 const listExample4 = require("../r4-resources/List-example.json");
		 expect(listValidateFunction(listExample4)).toBe(true);
	 });

	 test("validate List-long.json", () => {
		 const listExample5 = require("../r4-resources/List-long.json");
		 expect(listValidateFunction(listExample5)).toBe(true);
	 });

	 test("validate List-med-list.json", () => {
		 const listExample6 = require("../r4-resources/List-med-list.json");
		 expect(listValidateFunction(listExample6)).toBe(true);
	 });

});