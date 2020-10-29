'use strict';
var formats = require('ajv/lib/compile/formats')();
var validate = (function() {
  var refVal = [];
  var refVal1 = (function() {
    return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
      'use strict';
      var vErrors = null;
      var errors = 0;
      if (rootData === undefined) rootData = data;
      var errs__0 = errors,
        prevValid0 = false,
        valid0 = false,
        passingSchemas0 = null;
      var errs_1 = errors;
      if (!refVal[1](data, (dataPath || ''), parentData, parentDataProperty, rootData)) {
        if (vErrors === null) vErrors = refVal[1].errors;
        else vErrors = vErrors.concat(refVal[1].errors);
        errors = vErrors.length;
      }
      var valid1 = errors === errs_1;
      if (valid1) {
        valid0 = prevValid0 = true;
        passingSchemas0 = 0;
      }
      if (!valid0) {
        var err = {
          keyword: 'oneOf',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/oneOf',
          params: {
            passingSchemas: passingSchemas0
          },
          message: 'should match exactly one schema in oneOf'
        };
        if (vErrors === null) vErrors = [err];
        else vErrors.push(err);
        errors++;
        validate.errors = vErrors;
        return false;
      } else {
        errors = errs__0;
        if (vErrors !== null) {
          if (errs__0) vErrors.length = errs__0;
          else vErrors = null;
        }
      }
      validate.errors = vErrors;
      return errors === 0;
    };
  })();
  refVal1.schema = {
    "oneOf": [{
      "$ref": "#/definitions/ResourceList"
    }]
  };
  refVal1.errors = null;
  refVal[1] = refVal1;
  return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
    'use strict';
    var vErrors = null;
    var errors = 0;
    if (rootData === undefined) rootData = data;
    var errs__0 = errors,
      prevValid0 = false,
      valid0 = false,
      passingSchemas0 = null;
    var errs_1 = errors;
    if (!refVal1(data, (dataPath || ''), parentData, parentDataProperty, rootData)) {
      if (vErrors === null) vErrors = refVal1.errors;
      else vErrors = vErrors.concat(refVal1.errors);
      errors = vErrors.length;
    }
    var valid1 = errors === errs_1;
    if (valid1) {
      valid0 = prevValid0 = true;
      passingSchemas0 = 0;
    }
    if (!valid0) {
      var err = {
        keyword: 'oneOf',
        dataPath: (dataPath || '') + "",
        schemaPath: '#/oneOf',
        params: {
          passingSchemas: passingSchemas0
        },
        message: 'should match exactly one schema in oneOf'
      };
      if (vErrors === null) vErrors = [err];
      else vErrors.push(err);
      errors++;
      validate.errors = vErrors;
      return false;
    } else {
      errors = errs__0;
      if (vErrors !== null) {
        if (errs__0) vErrors.length = errs__0;
        else vErrors = null;
      }
    }
    validate.errors = vErrors;
    return errors === 0;
  };
})();
validate.schema = {
  "description": "see http://hl7.org/fhir/json.html#schema for information about the FHIR Json Schemas",
  "definitions": {
    "Element": {
      "allOf": [{
        "description": "Base definition for all elements in a resource.",
        "properties": {
          "id": {
            "description": "unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
            "type": "string"
          },
          "_id": {
            "description": "Extensions for id",
            "$ref": "#/definitions/Element"
          },
          "extension": {
            "description": "May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Extension"
            }
          }
        }
      }]
    },
    "Extension": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "Optional Extension Element - found in all resources.",
        "properties": {
          "url": {
            "description": "Source of the definition for the extension code - a logical name or a URL.",
            "type": "string"
          },
          "_url": {
            "description": "Extensions for url",
            "$ref": "#/definitions/Element"
          },
          "valueBoolean": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "type": "boolean"
          },
          "_valueBoolean": {
            "description": "Extensions for valueBoolean",
            "$ref": "#/definitions/Element"
          },
          "valueInteger": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "pattern": "-?([0]|([1-9][0-9]*))",
            "type": "number"
          },
          "_valueInteger": {
            "description": "Extensions for valueInteger",
            "$ref": "#/definitions/Element"
          },
          "valueDecimal": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "pattern": "-?([0]|([1-9][0-9]*))(\\.[0-9]+)?",
            "type": "number"
          },
          "_valueDecimal": {
            "description": "Extensions for valueDecimal",
            "$ref": "#/definitions/Element"
          },
          "valueBase64Binary": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "type": "string"
          },
          "_valueBase64Binary": {
            "description": "Extensions for valueBase64Binary",
            "$ref": "#/definitions/Element"
          },
          "valueInstant": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "type": "string"
          },
          "_valueInstant": {
            "description": "Extensions for valueInstant",
            "$ref": "#/definitions/Element"
          },
          "valueString": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "type": "string"
          },
          "_valueString": {
            "description": "Extensions for valueString",
            "$ref": "#/definitions/Element"
          },
          "valueUri": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "type": "string"
          },
          "_valueUri": {
            "description": "Extensions for valueUri",
            "$ref": "#/definitions/Element"
          },
          "valueDate": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "pattern": "-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?",
            "type": "string"
          },
          "_valueDate": {
            "description": "Extensions for valueDate",
            "$ref": "#/definitions/Element"
          },
          "valueDateTime": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "pattern": "-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?",
            "type": "string"
          },
          "_valueDateTime": {
            "description": "Extensions for valueDateTime",
            "$ref": "#/definitions/Element"
          },
          "valueTime": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "pattern": "([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?",
            "type": "string"
          },
          "_valueTime": {
            "description": "Extensions for valueTime",
            "$ref": "#/definitions/Element"
          },
          "valueCode": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "pattern": "[^\\s]+([\\s]?[^\\s]+)*",
            "type": "string"
          },
          "_valueCode": {
            "description": "Extensions for valueCode",
            "$ref": "#/definitions/Element"
          },
          "valueOid": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "pattern": "urn:oid:(0|[1-9][0-9]*)(\\.(0|[1-9][0-9]*))*",
            "type": "string"
          },
          "_valueOid": {
            "description": "Extensions for valueOid",
            "$ref": "#/definitions/Element"
          },
          "valueUuid": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "pattern": "urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}",
            "type": "string"
          },
          "_valueUuid": {
            "description": "Extensions for valueUuid",
            "$ref": "#/definitions/Element"
          },
          "valueId": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "pattern": "[A-Za-z0-9\\-\\.]{1,64}",
            "type": "string"
          },
          "_valueId": {
            "description": "Extensions for valueId",
            "$ref": "#/definitions/Element"
          },
          "valueUnsignedInt": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "pattern": "[0]|([1-9][0-9]*)",
            "type": "number"
          },
          "_valueUnsignedInt": {
            "description": "Extensions for valueUnsignedInt",
            "$ref": "#/definitions/Element"
          },
          "valuePositiveInt": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "pattern": "[1-9][0-9]*",
            "type": "number"
          },
          "_valuePositiveInt": {
            "description": "Extensions for valuePositiveInt",
            "$ref": "#/definitions/Element"
          },
          "valueMarkdown": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "type": "string"
          },
          "_valueMarkdown": {
            "description": "Extensions for valueMarkdown",
            "$ref": "#/definitions/Element"
          },
          "valueElement": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/Element"
          },
          "valueExtension": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/Extension"
          },
          "valueBackboneElement": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/BackboneElement"
          },
          "valueNarrative": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/Narrative"
          },
          "valueAnnotation": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/Annotation"
          },
          "valueAttachment": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/Attachment"
          },
          "valueIdentifier": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/Identifier"
          },
          "valueCodeableConcept": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/CodeableConcept"
          },
          "valueCoding": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/Coding"
          },
          "valueQuantity": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/Quantity"
          },
          "valueDuration": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/Duration"
          },
          "valueSimpleQuantity": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/Quantity"
          },
          "valueDistance": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/Distance"
          },
          "valueCount": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/Count"
          },
          "valueMoney": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/Money"
          },
          "valueAge": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/Age"
          },
          "valueRange": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/Range"
          },
          "valuePeriod": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/Period"
          },
          "valueRatio": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/Ratio"
          },
          "valueReference": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/Reference"
          },
          "valueSampledData": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/SampledData"
          },
          "valueSignature": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/Signature"
          },
          "valueHumanName": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/HumanName"
          },
          "valueAddress": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/Address"
          },
          "valueContactPoint": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/ContactPoint"
          },
          "valueTiming": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/Timing"
          },
          "valueMeta": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/Meta"
          },
          "valueElementDefinition": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/ElementDefinition"
          },
          "valueContactDetail": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/ContactDetail"
          },
          "valueContributor": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/Contributor"
          },
          "valueDosage": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/Dosage"
          },
          "valueRelatedArtifact": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/RelatedArtifact"
          },
          "valueUsageContext": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/UsageContext"
          },
          "valueDataRequirement": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/DataRequirement"
          },
          "valueParameterDefinition": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/ParameterDefinition"
          },
          "valueTriggerDefinition": {
            "description": "Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).",
            "$ref": "#/definitions/TriggerDefinition"
          }
        }
      }]
    },
    "BackboneElement": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "Base definition for all elements that are defined inside a resource - but not those in a data type.",
        "properties": {
          "modifierExtension": {
            "description": "May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Extension"
            }
          }
        }
      }]
    },
    "Narrative": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "A human-readable formatted text, including images.",
        "properties": {
          "status": {
            "description": "The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.",
            "enum": ["generated", "extensions", "additional", "empty"],
            "type": "string"
          },
          "_status": {
            "description": "Extensions for status",
            "$ref": "#/definitions/Element"
          },
          "div": {
            "description": "The actual narrative content, a stripped down version of XHTML.",
            "type": "string"
          }
        },
        "required": ["div"]
      }]
    },
    "Annotation": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "A  text note which also  contains information about who made the statement and when.",
        "properties": {
          "authorReference": {
            "description": "The individual responsible for making the annotation.",
            "$ref": "#/definitions/Reference"
          },
          "authorString": {
            "description": "The individual responsible for making the annotation.",
            "type": "string"
          },
          "_authorString": {
            "description": "Extensions for authorString",
            "$ref": "#/definitions/Element"
          },
          "time": {
            "description": "Indicates when this particular annotation was made.",
            "type": "string",
            "pattern": "-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?"
          },
          "_time": {
            "description": "Extensions for time",
            "$ref": "#/definitions/Element"
          },
          "text": {
            "description": "The text of the annotation.",
            "type": "string"
          },
          "_text": {
            "description": "Extensions for text",
            "$ref": "#/definitions/Element"
          }
        }
      }]
    },
    "Attachment": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "For referring to data content defined in other formats.",
        "properties": {
          "contentType": {
            "description": "Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate.",
            "type": "string",
            "pattern": "[^\\s]+([\\s]?[^\\s]+)*"
          },
          "_contentType": {
            "description": "Extensions for contentType",
            "$ref": "#/definitions/Element"
          },
          "language": {
            "description": "The human language of the content. The value can be any valid value according to BCP 47.",
            "type": "string",
            "pattern": "[^\\s]+([\\s]?[^\\s]+)*"
          },
          "_language": {
            "description": "Extensions for language",
            "$ref": "#/definitions/Element"
          },
          "data": {
            "description": "The actual data of the attachment - a sequence of bytes. In XML, represented using base64.",
            "type": "string"
          },
          "_data": {
            "description": "Extensions for data",
            "$ref": "#/definitions/Element"
          },
          "url": {
            "description": "An alternative location where the data can be accessed.",
            "type": "string"
          },
          "_url": {
            "description": "Extensions for url",
            "$ref": "#/definitions/Element"
          },
          "size": {
            "description": "The number of bytes of data that make up this attachment (before base64 encoding, if that is done).",
            "type": "number",
            "pattern": "[0]|([1-9][0-9]*)"
          },
          "_size": {
            "description": "Extensions for size",
            "$ref": "#/definitions/Element"
          },
          "hash": {
            "description": "The calculated hash of the data using SHA-1. Represented using base64.",
            "type": "string"
          },
          "_hash": {
            "description": "Extensions for hash",
            "$ref": "#/definitions/Element"
          },
          "title": {
            "description": "A label or set of text to display in place of the data.",
            "type": "string"
          },
          "_title": {
            "description": "Extensions for title",
            "$ref": "#/definitions/Element"
          },
          "creation": {
            "description": "The date that the attachment was first created.",
            "type": "string",
            "pattern": "-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?"
          },
          "_creation": {
            "description": "Extensions for creation",
            "$ref": "#/definitions/Element"
          }
        }
      }]
    },
    "Identifier": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "A technical identifier - identifies some entity uniquely and unambiguously.",
        "properties": {
          "use": {
            "description": "The purpose of this identifier.",
            "enum": ["usual", "official", "temp", "secondary"],
            "type": "string"
          },
          "_use": {
            "description": "Extensions for use",
            "$ref": "#/definitions/Element"
          },
          "type": {
            "description": "A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.",
            "$ref": "#/definitions/CodeableConcept"
          },
          "system": {
            "description": "Establishes the namespace for the value - that is, a URL that describes a set values that are unique.",
            "type": "string"
          },
          "_system": {
            "description": "Extensions for system",
            "$ref": "#/definitions/Element"
          },
          "value": {
            "description": "The portion of the identifier typically relevant to the user and which is unique within the context of the system.",
            "type": "string"
          },
          "_value": {
            "description": "Extensions for value",
            "$ref": "#/definitions/Element"
          },
          "period": {
            "description": "Time period during which identifier is/was valid for use.",
            "$ref": "#/definitions/Period"
          },
          "assigner": {
            "description": "Organization that issued/manages the identifier.",
            "$ref": "#/definitions/Reference"
          }
        }
      }]
    },
    "CodeableConcept": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.",
        "properties": {
          "coding": {
            "description": "A reference to a code defined by a terminology system.",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Coding"
            }
          },
          "text": {
            "description": "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
            "type": "string"
          },
          "_text": {
            "description": "Extensions for text",
            "$ref": "#/definitions/Element"
          }
        }
      }]
    },
    "Coding": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "A reference to a code defined by a terminology system.",
        "properties": {
          "system": {
            "description": "The identification of the code system that defines the meaning of the symbol in the code.",
            "type": "string"
          },
          "_system": {
            "description": "Extensions for system",
            "$ref": "#/definitions/Element"
          },
          "version": {
            "description": "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured. and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
            "type": "string"
          },
          "_version": {
            "description": "Extensions for version",
            "$ref": "#/definitions/Element"
          },
          "code": {
            "description": "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
            "type": "string",
            "pattern": "[^\\s]+([\\s]?[^\\s]+)*"
          },
          "_code": {
            "description": "Extensions for code",
            "$ref": "#/definitions/Element"
          },
          "display": {
            "description": "A representation of the meaning of the code in the system, following the rules of the system.",
            "type": "string"
          },
          "_display": {
            "description": "Extensions for display",
            "$ref": "#/definitions/Element"
          },
          "userSelected": {
            "description": "Indicates that this coding was chosen by a user directly - i.e. off a pick list of available items (codes or displays).",
            "type": "boolean"
          },
          "_userSelected": {
            "description": "Extensions for userSelected",
            "$ref": "#/definitions/Element"
          }
        }
      }]
    },
    "Quantity": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.",
        "properties": {
          "value": {
            "description": "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
            "type": "number",
            "pattern": "-?([0]|([1-9][0-9]*))(\\.[0-9]+)?"
          },
          "_value": {
            "description": "Extensions for value",
            "$ref": "#/definitions/Element"
          },
          "comparator": {
            "description": "How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is \"<\" , then the real value is < stated value.",
            "enum": ["<", "<=", ">=", ">"],
            "type": "string"
          },
          "_comparator": {
            "description": "Extensions for comparator",
            "$ref": "#/definitions/Element"
          },
          "unit": {
            "description": "A human-readable form of the unit.",
            "type": "string"
          },
          "_unit": {
            "description": "Extensions for unit",
            "$ref": "#/definitions/Element"
          },
          "system": {
            "description": "The identification of the system that provides the coded form of the unit.",
            "type": "string"
          },
          "_system": {
            "description": "Extensions for system",
            "$ref": "#/definitions/Element"
          },
          "code": {
            "description": "A computer processable form of the unit in some unit representation system.",
            "type": "string",
            "pattern": "[^\\s]+([\\s]?[^\\s]+)*"
          },
          "_code": {
            "description": "Extensions for code",
            "$ref": "#/definitions/Element"
          }
        }
      }]
    },
    "Duration": {
      "allOf": [{
        "$ref": "#/definitions/Quantity"
      }, {
        "description": "A length of time.",
        "properties": {}
      }]
    },
    "Distance": {
      "allOf": [{
        "$ref": "#/definitions/Quantity"
      }, {
        "description": "A length - a value with a unit that is a physical distance.",
        "properties": {}
      }]
    },
    "Count": {
      "allOf": [{
        "$ref": "#/definitions/Quantity"
      }, {
        "description": "A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.",
        "properties": {}
      }]
    },
    "Money": {
      "allOf": [{
        "$ref": "#/definitions/Quantity"
      }, {
        "description": "An amount of economic utility in some recognized currency.",
        "properties": {}
      }]
    },
    "Age": {
      "allOf": [{
        "$ref": "#/definitions/Quantity"
      }, {
        "description": "A duration of time during which an organism (or a process) has existed.",
        "properties": {}
      }]
    },
    "Range": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "A set of ordered Quantities defined by a low and high limit.",
        "properties": {
          "low": {
            "description": "The low limit. The boundary is inclusive.",
            "$ref": "#/definitions/Quantity"
          },
          "high": {
            "description": "The high limit. The boundary is inclusive.",
            "$ref": "#/definitions/Quantity"
          }
        }
      }]
    },
    "Period": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "A time period defined by a start and end date and optionally time.",
        "properties": {
          "start": {
            "description": "The start of the period. The boundary is inclusive.",
            "type": "string",
            "pattern": "-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?"
          },
          "_start": {
            "description": "Extensions for start",
            "$ref": "#/definitions/Element"
          },
          "end": {
            "description": "The end of the period. If the end of the period is missing, it means that the period is ongoing. The start may be in the past, and the end date in the future, which means that period is expected/planned to end at that time.",
            "type": "string",
            "pattern": "-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?"
          },
          "_end": {
            "description": "Extensions for end",
            "$ref": "#/definitions/Element"
          }
        }
      }]
    },
    "Ratio": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "A relationship of two Quantity values - expressed as a numerator and a denominator.",
        "properties": {
          "numerator": {
            "description": "The value of the numerator.",
            "$ref": "#/definitions/Quantity"
          },
          "denominator": {
            "description": "The value of the denominator.",
            "$ref": "#/definitions/Quantity"
          }
        }
      }]
    },
    "Reference": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "A reference from one resource to another.",
        "properties": {
          "reference": {
            "description": "A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with '#') refer to contained resources.",
            "type": "string"
          },
          "_reference": {
            "description": "Extensions for reference",
            "$ref": "#/definitions/Element"
          },
          "identifier": {
            "description": "An identifier for the other resource. This is used when there is no way to reference the other resource directly, either because the entity is not available through a FHIR server, or because there is no way for the author of the resource to convert a known identifier to an actual location. There is no requirement that a Reference.identifier point to something that is actually exposed as a FHIR instance, but it SHALL point to a business concept that would be expected to be exposed as a FHIR instance, and that instance would need to be of a FHIR resource type allowed by the reference.",
            "$ref": "#/definitions/Identifier"
          },
          "display": {
            "description": "Plain text narrative that identifies the resource in addition to the resource reference.",
            "type": "string"
          },
          "_display": {
            "description": "Extensions for display",
            "$ref": "#/definitions/Element"
          }
        }
      }]
    },
    "SampledData": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.",
        "properties": {
          "origin": {
            "description": "The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series.",
            "$ref": "#/definitions/Quantity"
          },
          "period": {
            "description": "The length of time between sampling times, measured in milliseconds.",
            "type": "number",
            "pattern": "-?([0]|([1-9][0-9]*))(\\.[0-9]+)?"
          },
          "_period": {
            "description": "Extensions for period",
            "$ref": "#/definitions/Element"
          },
          "factor": {
            "description": "A correction factor that is applied to the sampled data points before they are added to the origin.",
            "type": "number",
            "pattern": "-?([0]|([1-9][0-9]*))(\\.[0-9]+)?"
          },
          "_factor": {
            "description": "Extensions for factor",
            "$ref": "#/definitions/Element"
          },
          "lowerLimit": {
            "description": "The lower limit of detection of the measured points. This is needed if any of the data points have the value \"L\" (lower than detection limit).",
            "type": "number",
            "pattern": "-?([0]|([1-9][0-9]*))(\\.[0-9]+)?"
          },
          "_lowerLimit": {
            "description": "Extensions for lowerLimit",
            "$ref": "#/definitions/Element"
          },
          "upperLimit": {
            "description": "The upper limit of detection of the measured points. This is needed if any of the data points have the value \"U\" (higher than detection limit).",
            "type": "number",
            "pattern": "-?([0]|([1-9][0-9]*))(\\.[0-9]+)?"
          },
          "_upperLimit": {
            "description": "Extensions for upperLimit",
            "$ref": "#/definitions/Element"
          },
          "dimensions": {
            "description": "The number of sample points at each time point. If this value is greater than one, then the dimensions will be interlaced - all the sample points for a point in time will be recorded at once.",
            "type": "number",
            "pattern": "[1-9][0-9]*"
          },
          "_dimensions": {
            "description": "Extensions for dimensions",
            "$ref": "#/definitions/Element"
          },
          "data": {
            "description": "A series of data points which are decimal values separated by a single space (character u20). The special values \"E\" (error), \"L\" (below detection limit) and \"U\" (above detection limit) can also be used in place of a decimal value.",
            "type": "string"
          },
          "_data": {
            "description": "Extensions for data",
            "$ref": "#/definitions/Element"
          }
        },
        "required": ["origin"]
      }]
    },
    "Signature": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "A digital signature along with supporting context. The signature may be electronic/cryptographic in nature, or a graphical image representing a hand-written signature, or a signature process. Different signature approaches have different utilities.",
        "properties": {
          "type": {
            "description": "An indication of the reason that the entity signed this document. This may be explicitly included as part of the signature information and can be used when determining accountability for various actions concerning the document.",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Coding"
            }
          },
          "when": {
            "description": "When the digital signature was signed.",
            "type": "string"
          },
          "_when": {
            "description": "Extensions for when",
            "$ref": "#/definitions/Element"
          },
          "whoUri": {
            "description": "A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key).",
            "type": "string"
          },
          "_whoUri": {
            "description": "Extensions for whoUri",
            "$ref": "#/definitions/Element"
          },
          "whoReference": {
            "description": "A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key).",
            "$ref": "#/definitions/Reference"
          },
          "onBehalfOfUri": {
            "description": "A reference to an application-usable description of the identity that is represented by the signature.",
            "type": "string"
          },
          "_onBehalfOfUri": {
            "description": "Extensions for onBehalfOfUri",
            "$ref": "#/definitions/Element"
          },
          "onBehalfOfReference": {
            "description": "A reference to an application-usable description of the identity that is represented by the signature.",
            "$ref": "#/definitions/Reference"
          },
          "contentType": {
            "description": "A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jwt for JWT, and image/* for a graphical image of a signature, etc.",
            "type": "string",
            "pattern": "[^\\s]+([\\s]?[^\\s]+)*"
          },
          "_contentType": {
            "description": "Extensions for contentType",
            "$ref": "#/definitions/Element"
          },
          "blob": {
            "description": "The base64 encoding of the Signature content. When signature is not recorded electronically this element would be empty.",
            "type": "string"
          },
          "_blob": {
            "description": "Extensions for blob",
            "$ref": "#/definitions/Element"
          }
        },
        "required": ["type"]
      }]
    },
    "HumanName": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "A human's name with the ability to identify parts and usage.",
        "properties": {
          "use": {
            "description": "Identifies the purpose for this name.",
            "enum": ["usual", "official", "temp", "nickname", "anonymous", "old", "maiden"],
            "type": "string"
          },
          "_use": {
            "description": "Extensions for use",
            "$ref": "#/definitions/Element"
          },
          "text": {
            "description": "A full text representation of the name.",
            "type": "string"
          },
          "_text": {
            "description": "Extensions for text",
            "$ref": "#/definitions/Element"
          },
          "family": {
            "description": "The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father.",
            "type": "string"
          },
          "_family": {
            "description": "Extensions for family",
            "$ref": "#/definitions/Element"
          },
          "given": {
            "description": "Given name.",
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "_given": {
            "description": "Extensions for given",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Element"
            }
          },
          "prefix": {
            "description": "Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.",
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "_prefix": {
            "description": "Extensions for prefix",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Element"
            }
          },
          "suffix": {
            "description": "Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.",
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "_suffix": {
            "description": "Extensions for suffix",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Element"
            }
          },
          "period": {
            "description": "Indicates the period of time when this name was valid for the named person.",
            "$ref": "#/definitions/Period"
          }
        }
      }]
    },
    "Address": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.",
        "properties": {
          "use": {
            "description": "The purpose of this address.",
            "enum": ["home", "work", "temp", "old"],
            "type": "string"
          },
          "_use": {
            "description": "Extensions for use",
            "$ref": "#/definitions/Element"
          },
          "type": {
            "description": "Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.",
            "enum": ["postal", "physical", "both"],
            "type": "string"
          },
          "_type": {
            "description": "Extensions for type",
            "$ref": "#/definitions/Element"
          },
          "text": {
            "description": "A full text representation of the address.",
            "type": "string"
          },
          "_text": {
            "description": "Extensions for text",
            "$ref": "#/definitions/Element"
          },
          "line": {
            "description": "This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.",
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "_line": {
            "description": "Extensions for line",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Element"
            }
          },
          "city": {
            "description": "The name of the city, town, village or other community or delivery center.",
            "type": "string"
          },
          "_city": {
            "description": "Extensions for city",
            "$ref": "#/definitions/Element"
          },
          "district": {
            "description": "The name of the administrative area (county).",
            "type": "string"
          },
          "_district": {
            "description": "Extensions for district",
            "$ref": "#/definitions/Element"
          },
          "state": {
            "description": "Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (i.e. US 2 letter state codes).",
            "type": "string"
          },
          "_state": {
            "description": "Extensions for state",
            "$ref": "#/definitions/Element"
          },
          "postalCode": {
            "description": "A postal code designating a region defined by the postal service.",
            "type": "string"
          },
          "_postalCode": {
            "description": "Extensions for postalCode",
            "$ref": "#/definitions/Element"
          },
          "country": {
            "description": "Country - a nation as commonly understood or generally accepted.",
            "type": "string"
          },
          "_country": {
            "description": "Extensions for country",
            "$ref": "#/definitions/Element"
          },
          "period": {
            "description": "Time period when address was/is in use.",
            "$ref": "#/definitions/Period"
          }
        }
      }]
    },
    "ContactPoint": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.",
        "properties": {
          "system": {
            "description": "Telecommunications form for contact point - what communications system is required to make use of the contact.",
            "enum": ["phone", "fax", "email", "pager", "url", "sms", "other"],
            "type": "string"
          },
          "_system": {
            "description": "Extensions for system",
            "$ref": "#/definitions/Element"
          },
          "value": {
            "description": "The actual contact point details, in a form that is meaningful to the designated communication system (i.e. phone number or email address).",
            "type": "string"
          },
          "_value": {
            "description": "Extensions for value",
            "$ref": "#/definitions/Element"
          },
          "use": {
            "description": "Identifies the purpose for the contact point.",
            "enum": ["home", "work", "temp", "old", "mobile"],
            "type": "string"
          },
          "_use": {
            "description": "Extensions for use",
            "$ref": "#/definitions/Element"
          },
          "rank": {
            "description": "Specifies a preferred order in which to use a set of contacts. Contacts are ranked with lower values coming before higher values.",
            "type": "number",
            "pattern": "[1-9][0-9]*"
          },
          "_rank": {
            "description": "Extensions for rank",
            "$ref": "#/definitions/Element"
          },
          "period": {
            "description": "Time period when the contact point was/is in use.",
            "$ref": "#/definitions/Period"
          }
        }
      }]
    },
    "Timing": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.",
        "properties": {
          "event": {
            "description": "Identifies specific times when the event occurs.",
            "type": "array",
            "items": {
              "type": "string",
              "pattern": "-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?"
            }
          },
          "_event": {
            "description": "Extensions for event",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Element"
            }
          },
          "repeat": {
            "description": "A set of rules that describe when the event is scheduled.",
            "$ref": "#/definitions/Timing_Repeat"
          },
          "code": {
            "description": "A code for the timing schedule. Some codes such as BID are ubiquitous, but many institutions define their own additional codes. If a code is provided, the code is understood to be a complete statement of whatever is specified in the structured timing data, and either the code or the data may be used to interpret the Timing, with the exception that .repeat.bounds still applies over the code (and is not contained in the code).",
            "$ref": "#/definitions/CodeableConcept"
          }
        }
      }]
    },
    "Timing_Repeat": {
      "allOf": [{
        "$ref": "#/definitions/BackboneElement"
      }, {
        "description": "Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.",
        "properties": {
          "boundsDuration": {
            "description": "Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.",
            "$ref": "#/definitions/Duration"
          },
          "boundsRange": {
            "description": "Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.",
            "$ref": "#/definitions/Range"
          },
          "boundsPeriod": {
            "description": "Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.",
            "$ref": "#/definitions/Period"
          },
          "count": {
            "description": "A total count of the desired number of repetitions.",
            "type": "number",
            "pattern": "-?([0]|([1-9][0-9]*))"
          },
          "_count": {
            "description": "Extensions for count",
            "$ref": "#/definitions/Element"
          },
          "countMax": {
            "description": "A maximum value for the count of the desired repetitions (e.g. do something 6-8 times).",
            "type": "number",
            "pattern": "-?([0]|([1-9][0-9]*))"
          },
          "_countMax": {
            "description": "Extensions for countMax",
            "$ref": "#/definitions/Element"
          },
          "duration": {
            "description": "How long this thing happens for when it happens.",
            "type": "number",
            "pattern": "-?([0]|([1-9][0-9]*))(\\.[0-9]+)?"
          },
          "_duration": {
            "description": "Extensions for duration",
            "$ref": "#/definitions/Element"
          },
          "durationMax": {
            "description": "The upper limit of how long this thing happens for when it happens.",
            "type": "number",
            "pattern": "-?([0]|([1-9][0-9]*))(\\.[0-9]+)?"
          },
          "_durationMax": {
            "description": "Extensions for durationMax",
            "$ref": "#/definitions/Element"
          },
          "durationUnit": {
            "description": "The units of time for the duration, in UCUM units.",
            "enum": ["s", "min", "h", "d", "wk", "mo", "a"],
            "type": "string"
          },
          "_durationUnit": {
            "description": "Extensions for durationUnit",
            "$ref": "#/definitions/Element"
          },
          "frequency": {
            "description": "The number of times to repeat the action within the specified period / period range (i.e. both period and periodMax provided).",
            "type": "number",
            "pattern": "-?([0]|([1-9][0-9]*))"
          },
          "_frequency": {
            "description": "Extensions for frequency",
            "$ref": "#/definitions/Element"
          },
          "frequencyMax": {
            "description": "If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.",
            "type": "number",
            "pattern": "-?([0]|([1-9][0-9]*))"
          },
          "_frequencyMax": {
            "description": "Extensions for frequencyMax",
            "$ref": "#/definitions/Element"
          },
          "period": {
            "description": "Indicates the duration of time over which repetitions are to occur; e.g. to express \"3 times per day\", 3 would be the frequency and \"1 day\" would be the period.",
            "type": "number",
            "pattern": "-?([0]|([1-9][0-9]*))(\\.[0-9]+)?"
          },
          "_period": {
            "description": "Extensions for period",
            "$ref": "#/definitions/Element"
          },
          "periodMax": {
            "description": "If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as \"do this once every 3-5 days.",
            "type": "number",
            "pattern": "-?([0]|([1-9][0-9]*))(\\.[0-9]+)?"
          },
          "_periodMax": {
            "description": "Extensions for periodMax",
            "$ref": "#/definitions/Element"
          },
          "periodUnit": {
            "description": "The units of time for the period in UCUM units.",
            "enum": ["s", "min", "h", "d", "wk", "mo", "a"],
            "type": "string"
          },
          "_periodUnit": {
            "description": "Extensions for periodUnit",
            "$ref": "#/definitions/Element"
          },
          "dayOfWeek": {
            "description": "If one or more days of week is provided, then the action happens only on the specified day(s).",
            "type": "array",
            "items": {
              "type": "string",
              "pattern": "[^\\s]+([\\s]?[^\\s]+)*"
            }
          },
          "_dayOfWeek": {
            "description": "Extensions for dayOfWeek",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Element"
            }
          },
          "timeOfDay": {
            "description": "Specified time of day for action to take place.",
            "type": "array",
            "items": {
              "type": "string",
              "pattern": "([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?"
            }
          },
          "_timeOfDay": {
            "description": "Extensions for timeOfDay",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Element"
            }
          },
          "when": {
            "description": "Real world events that the occurrence of the event should be tied to.",
            "enum": ["MORN", "AFT", "EVE", "NIGHT", "PHS", "HS", "WAKE", "C", "CM", "CD", "CV", "AC", "ACM", "ACD", "ACV", "PC", "PCM", "PCD", "PCV"],
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "_when": {
            "description": "Extensions for when",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Element"
            }
          },
          "offset": {
            "description": "The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event.",
            "type": "number",
            "pattern": "[0]|([1-9][0-9]*)"
          },
          "_offset": {
            "description": "Extensions for offset",
            "$ref": "#/definitions/Element"
          }
        }
      }]
    },
    "Meta": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.",
        "properties": {
          "versionId": {
            "description": "The version specific identifier, as it appears in the version portion of the URL. This values changes when the resource is created, updated, or deleted.",
            "type": "string",
            "pattern": "[A-Za-z0-9\\-\\.]{1,64}"
          },
          "_versionId": {
            "description": "Extensions for versionId",
            "$ref": "#/definitions/Element"
          },
          "lastUpdated": {
            "description": "When the resource last changed - e.g. when the version changed.",
            "type": "string"
          },
          "_lastUpdated": {
            "description": "Extensions for lastUpdated",
            "$ref": "#/definitions/Element"
          },
          "profile": {
            "description": "A list of profiles (references to [[[StructureDefinition]]] resources) that this resource claims to conform to. The URL is a reference to [[[StructureDefinition.url]]].",
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "_profile": {
            "description": "Extensions for profile",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Element"
            }
          },
          "security": {
            "description": "Security labels applied to this resource. These tags connect specific resources to the overall security policy and infrastructure.",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Coding"
            }
          },
          "tag": {
            "description": "Tags applied to this resource. Tags are intended to be used to identify and relate resources to process and workflow, and applications are not required to consider the tags when interpreting the meaning of a resource.",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Coding"
            }
          }
        }
      }]
    },
    "ElementDefinition": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "Captures constraints on each element within the resource, profile, or extension.",
        "properties": {
          "path": {
            "description": "The path identifies the element and is expressed as a \".\"-separated list of ancestor elements, beginning with the name of the resource or extension.",
            "type": "string"
          },
          "_path": {
            "description": "Extensions for path",
            "$ref": "#/definitions/Element"
          },
          "representation": {
            "description": "Codes that define how this element is represented in instances, when the deviation varies from the normal case.",
            "enum": ["xmlAttr", "xmlText", "typeAttr", "cdaText", "xhtml"],
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "_representation": {
            "description": "Extensions for representation",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Element"
            }
          },
          "sliceName": {
            "description": "The name of this element definition slice, when slicing is working. The name must be a token with no dots or spaces. This is a unique name referring to a specific set of constraints applied to this element, used to provide a name to different slices of the same element.",
            "type": "string"
          },
          "_sliceName": {
            "description": "Extensions for sliceName",
            "$ref": "#/definitions/Element"
          },
          "label": {
            "description": "A single preferred label which is the text to display beside the element indicating its meaning or to use to prompt for the element in a user display or form.",
            "type": "string"
          },
          "_label": {
            "description": "Extensions for label",
            "$ref": "#/definitions/Element"
          },
          "code": {
            "description": "A code that has the same meaning as the element in a particular terminology.",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Coding"
            }
          },
          "slicing": {
            "description": "Indicates that the element is sliced into a set of alternative definitions (i.e. in a structure definition, there are multiple different constraints on a single element in the base resource). Slicing can be used in any resource that has cardinality ..* on the base resource, or any resource with a choice of types. The set of slices is any elements that come after this in the element sequence that have the same path, until a shorter path occurs (the shorter path terminates the set).",
            "$ref": "#/definitions/ElementDefinition_Slicing"
          },
          "short": {
            "description": "A concise description of what this element means (e.g. for use in autogenerated summaries).",
            "type": "string"
          },
          "_short": {
            "description": "Extensions for short",
            "$ref": "#/definitions/Element"
          },
          "definition": {
            "description": "Provides a complete explanation of the meaning of the data element for human readability.  For the case of elements derived from existing elements (e.g. constraints), the definition SHALL be consistent with the base definition, but convey the meaning of the element in the particular context of use of the resource.",
            "type": "string"
          },
          "_definition": {
            "description": "Extensions for definition",
            "$ref": "#/definitions/Element"
          },
          "comment": {
            "description": "Explanatory notes and implementation guidance about the data element, including notes about how to use the data properly, exceptions to proper use, etc.",
            "type": "string"
          },
          "_comment": {
            "description": "Extensions for comment",
            "$ref": "#/definitions/Element"
          },
          "requirements": {
            "description": "This element is for traceability of why the element was created and why the constraints exist as they do. This may be used to point to source materials or specifications that drove the structure of this element.",
            "type": "string"
          },
          "_requirements": {
            "description": "Extensions for requirements",
            "$ref": "#/definitions/Element"
          },
          "alias": {
            "description": "Identifies additional names by which this element might also be known.",
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "_alias": {
            "description": "Extensions for alias",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Element"
            }
          },
          "min": {
            "description": "The minimum number of times this element SHALL appear in the instance.",
            "type": "number",
            "pattern": "[0]|([1-9][0-9]*)"
          },
          "_min": {
            "description": "Extensions for min",
            "$ref": "#/definitions/Element"
          },
          "max": {
            "description": "The maximum number of times this element is permitted to appear in the instance.",
            "type": "string"
          },
          "_max": {
            "description": "Extensions for max",
            "$ref": "#/definitions/Element"
          },
          "base": {
            "description": "Information about the base definition of the element, provided to make it unnecessary for tools to trace the deviation of the element through the derived and related profiles. This information is provided when the element definition is not the original definition of an element - i.g. either in a constraint on another type, or for elements from a super type in a snap shot.",
            "$ref": "#/definitions/ElementDefinition_Base"
          },
          "contentReference": {
            "description": "Identifies the identity of an element defined elsewhere in the profile whose content rules should be applied to the current element.",
            "type": "string"
          },
          "_contentReference": {
            "description": "Extensions for contentReference",
            "$ref": "#/definitions/Element"
          },
          "type": {
            "description": "The data type or resource that the value of this element is permitted to be.",
            "type": "array",
            "items": {
              "$ref": "#/definitions/ElementDefinition_Type"
            }
          },
          "defaultValueBoolean": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "type": "boolean"
          },
          "_defaultValueBoolean": {
            "description": "Extensions for defaultValueBoolean",
            "$ref": "#/definitions/Element"
          },
          "defaultValueInteger": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "pattern": "-?([0]|([1-9][0-9]*))",
            "type": "number"
          },
          "_defaultValueInteger": {
            "description": "Extensions for defaultValueInteger",
            "$ref": "#/definitions/Element"
          },
          "defaultValueDecimal": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "pattern": "-?([0]|([1-9][0-9]*))(\\.[0-9]+)?",
            "type": "number"
          },
          "_defaultValueDecimal": {
            "description": "Extensions for defaultValueDecimal",
            "$ref": "#/definitions/Element"
          },
          "defaultValueBase64Binary": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "type": "string"
          },
          "_defaultValueBase64Binary": {
            "description": "Extensions for defaultValueBase64Binary",
            "$ref": "#/definitions/Element"
          },
          "defaultValueInstant": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "type": "string"
          },
          "_defaultValueInstant": {
            "description": "Extensions for defaultValueInstant",
            "$ref": "#/definitions/Element"
          },
          "defaultValueString": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "type": "string"
          },
          "_defaultValueString": {
            "description": "Extensions for defaultValueString",
            "$ref": "#/definitions/Element"
          },
          "defaultValueUri": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "type": "string"
          },
          "_defaultValueUri": {
            "description": "Extensions for defaultValueUri",
            "$ref": "#/definitions/Element"
          },
          "defaultValueDate": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "pattern": "-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?",
            "type": "string"
          },
          "_defaultValueDate": {
            "description": "Extensions for defaultValueDate",
            "$ref": "#/definitions/Element"
          },
          "defaultValueDateTime": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "pattern": "-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?",
            "type": "string"
          },
          "_defaultValueDateTime": {
            "description": "Extensions for defaultValueDateTime",
            "$ref": "#/definitions/Element"
          },
          "defaultValueTime": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "pattern": "([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?",
            "type": "string"
          },
          "_defaultValueTime": {
            "description": "Extensions for defaultValueTime",
            "$ref": "#/definitions/Element"
          },
          "defaultValueCode": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "pattern": "[^\\s]+([\\s]?[^\\s]+)*",
            "type": "string"
          },
          "_defaultValueCode": {
            "description": "Extensions for defaultValueCode",
            "$ref": "#/definitions/Element"
          },
          "defaultValueOid": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "pattern": "urn:oid:(0|[1-9][0-9]*)(\\.(0|[1-9][0-9]*))*",
            "type": "string"
          },
          "_defaultValueOid": {
            "description": "Extensions for defaultValueOid",
            "$ref": "#/definitions/Element"
          },
          "defaultValueUuid": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "pattern": "urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}",
            "type": "string"
          },
          "_defaultValueUuid": {
            "description": "Extensions for defaultValueUuid",
            "$ref": "#/definitions/Element"
          },
          "defaultValueId": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "pattern": "[A-Za-z0-9\\-\\.]{1,64}",
            "type": "string"
          },
          "_defaultValueId": {
            "description": "Extensions for defaultValueId",
            "$ref": "#/definitions/Element"
          },
          "defaultValueUnsignedInt": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "pattern": "[0]|([1-9][0-9]*)",
            "type": "number"
          },
          "_defaultValueUnsignedInt": {
            "description": "Extensions for defaultValueUnsignedInt",
            "$ref": "#/definitions/Element"
          },
          "defaultValuePositiveInt": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "pattern": "[1-9][0-9]*",
            "type": "number"
          },
          "_defaultValuePositiveInt": {
            "description": "Extensions for defaultValuePositiveInt",
            "$ref": "#/definitions/Element"
          },
          "defaultValueMarkdown": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "type": "string"
          },
          "_defaultValueMarkdown": {
            "description": "Extensions for defaultValueMarkdown",
            "$ref": "#/definitions/Element"
          },
          "defaultValueElement": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/Element"
          },
          "defaultValueExtension": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/Extension"
          },
          "defaultValueBackboneElement": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/BackboneElement"
          },
          "defaultValueNarrative": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/Narrative"
          },
          "defaultValueAnnotation": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/Annotation"
          },
          "defaultValueAttachment": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/Attachment"
          },
          "defaultValueIdentifier": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/Identifier"
          },
          "defaultValueCodeableConcept": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/CodeableConcept"
          },
          "defaultValueCoding": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/Coding"
          },
          "defaultValueQuantity": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/Quantity"
          },
          "defaultValueDuration": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/Duration"
          },
          "defaultValueSimpleQuantity": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/Quantity"
          },
          "defaultValueDistance": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/Distance"
          },
          "defaultValueCount": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/Count"
          },
          "defaultValueMoney": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/Money"
          },
          "defaultValueAge": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/Age"
          },
          "defaultValueRange": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/Range"
          },
          "defaultValuePeriod": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/Period"
          },
          "defaultValueRatio": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/Ratio"
          },
          "defaultValueReference": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/Reference"
          },
          "defaultValueSampledData": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/SampledData"
          },
          "defaultValueSignature": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/Signature"
          },
          "defaultValueHumanName": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/HumanName"
          },
          "defaultValueAddress": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/Address"
          },
          "defaultValueContactPoint": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/ContactPoint"
          },
          "defaultValueTiming": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/Timing"
          },
          "defaultValueMeta": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/Meta"
          },
          "defaultValueElementDefinition": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/ElementDefinition"
          },
          "defaultValueContactDetail": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/ContactDetail"
          },
          "defaultValueContributor": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/Contributor"
          },
          "defaultValueDosage": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/Dosage"
          },
          "defaultValueRelatedArtifact": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/RelatedArtifact"
          },
          "defaultValueUsageContext": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/UsageContext"
          },
          "defaultValueDataRequirement": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/DataRequirement"
          },
          "defaultValueParameterDefinition": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/ParameterDefinition"
          },
          "defaultValueTriggerDefinition": {
            "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
            "$ref": "#/definitions/TriggerDefinition"
          },
          "meaningWhenMissing": {
            "description": "The Implicit meaning that is to be understood when this element is missing (e.g. 'when this element is missing, the period is ongoing'.",
            "type": "string"
          },
          "_meaningWhenMissing": {
            "description": "Extensions for meaningWhenMissing",
            "$ref": "#/definitions/Element"
          },
          "orderMeaning": {
            "description": "If present, indicates that the order of the repeating element has meaning and describes what that meaning is.  If absent, it means that the order of the element has no meaning.",
            "type": "string"
          },
          "_orderMeaning": {
            "description": "Extensions for orderMeaning",
            "$ref": "#/definitions/Element"
          },
          "fixedBoolean": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "type": "boolean"
          },
          "_fixedBoolean": {
            "description": "Extensions for fixedBoolean",
            "$ref": "#/definitions/Element"
          },
          "fixedInteger": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "pattern": "-?([0]|([1-9][0-9]*))",
            "type": "number"
          },
          "_fixedInteger": {
            "description": "Extensions for fixedInteger",
            "$ref": "#/definitions/Element"
          },
          "fixedDecimal": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "pattern": "-?([0]|([1-9][0-9]*))(\\.[0-9]+)?",
            "type": "number"
          },
          "_fixedDecimal": {
            "description": "Extensions for fixedDecimal",
            "$ref": "#/definitions/Element"
          },
          "fixedBase64Binary": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "type": "string"
          },
          "_fixedBase64Binary": {
            "description": "Extensions for fixedBase64Binary",
            "$ref": "#/definitions/Element"
          },
          "fixedInstant": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "type": "string"
          },
          "_fixedInstant": {
            "description": "Extensions for fixedInstant",
            "$ref": "#/definitions/Element"
          },
          "fixedString": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "type": "string"
          },
          "_fixedString": {
            "description": "Extensions for fixedString",
            "$ref": "#/definitions/Element"
          },
          "fixedUri": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "type": "string"
          },
          "_fixedUri": {
            "description": "Extensions for fixedUri",
            "$ref": "#/definitions/Element"
          },
          "fixedDate": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "pattern": "-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?",
            "type": "string"
          },
          "_fixedDate": {
            "description": "Extensions for fixedDate",
            "$ref": "#/definitions/Element"
          },
          "fixedDateTime": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "pattern": "-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?",
            "type": "string"
          },
          "_fixedDateTime": {
            "description": "Extensions for fixedDateTime",
            "$ref": "#/definitions/Element"
          },
          "fixedTime": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "pattern": "([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?",
            "type": "string"
          },
          "_fixedTime": {
            "description": "Extensions for fixedTime",
            "$ref": "#/definitions/Element"
          },
          "fixedCode": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "pattern": "[^\\s]+([\\s]?[^\\s]+)*",
            "type": "string"
          },
          "_fixedCode": {
            "description": "Extensions for fixedCode",
            "$ref": "#/definitions/Element"
          },
          "fixedOid": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "pattern": "urn:oid:(0|[1-9][0-9]*)(\\.(0|[1-9][0-9]*))*",
            "type": "string"
          },
          "_fixedOid": {
            "description": "Extensions for fixedOid",
            "$ref": "#/definitions/Element"
          },
          "fixedUuid": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "pattern": "urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}",
            "type": "string"
          },
          "_fixedUuid": {
            "description": "Extensions for fixedUuid",
            "$ref": "#/definitions/Element"
          },
          "fixedId": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "pattern": "[A-Za-z0-9\\-\\.]{1,64}",
            "type": "string"
          },
          "_fixedId": {
            "description": "Extensions for fixedId",
            "$ref": "#/definitions/Element"
          },
          "fixedUnsignedInt": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "pattern": "[0]|([1-9][0-9]*)",
            "type": "number"
          },
          "_fixedUnsignedInt": {
            "description": "Extensions for fixedUnsignedInt",
            "$ref": "#/definitions/Element"
          },
          "fixedPositiveInt": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "pattern": "[1-9][0-9]*",
            "type": "number"
          },
          "_fixedPositiveInt": {
            "description": "Extensions for fixedPositiveInt",
            "$ref": "#/definitions/Element"
          },
          "fixedMarkdown": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "type": "string"
          },
          "_fixedMarkdown": {
            "description": "Extensions for fixedMarkdown",
            "$ref": "#/definitions/Element"
          },
          "fixedElement": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/Element"
          },
          "fixedExtension": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/Extension"
          },
          "fixedBackboneElement": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/BackboneElement"
          },
          "fixedNarrative": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/Narrative"
          },
          "fixedAnnotation": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/Annotation"
          },
          "fixedAttachment": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/Attachment"
          },
          "fixedIdentifier": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/Identifier"
          },
          "fixedCodeableConcept": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/CodeableConcept"
          },
          "fixedCoding": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/Coding"
          },
          "fixedQuantity": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/Quantity"
          },
          "fixedDuration": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/Duration"
          },
          "fixedSimpleQuantity": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/Quantity"
          },
          "fixedDistance": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/Distance"
          },
          "fixedCount": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/Count"
          },
          "fixedMoney": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/Money"
          },
          "fixedAge": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/Age"
          },
          "fixedRange": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/Range"
          },
          "fixedPeriod": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/Period"
          },
          "fixedRatio": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/Ratio"
          },
          "fixedReference": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/Reference"
          },
          "fixedSampledData": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/SampledData"
          },
          "fixedSignature": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/Signature"
          },
          "fixedHumanName": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/HumanName"
          },
          "fixedAddress": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/Address"
          },
          "fixedContactPoint": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/ContactPoint"
          },
          "fixedTiming": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/Timing"
          },
          "fixedMeta": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/Meta"
          },
          "fixedElementDefinition": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/ElementDefinition"
          },
          "fixedContactDetail": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/ContactDetail"
          },
          "fixedContributor": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/Contributor"
          },
          "fixedDosage": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/Dosage"
          },
          "fixedRelatedArtifact": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/RelatedArtifact"
          },
          "fixedUsageContext": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/UsageContext"
          },
          "fixedDataRequirement": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/DataRequirement"
          },
          "fixedParameterDefinition": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/ParameterDefinition"
          },
          "fixedTriggerDefinition": {
            "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
            "$ref": "#/definitions/TriggerDefinition"
          },
          "patternBoolean": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "type": "boolean"
          },
          "_patternBoolean": {
            "description": "Extensions for patternBoolean",
            "$ref": "#/definitions/Element"
          },
          "patternInteger": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "pattern": "-?([0]|([1-9][0-9]*))",
            "type": "number"
          },
          "_patternInteger": {
            "description": "Extensions for patternInteger",
            "$ref": "#/definitions/Element"
          },
          "patternDecimal": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "pattern": "-?([0]|([1-9][0-9]*))(\\.[0-9]+)?",
            "type": "number"
          },
          "_patternDecimal": {
            "description": "Extensions for patternDecimal",
            "$ref": "#/definitions/Element"
          },
          "patternBase64Binary": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "type": "string"
          },
          "_patternBase64Binary": {
            "description": "Extensions for patternBase64Binary",
            "$ref": "#/definitions/Element"
          },
          "patternInstant": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "type": "string"
          },
          "_patternInstant": {
            "description": "Extensions for patternInstant",
            "$ref": "#/definitions/Element"
          },
          "patternString": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "type": "string"
          },
          "_patternString": {
            "description": "Extensions for patternString",
            "$ref": "#/definitions/Element"
          },
          "patternUri": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "type": "string"
          },
          "_patternUri": {
            "description": "Extensions for patternUri",
            "$ref": "#/definitions/Element"
          },
          "patternDate": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "pattern": "-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?",
            "type": "string"
          },
          "_patternDate": {
            "description": "Extensions for patternDate",
            "$ref": "#/definitions/Element"
          },
          "patternDateTime": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "pattern": "-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?",
            "type": "string"
          },
          "_patternDateTime": {
            "description": "Extensions for patternDateTime",
            "$ref": "#/definitions/Element"
          },
          "patternTime": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "pattern": "([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?",
            "type": "string"
          },
          "_patternTime": {
            "description": "Extensions for patternTime",
            "$ref": "#/definitions/Element"
          },
          "patternCode": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "pattern": "[^\\s]+([\\s]?[^\\s]+)*",
            "type": "string"
          },
          "_patternCode": {
            "description": "Extensions for patternCode",
            "$ref": "#/definitions/Element"
          },
          "patternOid": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "pattern": "urn:oid:(0|[1-9][0-9]*)(\\.(0|[1-9][0-9]*))*",
            "type": "string"
          },
          "_patternOid": {
            "description": "Extensions for patternOid",
            "$ref": "#/definitions/Element"
          },
          "patternUuid": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "pattern": "urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}",
            "type": "string"
          },
          "_patternUuid": {
            "description": "Extensions for patternUuid",
            "$ref": "#/definitions/Element"
          },
          "patternId": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "pattern": "[A-Za-z0-9\\-\\.]{1,64}",
            "type": "string"
          },
          "_patternId": {
            "description": "Extensions for patternId",
            "$ref": "#/definitions/Element"
          },
          "patternUnsignedInt": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "pattern": "[0]|([1-9][0-9]*)",
            "type": "number"
          },
          "_patternUnsignedInt": {
            "description": "Extensions for patternUnsignedInt",
            "$ref": "#/definitions/Element"
          },
          "patternPositiveInt": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "pattern": "[1-9][0-9]*",
            "type": "number"
          },
          "_patternPositiveInt": {
            "description": "Extensions for patternPositiveInt",
            "$ref": "#/definitions/Element"
          },
          "patternMarkdown": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "type": "string"
          },
          "_patternMarkdown": {
            "description": "Extensions for patternMarkdown",
            "$ref": "#/definitions/Element"
          },
          "patternElement": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/Element"
          },
          "patternExtension": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/Extension"
          },
          "patternBackboneElement": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/BackboneElement"
          },
          "patternNarrative": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/Narrative"
          },
          "patternAnnotation": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/Annotation"
          },
          "patternAttachment": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/Attachment"
          },
          "patternIdentifier": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/Identifier"
          },
          "patternCodeableConcept": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/CodeableConcept"
          },
          "patternCoding": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/Coding"
          },
          "patternQuantity": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/Quantity"
          },
          "patternDuration": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/Duration"
          },
          "patternSimpleQuantity": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/Quantity"
          },
          "patternDistance": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/Distance"
          },
          "patternCount": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/Count"
          },
          "patternMoney": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/Money"
          },
          "patternAge": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/Age"
          },
          "patternRange": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/Range"
          },
          "patternPeriod": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/Period"
          },
          "patternRatio": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/Ratio"
          },
          "patternReference": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/Reference"
          },
          "patternSampledData": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/SampledData"
          },
          "patternSignature": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/Signature"
          },
          "patternHumanName": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/HumanName"
          },
          "patternAddress": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/Address"
          },
          "patternContactPoint": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/ContactPoint"
          },
          "patternTiming": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/Timing"
          },
          "patternMeta": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/Meta"
          },
          "patternElementDefinition": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/ElementDefinition"
          },
          "patternContactDetail": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/ContactDetail"
          },
          "patternContributor": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/Contributor"
          },
          "patternDosage": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/Dosage"
          },
          "patternRelatedArtifact": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/RelatedArtifact"
          },
          "patternUsageContext": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/UsageContext"
          },
          "patternDataRequirement": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/DataRequirement"
          },
          "patternParameterDefinition": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/ParameterDefinition"
          },
          "patternTriggerDefinition": {
            "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).",
            "$ref": "#/definitions/TriggerDefinition"
          },
          "example": {
            "description": "A sample value for this element demonstrating the type of information that would typically be found in the element.",
            "type": "array",
            "items": {
              "$ref": "#/definitions/ElementDefinition_Example"
            }
          },
          "minValueDate": {
            "description": "The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
            "pattern": "-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?",
            "type": "string"
          },
          "_minValueDate": {
            "description": "Extensions for minValueDate",
            "$ref": "#/definitions/Element"
          },
          "minValueDateTime": {
            "description": "The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
            "pattern": "-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?",
            "type": "string"
          },
          "_minValueDateTime": {
            "description": "Extensions for minValueDateTime",
            "$ref": "#/definitions/Element"
          },
          "minValueInstant": {
            "description": "The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
            "type": "string"
          },
          "_minValueInstant": {
            "description": "Extensions for minValueInstant",
            "$ref": "#/definitions/Element"
          },
          "minValueTime": {
            "description": "The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
            "pattern": "([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?",
            "type": "string"
          },
          "_minValueTime": {
            "description": "Extensions for minValueTime",
            "$ref": "#/definitions/Element"
          },
          "minValueDecimal": {
            "description": "The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
            "pattern": "-?([0]|([1-9][0-9]*))(\\.[0-9]+)?",
            "type": "number"
          },
          "_minValueDecimal": {
            "description": "Extensions for minValueDecimal",
            "$ref": "#/definitions/Element"
          },
          "minValueInteger": {
            "description": "The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
            "pattern": "-?([0]|([1-9][0-9]*))",
            "type": "number"
          },
          "_minValueInteger": {
            "description": "Extensions for minValueInteger",
            "$ref": "#/definitions/Element"
          },
          "minValuePositiveInt": {
            "description": "The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
            "pattern": "[1-9][0-9]*",
            "type": "number"
          },
          "_minValuePositiveInt": {
            "description": "Extensions for minValuePositiveInt",
            "$ref": "#/definitions/Element"
          },
          "minValueUnsignedInt": {
            "description": "The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
            "pattern": "[0]|([1-9][0-9]*)",
            "type": "number"
          },
          "_minValueUnsignedInt": {
            "description": "Extensions for minValueUnsignedInt",
            "$ref": "#/definitions/Element"
          },
          "minValueQuantity": {
            "description": "The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
            "$ref": "#/definitions/Quantity"
          },
          "maxValueDate": {
            "description": "The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
            "pattern": "-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?",
            "type": "string"
          },
          "_maxValueDate": {
            "description": "Extensions for maxValueDate",
            "$ref": "#/definitions/Element"
          },
          "maxValueDateTime": {
            "description": "The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
            "pattern": "-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?",
            "type": "string"
          },
          "_maxValueDateTime": {
            "description": "Extensions for maxValueDateTime",
            "$ref": "#/definitions/Element"
          },
          "maxValueInstant": {
            "description": "The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
            "type": "string"
          },
          "_maxValueInstant": {
            "description": "Extensions for maxValueInstant",
            "$ref": "#/definitions/Element"
          },
          "maxValueTime": {
            "description": "The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
            "pattern": "([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?",
            "type": "string"
          },
          "_maxValueTime": {
            "description": "Extensions for maxValueTime",
            "$ref": "#/definitions/Element"
          },
          "maxValueDecimal": {
            "description": "The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
            "pattern": "-?([0]|([1-9][0-9]*))(\\.[0-9]+)?",
            "type": "number"
          },
          "_maxValueDecimal": {
            "description": "Extensions for maxValueDecimal",
            "$ref": "#/definitions/Element"
          },
          "maxValueInteger": {
            "description": "The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
            "pattern": "-?([0]|([1-9][0-9]*))",
            "type": "number"
          },
          "_maxValueInteger": {
            "description": "Extensions for maxValueInteger",
            "$ref": "#/definitions/Element"
          },
          "maxValuePositiveInt": {
            "description": "The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
            "pattern": "[1-9][0-9]*",
            "type": "number"
          },
          "_maxValuePositiveInt": {
            "description": "Extensions for maxValuePositiveInt",
            "$ref": "#/definitions/Element"
          },
          "maxValueUnsignedInt": {
            "description": "The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
            "pattern": "[0]|([1-9][0-9]*)",
            "type": "number"
          },
          "_maxValueUnsignedInt": {
            "description": "Extensions for maxValueUnsignedInt",
            "$ref": "#/definitions/Element"
          },
          "maxValueQuantity": {
            "description": "The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
            "$ref": "#/definitions/Quantity"
          },
          "maxLength": {
            "description": "Indicates the maximum length in characters that is permitted to be present in conformant instances and which is expected to be supported by conformant consumers that support the element.",
            "type": "number",
            "pattern": "-?([0]|([1-9][0-9]*))"
          },
          "_maxLength": {
            "description": "Extensions for maxLength",
            "$ref": "#/definitions/Element"
          },
          "condition": {
            "description": "A reference to an invariant that may make additional statements about the cardinality or value in the instance.",
            "type": "array",
            "items": {
              "type": "string",
              "pattern": "[A-Za-z0-9\\-\\.]{1,64}"
            }
          },
          "_condition": {
            "description": "Extensions for condition",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Element"
            }
          },
          "constraint": {
            "description": "Formal constraints such as co-occurrence and other constraints that can be computationally evaluated within the context of the instance.",
            "type": "array",
            "items": {
              "$ref": "#/definitions/ElementDefinition_Constraint"
            }
          },
          "mustSupport": {
            "description": "If true, implementations that produce or consume resources SHALL provide \"support\" for the element in some meaningful way.  If false, the element may be ignored and not supported.",
            "type": "boolean"
          },
          "_mustSupport": {
            "description": "Extensions for mustSupport",
            "$ref": "#/definitions/Element"
          },
          "isModifier": {
            "description": "If true, the value of this element affects the interpretation of the element or resource that contains it, and the value of the element cannot be ignored. Typically, this is used for status, negation and qualification codes. The effect of this is that the element cannot be ignored by systems: they SHALL either recognize the element and process it, and/or a pre-determination has been made that it is not relevant to their particular system.",
            "type": "boolean"
          },
          "_isModifier": {
            "description": "Extensions for isModifier",
            "$ref": "#/definitions/Element"
          },
          "isSummary": {
            "description": "Whether the element should be included if a client requests a search with the parameter _summary=true.",
            "type": "boolean"
          },
          "_isSummary": {
            "description": "Extensions for isSummary",
            "$ref": "#/definitions/Element"
          },
          "binding": {
            "description": "Binds to a value set if this element is coded (code, Coding, CodeableConcept, Quantity), or the data types (string, uri).",
            "$ref": "#/definitions/ElementDefinition_Binding"
          },
          "mapping": {
            "description": "Identifies a concept from an external specification that roughly corresponds to this element.",
            "type": "array",
            "items": {
              "$ref": "#/definitions/ElementDefinition_Mapping"
            }
          }
        }
      }]
    },
    "ElementDefinition_Slicing": {
      "allOf": [{
        "$ref": "#/definitions/BackboneElement"
      }, {
        "description": "Captures constraints on each element within the resource, profile, or extension.",
        "properties": {
          "discriminator": {
            "description": "Designates which child elements are used to discriminate between the slices when processing an instance. If one or more discriminators are provided, the value of the child elements in the instance data SHALL completely distinguish which slice the element in the resource matches based on the allowed values for those elements in each of the slices.",
            "type": "array",
            "items": {
              "$ref": "#/definitions/ElementDefinition_Discriminator"
            }
          },
          "description": {
            "description": "A human-readable text description of how the slicing works. If there is no discriminator, this is required to be present to provide whatever information is possible about how the slices can be differentiated.",
            "type": "string"
          },
          "_description": {
            "description": "Extensions for description",
            "$ref": "#/definitions/Element"
          },
          "ordered": {
            "description": "If the matching elements have to occur in the same order as defined in the profile.",
            "type": "boolean"
          },
          "_ordered": {
            "description": "Extensions for ordered",
            "$ref": "#/definitions/Element"
          },
          "rules": {
            "description": "Whether additional slices are allowed or not. When the slices are ordered, profile authors can also say that additional slices are only allowed at the end.",
            "enum": ["closed", "open", "openAtEnd"],
            "type": "string"
          },
          "_rules": {
            "description": "Extensions for rules",
            "$ref": "#/definitions/Element"
          }
        }
      }]
    },
    "ElementDefinition_Discriminator": {
      "allOf": [{
        "$ref": "#/definitions/BackboneElement"
      }, {
        "description": "Captures constraints on each element within the resource, profile, or extension.",
        "properties": {
          "type": {
            "description": "How the element value is interpreted when discrimination is evaluated.",
            "enum": ["value", "exists", "pattern", "type", "profile"],
            "type": "string"
          },
          "_type": {
            "description": "Extensions for type",
            "$ref": "#/definitions/Element"
          },
          "path": {
            "description": "A FHIRPath expression, using a restricted subset of FHIRPath, that is used to identify the element on which discrimination is based.",
            "type": "string"
          },
          "_path": {
            "description": "Extensions for path",
            "$ref": "#/definitions/Element"
          }
        }
      }]
    },
    "ElementDefinition_Base": {
      "allOf": [{
        "$ref": "#/definitions/BackboneElement"
      }, {
        "description": "Captures constraints on each element within the resource, profile, or extension.",
        "properties": {
          "path": {
            "description": "The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [[[StructureDefinition]]] without a StructureDefinition.base.",
            "type": "string"
          },
          "_path": {
            "description": "Extensions for path",
            "$ref": "#/definitions/Element"
          },
          "min": {
            "description": "Minimum cardinality of the base element identified by the path.",
            "type": "number",
            "pattern": "[0]|([1-9][0-9]*)"
          },
          "_min": {
            "description": "Extensions for min",
            "$ref": "#/definitions/Element"
          },
          "max": {
            "description": "Maximum cardinality of the base element identified by the path.",
            "type": "string"
          },
          "_max": {
            "description": "Extensions for max",
            "$ref": "#/definitions/Element"
          }
        }
      }]
    },
    "ElementDefinition_Type": {
      "allOf": [{
        "$ref": "#/definitions/BackboneElement"
      }, {
        "description": "Captures constraints on each element within the resource, profile, or extension.",
        "properties": {
          "code": {
            "description": "URL of Data type or Resource that is a(or the) type used for this element. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition e.g. \"string\" is a reference to http://hl7.org/fhir/StructureDefinition/string. Absolute URLs are only allowed in logical models.",
            "type": "string"
          },
          "_code": {
            "description": "Extensions for code",
            "$ref": "#/definitions/Element"
          },
          "profile": {
            "description": "Identifies a profile structure or implementation Guide that SHALL hold for the datatype this element refers to. Can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.",
            "type": "string"
          },
          "_profile": {
            "description": "Extensions for profile",
            "$ref": "#/definitions/Element"
          },
          "targetProfile": {
            "description": "Identifies a profile structure or implementation Guide that SHALL hold for the target of the reference this element refers to. Can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.",
            "type": "string"
          },
          "_targetProfile": {
            "description": "Extensions for targetProfile",
            "$ref": "#/definitions/Element"
          },
          "aggregation": {
            "description": "If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.",
            "enum": ["contained", "referenced", "bundled"],
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "_aggregation": {
            "description": "Extensions for aggregation",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Element"
            }
          },
          "versioning": {
            "description": "Whether this reference needs to be version specific or version independent, or whether either can be used.",
            "enum": ["either", "independent", "specific"],
            "type": "string"
          },
          "_versioning": {
            "description": "Extensions for versioning",
            "$ref": "#/definitions/Element"
          }
        }
      }]
    },
    "ElementDefinition_Example": {
      "allOf": [{
        "$ref": "#/definitions/BackboneElement"
      }, {
        "description": "Captures constraints on each element within the resource, profile, or extension.",
        "properties": {
          "label": {
            "description": "Describes the purpose of this example amoung the set of examples.",
            "type": "string"
          },
          "_label": {
            "description": "Extensions for label",
            "$ref": "#/definitions/Element"
          },
          "valueBoolean": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "type": "boolean"
          },
          "_valueBoolean": {
            "description": "Extensions for valueBoolean",
            "$ref": "#/definitions/Element"
          },
          "valueInteger": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "pattern": "-?([0]|([1-9][0-9]*))",
            "type": "number"
          },
          "_valueInteger": {
            "description": "Extensions for valueInteger",
            "$ref": "#/definitions/Element"
          },
          "valueDecimal": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "pattern": "-?([0]|([1-9][0-9]*))(\\.[0-9]+)?",
            "type": "number"
          },
          "_valueDecimal": {
            "description": "Extensions for valueDecimal",
            "$ref": "#/definitions/Element"
          },
          "valueBase64Binary": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "type": "string"
          },
          "_valueBase64Binary": {
            "description": "Extensions for valueBase64Binary",
            "$ref": "#/definitions/Element"
          },
          "valueInstant": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "type": "string"
          },
          "_valueInstant": {
            "description": "Extensions for valueInstant",
            "$ref": "#/definitions/Element"
          },
          "valueString": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "type": "string"
          },
          "_valueString": {
            "description": "Extensions for valueString",
            "$ref": "#/definitions/Element"
          },
          "valueUri": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "type": "string"
          },
          "_valueUri": {
            "description": "Extensions for valueUri",
            "$ref": "#/definitions/Element"
          },
          "valueDate": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "pattern": "-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?",
            "type": "string"
          },
          "_valueDate": {
            "description": "Extensions for valueDate",
            "$ref": "#/definitions/Element"
          },
          "valueDateTime": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "pattern": "-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?",
            "type": "string"
          },
          "_valueDateTime": {
            "description": "Extensions for valueDateTime",
            "$ref": "#/definitions/Element"
          },
          "valueTime": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "pattern": "([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?",
            "type": "string"
          },
          "_valueTime": {
            "description": "Extensions for valueTime",
            "$ref": "#/definitions/Element"
          },
          "valueCode": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "pattern": "[^\\s]+([\\s]?[^\\s]+)*",
            "type": "string"
          },
          "_valueCode": {
            "description": "Extensions for valueCode",
            "$ref": "#/definitions/Element"
          },
          "valueOid": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "pattern": "urn:oid:(0|[1-9][0-9]*)(\\.(0|[1-9][0-9]*))*",
            "type": "string"
          },
          "_valueOid": {
            "description": "Extensions for valueOid",
            "$ref": "#/definitions/Element"
          },
          "valueUuid": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "pattern": "urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}",
            "type": "string"
          },
          "_valueUuid": {
            "description": "Extensions for valueUuid",
            "$ref": "#/definitions/Element"
          },
          "valueId": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "pattern": "[A-Za-z0-9\\-\\.]{1,64}",
            "type": "string"
          },
          "_valueId": {
            "description": "Extensions for valueId",
            "$ref": "#/definitions/Element"
          },
          "valueUnsignedInt": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "pattern": "[0]|([1-9][0-9]*)",
            "type": "number"
          },
          "_valueUnsignedInt": {
            "description": "Extensions for valueUnsignedInt",
            "$ref": "#/definitions/Element"
          },
          "valuePositiveInt": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "pattern": "[1-9][0-9]*",
            "type": "number"
          },
          "_valuePositiveInt": {
            "description": "Extensions for valuePositiveInt",
            "$ref": "#/definitions/Element"
          },
          "valueMarkdown": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "type": "string"
          },
          "_valueMarkdown": {
            "description": "Extensions for valueMarkdown",
            "$ref": "#/definitions/Element"
          },
          "valueElement": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/Element"
          },
          "valueExtension": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/Extension"
          },
          "valueBackboneElement": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/BackboneElement"
          },
          "valueNarrative": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/Narrative"
          },
          "valueAnnotation": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/Annotation"
          },
          "valueAttachment": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/Attachment"
          },
          "valueIdentifier": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/Identifier"
          },
          "valueCodeableConcept": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/CodeableConcept"
          },
          "valueCoding": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/Coding"
          },
          "valueQuantity": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/Quantity"
          },
          "valueDuration": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/Duration"
          },
          "valueSimpleQuantity": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/Quantity"
          },
          "valueDistance": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/Distance"
          },
          "valueCount": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/Count"
          },
          "valueMoney": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/Money"
          },
          "valueAge": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/Age"
          },
          "valueRange": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/Range"
          },
          "valuePeriod": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/Period"
          },
          "valueRatio": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/Ratio"
          },
          "valueReference": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/Reference"
          },
          "valueSampledData": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/SampledData"
          },
          "valueSignature": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/Signature"
          },
          "valueHumanName": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/HumanName"
          },
          "valueAddress": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/Address"
          },
          "valueContactPoint": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/ContactPoint"
          },
          "valueTiming": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/Timing"
          },
          "valueMeta": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/Meta"
          },
          "valueElementDefinition": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/ElementDefinition"
          },
          "valueContactDetail": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/ContactDetail"
          },
          "valueContributor": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/Contributor"
          },
          "valueDosage": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/Dosage"
          },
          "valueRelatedArtifact": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/RelatedArtifact"
          },
          "valueUsageContext": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/UsageContext"
          },
          "valueDataRequirement": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/DataRequirement"
          },
          "valueParameterDefinition": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/ParameterDefinition"
          },
          "valueTriggerDefinition": {
            "description": "The actual value for the element, which must be one of the types allowed for this element.",
            "$ref": "#/definitions/TriggerDefinition"
          }
        }
      }]
    },
    "ElementDefinition_Constraint": {
      "allOf": [{
        "$ref": "#/definitions/BackboneElement"
      }, {
        "description": "Captures constraints on each element within the resource, profile, or extension.",
        "properties": {
          "key": {
            "description": "Allows identification of which elements have their cardinalities impacted by the constraint.  Will not be referenced for constraints that do not affect cardinality.",
            "type": "string",
            "pattern": "[A-Za-z0-9\\-\\.]{1,64}"
          },
          "_key": {
            "description": "Extensions for key",
            "$ref": "#/definitions/Element"
          },
          "requirements": {
            "description": "Description of why this constraint is necessary or appropriate.",
            "type": "string"
          },
          "_requirements": {
            "description": "Extensions for requirements",
            "$ref": "#/definitions/Element"
          },
          "severity": {
            "description": "Identifies the impact constraint violation has on the conformance of the instance.",
            "enum": ["error", "warning"],
            "type": "string"
          },
          "_severity": {
            "description": "Extensions for severity",
            "$ref": "#/definitions/Element"
          },
          "human": {
            "description": "Text that can be used to describe the constraint in messages identifying that the constraint has been violated.",
            "type": "string"
          },
          "_human": {
            "description": "Extensions for human",
            "$ref": "#/definitions/Element"
          },
          "expression": {
            "description": "A [FHIRPath](http://hl7.org/fluentpath) expression of constraint that can be executed to see if this constraint is met.",
            "type": "string"
          },
          "_expression": {
            "description": "Extensions for expression",
            "$ref": "#/definitions/Element"
          },
          "xpath": {
            "description": "An XPath expression of constraint that can be executed to see if this constraint is met.",
            "type": "string"
          },
          "_xpath": {
            "description": "Extensions for xpath",
            "$ref": "#/definitions/Element"
          },
          "source": {
            "description": "A reference to the original source of the constraint, for traceability purposes.",
            "type": "string"
          },
          "_source": {
            "description": "Extensions for source",
            "$ref": "#/definitions/Element"
          }
        }
      }]
    },
    "ElementDefinition_Binding": {
      "allOf": [{
        "$ref": "#/definitions/BackboneElement"
      }, {
        "description": "Captures constraints on each element within the resource, profile, or extension.",
        "properties": {
          "strength": {
            "description": "Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.",
            "enum": ["required", "extensible", "preferred", "example"],
            "type": "string"
          },
          "_strength": {
            "description": "Extensions for strength",
            "$ref": "#/definitions/Element"
          },
          "description": {
            "description": "Describes the intended use of this particular set of codes.",
            "type": "string"
          },
          "_description": {
            "description": "Extensions for description",
            "$ref": "#/definitions/Element"
          },
          "valueSetUri": {
            "description": "Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used. If the binding refers to an explicit value set - the normal case - then use a Reference(ValueSet) preferably containing the canonical URL for the value set. If the reference is to an implicit value set - usually, an IETF RFC that defines a grammar, such as mime types - then use a uri.",
            "type": "string"
          },
          "_valueSetUri": {
            "description": "Extensions for valueSetUri",
            "$ref": "#/definitions/Element"
          },
          "valueSetReference": {
            "description": "Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used. If the binding refers to an explicit value set - the normal case - then use a Reference(ValueSet) preferably containing the canonical URL for the value set. If the reference is to an implicit value set - usually, an IETF RFC that defines a grammar, such as mime types - then use a uri.",
            "$ref": "#/definitions/Reference"
          }
        }
      }]
    },
    "ElementDefinition_Mapping": {
      "allOf": [{
        "$ref": "#/definitions/BackboneElement"
      }, {
        "description": "Captures constraints on each element within the resource, profile, or extension.",
        "properties": {
          "identity": {
            "description": "An internal reference to the definition of a mapping.",
            "type": "string",
            "pattern": "[A-Za-z0-9\\-\\.]{1,64}"
          },
          "_identity": {
            "description": "Extensions for identity",
            "$ref": "#/definitions/Element"
          },
          "language": {
            "description": "Identifies the computable language in which mapping.map is expressed.",
            "type": "string",
            "pattern": "[^\\s]+([\\s]?[^\\s]+)*"
          },
          "_language": {
            "description": "Extensions for language",
            "$ref": "#/definitions/Element"
          },
          "map": {
            "description": "Expresses what part of the target specification corresponds to this element.",
            "type": "string"
          },
          "_map": {
            "description": "Extensions for map",
            "$ref": "#/definitions/Element"
          },
          "comment": {
            "description": "Comments that provide information about the mapping or its use.",
            "type": "string"
          },
          "_comment": {
            "description": "Extensions for comment",
            "$ref": "#/definitions/Element"
          }
        }
      }]
    },
    "ContactDetail": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "Specifies contact information for a person or organization.",
        "properties": {
          "name": {
            "description": "The name of an individual to contact.",
            "type": "string"
          },
          "_name": {
            "description": "Extensions for name",
            "$ref": "#/definitions/Element"
          },
          "telecom": {
            "description": "The contact details for the individual (if a name was provided) or the organization.",
            "type": "array",
            "items": {
              "$ref": "#/definitions/ContactPoint"
            }
          }
        }
      }]
    },
    "Contributor": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.",
        "properties": {
          "type": {
            "description": "The type of contributor.",
            "enum": ["author", "editor", "reviewer", "endorser"],
            "type": "string"
          },
          "_type": {
            "description": "Extensions for type",
            "$ref": "#/definitions/Element"
          },
          "name": {
            "description": "The name of the individual or organization responsible for the contribution.",
            "type": "string"
          },
          "_name": {
            "description": "Extensions for name",
            "$ref": "#/definitions/Element"
          },
          "contact": {
            "description": "Contact details to assist a user in finding and communicating with the contributor.",
            "type": "array",
            "items": {
              "$ref": "#/definitions/ContactDetail"
            }
          }
        }
      }]
    },
    "Dosage": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "Indicates how the medication is/was taken or should be taken by the patient.",
        "properties": {
          "sequence": {
            "description": "Indicates the order in which the dosage instructions should be applied or interpreted.",
            "type": "number",
            "pattern": "-?([0]|([1-9][0-9]*))"
          },
          "_sequence": {
            "description": "Extensions for sequence",
            "$ref": "#/definitions/Element"
          },
          "text": {
            "description": "Free text dosage instructions e.g. SIG.",
            "type": "string"
          },
          "_text": {
            "description": "Extensions for text",
            "$ref": "#/definitions/Element"
          },
          "additionalInstruction": {
            "description": "Supplemental instruction - e.g. \"with meals\".",
            "type": "array",
            "items": {
              "$ref": "#/definitions/CodeableConcept"
            }
          },
          "patientInstruction": {
            "description": "Instructions in terms that are understood by the patient or consumer.",
            "type": "string"
          },
          "_patientInstruction": {
            "description": "Extensions for patientInstruction",
            "$ref": "#/definitions/Element"
          },
          "timing": {
            "description": "When medication should be administered.",
            "$ref": "#/definitions/Timing"
          },
          "asNeededBoolean": {
            "description": "Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).",
            "type": "boolean"
          },
          "_asNeededBoolean": {
            "description": "Extensions for asNeededBoolean",
            "$ref": "#/definitions/Element"
          },
          "asNeededCodeableConcept": {
            "description": "Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).",
            "$ref": "#/definitions/CodeableConcept"
          },
          "site": {
            "description": "Body site to administer to.",
            "$ref": "#/definitions/CodeableConcept"
          },
          "route": {
            "description": "How drug should enter body.",
            "$ref": "#/definitions/CodeableConcept"
          },
          "method": {
            "description": "Technique for administering medication.",
            "$ref": "#/definitions/CodeableConcept"
          },
          "doseRange": {
            "description": "Amount of medication per dose.",
            "$ref": "#/definitions/Range"
          },
          "doseSimpleQuantity": {
            "description": "Amount of medication per dose.",
            "$ref": "#/definitions/Quantity"
          },
          "maxDosePerPeriod": {
            "description": "Upper limit on medication per unit of time.",
            "$ref": "#/definitions/Ratio"
          },
          "maxDosePerAdministration": {
            "description": "Upper limit on medication per administration.",
            "$ref": "#/definitions/Quantity"
          },
          "maxDosePerLifetime": {
            "description": "Upper limit on medication per lifetime of the patient.",
            "$ref": "#/definitions/Quantity"
          },
          "rateRatio": {
            "description": "Amount of medication per unit of time.",
            "$ref": "#/definitions/Ratio"
          },
          "rateRange": {
            "description": "Amount of medication per unit of time.",
            "$ref": "#/definitions/Range"
          },
          "rateSimpleQuantity": {
            "description": "Amount of medication per unit of time.",
            "$ref": "#/definitions/Quantity"
          }
        }
      }]
    },
    "RelatedArtifact": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "Related artifacts such as additional documentation, justification, or bibliographic references.",
        "properties": {
          "type": {
            "description": "The type of relationship to the related artifact.",
            "enum": ["documentation", "justification", "citation", "predecessor", "successor", "derived-from", "depends-on", "composed-of"],
            "type": "string"
          },
          "_type": {
            "description": "Extensions for type",
            "$ref": "#/definitions/Element"
          },
          "display": {
            "description": "A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.",
            "type": "string"
          },
          "_display": {
            "description": "Extensions for display",
            "$ref": "#/definitions/Element"
          },
          "citation": {
            "description": "A bibliographic citation for the related artifact. This text SHOULD be formatted according to an accepted citation format.",
            "type": "string"
          },
          "_citation": {
            "description": "Extensions for citation",
            "$ref": "#/definitions/Element"
          },
          "url": {
            "description": "A url for the artifact that can be followed to access the actual content.",
            "type": "string"
          },
          "_url": {
            "description": "Extensions for url",
            "$ref": "#/definitions/Element"
          },
          "document": {
            "description": "The document being referenced, represented as an attachment. This is exclusive with the resource element.",
            "$ref": "#/definitions/Attachment"
          },
          "resource": {
            "description": "The related resource, such as a library, value set, profile, or other knowledge resource.",
            "$ref": "#/definitions/Reference"
          }
        }
      }]
    },
    "UsageContext": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "Specifies clinical/business/etc metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care).",
        "properties": {
          "code": {
            "description": "A code that identifies the type of context being specified by this usage context.",
            "$ref": "#/definitions/Coding"
          },
          "valueCodeableConcept": {
            "description": "A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.",
            "$ref": "#/definitions/CodeableConcept"
          },
          "valueQuantity": {
            "description": "A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.",
            "$ref": "#/definitions/Quantity"
          },
          "valueRange": {
            "description": "A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.",
            "$ref": "#/definitions/Range"
          }
        },
        "required": ["code"]
      }]
    },
    "DataRequirement": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.",
        "properties": {
          "type": {
            "description": "The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.",
            "type": "string",
            "pattern": "[^\\s]+([\\s]?[^\\s]+)*"
          },
          "_type": {
            "description": "Extensions for type",
            "$ref": "#/definitions/Element"
          },
          "profile": {
            "description": "The profile of the required data, specified as the uri of the profile definition.",
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "_profile": {
            "description": "Extensions for profile",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Element"
            }
          },
          "mustSupport": {
            "description": "Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available. Note that the value for this element can be a path to allow references to nested elements. In that case, all the elements along the path must be supported.",
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "_mustSupport": {
            "description": "Extensions for mustSupport",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Element"
            }
          },
          "codeFilter": {
            "description": "Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data.",
            "type": "array",
            "items": {
              "$ref": "#/definitions/DataRequirement_CodeFilter"
            }
          },
          "dateFilter": {
            "description": "Date filters specify additional constraints on the data in terms of the applicable date range for specific elements.",
            "type": "array",
            "items": {
              "$ref": "#/definitions/DataRequirement_DateFilter"
            }
          }
        }
      }]
    },
    "DataRequirement_CodeFilter": {
      "allOf": [{
        "$ref": "#/definitions/BackboneElement"
      }, {
        "description": "Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.",
        "properties": {
          "path": {
            "description": "The code-valued attribute of the filter. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant. The path must resolve to an element of type code, Coding, or CodeableConcept.",
            "type": "string"
          },
          "_path": {
            "description": "Extensions for path",
            "$ref": "#/definitions/Element"
          },
          "valueSetString": {
            "description": "The valueset for the code filter. The valueSet and value elements are exclusive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.",
            "type": "string"
          },
          "_valueSetString": {
            "description": "Extensions for valueSetString",
            "$ref": "#/definitions/Element"
          },
          "valueSetReference": {
            "description": "The valueset for the code filter. The valueSet and value elements are exclusive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.",
            "$ref": "#/definitions/Reference"
          },
          "valueCode": {
            "description": "The codes for the code filter. Only one of valueSet, valueCode, valueCoding, or valueCodeableConcept may be specified. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes.",
            "type": "array",
            "items": {
              "type": "string",
              "pattern": "[^\\s]+([\\s]?[^\\s]+)*"
            }
          },
          "_valueCode": {
            "description": "Extensions for valueCode",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Element"
            }
          },
          "valueCoding": {
            "description": "The Codings for the code filter. Only one of valueSet, valueCode, valueConding, or valueCodeableConcept may be specified. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified Codings.",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Coding"
            }
          },
          "valueCodeableConcept": {
            "description": "The CodeableConcepts for the code filter. Only one of valueSet, valueCode, valueConding, or valueCodeableConcept may be specified. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified CodeableConcepts.",
            "type": "array",
            "items": {
              "$ref": "#/definitions/CodeableConcept"
            }
          }
        }
      }]
    },
    "DataRequirement_DateFilter": {
      "allOf": [{
        "$ref": "#/definitions/BackboneElement"
      }, {
        "description": "Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.",
        "properties": {
          "path": {
            "description": "The date-valued attribute of the filter. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant. The path must resolve to an element of type dateTime, Period, Schedule, or Timing.",
            "type": "string"
          },
          "_path": {
            "description": "Extensions for path",
            "$ref": "#/definitions/Element"
          },
          "valueDateTime": {
            "description": "The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration from now.",
            "pattern": "-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?",
            "type": "string"
          },
          "_valueDateTime": {
            "description": "Extensions for valueDateTime",
            "$ref": "#/definitions/Element"
          },
          "valuePeriod": {
            "description": "The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration from now.",
            "$ref": "#/definitions/Period"
          },
          "valueDuration": {
            "description": "The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration from now.",
            "$ref": "#/definitions/Duration"
          }
        }
      }]
    },
    "ParameterDefinition": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.",
        "properties": {
          "name": {
            "description": "The name of the parameter used to allow access to the value of the parameter in evaluation contexts.",
            "type": "string",
            "pattern": "[^\\s]+([\\s]?[^\\s]+)*"
          },
          "_name": {
            "description": "Extensions for name",
            "$ref": "#/definitions/Element"
          },
          "use": {
            "description": "Whether the parameter is input or output for the module.",
            "type": "string",
            "pattern": "[^\\s]+([\\s]?[^\\s]+)*"
          },
          "_use": {
            "description": "Extensions for use",
            "$ref": "#/definitions/Element"
          },
          "min": {
            "description": "The minimum number of times this parameter SHALL appear in the request or response.",
            "type": "number",
            "pattern": "-?([0]|([1-9][0-9]*))"
          },
          "_min": {
            "description": "Extensions for min",
            "$ref": "#/definitions/Element"
          },
          "max": {
            "description": "The maximum number of times this element is permitted to appear in the request or response.",
            "type": "string"
          },
          "_max": {
            "description": "Extensions for max",
            "$ref": "#/definitions/Element"
          },
          "documentation": {
            "description": "A brief discussion of what the parameter is for and how it is used by the module.",
            "type": "string"
          },
          "_documentation": {
            "description": "Extensions for documentation",
            "$ref": "#/definitions/Element"
          },
          "type": {
            "description": "The type of the parameter.",
            "type": "string",
            "pattern": "[^\\s]+([\\s]?[^\\s]+)*"
          },
          "_type": {
            "description": "Extensions for type",
            "$ref": "#/definitions/Element"
          },
          "profile": {
            "description": "If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.",
            "$ref": "#/definitions/Reference"
          }
        }
      }]
    },
    "TriggerDefinition": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "A description of a triggering event.",
        "properties": {
          "type": {
            "description": "The type of triggering event.",
            "enum": ["named-event", "periodic", "data-added", "data-modified", "data-removed", "data-accessed", "data-access-ended"],
            "type": "string"
          },
          "_type": {
            "description": "Extensions for type",
            "$ref": "#/definitions/Element"
          },
          "eventName": {
            "description": "The name of the event (if this is a named-event trigger).",
            "type": "string"
          },
          "_eventName": {
            "description": "Extensions for eventName",
            "$ref": "#/definitions/Element"
          },
          "eventTimingTiming": {
            "description": "The timing of the event (if this is a period trigger).",
            "$ref": "#/definitions/Timing"
          },
          "eventTimingReference": {
            "description": "The timing of the event (if this is a period trigger).",
            "$ref": "#/definitions/Reference"
          },
          "eventTimingDate": {
            "description": "The timing of the event (if this is a period trigger).",
            "pattern": "-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?",
            "type": "string"
          },
          "_eventTimingDate": {
            "description": "Extensions for eventTimingDate",
            "$ref": "#/definitions/Element"
          },
          "eventTimingDateTime": {
            "description": "The timing of the event (if this is a period trigger).",
            "pattern": "-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?",
            "type": "string"
          },
          "_eventTimingDateTime": {
            "description": "Extensions for eventTimingDateTime",
            "$ref": "#/definitions/Element"
          },
          "eventData": {
            "description": "The triggering data of the event (if this is a data trigger).",
            "$ref": "#/definitions/DataRequirement"
          }
        }
      }]
    },
    "DomainResource": {
      "allOf": [{
        "$ref": "#/definitions/Resource"
      }, {
        "description": "A resource that includes narrative, extensions, and contained resources.",
        "properties": {
          "text": {
            "description": "A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it \"clinically safe\" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
            "$ref": "#/definitions/Narrative"
          },
          "contained": {
            "description": "These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.",
            "type": "array",
            "items": {
              "$ref": "#/definitions/ResourceList"
            }
          },
          "extension": {
            "description": "May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Extension"
            }
          },
          "modifierExtension": {
            "description": "May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Extension"
            }
          }
        }
      }]
    },
    "Resource": {
      "allOf": [{
        "$ref": "#/definitions/Element"
      }, {
        "description": "This is the base resource type for everything.",
        "properties": {
          "id": {
            "description": "The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.",
            "type": "string",
            "pattern": "[A-Za-z0-9\\-\\.]{1,64}"
          },
          "_id": {
            "description": "Extensions for id",
            "$ref": "#/definitions/Element"
          },
          "meta": {
            "description": "The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.",
            "$ref": "#/definitions/Meta"
          },
          "implicitRules": {
            "description": "A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.",
            "type": "string"
          },
          "_implicitRules": {
            "description": "Extensions for implicitRules",
            "$ref": "#/definitions/Element"
          },
          "language": {
            "description": "The base language in which the resource is written.",
            "type": "string",
            "pattern": "[^\\s]+([\\s]?[^\\s]+)*"
          },
          "_language": {
            "description": "Extensions for language",
            "$ref": "#/definitions/Element"
          }
        }
      }]
    },
    "ResourceList": {
      "oneOf": [{
        "$ref": "#/definitions/ResourceList"
      }]
    }
  },
  "oneOf": [{
    "$ref": "#/definitions/ResourceList"
  }]
};
validate.errors = null;
module.exports = validate;