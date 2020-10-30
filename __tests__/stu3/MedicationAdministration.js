const medicationadministrationValidateFunction = require("../../stu3/js/MedicationAdministration");

describe("MedicationAdministration", () => {
	 test("validate MedicationAdministration-medadmin0308.json", () => {
		 const medicationadministrationExample1 = require("../stu3-resources/MedicationAdministration-medadmin0308.json");
		 expect(medicationadministrationValidateFunction(medicationadministrationExample1)).toBe(true);
	 });

	 test("validate MedicationAdministration-medadmin0312.json", () => {
		 const medicationadministrationExample2 = require("../stu3-resources/MedicationAdministration-medadmin0312.json");
		 expect(medicationadministrationValidateFunction(medicationadministrationExample2)).toBe(true);
	 });

	 test("validate MedicationAdministration-medadmin0313.json", () => {
		 const medicationadministrationExample3 = require("../stu3-resources/MedicationAdministration-medadmin0313.json");
		 expect(medicationadministrationValidateFunction(medicationadministrationExample3)).toBe(true);
	 });

});