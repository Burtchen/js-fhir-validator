const visionprescriptionValidateFunction = require("../../stu3/js/VisionPrescription");

describe("VisionPrescription", () => {
	 test("validate VisionPrescription-33123.json", () => {
		 const visionprescriptionExample1 = require("../stu3-resources/VisionPrescription-33123.json");
		 expect(visionprescriptionValidateFunction(visionprescriptionExample1)).toBe(true);
	 });

	 test("validate VisionPrescription-33124.json", () => {
		 const visionprescriptionExample2 = require("../stu3-resources/VisionPrescription-33124.json");
		 expect(visionprescriptionValidateFunction(visionprescriptionExample2)).toBe(true);
	 });

});