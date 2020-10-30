const operationoutcomeValidateFunction = require("../../stu3/js/OperationOutcome");

describe("OperationOutcome", () => {
	 test("validate OperationOutcome-101.json", () => {
		 const operationoutcomeExample1 = require("../stu3-resources/OperationOutcome-101.json");
		 expect(operationoutcomeValidateFunction(operationoutcomeExample1)).toBe(true);
	 });

	 test("validate OperationOutcome-allok.json", () => {
		 const operationoutcomeExample2 = require("../stu3-resources/OperationOutcome-allok.json");
		 expect(operationoutcomeValidateFunction(operationoutcomeExample2)).toBe(true);
	 });

	 test("validate OperationOutcome-break-the-glass.json", () => {
		 const operationoutcomeExample3 = require("../stu3-resources/OperationOutcome-break-the-glass.json");
		 expect(operationoutcomeValidateFunction(operationoutcomeExample3)).toBe(true);
	 });

	 test("validate OperationOutcome-exception.json", () => {
		 const operationoutcomeExample4 = require("../stu3-resources/OperationOutcome-exception.json");
		 expect(operationoutcomeValidateFunction(operationoutcomeExample4)).toBe(true);
	 });

	 test("validate OperationOutcome-searchfail.json", () => {
		 const operationoutcomeExample5 = require("../stu3-resources/OperationOutcome-searchfail.json");
		 expect(operationoutcomeValidateFunction(operationoutcomeExample5)).toBe(true);
	 });

	 test("validate OperationOutcome-validationfail.json", () => {
		 const operationoutcomeExample6 = require("../stu3-resources/OperationOutcome-validationfail.json");
		 expect(operationoutcomeValidateFunction(operationoutcomeExample6)).toBe(true);
	 });

});