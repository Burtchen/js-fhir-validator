const appointmentresponseValidateFunction = require("../../r4/js/AppointmentResponse");

describe("AppointmentResponse", () => {
	 test("validate AppointmentResponse-example.json", () => {
		 const appointmentresponseExample1 = require("../r4-resources/AppointmentResponse-example.json");
		 expect(appointmentresponseValidateFunction(appointmentresponseExample1)).toBe(true);
	 });

	 test("validate AppointmentResponse-exampleresp.json", () => {
		 const appointmentresponseExample2 = require("../r4-resources/AppointmentResponse-exampleresp.json");
		 expect(appointmentresponseValidateFunction(appointmentresponseExample2)).toBe(true);
	 });

});