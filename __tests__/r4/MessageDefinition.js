const messagedefinitionValidateFunction = require("../../r4/js/MessageDefinition");

describe("MessageDefinition", () => {
	 test("validate MessageDefinition-example.json", () => {
		 const messagedefinitionExample1 = require("../r4-resources/MessageDefinition-example.json");
		 expect(messagedefinitionValidateFunction(messagedefinitionExample1)).toBe(true);
	 });

	 test("validate MessageDefinition-patient-link-notification.json", () => {
		 const messagedefinitionExample2 = require("../r4-resources/MessageDefinition-patient-link-notification.json");
		 expect(messagedefinitionValidateFunction(messagedefinitionExample2)).toBe(true);
	 });

	 test("validate MessageDefinition-patient-link-response.json", () => {
		 const messagedefinitionExample3 = require("../r4-resources/MessageDefinition-patient-link-response.json");
		 expect(messagedefinitionValidateFunction(messagedefinitionExample3)).toBe(true);
	 });

});