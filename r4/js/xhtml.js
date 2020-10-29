'use strict';
var formats = require('ajv/lib/compile/formats')();
var validate = (function() {
  var refVal = [];
  var refVal1 = {
    "description": "xhtml - escaped html (see specfication)"
  };
  refVal[1] = refVal1;
  return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
    'use strict'; /*# sourceURL=http://hl7.org/fhir/json-schema/4.0 */
    var vErrors = null;
    var errors = 0;
    var errs__0 = errors,
      prevValid0 = false,
      valid0 = false,
      passingSchemas0 = null;
    var errs_1 = errors;
    var valid2 = true;
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
  "$schema": "http://json-schema.org/draft-06/schema#",
  "id": "http://hl7.org/fhir/json-schema/4.0",
  "description": "see http://hl7.org/fhir/json.html#schema for information about the FHIR Json Schemas",
  "discriminator": {
    "propertyName": "resourceType",
    "mapping": {}
  },
  "oneOf": [{
    "$ref": "#/definitions/xhtml"
  }],
  "definitions": {
    "ResourceList": {
      "oneOf": [{
        "$ref": "#/definitions/xhtml"
      }]
    },
    "base64Binary": {
      "type": "string",
      "description": "A stream of bytes"
    },
    "boolean": {
      "pattern": "^true|false$",
      "type": "boolean",
      "description": "Value of \"true\" or \"false\""
    },
    "canonical": {
      "pattern": "^\\S*$",
      "type": "string",
      "description": "A URI that is a reference to a canonical URL on a FHIR resource"
    },
    "code": {
      "pattern": "^[^\\s]+(\\s[^\\s]+)*$",
      "type": "string",
      "description": "A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents"
    },
    "date": {
      "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?$",
      "type": "string",
      "description": "A date or partial date (e.g. just year or year + month). There is no time zone. The format is a union of the schema types gYear, gYearMonth and date.  Dates SHALL be valid dates."
    },
    "dateTime": {
      "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?$",
      "type": "string",
      "description": "A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are specified, a time zone SHALL be populated. The format is a union of the schema types gYear, gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored.                 Dates SHALL be valid dates."
    },
    "decimal": {
      "pattern": "^-?(0|[1-9][0-9]*)(\\.[0-9]+)?([eE][+-]?[0-9]+)?$",
      "type": "number",
      "description": "A rational number with implicit precision"
    },
    "id": {
      "pattern": "^[A-Za-z0-9\\-\\.]{1,64}$",
      "type": "string",
      "description": "Any combination of letters, numerals, \"-\" and \".\", with a length limit of 64 characters.  (This might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these constraints.)  Ids are case-insensitive."
    },
    "instant": {
      "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))$",
      "type": "string",
      "description": "An instant in time - known at least to the second"
    },
    "integer": {
      "pattern": "^-?([0]|([1-9][0-9]*))$",
      "type": "number",
      "description": "A whole number"
    },
    "markdown": {
      "pattern": "^[ \\r\\n\\t\\S]+$",
      "type": "string",
      "description": "A string that may contain Github Flavored Markdown syntax for optional processing by a mark down presentation engine"
    },
    "oid": {
      "pattern": "^urn:oid:[0-2](\\.(0|[1-9][0-9]*))+$",
      "type": "string",
      "description": "An OID represented as a URI"
    },
    "positiveInt": {
      "pattern": "^[1-9][0-9]*$",
      "type": "number",
      "description": "An integer with a value that is positive (e.g. >0)"
    },
    "string": {
      "pattern": "^[ \\r\\n\\t\\S]+$",
      "type": "string",
      "description": "A sequence of Unicode characters"
    },
    "time": {
      "pattern": "^([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?$",
      "type": "string",
      "description": "A time during the day, with no date specified"
    },
    "unsignedInt": {
      "pattern": "^[0]|([1-9][0-9]*)$",
      "type": "number",
      "description": "An integer with a value that is not negative (e.g. >= 0)"
    },
    "uri": {
      "pattern": "^\\S*$",
      "type": "string",
      "description": "String of characters used to identify a name or a resource"
    },
    "url": {
      "pattern": "^\\S*$",
      "type": "string",
      "description": "A URI that is a literal reference"
    },
    "uuid": {
      "pattern": "^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$",
      "type": "string",
      "description": "A UUID, represented as a URI"
    },
    "xhtml": {
      "description": "xhtml - escaped html (see specfication)"
    },
    "Element": {
      "description": "Base definition for all elements in a resource.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        }
      },
      "additionalProperties": false
    },
    "Extension": {
      "description": "Optional Extension Element - found in all resources.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "url": {
          "description": "Source of the definition for the extension code - a logical name or a URL.",
          "$ref": "#/definitions/uri"
        },
        "_url": {
          "description": "Extensions for url",
          "$ref": "#/definitions/Element"
        },
        "valueBase64Binary": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "pattern": "^(\\s*([0-9a-zA-Z\\+/=]){4}\\s*)+$",
          "type": "string"
        },
        "_valueBase64Binary": {
          "description": "Extensions for valueBase64Binary",
          "$ref": "#/definitions/Element"
        },
        "valueBoolean": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "pattern": "^true|false$",
          "type": "boolean"
        },
        "_valueBoolean": {
          "description": "Extensions for valueBoolean",
          "$ref": "#/definitions/Element"
        },
        "valueCanonical": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "pattern": "^\\S*$",
          "type": "string"
        },
        "_valueCanonical": {
          "description": "Extensions for valueCanonical",
          "$ref": "#/definitions/Element"
        },
        "valueCode": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "pattern": "^[^\\s]+(\\s[^\\s]+)*$",
          "type": "string"
        },
        "_valueCode": {
          "description": "Extensions for valueCode",
          "$ref": "#/definitions/Element"
        },
        "valueDate": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?$",
          "type": "string"
        },
        "_valueDate": {
          "description": "Extensions for valueDate",
          "$ref": "#/definitions/Element"
        },
        "valueDateTime": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?$",
          "type": "string"
        },
        "_valueDateTime": {
          "description": "Extensions for valueDateTime",
          "$ref": "#/definitions/Element"
        },
        "valueDecimal": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "pattern": "^-?(0|[1-9][0-9]*)(\\.[0-9]+)?([eE][+-]?[0-9]+)?$",
          "type": "number"
        },
        "_valueDecimal": {
          "description": "Extensions for valueDecimal",
          "$ref": "#/definitions/Element"
        },
        "valueId": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "pattern": "^[A-Za-z0-9\\-\\.]{1,64}$",
          "type": "string"
        },
        "_valueId": {
          "description": "Extensions for valueId",
          "$ref": "#/definitions/Element"
        },
        "valueInstant": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))$",
          "type": "string"
        },
        "_valueInstant": {
          "description": "Extensions for valueInstant",
          "$ref": "#/definitions/Element"
        },
        "valueInteger": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "pattern": "^-?([0]|([1-9][0-9]*))$",
          "type": "number"
        },
        "_valueInteger": {
          "description": "Extensions for valueInteger",
          "$ref": "#/definitions/Element"
        },
        "valueMarkdown": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "pattern": "^[ \\r\\n\\t\\S]+$",
          "type": "string"
        },
        "_valueMarkdown": {
          "description": "Extensions for valueMarkdown",
          "$ref": "#/definitions/Element"
        },
        "valueOid": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "pattern": "^urn:oid:[0-2](\\.(0|[1-9][0-9]*))+$",
          "type": "string"
        },
        "_valueOid": {
          "description": "Extensions for valueOid",
          "$ref": "#/definitions/Element"
        },
        "valuePositiveInt": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "pattern": "^[1-9][0-9]*$",
          "type": "number"
        },
        "_valuePositiveInt": {
          "description": "Extensions for valuePositiveInt",
          "$ref": "#/definitions/Element"
        },
        "valueString": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "pattern": "^[ \\r\\n\\t\\S]+$",
          "type": "string"
        },
        "_valueString": {
          "description": "Extensions for valueString",
          "$ref": "#/definitions/Element"
        },
        "valueTime": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "pattern": "^([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?$",
          "type": "string"
        },
        "_valueTime": {
          "description": "Extensions for valueTime",
          "$ref": "#/definitions/Element"
        },
        "valueUnsignedInt": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "pattern": "^[0]|([1-9][0-9]*)$",
          "type": "number"
        },
        "_valueUnsignedInt": {
          "description": "Extensions for valueUnsignedInt",
          "$ref": "#/definitions/Element"
        },
        "valueUri": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "pattern": "^\\S*$",
          "type": "string"
        },
        "_valueUri": {
          "description": "Extensions for valueUri",
          "$ref": "#/definitions/Element"
        },
        "valueUrl": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "pattern": "^\\S*$",
          "type": "string"
        },
        "_valueUrl": {
          "description": "Extensions for valueUrl",
          "$ref": "#/definitions/Element"
        },
        "valueUuid": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "pattern": "^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$",
          "type": "string"
        },
        "_valueUuid": {
          "description": "Extensions for valueUuid",
          "$ref": "#/definitions/Element"
        },
        "valueAddress": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/Address"
        },
        "valueAge": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/Age"
        },
        "valueAnnotation": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/Annotation"
        },
        "valueAttachment": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/Attachment"
        },
        "valueCodeableConcept": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/CodeableConcept"
        },
        "valueCoding": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/Coding"
        },
        "valueContactPoint": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/ContactPoint"
        },
        "valueCount": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/Count"
        },
        "valueDistance": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/Distance"
        },
        "valueDuration": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/Duration"
        },
        "valueHumanName": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/HumanName"
        },
        "valueIdentifier": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/Identifier"
        },
        "valueMoney": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/Money"
        },
        "valuePeriod": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/Period"
        },
        "valueQuantity": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/Quantity"
        },
        "valueRange": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/Range"
        },
        "valueRatio": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/Ratio"
        },
        "valueReference": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/Reference"
        },
        "valueSampledData": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/SampledData"
        },
        "valueSignature": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/Signature"
        },
        "valueTiming": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/Timing"
        },
        "valueContactDetail": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/ContactDetail"
        },
        "valueContributor": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/Contributor"
        },
        "valueDataRequirement": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/DataRequirement"
        },
        "valueExpression": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/Expression"
        },
        "valueParameterDefinition": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/ParameterDefinition"
        },
        "valueRelatedArtifact": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/RelatedArtifact"
        },
        "valueTriggerDefinition": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/TriggerDefinition"
        },
        "valueUsageContext": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/UsageContext"
        },
        "valueDosage": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/Dosage"
        },
        "valueMeta": {
          "description": "Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).",
          "$ref": "#/definitions/Meta"
        }
      },
      "additionalProperties": false
    },
    "Narrative": {
      "description": "A human-readable summary of the resource conveying the essential clinical and business information for the resource.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "status": {
          "description": "The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.",
          "enum": ["generated", "extensions", "additional", "empty"]
        },
        "_status": {
          "description": "Extensions for status",
          "$ref": "#/definitions/Element"
        },
        "div": {
          "description": "The actual narrative content, a stripped down version of XHTML.",
          "$ref": "#/definitions/xhtml"
        }
      },
      "additionalProperties": false,
      "required": ["div"]
    },
    "Annotation": {
      "description": "A  text note which also  contains information about who made the statement and when.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "authorReference": {
          "description": "The individual responsible for making the annotation.",
          "$ref": "#/definitions/Reference"
        },
        "authorString": {
          "description": "The individual responsible for making the annotation.",
          "pattern": "^[ \\r\\n\\t\\S]+$",
          "type": "string"
        },
        "_authorString": {
          "description": "Extensions for authorString",
          "$ref": "#/definitions/Element"
        },
        "time": {
          "description": "Indicates when this particular annotation was made.",
          "$ref": "#/definitions/dateTime"
        },
        "_time": {
          "description": "Extensions for time",
          "$ref": "#/definitions/Element"
        },
        "text": {
          "description": "The text of the annotation in markdown format.",
          "$ref": "#/definitions/markdown"
        },
        "_text": {
          "description": "Extensions for text",
          "$ref": "#/definitions/Element"
        }
      },
      "additionalProperties": false
    },
    "Attachment": {
      "description": "For referring to data content defined in other formats.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "contentType": {
          "description": "Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate.",
          "$ref": "#/definitions/code"
        },
        "_contentType": {
          "description": "Extensions for contentType",
          "$ref": "#/definitions/Element"
        },
        "language": {
          "description": "The human language of the content. The value can be any valid value according to BCP 47.",
          "$ref": "#/definitions/code"
        },
        "_language": {
          "description": "Extensions for language",
          "$ref": "#/definitions/Element"
        },
        "data": {
          "description": "The actual data of the attachment - a sequence of bytes, base64 encoded.",
          "$ref": "#/definitions/base64Binary"
        },
        "_data": {
          "description": "Extensions for data",
          "$ref": "#/definitions/Element"
        },
        "url": {
          "description": "A location where the data can be accessed.",
          "$ref": "#/definitions/url"
        },
        "_url": {
          "description": "Extensions for url",
          "$ref": "#/definitions/Element"
        },
        "size": {
          "description": "The number of bytes of data that make up this attachment (before base64 encoding, if that is done).",
          "$ref": "#/definitions/unsignedInt"
        },
        "_size": {
          "description": "Extensions for size",
          "$ref": "#/definitions/Element"
        },
        "hash": {
          "description": "The calculated hash of the data using SHA-1. Represented using base64.",
          "$ref": "#/definitions/base64Binary"
        },
        "_hash": {
          "description": "Extensions for hash",
          "$ref": "#/definitions/Element"
        },
        "title": {
          "description": "A label or set of text to display in place of the data.",
          "$ref": "#/definitions/string"
        },
        "_title": {
          "description": "Extensions for title",
          "$ref": "#/definitions/Element"
        },
        "creation": {
          "description": "The date that the attachment was first created.",
          "$ref": "#/definitions/dateTime"
        },
        "_creation": {
          "description": "Extensions for creation",
          "$ref": "#/definitions/Element"
        }
      },
      "additionalProperties": false
    },
    "Identifier": {
      "description": "An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "use": {
          "description": "The purpose of this identifier.",
          "enum": ["usual", "official", "temp", "secondary", "old"]
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
          "$ref": "#/definitions/uri"
        },
        "_system": {
          "description": "Extensions for system",
          "$ref": "#/definitions/Element"
        },
        "value": {
          "description": "The portion of the identifier typically relevant to the user and which is unique within the context of the system.",
          "$ref": "#/definitions/string"
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
      },
      "additionalProperties": false
    },
    "CodeableConcept": {
      "description": "A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "coding": {
          "description": "A reference to a code defined by a terminology system.",
          "items": {
            "$ref": "#/definitions/Coding"
          },
          "type": "array"
        },
        "text": {
          "description": "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
          "$ref": "#/definitions/string"
        },
        "_text": {
          "description": "Extensions for text",
          "$ref": "#/definitions/Element"
        }
      },
      "additionalProperties": false
    },
    "Coding": {
      "description": "A reference to a code defined by a terminology system.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "system": {
          "description": "The identification of the code system that defines the meaning of the symbol in the code.",
          "$ref": "#/definitions/uri"
        },
        "_system": {
          "description": "Extensions for system",
          "$ref": "#/definitions/Element"
        },
        "version": {
          "description": "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
          "$ref": "#/definitions/string"
        },
        "_version": {
          "description": "Extensions for version",
          "$ref": "#/definitions/Element"
        },
        "code": {
          "description": "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
          "$ref": "#/definitions/code"
        },
        "_code": {
          "description": "Extensions for code",
          "$ref": "#/definitions/Element"
        },
        "display": {
          "description": "A representation of the meaning of the code in the system, following the rules of the system.",
          "$ref": "#/definitions/string"
        },
        "_display": {
          "description": "Extensions for display",
          "$ref": "#/definitions/Element"
        },
        "userSelected": {
          "description": "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
          "$ref": "#/definitions/boolean"
        },
        "_userSelected": {
          "description": "Extensions for userSelected",
          "$ref": "#/definitions/Element"
        }
      },
      "additionalProperties": false
    },
    "Quantity": {
      "description": "A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "value": {
          "description": "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
          "$ref": "#/definitions/decimal"
        },
        "_value": {
          "description": "Extensions for value",
          "$ref": "#/definitions/Element"
        },
        "comparator": {
          "description": "How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is \"<\" , then the real value is < stated value.",
          "enum": ["<", "<=", ">=", ">"]
        },
        "_comparator": {
          "description": "Extensions for comparator",
          "$ref": "#/definitions/Element"
        },
        "unit": {
          "description": "A human-readable form of the unit.",
          "$ref": "#/definitions/string"
        },
        "_unit": {
          "description": "Extensions for unit",
          "$ref": "#/definitions/Element"
        },
        "system": {
          "description": "The identification of the system that provides the coded form of the unit.",
          "$ref": "#/definitions/uri"
        },
        "_system": {
          "description": "Extensions for system",
          "$ref": "#/definitions/Element"
        },
        "code": {
          "description": "A computer processable form of the unit in some unit representation system.",
          "$ref": "#/definitions/code"
        },
        "_code": {
          "description": "Extensions for code",
          "$ref": "#/definitions/Element"
        }
      },
      "additionalProperties": false
    },
    "Duration": {
      "description": "A length of time.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "value": {
          "description": "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
          "$ref": "#/definitions/decimal"
        },
        "_value": {
          "description": "Extensions for value",
          "$ref": "#/definitions/Element"
        },
        "comparator": {
          "description": "How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is \"<\" , then the real value is < stated value.",
          "enum": ["<", "<=", ">=", ">"]
        },
        "_comparator": {
          "description": "Extensions for comparator",
          "$ref": "#/definitions/Element"
        },
        "unit": {
          "description": "A human-readable form of the unit.",
          "$ref": "#/definitions/string"
        },
        "_unit": {
          "description": "Extensions for unit",
          "$ref": "#/definitions/Element"
        },
        "system": {
          "description": "The identification of the system that provides the coded form of the unit.",
          "$ref": "#/definitions/uri"
        },
        "_system": {
          "description": "Extensions for system",
          "$ref": "#/definitions/Element"
        },
        "code": {
          "description": "A computer processable form of the unit in some unit representation system.",
          "$ref": "#/definitions/code"
        },
        "_code": {
          "description": "Extensions for code",
          "$ref": "#/definitions/Element"
        }
      },
      "additionalProperties": false
    },
    "Distance": {
      "description": "A length - a value with a unit that is a physical distance.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "value": {
          "description": "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
          "$ref": "#/definitions/decimal"
        },
        "_value": {
          "description": "Extensions for value",
          "$ref": "#/definitions/Element"
        },
        "comparator": {
          "description": "How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is \"<\" , then the real value is < stated value.",
          "enum": ["<", "<=", ">=", ">"]
        },
        "_comparator": {
          "description": "Extensions for comparator",
          "$ref": "#/definitions/Element"
        },
        "unit": {
          "description": "A human-readable form of the unit.",
          "$ref": "#/definitions/string"
        },
        "_unit": {
          "description": "Extensions for unit",
          "$ref": "#/definitions/Element"
        },
        "system": {
          "description": "The identification of the system that provides the coded form of the unit.",
          "$ref": "#/definitions/uri"
        },
        "_system": {
          "description": "Extensions for system",
          "$ref": "#/definitions/Element"
        },
        "code": {
          "description": "A computer processable form of the unit in some unit representation system.",
          "$ref": "#/definitions/code"
        },
        "_code": {
          "description": "Extensions for code",
          "$ref": "#/definitions/Element"
        }
      },
      "additionalProperties": false
    },
    "Count": {
      "description": "A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "value": {
          "description": "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
          "$ref": "#/definitions/decimal"
        },
        "_value": {
          "description": "Extensions for value",
          "$ref": "#/definitions/Element"
        },
        "comparator": {
          "description": "How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is \"<\" , then the real value is < stated value.",
          "enum": ["<", "<=", ">=", ">"]
        },
        "_comparator": {
          "description": "Extensions for comparator",
          "$ref": "#/definitions/Element"
        },
        "unit": {
          "description": "A human-readable form of the unit.",
          "$ref": "#/definitions/string"
        },
        "_unit": {
          "description": "Extensions for unit",
          "$ref": "#/definitions/Element"
        },
        "system": {
          "description": "The identification of the system that provides the coded form of the unit.",
          "$ref": "#/definitions/uri"
        },
        "_system": {
          "description": "Extensions for system",
          "$ref": "#/definitions/Element"
        },
        "code": {
          "description": "A computer processable form of the unit in some unit representation system.",
          "$ref": "#/definitions/code"
        },
        "_code": {
          "description": "Extensions for code",
          "$ref": "#/definitions/Element"
        }
      },
      "additionalProperties": false
    },
    "Money": {
      "description": "An amount of economic utility in some recognized currency.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "value": {
          "description": "Numerical value (with implicit precision).",
          "$ref": "#/definitions/decimal"
        },
        "_value": {
          "description": "Extensions for value",
          "$ref": "#/definitions/Element"
        },
        "currency": {
          "description": "ISO 4217 Currency Code.",
          "$ref": "#/definitions/code"
        },
        "_currency": {
          "description": "Extensions for currency",
          "$ref": "#/definitions/Element"
        }
      },
      "additionalProperties": false
    },
    "Age": {
      "description": "A duration of time during which an organism (or a process) has existed.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "value": {
          "description": "The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
          "$ref": "#/definitions/decimal"
        },
        "_value": {
          "description": "Extensions for value",
          "$ref": "#/definitions/Element"
        },
        "comparator": {
          "description": "How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is \"<\" , then the real value is < stated value.",
          "enum": ["<", "<=", ">=", ">"]
        },
        "_comparator": {
          "description": "Extensions for comparator",
          "$ref": "#/definitions/Element"
        },
        "unit": {
          "description": "A human-readable form of the unit.",
          "$ref": "#/definitions/string"
        },
        "_unit": {
          "description": "Extensions for unit",
          "$ref": "#/definitions/Element"
        },
        "system": {
          "description": "The identification of the system that provides the coded form of the unit.",
          "$ref": "#/definitions/uri"
        },
        "_system": {
          "description": "Extensions for system",
          "$ref": "#/definitions/Element"
        },
        "code": {
          "description": "A computer processable form of the unit in some unit representation system.",
          "$ref": "#/definitions/code"
        },
        "_code": {
          "description": "Extensions for code",
          "$ref": "#/definitions/Element"
        }
      },
      "additionalProperties": false
    },
    "Range": {
      "description": "A set of ordered Quantities defined by a low and high limit.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "low": {
          "description": "The low limit. The boundary is inclusive.",
          "$ref": "#/definitions/Quantity"
        },
        "high": {
          "description": "The high limit. The boundary is inclusive.",
          "$ref": "#/definitions/Quantity"
        }
      },
      "additionalProperties": false
    },
    "Period": {
      "description": "A time period defined by a start and end date and optionally time.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "start": {
          "description": "The start of the period. The boundary is inclusive.",
          "$ref": "#/definitions/dateTime"
        },
        "_start": {
          "description": "Extensions for start",
          "$ref": "#/definitions/Element"
        },
        "end": {
          "description": "The end of the period. If the end of the period is missing, it means no end was known or planned at the time the instance was created. The start may be in the past, and the end date in the future, which means that period is expected/planned to end at that time.",
          "$ref": "#/definitions/dateTime"
        },
        "_end": {
          "description": "Extensions for end",
          "$ref": "#/definitions/Element"
        }
      },
      "additionalProperties": false
    },
    "Ratio": {
      "description": "A relationship of two Quantity values - expressed as a numerator and a denominator.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "numerator": {
          "description": "The value of the numerator.",
          "$ref": "#/definitions/Quantity"
        },
        "denominator": {
          "description": "The value of the denominator.",
          "$ref": "#/definitions/Quantity"
        }
      },
      "additionalProperties": false
    },
    "Reference": {
      "description": "A reference from one resource to another.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "reference": {
          "description": "A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with '#') refer to contained resources.",
          "$ref": "#/definitions/string"
        },
        "_reference": {
          "description": "Extensions for reference",
          "$ref": "#/definitions/Element"
        },
        "type": {
          "description": "The expected type of the target of the reference. If both Reference.type and Reference.reference are populated and Reference.reference is a FHIR URL, both SHALL be consistent.\n\nThe type is the Canonical URL of Resource Definition that is the type this reference refers to. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition/ e.g. \"Patient\" is a reference to http://hl7.org/fhir/StructureDefinition/Patient. Absolute URLs are only allowed for logical models (and can only be used in references in logical models, not resources).",
          "$ref": "#/definitions/uri"
        },
        "_type": {
          "description": "Extensions for type",
          "$ref": "#/definitions/Element"
        },
        "identifier": {
          "description": "An identifier for the target resource. This is used when there is no way to reference the other resource directly, either because the entity it represents is not available through a FHIR server, or because there is no way for the author of the resource to convert a known identifier to an actual location. There is no requirement that a Reference.identifier point to something that is actually exposed as a FHIR instance, but it SHALL point to a business concept that would be expected to be exposed as a FHIR instance, and that instance would need to be of a FHIR resource type allowed by the reference.",
          "$ref": "#/definitions/Identifier"
        },
        "display": {
          "description": "Plain text narrative that identifies the resource in addition to the resource reference.",
          "$ref": "#/definitions/string"
        },
        "_display": {
          "description": "Extensions for display",
          "$ref": "#/definitions/Element"
        }
      },
      "additionalProperties": false
    },
    "SampledData": {
      "description": "A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "origin": {
          "description": "The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series.",
          "$ref": "#/definitions/Quantity"
        },
        "period": {
          "description": "The length of time between sampling times, measured in milliseconds.",
          "$ref": "#/definitions/decimal"
        },
        "_period": {
          "description": "Extensions for period",
          "$ref": "#/definitions/Element"
        },
        "factor": {
          "description": "A correction factor that is applied to the sampled data points before they are added to the origin.",
          "$ref": "#/definitions/decimal"
        },
        "_factor": {
          "description": "Extensions for factor",
          "$ref": "#/definitions/Element"
        },
        "lowerLimit": {
          "description": "The lower limit of detection of the measured points. This is needed if any of the data points have the value \"L\" (lower than detection limit).",
          "$ref": "#/definitions/decimal"
        },
        "_lowerLimit": {
          "description": "Extensions for lowerLimit",
          "$ref": "#/definitions/Element"
        },
        "upperLimit": {
          "description": "The upper limit of detection of the measured points. This is needed if any of the data points have the value \"U\" (higher than detection limit).",
          "$ref": "#/definitions/decimal"
        },
        "_upperLimit": {
          "description": "Extensions for upperLimit",
          "$ref": "#/definitions/Element"
        },
        "dimensions": {
          "description": "The number of sample points at each time point. If this value is greater than one, then the dimensions will be interlaced - all the sample points for a point in time will be recorded at once.",
          "$ref": "#/definitions/positiveInt"
        },
        "_dimensions": {
          "description": "Extensions for dimensions",
          "$ref": "#/definitions/Element"
        },
        "data": {
          "description": "A series of data points which are decimal values separated by a single space (character u20). The special values \"E\" (error), \"L\" (below detection limit) and \"U\" (above detection limit) can also be used in place of a decimal value.",
          "$ref": "#/definitions/string"
        },
        "_data": {
          "description": "Extensions for data",
          "$ref": "#/definitions/Element"
        }
      },
      "additionalProperties": false,
      "required": ["origin"]
    },
    "Signature": {
      "description": "A signature along with supporting context. The signature may be a digital signature that is cryptographic in nature, or some other signature acceptable to the domain. This other signature may be as simple as a graphical image representing a hand-written signature, or a signature ceremony Different signature approaches have different utilities.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "type": {
          "description": "An indication of the reason that the entity signed this document. This may be explicitly included as part of the signature information and can be used when determining accountability for various actions concerning the document.",
          "items": {
            "$ref": "#/definitions/Coding"
          },
          "type": "array"
        },
        "when": {
          "description": "When the digital signature was signed.",
          "$ref": "#/definitions/instant"
        },
        "_when": {
          "description": "Extensions for when",
          "$ref": "#/definitions/Element"
        },
        "who": {
          "description": "A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key).",
          "$ref": "#/definitions/Reference"
        },
        "onBehalfOf": {
          "description": "A reference to an application-usable description of the identity that is represented by the signature.",
          "$ref": "#/definitions/Reference"
        },
        "targetFormat": {
          "description": "A mime type that indicates the technical format of the target resources signed by the signature.",
          "$ref": "#/definitions/code"
        },
        "_targetFormat": {
          "description": "Extensions for targetFormat",
          "$ref": "#/definitions/Element"
        },
        "sigFormat": {
          "description": "A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jose for JWS, and image/* for a graphical image of a signature, etc.",
          "$ref": "#/definitions/code"
        },
        "_sigFormat": {
          "description": "Extensions for sigFormat",
          "$ref": "#/definitions/Element"
        },
        "data": {
          "description": "The base64 encoding of the Signature content. When signature is not recorded electronically this element would be empty.",
          "$ref": "#/definitions/base64Binary"
        },
        "_data": {
          "description": "Extensions for data",
          "$ref": "#/definitions/Element"
        }
      },
      "additionalProperties": false,
      "required": ["type", "who"]
    },
    "HumanName": {
      "description": "A human's name with the ability to identify parts and usage.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "use": {
          "description": "Identifies the purpose for this name.",
          "enum": ["usual", "official", "temp", "nickname", "anonymous", "old", "maiden"]
        },
        "_use": {
          "description": "Extensions for use",
          "$ref": "#/definitions/Element"
        },
        "text": {
          "description": "Specifies the entire name as it should be displayed e.g. on an application UI. This may be provided instead of or as well as the specific parts.",
          "$ref": "#/definitions/string"
        },
        "_text": {
          "description": "Extensions for text",
          "$ref": "#/definitions/Element"
        },
        "family": {
          "description": "The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father.",
          "$ref": "#/definitions/string"
        },
        "_family": {
          "description": "Extensions for family",
          "$ref": "#/definitions/Element"
        },
        "given": {
          "description": "Given name.",
          "items": {
            "$ref": "#/definitions/string"
          },
          "type": "array"
        },
        "_given": {
          "description": "Extensions for given",
          "items": {
            "$ref": "#/definitions/Element"
          },
          "type": "array"
        },
        "prefix": {
          "description": "Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.",
          "items": {
            "$ref": "#/definitions/string"
          },
          "type": "array"
        },
        "_prefix": {
          "description": "Extensions for prefix",
          "items": {
            "$ref": "#/definitions/Element"
          },
          "type": "array"
        },
        "suffix": {
          "description": "Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.",
          "items": {
            "$ref": "#/definitions/string"
          },
          "type": "array"
        },
        "_suffix": {
          "description": "Extensions for suffix",
          "items": {
            "$ref": "#/definitions/Element"
          },
          "type": "array"
        },
        "period": {
          "description": "Indicates the period of time when this name was valid for the named person.",
          "$ref": "#/definitions/Period"
        }
      },
      "additionalProperties": false
    },
    "Address": {
      "description": "An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "use": {
          "description": "The purpose of this address.",
          "enum": ["home", "work", "temp", "old", "billing"]
        },
        "_use": {
          "description": "Extensions for use",
          "$ref": "#/definitions/Element"
        },
        "type": {
          "description": "Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.",
          "enum": ["postal", "physical", "both"]
        },
        "_type": {
          "description": "Extensions for type",
          "$ref": "#/definitions/Element"
        },
        "text": {
          "description": "Specifies the entire address as it should be displayed e.g. on a postal label. This may be provided instead of or as well as the specific parts.",
          "$ref": "#/definitions/string"
        },
        "_text": {
          "description": "Extensions for text",
          "$ref": "#/definitions/Element"
        },
        "line": {
          "description": "This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.",
          "items": {
            "$ref": "#/definitions/string"
          },
          "type": "array"
        },
        "_line": {
          "description": "Extensions for line",
          "items": {
            "$ref": "#/definitions/Element"
          },
          "type": "array"
        },
        "city": {
          "description": "The name of the city, town, suburb, village or other community or delivery center.",
          "$ref": "#/definitions/string"
        },
        "_city": {
          "description": "Extensions for city",
          "$ref": "#/definitions/Element"
        },
        "district": {
          "description": "The name of the administrative area (county).",
          "$ref": "#/definitions/string"
        },
        "_district": {
          "description": "Extensions for district",
          "$ref": "#/definitions/Element"
        },
        "state": {
          "description": "Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (e.g. US 2 letter state codes).",
          "$ref": "#/definitions/string"
        },
        "_state": {
          "description": "Extensions for state",
          "$ref": "#/definitions/Element"
        },
        "postalCode": {
          "description": "A postal code designating a region defined by the postal service.",
          "$ref": "#/definitions/string"
        },
        "_postalCode": {
          "description": "Extensions for postalCode",
          "$ref": "#/definitions/Element"
        },
        "country": {
          "description": "Country - a nation as commonly understood or generally accepted.",
          "$ref": "#/definitions/string"
        },
        "_country": {
          "description": "Extensions for country",
          "$ref": "#/definitions/Element"
        },
        "period": {
          "description": "Time period when address was/is in use.",
          "$ref": "#/definitions/Period"
        }
      },
      "additionalProperties": false
    },
    "ContactPoint": {
      "description": "Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "system": {
          "description": "Telecommunications form for contact point - what communications system is required to make use of the contact.",
          "enum": ["phone", "fax", "email", "pager", "url", "sms", "other"]
        },
        "_system": {
          "description": "Extensions for system",
          "$ref": "#/definitions/Element"
        },
        "value": {
          "description": "The actual contact point details, in a form that is meaningful to the designated communication system (i.e. phone number or email address).",
          "$ref": "#/definitions/string"
        },
        "_value": {
          "description": "Extensions for value",
          "$ref": "#/definitions/Element"
        },
        "use": {
          "description": "Identifies the purpose for the contact point.",
          "enum": ["home", "work", "temp", "old", "mobile"]
        },
        "_use": {
          "description": "Extensions for use",
          "$ref": "#/definitions/Element"
        },
        "rank": {
          "description": "Specifies a preferred order in which to use a set of contacts. ContactPoints with lower rank values are more preferred than those with higher rank values.",
          "$ref": "#/definitions/positiveInt"
        },
        "_rank": {
          "description": "Extensions for rank",
          "$ref": "#/definitions/Element"
        },
        "period": {
          "description": "Time period when the contact point was/is in use.",
          "$ref": "#/definitions/Period"
        }
      },
      "additionalProperties": false
    },
    "Timing": {
      "description": "Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "modifierExtension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "event": {
          "description": "Identifies specific times when the event occurs.",
          "items": {
            "$ref": "#/definitions/dateTime"
          },
          "type": "array"
        },
        "_event": {
          "description": "Extensions for event",
          "items": {
            "$ref": "#/definitions/Element"
          },
          "type": "array"
        },
        "repeat": {
          "description": "A set of rules that describe when the event is scheduled.",
          "$ref": "#/definitions/Timing_Repeat"
        },
        "code": {
          "description": "A code for the timing schedule (or just text in code.text). Some codes such as BID are ubiquitous, but many institutions define their own additional codes. If a code is provided, the code is understood to be a complete statement of whatever is specified in the structured timing data, and either the code or the data may be used to interpret the Timing, with the exception that .repeat.bounds still applies over the code (and is not contained in the code).",
          "$ref": "#/definitions/CodeableConcept"
        }
      },
      "additionalProperties": false
    },
    "Timing_Repeat": {
      "description": "Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "modifierExtension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
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
          "description": "A total count of the desired number of repetitions across the duration of the entire timing specification. If countMax is present, this element indicates the lower bound of the allowed range of count values.",
          "$ref": "#/definitions/positiveInt"
        },
        "_count": {
          "description": "Extensions for count",
          "$ref": "#/definitions/Element"
        },
        "countMax": {
          "description": "If present, indicates that the count is a range - so to perform the action between [count] and [countMax] times.",
          "$ref": "#/definitions/positiveInt"
        },
        "_countMax": {
          "description": "Extensions for countMax",
          "$ref": "#/definitions/Element"
        },
        "duration": {
          "description": "How long this thing happens for when it happens. If durationMax is present, this element indicates the lower bound of the allowed range of the duration.",
          "$ref": "#/definitions/decimal"
        },
        "_duration": {
          "description": "Extensions for duration",
          "$ref": "#/definitions/Element"
        },
        "durationMax": {
          "description": "If present, indicates that the duration is a range - so to perform the action between [duration] and [durationMax] time length.",
          "$ref": "#/definitions/decimal"
        },
        "_durationMax": {
          "description": "Extensions for durationMax",
          "$ref": "#/definitions/Element"
        },
        "durationUnit": {
          "description": "The units of time for the duration, in UCUM units.",
          "enum": ["s", "min", "h", "d", "wk", "mo", "a"]
        },
        "_durationUnit": {
          "description": "Extensions for durationUnit",
          "$ref": "#/definitions/Element"
        },
        "frequency": {
          "description": "The number of times to repeat the action within the specified period. If frequencyMax is present, this element indicates the lower bound of the allowed range of the frequency.",
          "$ref": "#/definitions/positiveInt"
        },
        "_frequency": {
          "description": "Extensions for frequency",
          "$ref": "#/definitions/Element"
        },
        "frequencyMax": {
          "description": "If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.",
          "$ref": "#/definitions/positiveInt"
        },
        "_frequencyMax": {
          "description": "Extensions for frequencyMax",
          "$ref": "#/definitions/Element"
        },
        "period": {
          "description": "Indicates the duration of time over which repetitions are to occur; e.g. to express \"3 times per day\", 3 would be the frequency and \"1 day\" would be the period. If periodMax is present, this element indicates the lower bound of the allowed range of the period length.",
          "$ref": "#/definitions/decimal"
        },
        "_period": {
          "description": "Extensions for period",
          "$ref": "#/definitions/Element"
        },
        "periodMax": {
          "description": "If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as \"do this once every 3-5 days.",
          "$ref": "#/definitions/decimal"
        },
        "_periodMax": {
          "description": "Extensions for periodMax",
          "$ref": "#/definitions/Element"
        },
        "periodUnit": {
          "description": "The units of time for the period in UCUM units.",
          "enum": ["s", "min", "h", "d", "wk", "mo", "a"]
        },
        "_periodUnit": {
          "description": "Extensions for periodUnit",
          "$ref": "#/definitions/Element"
        },
        "dayOfWeek": {
          "description": "If one or more days of week is provided, then the action happens only on the specified day(s).",
          "items": {
            "$ref": "#/definitions/code"
          },
          "type": "array"
        },
        "_dayOfWeek": {
          "description": "Extensions for dayOfWeek",
          "items": {
            "$ref": "#/definitions/Element"
          },
          "type": "array"
        },
        "timeOfDay": {
          "description": "Specified time of day for action to take place.",
          "items": {
            "$ref": "#/definitions/time"
          },
          "type": "array"
        },
        "_timeOfDay": {
          "description": "Extensions for timeOfDay",
          "items": {
            "$ref": "#/definitions/Element"
          },
          "type": "array"
        },
        "when": {
          "description": "An approximate time period during the day, potentially linked to an event of daily living that indicates when the action should occur.",
          "items": {
            "enum": ["MORN", "MORN.early", "MORN.late", "NOON", "AFT", "AFT.early", "AFT.late", "EVE", "EVE.early", "EVE.late", "NIGHT", "PHS", "HS", "WAKE", "C", "CM", "CD", "CV", "AC", "ACM", "ACD", "ACV", "PC", "PCM", "PCD", "PCV"]
          },
          "type": "array"
        },
        "_when": {
          "description": "Extensions for when",
          "items": {
            "$ref": "#/definitions/Element"
          },
          "type": "array"
        },
        "offset": {
          "description": "The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event.",
          "$ref": "#/definitions/unsignedInt"
        },
        "_offset": {
          "description": "Extensions for offset",
          "$ref": "#/definitions/Element"
        }
      },
      "additionalProperties": false
    },
    "Meta": {
      "description": "The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "versionId": {
          "description": "The version specific identifier, as it appears in the version portion of the URL. This value changes when the resource is created, updated, or deleted.",
          "$ref": "#/definitions/id"
        },
        "_versionId": {
          "description": "Extensions for versionId",
          "$ref": "#/definitions/Element"
        },
        "lastUpdated": {
          "description": "When the resource last changed - e.g. when the version changed.",
          "$ref": "#/definitions/instant"
        },
        "_lastUpdated": {
          "description": "Extensions for lastUpdated",
          "$ref": "#/definitions/Element"
        },
        "source": {
          "description": "A uri that identifies the source system of the resource. This provides a minimal amount of [[[Provenance]]] information that can be used to track or differentiate the source of information in the resource. The source may identify another FHIR server, document, message, database, etc.",
          "$ref": "#/definitions/uri"
        },
        "_source": {
          "description": "Extensions for source",
          "$ref": "#/definitions/Element"
        },
        "profile": {
          "description": "A list of profiles (references to [[[StructureDefinition]]] resources) that this resource claims to conform to. The URL is a reference to [[[StructureDefinition.url]]].",
          "items": {
            "$ref": "#/definitions/canonical"
          },
          "type": "array"
        },
        "security": {
          "description": "Security labels applied to this resource. These tags connect specific resources to the overall security policy and infrastructure.",
          "items": {
            "$ref": "#/definitions/Coding"
          },
          "type": "array"
        },
        "tag": {
          "description": "Tags applied to this resource. Tags are intended to be used to identify and relate resources to process and workflow, and applications are not required to consider the tags when interpreting the meaning of a resource.",
          "items": {
            "$ref": "#/definitions/Coding"
          },
          "type": "array"
        }
      },
      "additionalProperties": false
    },
    "ContactDetail": {
      "description": "Specifies contact information for a person or organization.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "name": {
          "description": "The name of an individual to contact.",
          "$ref": "#/definitions/string"
        },
        "_name": {
          "description": "Extensions for name",
          "$ref": "#/definitions/Element"
        },
        "telecom": {
          "description": "The contact details for the individual (if a name was provided) or the organization.",
          "items": {
            "$ref": "#/definitions/ContactPoint"
          },
          "type": "array"
        }
      },
      "additionalProperties": false
    },
    "Contributor": {
      "description": "A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "type": {
          "description": "The type of contributor.",
          "enum": ["author", "editor", "reviewer", "endorser"]
        },
        "_type": {
          "description": "Extensions for type",
          "$ref": "#/definitions/Element"
        },
        "name": {
          "description": "The name of the individual or organization responsible for the contribution.",
          "$ref": "#/definitions/string"
        },
        "_name": {
          "description": "Extensions for name",
          "$ref": "#/definitions/Element"
        },
        "contact": {
          "description": "Contact details to assist a user in finding and communicating with the contributor.",
          "items": {
            "$ref": "#/definitions/ContactDetail"
          },
          "type": "array"
        }
      },
      "additionalProperties": false
    },
    "DataRequirement": {
      "description": "Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "type": {
          "description": "The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.",
          "$ref": "#/definitions/code"
        },
        "_type": {
          "description": "Extensions for type",
          "$ref": "#/definitions/Element"
        },
        "profile": {
          "description": "The profile of the required data, specified as the uri of the profile definition.",
          "items": {
            "$ref": "#/definitions/canonical"
          },
          "type": "array"
        },
        "subjectCodeableConcept": {
          "description": "The intended subjects of the data requirement. If this element is not provided, a Patient subject is assumed.",
          "$ref": "#/definitions/CodeableConcept"
        },
        "subjectReference": {
          "description": "The intended subjects of the data requirement. If this element is not provided, a Patient subject is assumed.",
          "$ref": "#/definitions/Reference"
        },
        "mustSupport": {
          "description": "Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available. \n\nThe value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).",
          "items": {
            "$ref": "#/definitions/string"
          },
          "type": "array"
        },
        "_mustSupport": {
          "description": "Extensions for mustSupport",
          "items": {
            "$ref": "#/definitions/Element"
          },
          "type": "array"
        },
        "codeFilter": {
          "description": "Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.",
          "items": {
            "$ref": "#/definitions/DataRequirement_CodeFilter"
          },
          "type": "array"
        },
        "dateFilter": {
          "description": "Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.",
          "items": {
            "$ref": "#/definitions/DataRequirement_DateFilter"
          },
          "type": "array"
        },
        "limit": {
          "description": "Specifies a maximum number of results that are required (uses the _count search parameter).",
          "$ref": "#/definitions/positiveInt"
        },
        "_limit": {
          "description": "Extensions for limit",
          "$ref": "#/definitions/Element"
        },
        "sort": {
          "description": "Specifies the order of the results to be returned.",
          "items": {
            "$ref": "#/definitions/DataRequirement_Sort"
          },
          "type": "array"
        }
      },
      "additionalProperties": false
    },
    "DataRequirement_CodeFilter": {
      "description": "Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "modifierExtension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "path": {
          "description": "The code-valued attribute of the filter. The specified path SHALL be a FHIRPath resolveable on the specified type of the DataRequirement, and SHALL consist only of identifiers, constant indexers, and .resolve(). The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details). Note that the index must be an integer constant. The path must resolve to an element of type code, Coding, or CodeableConcept.",
          "$ref": "#/definitions/string"
        },
        "_path": {
          "description": "Extensions for path",
          "$ref": "#/definitions/Element"
        },
        "searchParam": {
          "description": "A token parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept.",
          "$ref": "#/definitions/string"
        },
        "_searchParam": {
          "description": "Extensions for searchParam",
          "$ref": "#/definitions/Element"
        },
        "valueSet": {
          "description": "The valueset for the code filter. The valueSet and code elements are additive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.",
          "$ref": "#/definitions/canonical"
        },
        "code": {
          "description": "The codes for the code filter. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes. If codes are specified in addition to a value set, the filter returns items matching a code in the value set or one of the specified codes.",
          "items": {
            "$ref": "#/definitions/Coding"
          },
          "type": "array"
        }
      },
      "additionalProperties": false
    },
    "DataRequirement_DateFilter": {
      "description": "Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "modifierExtension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "path": {
          "description": "The date-valued attribute of the filter. The specified path SHALL be a FHIRPath resolveable on the specified type of the DataRequirement, and SHALL consist only of identifiers, constant indexers, and .resolve(). The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details). Note that the index must be an integer constant. The path must resolve to an element of type date, dateTime, Period, Schedule, or Timing.",
          "$ref": "#/definitions/string"
        },
        "_path": {
          "description": "Extensions for path",
          "$ref": "#/definitions/Element"
        },
        "searchParam": {
          "description": "A date parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule, or Timing.",
          "$ref": "#/definitions/string"
        },
        "_searchParam": {
          "description": "Extensions for searchParam",
          "$ref": "#/definitions/Element"
        },
        "valueDateTime": {
          "description": "The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.",
          "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?$",
          "type": "string"
        },
        "_valueDateTime": {
          "description": "Extensions for valueDateTime",
          "$ref": "#/definitions/Element"
        },
        "valuePeriod": {
          "description": "The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.",
          "$ref": "#/definitions/Period"
        },
        "valueDuration": {
          "description": "The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.",
          "$ref": "#/definitions/Duration"
        }
      },
      "additionalProperties": false
    },
    "DataRequirement_Sort": {
      "description": "Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "modifierExtension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "path": {
          "description": "The attribute of the sort. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant.",
          "$ref": "#/definitions/string"
        },
        "_path": {
          "description": "Extensions for path",
          "$ref": "#/definitions/Element"
        },
        "direction": {
          "description": "The direction of the sort, ascending or descending.",
          "enum": ["ascending", "descending"]
        },
        "_direction": {
          "description": "Extensions for direction",
          "$ref": "#/definitions/Element"
        }
      },
      "additionalProperties": false
    },
    "ParameterDefinition": {
      "description": "The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "name": {
          "description": "The name of the parameter used to allow access to the value of the parameter in evaluation contexts.",
          "$ref": "#/definitions/code"
        },
        "_name": {
          "description": "Extensions for name",
          "$ref": "#/definitions/Element"
        },
        "use": {
          "description": "Whether the parameter is input or output for the module.",
          "$ref": "#/definitions/code"
        },
        "_use": {
          "description": "Extensions for use",
          "$ref": "#/definitions/Element"
        },
        "min": {
          "description": "The minimum number of times this parameter SHALL appear in the request or response.",
          "$ref": "#/definitions/integer"
        },
        "_min": {
          "description": "Extensions for min",
          "$ref": "#/definitions/Element"
        },
        "max": {
          "description": "The maximum number of times this element is permitted to appear in the request or response.",
          "$ref": "#/definitions/string"
        },
        "_max": {
          "description": "Extensions for max",
          "$ref": "#/definitions/Element"
        },
        "documentation": {
          "description": "A brief discussion of what the parameter is for and how it is used by the module.",
          "$ref": "#/definitions/string"
        },
        "_documentation": {
          "description": "Extensions for documentation",
          "$ref": "#/definitions/Element"
        },
        "type": {
          "description": "The type of the parameter.",
          "$ref": "#/definitions/code"
        },
        "_type": {
          "description": "Extensions for type",
          "$ref": "#/definitions/Element"
        },
        "profile": {
          "description": "If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.",
          "$ref": "#/definitions/canonical"
        }
      },
      "additionalProperties": false
    },
    "RelatedArtifact": {
      "description": "Related artifacts such as additional documentation, justification, or bibliographic references.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "type": {
          "description": "The type of relationship to the related artifact.",
          "enum": ["documentation", "justification", "citation", "predecessor", "successor", "derived-from", "depends-on", "composed-of"]
        },
        "_type": {
          "description": "Extensions for type",
          "$ref": "#/definitions/Element"
        },
        "label": {
          "description": "A short label that can be used to reference the citation from elsewhere in the containing artifact, such as a footnote index.",
          "$ref": "#/definitions/string"
        },
        "_label": {
          "description": "Extensions for label",
          "$ref": "#/definitions/Element"
        },
        "display": {
          "description": "A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.",
          "$ref": "#/definitions/string"
        },
        "_display": {
          "description": "Extensions for display",
          "$ref": "#/definitions/Element"
        },
        "citation": {
          "description": "A bibliographic citation for the related artifact. This text SHOULD be formatted according to an accepted citation format.",
          "$ref": "#/definitions/markdown"
        },
        "_citation": {
          "description": "Extensions for citation",
          "$ref": "#/definitions/Element"
        },
        "url": {
          "description": "A url for the artifact that can be followed to access the actual content.",
          "$ref": "#/definitions/url"
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
          "$ref": "#/definitions/canonical"
        }
      },
      "additionalProperties": false
    },
    "TriggerDefinition": {
      "description": "A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "type": {
          "description": "The type of triggering event.",
          "enum": ["named-event", "periodic", "data-changed", "data-added", "data-modified", "data-removed", "data-accessed", "data-access-ended"]
        },
        "_type": {
          "description": "Extensions for type",
          "$ref": "#/definitions/Element"
        },
        "name": {
          "description": "A formal name for the event. This may be an absolute URI that identifies the event formally (e.g. from a trigger registry), or a simple relative URI that identifies the event in a local context.",
          "$ref": "#/definitions/string"
        },
        "_name": {
          "description": "Extensions for name",
          "$ref": "#/definitions/Element"
        },
        "timingTiming": {
          "description": "The timing of the event (if this is a periodic trigger).",
          "$ref": "#/definitions/Timing"
        },
        "timingReference": {
          "description": "The timing of the event (if this is a periodic trigger).",
          "$ref": "#/definitions/Reference"
        },
        "timingDate": {
          "description": "The timing of the event (if this is a periodic trigger).",
          "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?$",
          "type": "string"
        },
        "_timingDate": {
          "description": "Extensions for timingDate",
          "$ref": "#/definitions/Element"
        },
        "timingDateTime": {
          "description": "The timing of the event (if this is a periodic trigger).",
          "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?$",
          "type": "string"
        },
        "_timingDateTime": {
          "description": "Extensions for timingDateTime",
          "$ref": "#/definitions/Element"
        },
        "data": {
          "description": "The triggering data of the event (if this is a data trigger). If more than one data is requirement is specified, then all the data requirements must be true.",
          "items": {
            "$ref": "#/definitions/DataRequirement"
          },
          "type": "array"
        },
        "condition": {
          "description": "A boolean-valued expression that is evaluated in the context of the container of the trigger definition and returns whether or not the trigger fires.",
          "$ref": "#/definitions/Expression"
        }
      },
      "additionalProperties": false
    },
    "UsageContext": {
      "description": "Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care).",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
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
        },
        "valueReference": {
          "description": "A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.",
          "$ref": "#/definitions/Reference"
        }
      },
      "additionalProperties": false,
      "required": ["code"]
    },
    "Dosage": {
      "description": "Indicates how the medication is/was taken or should be taken by the patient.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "modifierExtension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "sequence": {
          "description": "Indicates the order in which the dosage instructions should be applied or interpreted.",
          "$ref": "#/definitions/integer"
        },
        "_sequence": {
          "description": "Extensions for sequence",
          "$ref": "#/definitions/Element"
        },
        "text": {
          "description": "Free text dosage instructions e.g. SIG.",
          "$ref": "#/definitions/string"
        },
        "_text": {
          "description": "Extensions for text",
          "$ref": "#/definitions/Element"
        },
        "additionalInstruction": {
          "description": "Supplemental instructions to the patient on how to take the medication  (e.g. \"with meals\" or\"take half to one hour before food\") or warnings for the patient about the medication (e.g. \"may cause drowsiness\" or \"avoid exposure of skin to direct sunlight or sunlamps\").",
          "items": {
            "$ref": "#/definitions/CodeableConcept"
          },
          "type": "array"
        },
        "patientInstruction": {
          "description": "Instructions in terms that are understood by the patient or consumer.",
          "$ref": "#/definitions/string"
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
          "pattern": "^true|false$",
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
        "doseAndRate": {
          "description": "The amount of medication administered.",
          "items": {
            "$ref": "#/definitions/Dosage_DoseAndRate"
          },
          "type": "array"
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
        }
      },
      "additionalProperties": false
    },
    "Dosage_DoseAndRate": {
      "description": "Indicates how the medication is/was taken or should be taken by the patient.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "modifierExtension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "type": {
          "description": "The kind of dose or rate specified, for example, ordered or calculated.",
          "$ref": "#/definitions/CodeableConcept"
        },
        "doseRange": {
          "description": "Amount of medication per dose.",
          "$ref": "#/definitions/Range"
        },
        "doseQuantity": {
          "description": "Amount of medication per dose.",
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
        "rateQuantity": {
          "description": "Amount of medication per unit of time.",
          "$ref": "#/definitions/Quantity"
        }
      },
      "additionalProperties": false
    },
    "Population": {
      "description": "A populatioof people with some set of grouping criteria.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "modifierExtension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "ageRange": {
          "description": "The age of the specific population.",
          "$ref": "#/definitions/Range"
        },
        "ageCodeableConcept": {
          "description": "The age of the specific population.",
          "$ref": "#/definitions/CodeableConcept"
        },
        "gender": {
          "description": "The gender of the specific population.",
          "$ref": "#/definitions/CodeableConcept"
        },
        "race": {
          "description": "Race of the specific population.",
          "$ref": "#/definitions/CodeableConcept"
        },
        "physiologicalCondition": {
          "description": "The existing physiological conditions of the specific population to which this applies.",
          "$ref": "#/definitions/CodeableConcept"
        }
      },
      "additionalProperties": false
    },
    "ProductShelfLife": {
      "description": "The shelf-life and storage information for a medicinal product item or container can be described using this class.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "modifierExtension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "identifier": {
          "description": "Unique identifier for the packaged Medicinal Product.",
          "$ref": "#/definitions/Identifier"
        },
        "type": {
          "description": "This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified.",
          "$ref": "#/definitions/CodeableConcept"
        },
        "period": {
          "description": "The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.",
          "$ref": "#/definitions/Quantity"
        },
        "specialPrecautionsForStorage": {
          "description": "Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified.",
          "items": {
            "$ref": "#/definitions/CodeableConcept"
          },
          "type": "array"
        }
      },
      "additionalProperties": false,
      "required": ["period", "type"]
    },
    "ProdCharacteristic": {
      "description": "The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "modifierExtension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "height": {
          "description": "Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.",
          "$ref": "#/definitions/Quantity"
        },
        "width": {
          "description": "Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.",
          "$ref": "#/definitions/Quantity"
        },
        "depth": {
          "description": "Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.",
          "$ref": "#/definitions/Quantity"
        },
        "weight": {
          "description": "Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.",
          "$ref": "#/definitions/Quantity"
        },
        "nominalVolume": {
          "description": "Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.",
          "$ref": "#/definitions/Quantity"
        },
        "externalDiameter": {
          "description": "Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.",
          "$ref": "#/definitions/Quantity"
        },
        "shape": {
          "description": "Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.",
          "$ref": "#/definitions/string"
        },
        "_shape": {
          "description": "Extensions for shape",
          "$ref": "#/definitions/Element"
        },
        "color": {
          "description": "Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.",
          "items": {
            "$ref": "#/definitions/string"
          },
          "type": "array"
        },
        "_color": {
          "description": "Extensions for color",
          "items": {
            "$ref": "#/definitions/Element"
          },
          "type": "array"
        },
        "imprint": {
          "description": "Where applicable, the imprint can be specified as text.",
          "items": {
            "$ref": "#/definitions/string"
          },
          "type": "array"
        },
        "_imprint": {
          "description": "Extensions for imprint",
          "items": {
            "$ref": "#/definitions/Element"
          },
          "type": "array"
        },
        "image": {
          "description": "Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations.",
          "items": {
            "$ref": "#/definitions/Attachment"
          },
          "type": "array"
        },
        "scoring": {
          "description": "Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.",
          "$ref": "#/definitions/CodeableConcept"
        }
      },
      "additionalProperties": false
    },
    "MarketingStatus": {
      "description": "The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "modifierExtension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "country": {
          "description": "The country in which the marketing authorisation has been granted shall be specified It should be specified using the ISO 3166 ‑ 1 alpha-2 code elements.",
          "$ref": "#/definitions/CodeableConcept"
        },
        "jurisdiction": {
          "description": "Where a Medicines Regulatory Agency has granted a marketing authorisation for which specific provisions within a jurisdiction apply, the jurisdiction can be specified using an appropriate controlled terminology The controlled term and the controlled term identifier shall be specified.",
          "$ref": "#/definitions/CodeableConcept"
        },
        "status": {
          "description": "This attribute provides information on the status of the marketing of the medicinal product See ISO/TS 20443 for more information and examples.",
          "$ref": "#/definitions/CodeableConcept"
        },
        "dateRange": {
          "description": "The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain.",
          "$ref": "#/definitions/Period"
        },
        "restoreDate": {
          "description": "The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain.",
          "$ref": "#/definitions/dateTime"
        },
        "_restoreDate": {
          "description": "Extensions for restoreDate",
          "$ref": "#/definitions/Element"
        }
      },
      "additionalProperties": false,
      "required": ["country", "dateRange", "status"]
    },
    "SubstanceAmount": {
      "description": "Chemical substances are a single substance type whose primary defining element is the molecular structure. Chemical substances shall be defined on the basis of their complete covalent molecular structure; the presence of a salt (counter-ion) and/or solvates (water, alcohols) is also captured. Purity, grade, physical form or particle size are not taken into account in the definition of a chemical substance or in the assignment of a Substance ID.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "modifierExtension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "amountQuantity": {
          "description": "Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.",
          "$ref": "#/definitions/Quantity"
        },
        "amountRange": {
          "description": "Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.",
          "$ref": "#/definitions/Range"
        },
        "amountString": {
          "description": "Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field.",
          "pattern": "^[ \\r\\n\\t\\S]+$",
          "type": "string"
        },
        "_amountString": {
          "description": "Extensions for amountString",
          "$ref": "#/definitions/Element"
        },
        "amountType": {
          "description": "Most elements that require a quantitative value will also have a field called amount type. Amount type should always be specified because the actual value of the amount is often dependent on it. EXAMPLE: In capturing the actual relative amounts of substances or molecular fragments it is essential to indicate whether the amount refers to a mole ratio or weight ratio. For any given element an effort should be made to use same the amount type for all related definitional elements.",
          "$ref": "#/definitions/CodeableConcept"
        },
        "amountText": {
          "description": "A textual comment on a numeric value.",
          "$ref": "#/definitions/string"
        },
        "_amountText": {
          "description": "Extensions for amountText",
          "$ref": "#/definitions/Element"
        },
        "referenceRange": {
          "description": "Reference range of possible or expected values.",
          "$ref": "#/definitions/SubstanceAmount_ReferenceRange"
        }
      },
      "additionalProperties": false
    },
    "SubstanceAmount_ReferenceRange": {
      "description": "Chemical substances are a single substance type whose primary defining element is the molecular structure. Chemical substances shall be defined on the basis of their complete covalent molecular structure; the presence of a salt (counter-ion) and/or solvates (water, alcohols) is also captured. Purity, grade, physical form or particle size are not taken into account in the definition of a chemical substance or in the assignment of a Substance ID.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "modifierExtension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "lowLimit": {
          "description": "Lower limit possible or expected.",
          "$ref": "#/definitions/Quantity"
        },
        "highLimit": {
          "description": "Upper limit possible or expected.",
          "$ref": "#/definitions/Quantity"
        }
      },
      "additionalProperties": false
    },
    "Expression": {
      "description": "A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "description": {
          "description": "A brief, natural language description of the condition that effectively communicates the intended semantics.",
          "$ref": "#/definitions/string"
        },
        "_description": {
          "description": "Extensions for description",
          "$ref": "#/definitions/Element"
        },
        "name": {
          "description": "A short name assigned to the expression to allow for multiple reuse of the expression in the context where it is defined.",
          "$ref": "#/definitions/id"
        },
        "_name": {
          "description": "Extensions for name",
          "$ref": "#/definitions/Element"
        },
        "language": {
          "description": "The media type of the language for the expression.",
          "enum": ["text/cql", "text/fhirpath", "application/x-fhir-query"]
        },
        "_language": {
          "description": "Extensions for language",
          "$ref": "#/definitions/Element"
        },
        "expression": {
          "description": "An expression in the specified language that returns a value.",
          "$ref": "#/definitions/string"
        },
        "_expression": {
          "description": "Extensions for expression",
          "$ref": "#/definitions/Element"
        },
        "reference": {
          "description": "A URI that defines where the expression is found.",
          "$ref": "#/definitions/uri"
        },
        "_reference": {
          "description": "Extensions for reference",
          "$ref": "#/definitions/Element"
        }
      },
      "additionalProperties": false
    },
    "ElementDefinition": {
      "description": "Captures constraints on each element within the resource, profile, or extension.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "modifierExtension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "path": {
          "description": "The path identifies the element and is expressed as a \".\"-separated list of ancestor elements, beginning with the name of the resource or extension.",
          "$ref": "#/definitions/string"
        },
        "_path": {
          "description": "Extensions for path",
          "$ref": "#/definitions/Element"
        },
        "representation": {
          "description": "Codes that define how this element is represented in instances, when the deviation varies from the normal case.",
          "items": {
            "enum": ["xmlAttr", "xmlText", "typeAttr", "cdaText", "xhtml"]
          },
          "type": "array"
        },
        "_representation": {
          "description": "Extensions for representation",
          "items": {
            "$ref": "#/definitions/Element"
          },
          "type": "array"
        },
        "sliceName": {
          "description": "The name of this element definition slice, when slicing is working. The name must be a token with no dots or spaces. This is a unique name referring to a specific set of constraints applied to this element, used to provide a name to different slices of the same element.",
          "$ref": "#/definitions/string"
        },
        "_sliceName": {
          "description": "Extensions for sliceName",
          "$ref": "#/definitions/Element"
        },
        "sliceIsConstraining": {
          "description": "If true, indicates that this slice definition is constraining a slice definition with the same name in an inherited profile. If false, the slice is not overriding any slice in an inherited profile. If missing, the slice might or might not be overriding a slice in an inherited profile, depending on the sliceName.",
          "$ref": "#/definitions/boolean"
        },
        "_sliceIsConstraining": {
          "description": "Extensions for sliceIsConstraining",
          "$ref": "#/definitions/Element"
        },
        "label": {
          "description": "A single preferred label which is the text to display beside the element indicating its meaning or to use to prompt for the element in a user display or form.",
          "$ref": "#/definitions/string"
        },
        "_label": {
          "description": "Extensions for label",
          "$ref": "#/definitions/Element"
        },
        "code": {
          "description": "A code that has the same meaning as the element in a particular terminology.",
          "items": {
            "$ref": "#/definitions/Coding"
          },
          "type": "array"
        },
        "slicing": {
          "description": "Indicates that the element is sliced into a set of alternative definitions (i.e. in a structure definition, there are multiple different constraints on a single element in the base resource). Slicing can be used in any resource that has cardinality ..* on the base resource, or any resource with a choice of types. The set of slices is any elements that come after this in the element sequence that have the same path, until a shorter path occurs (the shorter path terminates the set).",
          "$ref": "#/definitions/ElementDefinition_Slicing"
        },
        "short": {
          "description": "A concise description of what this element means (e.g. for use in autogenerated summaries).",
          "$ref": "#/definitions/string"
        },
        "_short": {
          "description": "Extensions for short",
          "$ref": "#/definitions/Element"
        },
        "definition": {
          "description": "Provides a complete explanation of the meaning of the data element for human readability.  For the case of elements derived from existing elements (e.g. constraints), the definition SHALL be consistent with the base definition, but convey the meaning of the element in the particular context of use of the resource. (Note: The text you are reading is specified in ElementDefinition.definition).",
          "$ref": "#/definitions/markdown"
        },
        "_definition": {
          "description": "Extensions for definition",
          "$ref": "#/definitions/Element"
        },
        "comment": {
          "description": "Explanatory notes and implementation guidance about the data element, including notes about how to use the data properly, exceptions to proper use, etc. (Note: The text you are reading is specified in ElementDefinition.comment).",
          "$ref": "#/definitions/markdown"
        },
        "_comment": {
          "description": "Extensions for comment",
          "$ref": "#/definitions/Element"
        },
        "requirements": {
          "description": "This element is for traceability of why the element was created and why the constraints exist as they do. This may be used to point to source materials or specifications that drove the structure of this element.",
          "$ref": "#/definitions/markdown"
        },
        "_requirements": {
          "description": "Extensions for requirements",
          "$ref": "#/definitions/Element"
        },
        "alias": {
          "description": "Identifies additional names by which this element might also be known.",
          "items": {
            "$ref": "#/definitions/string"
          },
          "type": "array"
        },
        "_alias": {
          "description": "Extensions for alias",
          "items": {
            "$ref": "#/definitions/Element"
          },
          "type": "array"
        },
        "min": {
          "description": "The minimum number of times this element SHALL appear in the instance.",
          "$ref": "#/definitions/unsignedInt"
        },
        "_min": {
          "description": "Extensions for min",
          "$ref": "#/definitions/Element"
        },
        "max": {
          "description": "The maximum number of times this element is permitted to appear in the instance.",
          "$ref": "#/definitions/string"
        },
        "_max": {
          "description": "Extensions for max",
          "$ref": "#/definitions/Element"
        },
        "base": {
          "description": "Information about the base definition of the element, provided to make it unnecessary for tools to trace the deviation of the element through the derived and related profiles. When the element definition is not the original definition of an element - i.g. either in a constraint on another type, or for elements from a super type in a snap shot - then the information in provided in the element definition may be different to the base definition. On the original definition of the element, it will be same.",
          "$ref": "#/definitions/ElementDefinition_Base"
        },
        "contentReference": {
          "description": "Identifies an element defined elsewhere in the definition whose content rules should be applied to the current element. ContentReferences bring across all the rules that are in the ElementDefinition for the element, including definitions, cardinality constraints, bindings, invariants etc.",
          "$ref": "#/definitions/uri"
        },
        "_contentReference": {
          "description": "Extensions for contentReference",
          "$ref": "#/definitions/Element"
        },
        "type": {
          "description": "The data type or resource that the value of this element is permitted to be.",
          "items": {
            "$ref": "#/definitions/ElementDefinition_Type"
          },
          "type": "array"
        },
        "defaultValueBase64Binary": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "pattern": "^(\\s*([0-9a-zA-Z\\+/=]){4}\\s*)+$",
          "type": "string"
        },
        "_defaultValueBase64Binary": {
          "description": "Extensions for defaultValueBase64Binary",
          "$ref": "#/definitions/Element"
        },
        "defaultValueBoolean": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "pattern": "^true|false$",
          "type": "boolean"
        },
        "_defaultValueBoolean": {
          "description": "Extensions for defaultValueBoolean",
          "$ref": "#/definitions/Element"
        },
        "defaultValueCanonical": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "pattern": "^\\S*$",
          "type": "string"
        },
        "_defaultValueCanonical": {
          "description": "Extensions for defaultValueCanonical",
          "$ref": "#/definitions/Element"
        },
        "defaultValueCode": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "pattern": "^[^\\s]+(\\s[^\\s]+)*$",
          "type": "string"
        },
        "_defaultValueCode": {
          "description": "Extensions for defaultValueCode",
          "$ref": "#/definitions/Element"
        },
        "defaultValueDate": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?$",
          "type": "string"
        },
        "_defaultValueDate": {
          "description": "Extensions for defaultValueDate",
          "$ref": "#/definitions/Element"
        },
        "defaultValueDateTime": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?$",
          "type": "string"
        },
        "_defaultValueDateTime": {
          "description": "Extensions for defaultValueDateTime",
          "$ref": "#/definitions/Element"
        },
        "defaultValueDecimal": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "pattern": "^-?(0|[1-9][0-9]*)(\\.[0-9]+)?([eE][+-]?[0-9]+)?$",
          "type": "number"
        },
        "_defaultValueDecimal": {
          "description": "Extensions for defaultValueDecimal",
          "$ref": "#/definitions/Element"
        },
        "defaultValueId": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "pattern": "^[A-Za-z0-9\\-\\.]{1,64}$",
          "type": "string"
        },
        "_defaultValueId": {
          "description": "Extensions for defaultValueId",
          "$ref": "#/definitions/Element"
        },
        "defaultValueInstant": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))$",
          "type": "string"
        },
        "_defaultValueInstant": {
          "description": "Extensions for defaultValueInstant",
          "$ref": "#/definitions/Element"
        },
        "defaultValueInteger": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "pattern": "^-?([0]|([1-9][0-9]*))$",
          "type": "number"
        },
        "_defaultValueInteger": {
          "description": "Extensions for defaultValueInteger",
          "$ref": "#/definitions/Element"
        },
        "defaultValueMarkdown": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "pattern": "^[ \\r\\n\\t\\S]+$",
          "type": "string"
        },
        "_defaultValueMarkdown": {
          "description": "Extensions for defaultValueMarkdown",
          "$ref": "#/definitions/Element"
        },
        "defaultValueOid": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "pattern": "^urn:oid:[0-2](\\.(0|[1-9][0-9]*))+$",
          "type": "string"
        },
        "_defaultValueOid": {
          "description": "Extensions for defaultValueOid",
          "$ref": "#/definitions/Element"
        },
        "defaultValuePositiveInt": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "pattern": "^[1-9][0-9]*$",
          "type": "number"
        },
        "_defaultValuePositiveInt": {
          "description": "Extensions for defaultValuePositiveInt",
          "$ref": "#/definitions/Element"
        },
        "defaultValueString": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "pattern": "^[ \\r\\n\\t\\S]+$",
          "type": "string"
        },
        "_defaultValueString": {
          "description": "Extensions for defaultValueString",
          "$ref": "#/definitions/Element"
        },
        "defaultValueTime": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "pattern": "^([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?$",
          "type": "string"
        },
        "_defaultValueTime": {
          "description": "Extensions for defaultValueTime",
          "$ref": "#/definitions/Element"
        },
        "defaultValueUnsignedInt": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "pattern": "^[0]|([1-9][0-9]*)$",
          "type": "number"
        },
        "_defaultValueUnsignedInt": {
          "description": "Extensions for defaultValueUnsignedInt",
          "$ref": "#/definitions/Element"
        },
        "defaultValueUri": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "pattern": "^\\S*$",
          "type": "string"
        },
        "_defaultValueUri": {
          "description": "Extensions for defaultValueUri",
          "$ref": "#/definitions/Element"
        },
        "defaultValueUrl": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "pattern": "^\\S*$",
          "type": "string"
        },
        "_defaultValueUrl": {
          "description": "Extensions for defaultValueUrl",
          "$ref": "#/definitions/Element"
        },
        "defaultValueUuid": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "pattern": "^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$",
          "type": "string"
        },
        "_defaultValueUuid": {
          "description": "Extensions for defaultValueUuid",
          "$ref": "#/definitions/Element"
        },
        "defaultValueAddress": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "$ref": "#/definitions/Address"
        },
        "defaultValueAge": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "$ref": "#/definitions/Age"
        },
        "defaultValueAnnotation": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "$ref": "#/definitions/Annotation"
        },
        "defaultValueAttachment": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "$ref": "#/definitions/Attachment"
        },
        "defaultValueCodeableConcept": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "$ref": "#/definitions/CodeableConcept"
        },
        "defaultValueCoding": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "$ref": "#/definitions/Coding"
        },
        "defaultValueContactPoint": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "$ref": "#/definitions/ContactPoint"
        },
        "defaultValueCount": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "$ref": "#/definitions/Count"
        },
        "defaultValueDistance": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "$ref": "#/definitions/Distance"
        },
        "defaultValueDuration": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "$ref": "#/definitions/Duration"
        },
        "defaultValueHumanName": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "$ref": "#/definitions/HumanName"
        },
        "defaultValueIdentifier": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "$ref": "#/definitions/Identifier"
        },
        "defaultValueMoney": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "$ref": "#/definitions/Money"
        },
        "defaultValuePeriod": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "$ref": "#/definitions/Period"
        },
        "defaultValueQuantity": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "$ref": "#/definitions/Quantity"
        },
        "defaultValueRange": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "$ref": "#/definitions/Range"
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
        "defaultValueTiming": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "$ref": "#/definitions/Timing"
        },
        "defaultValueContactDetail": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "$ref": "#/definitions/ContactDetail"
        },
        "defaultValueContributor": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "$ref": "#/definitions/Contributor"
        },
        "defaultValueDataRequirement": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "$ref": "#/definitions/DataRequirement"
        },
        "defaultValueExpression": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "$ref": "#/definitions/Expression"
        },
        "defaultValueParameterDefinition": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "$ref": "#/definitions/ParameterDefinition"
        },
        "defaultValueRelatedArtifact": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "$ref": "#/definitions/RelatedArtifact"
        },
        "defaultValueTriggerDefinition": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "$ref": "#/definitions/TriggerDefinition"
        },
        "defaultValueUsageContext": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "$ref": "#/definitions/UsageContext"
        },
        "defaultValueDosage": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "$ref": "#/definitions/Dosage"
        },
        "defaultValueMeta": {
          "description": "The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').",
          "$ref": "#/definitions/Meta"
        },
        "meaningWhenMissing": {
          "description": "The Implicit meaning that is to be understood when this element is missing (e.g. 'when this element is missing, the period is ongoing').",
          "$ref": "#/definitions/markdown"
        },
        "_meaningWhenMissing": {
          "description": "Extensions for meaningWhenMissing",
          "$ref": "#/definitions/Element"
        },
        "orderMeaning": {
          "description": "If present, indicates that the order of the repeating element has meaning and describes what that meaning is.  If absent, it means that the order of the element has no meaning.",
          "$ref": "#/definitions/string"
        },
        "_orderMeaning": {
          "description": "Extensions for orderMeaning",
          "$ref": "#/definitions/Element"
        },
        "fixedBase64Binary": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "pattern": "^(\\s*([0-9a-zA-Z\\+/=]){4}\\s*)+$",
          "type": "string"
        },
        "_fixedBase64Binary": {
          "description": "Extensions for fixedBase64Binary",
          "$ref": "#/definitions/Element"
        },
        "fixedBoolean": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "pattern": "^true|false$",
          "type": "boolean"
        },
        "_fixedBoolean": {
          "description": "Extensions for fixedBoolean",
          "$ref": "#/definitions/Element"
        },
        "fixedCanonical": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "pattern": "^\\S*$",
          "type": "string"
        },
        "_fixedCanonical": {
          "description": "Extensions for fixedCanonical",
          "$ref": "#/definitions/Element"
        },
        "fixedCode": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "pattern": "^[^\\s]+(\\s[^\\s]+)*$",
          "type": "string"
        },
        "_fixedCode": {
          "description": "Extensions for fixedCode",
          "$ref": "#/definitions/Element"
        },
        "fixedDate": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?$",
          "type": "string"
        },
        "_fixedDate": {
          "description": "Extensions for fixedDate",
          "$ref": "#/definitions/Element"
        },
        "fixedDateTime": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?$",
          "type": "string"
        },
        "_fixedDateTime": {
          "description": "Extensions for fixedDateTime",
          "$ref": "#/definitions/Element"
        },
        "fixedDecimal": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "pattern": "^-?(0|[1-9][0-9]*)(\\.[0-9]+)?([eE][+-]?[0-9]+)?$",
          "type": "number"
        },
        "_fixedDecimal": {
          "description": "Extensions for fixedDecimal",
          "$ref": "#/definitions/Element"
        },
        "fixedId": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "pattern": "^[A-Za-z0-9\\-\\.]{1,64}$",
          "type": "string"
        },
        "_fixedId": {
          "description": "Extensions for fixedId",
          "$ref": "#/definitions/Element"
        },
        "fixedInstant": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))$",
          "type": "string"
        },
        "_fixedInstant": {
          "description": "Extensions for fixedInstant",
          "$ref": "#/definitions/Element"
        },
        "fixedInteger": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "pattern": "^-?([0]|([1-9][0-9]*))$",
          "type": "number"
        },
        "_fixedInteger": {
          "description": "Extensions for fixedInteger",
          "$ref": "#/definitions/Element"
        },
        "fixedMarkdown": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "pattern": "^[ \\r\\n\\t\\S]+$",
          "type": "string"
        },
        "_fixedMarkdown": {
          "description": "Extensions for fixedMarkdown",
          "$ref": "#/definitions/Element"
        },
        "fixedOid": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "pattern": "^urn:oid:[0-2](\\.(0|[1-9][0-9]*))+$",
          "type": "string"
        },
        "_fixedOid": {
          "description": "Extensions for fixedOid",
          "$ref": "#/definitions/Element"
        },
        "fixedPositiveInt": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "pattern": "^[1-9][0-9]*$",
          "type": "number"
        },
        "_fixedPositiveInt": {
          "description": "Extensions for fixedPositiveInt",
          "$ref": "#/definitions/Element"
        },
        "fixedString": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "pattern": "^[ \\r\\n\\t\\S]+$",
          "type": "string"
        },
        "_fixedString": {
          "description": "Extensions for fixedString",
          "$ref": "#/definitions/Element"
        },
        "fixedTime": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "pattern": "^([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?$",
          "type": "string"
        },
        "_fixedTime": {
          "description": "Extensions for fixedTime",
          "$ref": "#/definitions/Element"
        },
        "fixedUnsignedInt": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "pattern": "^[0]|([1-9][0-9]*)$",
          "type": "number"
        },
        "_fixedUnsignedInt": {
          "description": "Extensions for fixedUnsignedInt",
          "$ref": "#/definitions/Element"
        },
        "fixedUri": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "pattern": "^\\S*$",
          "type": "string"
        },
        "_fixedUri": {
          "description": "Extensions for fixedUri",
          "$ref": "#/definitions/Element"
        },
        "fixedUrl": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "pattern": "^\\S*$",
          "type": "string"
        },
        "_fixedUrl": {
          "description": "Extensions for fixedUrl",
          "$ref": "#/definitions/Element"
        },
        "fixedUuid": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "pattern": "^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$",
          "type": "string"
        },
        "_fixedUuid": {
          "description": "Extensions for fixedUuid",
          "$ref": "#/definitions/Element"
        },
        "fixedAddress": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "$ref": "#/definitions/Address"
        },
        "fixedAge": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "$ref": "#/definitions/Age"
        },
        "fixedAnnotation": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "$ref": "#/definitions/Annotation"
        },
        "fixedAttachment": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "$ref": "#/definitions/Attachment"
        },
        "fixedCodeableConcept": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "$ref": "#/definitions/CodeableConcept"
        },
        "fixedCoding": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "$ref": "#/definitions/Coding"
        },
        "fixedContactPoint": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "$ref": "#/definitions/ContactPoint"
        },
        "fixedCount": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "$ref": "#/definitions/Count"
        },
        "fixedDistance": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "$ref": "#/definitions/Distance"
        },
        "fixedDuration": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "$ref": "#/definitions/Duration"
        },
        "fixedHumanName": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "$ref": "#/definitions/HumanName"
        },
        "fixedIdentifier": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "$ref": "#/definitions/Identifier"
        },
        "fixedMoney": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "$ref": "#/definitions/Money"
        },
        "fixedPeriod": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "$ref": "#/definitions/Period"
        },
        "fixedQuantity": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "$ref": "#/definitions/Quantity"
        },
        "fixedRange": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "$ref": "#/definitions/Range"
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
        "fixedTiming": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "$ref": "#/definitions/Timing"
        },
        "fixedContactDetail": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "$ref": "#/definitions/ContactDetail"
        },
        "fixedContributor": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "$ref": "#/definitions/Contributor"
        },
        "fixedDataRequirement": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "$ref": "#/definitions/DataRequirement"
        },
        "fixedExpression": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "$ref": "#/definitions/Expression"
        },
        "fixedParameterDefinition": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "$ref": "#/definitions/ParameterDefinition"
        },
        "fixedRelatedArtifact": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "$ref": "#/definitions/RelatedArtifact"
        },
        "fixedTriggerDefinition": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "$ref": "#/definitions/TriggerDefinition"
        },
        "fixedUsageContext": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "$ref": "#/definitions/UsageContext"
        },
        "fixedDosage": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "$ref": "#/definitions/Dosage"
        },
        "fixedMeta": {
          "description": "Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.",
          "$ref": "#/definitions/Meta"
        },
        "patternBase64Binary": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "pattern": "^(\\s*([0-9a-zA-Z\\+/=]){4}\\s*)+$",
          "type": "string"
        },
        "_patternBase64Binary": {
          "description": "Extensions for patternBase64Binary",
          "$ref": "#/definitions/Element"
        },
        "patternBoolean": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "pattern": "^true|false$",
          "type": "boolean"
        },
        "_patternBoolean": {
          "description": "Extensions for patternBoolean",
          "$ref": "#/definitions/Element"
        },
        "patternCanonical": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "pattern": "^\\S*$",
          "type": "string"
        },
        "_patternCanonical": {
          "description": "Extensions for patternCanonical",
          "$ref": "#/definitions/Element"
        },
        "patternCode": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "pattern": "^[^\\s]+(\\s[^\\s]+)*$",
          "type": "string"
        },
        "_patternCode": {
          "description": "Extensions for patternCode",
          "$ref": "#/definitions/Element"
        },
        "patternDate": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?$",
          "type": "string"
        },
        "_patternDate": {
          "description": "Extensions for patternDate",
          "$ref": "#/definitions/Element"
        },
        "patternDateTime": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?$",
          "type": "string"
        },
        "_patternDateTime": {
          "description": "Extensions for patternDateTime",
          "$ref": "#/definitions/Element"
        },
        "patternDecimal": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "pattern": "^-?(0|[1-9][0-9]*)(\\.[0-9]+)?([eE][+-]?[0-9]+)?$",
          "type": "number"
        },
        "_patternDecimal": {
          "description": "Extensions for patternDecimal",
          "$ref": "#/definitions/Element"
        },
        "patternId": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "pattern": "^[A-Za-z0-9\\-\\.]{1,64}$",
          "type": "string"
        },
        "_patternId": {
          "description": "Extensions for patternId",
          "$ref": "#/definitions/Element"
        },
        "patternInstant": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))$",
          "type": "string"
        },
        "_patternInstant": {
          "description": "Extensions for patternInstant",
          "$ref": "#/definitions/Element"
        },
        "patternInteger": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "pattern": "^-?([0]|([1-9][0-9]*))$",
          "type": "number"
        },
        "_patternInteger": {
          "description": "Extensions for patternInteger",
          "$ref": "#/definitions/Element"
        },
        "patternMarkdown": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "pattern": "^[ \\r\\n\\t\\S]+$",
          "type": "string"
        },
        "_patternMarkdown": {
          "description": "Extensions for patternMarkdown",
          "$ref": "#/definitions/Element"
        },
        "patternOid": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "pattern": "^urn:oid:[0-2](\\.(0|[1-9][0-9]*))+$",
          "type": "string"
        },
        "_patternOid": {
          "description": "Extensions for patternOid",
          "$ref": "#/definitions/Element"
        },
        "patternPositiveInt": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "pattern": "^[1-9][0-9]*$",
          "type": "number"
        },
        "_patternPositiveInt": {
          "description": "Extensions for patternPositiveInt",
          "$ref": "#/definitions/Element"
        },
        "patternString": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "pattern": "^[ \\r\\n\\t\\S]+$",
          "type": "string"
        },
        "_patternString": {
          "description": "Extensions for patternString",
          "$ref": "#/definitions/Element"
        },
        "patternTime": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "pattern": "^([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?$",
          "type": "string"
        },
        "_patternTime": {
          "description": "Extensions for patternTime",
          "$ref": "#/definitions/Element"
        },
        "patternUnsignedInt": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "pattern": "^[0]|([1-9][0-9]*)$",
          "type": "number"
        },
        "_patternUnsignedInt": {
          "description": "Extensions for patternUnsignedInt",
          "$ref": "#/definitions/Element"
        },
        "patternUri": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "pattern": "^\\S*$",
          "type": "string"
        },
        "_patternUri": {
          "description": "Extensions for patternUri",
          "$ref": "#/definitions/Element"
        },
        "patternUrl": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "pattern": "^\\S*$",
          "type": "string"
        },
        "_patternUrl": {
          "description": "Extensions for patternUrl",
          "$ref": "#/definitions/Element"
        },
        "patternUuid": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "pattern": "^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$",
          "type": "string"
        },
        "_patternUuid": {
          "description": "Extensions for patternUuid",
          "$ref": "#/definitions/Element"
        },
        "patternAddress": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/Address"
        },
        "patternAge": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/Age"
        },
        "patternAnnotation": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/Annotation"
        },
        "patternAttachment": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/Attachment"
        },
        "patternCodeableConcept": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/CodeableConcept"
        },
        "patternCoding": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/Coding"
        },
        "patternContactPoint": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/ContactPoint"
        },
        "patternCount": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/Count"
        },
        "patternDistance": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/Distance"
        },
        "patternDuration": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/Duration"
        },
        "patternHumanName": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/HumanName"
        },
        "patternIdentifier": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/Identifier"
        },
        "patternMoney": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/Money"
        },
        "patternPeriod": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/Period"
        },
        "patternQuantity": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/Quantity"
        },
        "patternRange": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/Range"
        },
        "patternRatio": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/Ratio"
        },
        "patternReference": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/Reference"
        },
        "patternSampledData": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/SampledData"
        },
        "patternSignature": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/Signature"
        },
        "patternTiming": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/Timing"
        },
        "patternContactDetail": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/ContactDetail"
        },
        "patternContributor": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/Contributor"
        },
        "patternDataRequirement": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/DataRequirement"
        },
        "patternExpression": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/Expression"
        },
        "patternParameterDefinition": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/ParameterDefinition"
        },
        "patternRelatedArtifact": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/RelatedArtifact"
        },
        "patternTriggerDefinition": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/TriggerDefinition"
        },
        "patternUsageContext": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/UsageContext"
        },
        "patternDosage": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/Dosage"
        },
        "patternMeta": {
          "description": "Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  \n\nWhen pattern[x] is used to constrain a primitive, it means that the value provided in the pattern[x] must match the instance value exactly.\n\nWhen pattern[x] is used to constrain an array, it means that each element provided in the pattern[x] array must (recursively) match at least one element from the instance array.\n\nWhen pattern[x] is used to constrain a complex object, it means that each property in the pattern must be present in the complex object, and its value must recursively match -- i.e.,\n\n1. If primitive: it must match exactly the pattern value\n2. If a complex object: it must match (recursively) the pattern value\n3. If an array: it must match (recursively) the pattern value.",
          "$ref": "#/definitions/Meta"
        },
        "example": {
          "description": "A sample value for this element demonstrating the type of information that would typically be found in the element.",
          "items": {
            "$ref": "#/definitions/ElementDefinition_Example"
          },
          "type": "array"
        },
        "minValueDate": {
          "description": "The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
          "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?$",
          "type": "string"
        },
        "_minValueDate": {
          "description": "Extensions for minValueDate",
          "$ref": "#/definitions/Element"
        },
        "minValueDateTime": {
          "description": "The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
          "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?$",
          "type": "string"
        },
        "_minValueDateTime": {
          "description": "Extensions for minValueDateTime",
          "$ref": "#/definitions/Element"
        },
        "minValueInstant": {
          "description": "The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
          "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))$",
          "type": "string"
        },
        "_minValueInstant": {
          "description": "Extensions for minValueInstant",
          "$ref": "#/definitions/Element"
        },
        "minValueTime": {
          "description": "The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
          "pattern": "^([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?$",
          "type": "string"
        },
        "_minValueTime": {
          "description": "Extensions for minValueTime",
          "$ref": "#/definitions/Element"
        },
        "minValueDecimal": {
          "description": "The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
          "pattern": "^-?(0|[1-9][0-9]*)(\\.[0-9]+)?([eE][+-]?[0-9]+)?$",
          "type": "number"
        },
        "_minValueDecimal": {
          "description": "Extensions for minValueDecimal",
          "$ref": "#/definitions/Element"
        },
        "minValueInteger": {
          "description": "The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
          "pattern": "^-?([0]|([1-9][0-9]*))$",
          "type": "number"
        },
        "_minValueInteger": {
          "description": "Extensions for minValueInteger",
          "$ref": "#/definitions/Element"
        },
        "minValuePositiveInt": {
          "description": "The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
          "pattern": "^[1-9][0-9]*$",
          "type": "number"
        },
        "_minValuePositiveInt": {
          "description": "Extensions for minValuePositiveInt",
          "$ref": "#/definitions/Element"
        },
        "minValueUnsignedInt": {
          "description": "The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
          "pattern": "^[0]|([1-9][0-9]*)$",
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
          "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?$",
          "type": "string"
        },
        "_maxValueDate": {
          "description": "Extensions for maxValueDate",
          "$ref": "#/definitions/Element"
        },
        "maxValueDateTime": {
          "description": "The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
          "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?$",
          "type": "string"
        },
        "_maxValueDateTime": {
          "description": "Extensions for maxValueDateTime",
          "$ref": "#/definitions/Element"
        },
        "maxValueInstant": {
          "description": "The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
          "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))$",
          "type": "string"
        },
        "_maxValueInstant": {
          "description": "Extensions for maxValueInstant",
          "$ref": "#/definitions/Element"
        },
        "maxValueTime": {
          "description": "The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
          "pattern": "^([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?$",
          "type": "string"
        },
        "_maxValueTime": {
          "description": "Extensions for maxValueTime",
          "$ref": "#/definitions/Element"
        },
        "maxValueDecimal": {
          "description": "The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
          "pattern": "^-?(0|[1-9][0-9]*)(\\.[0-9]+)?([eE][+-]?[0-9]+)?$",
          "type": "number"
        },
        "_maxValueDecimal": {
          "description": "Extensions for maxValueDecimal",
          "$ref": "#/definitions/Element"
        },
        "maxValueInteger": {
          "description": "The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
          "pattern": "^-?([0]|([1-9][0-9]*))$",
          "type": "number"
        },
        "_maxValueInteger": {
          "description": "Extensions for maxValueInteger",
          "$ref": "#/definitions/Element"
        },
        "maxValuePositiveInt": {
          "description": "The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
          "pattern": "^[1-9][0-9]*$",
          "type": "number"
        },
        "_maxValuePositiveInt": {
          "description": "Extensions for maxValuePositiveInt",
          "$ref": "#/definitions/Element"
        },
        "maxValueUnsignedInt": {
          "description": "The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.",
          "pattern": "^[0]|([1-9][0-9]*)$",
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
          "$ref": "#/definitions/integer"
        },
        "_maxLength": {
          "description": "Extensions for maxLength",
          "$ref": "#/definitions/Element"
        },
        "condition": {
          "description": "A reference to an invariant that may make additional statements about the cardinality or value in the instance.",
          "items": {
            "$ref": "#/definitions/id"
          },
          "type": "array"
        },
        "_condition": {
          "description": "Extensions for condition",
          "items": {
            "$ref": "#/definitions/Element"
          },
          "type": "array"
        },
        "constraint": {
          "description": "Formal constraints such as co-occurrence and other constraints that can be computationally evaluated within the context of the instance.",
          "items": {
            "$ref": "#/definitions/ElementDefinition_Constraint"
          },
          "type": "array"
        },
        "mustSupport": {
          "description": "If true, implementations that produce or consume resources SHALL provide \"support\" for the element in some meaningful way.  If false, the element may be ignored and not supported. If false, whether to populate or use the data element in any way is at the discretion of the implementation.",
          "$ref": "#/definitions/boolean"
        },
        "_mustSupport": {
          "description": "Extensions for mustSupport",
          "$ref": "#/definitions/Element"
        },
        "isModifier": {
          "description": "If true, the value of this element affects the interpretation of the element or resource that contains it, and the value of the element cannot be ignored. Typically, this is used for status, negation and qualification codes. The effect of this is that the element cannot be ignored by systems: they SHALL either recognize the element and process it, and/or a pre-determination has been made that it is not relevant to their particular system.",
          "$ref": "#/definitions/boolean"
        },
        "_isModifier": {
          "description": "Extensions for isModifier",
          "$ref": "#/definitions/Element"
        },
        "isModifierReason": {
          "description": "Explains how that element affects the interpretation of the resource or element that contains it.",
          "$ref": "#/definitions/string"
        },
        "_isModifierReason": {
          "description": "Extensions for isModifierReason",
          "$ref": "#/definitions/Element"
        },
        "isSummary": {
          "description": "Whether the element should be included if a client requests a search with the parameter _summary=true.",
          "$ref": "#/definitions/boolean"
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
          "items": {
            "$ref": "#/definitions/ElementDefinition_Mapping"
          },
          "type": "array"
        }
      },
      "additionalProperties": false
    },
    "ElementDefinition_Slicing": {
      "description": "Captures constraints on each element within the resource, profile, or extension.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "modifierExtension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "discriminator": {
          "description": "Designates which child elements are used to discriminate between the slices when processing an instance. If one or more discriminators are provided, the value of the child elements in the instance data SHALL completely distinguish which slice the element in the resource matches based on the allowed values for those elements in each of the slices.",
          "items": {
            "$ref": "#/definitions/ElementDefinition_Discriminator"
          },
          "type": "array"
        },
        "description": {
          "description": "A human-readable text description of how the slicing works. If there is no discriminator, this is required to be present to provide whatever information is possible about how the slices can be differentiated.",
          "$ref": "#/definitions/string"
        },
        "_description": {
          "description": "Extensions for description",
          "$ref": "#/definitions/Element"
        },
        "ordered": {
          "description": "If the matching elements have to occur in the same order as defined in the profile.",
          "$ref": "#/definitions/boolean"
        },
        "_ordered": {
          "description": "Extensions for ordered",
          "$ref": "#/definitions/Element"
        },
        "rules": {
          "description": "Whether additional slices are allowed or not. When the slices are ordered, profile authors can also say that additional slices are only allowed at the end.",
          "enum": ["closed", "open", "openAtEnd"]
        },
        "_rules": {
          "description": "Extensions for rules",
          "$ref": "#/definitions/Element"
        }
      },
      "additionalProperties": false
    },
    "ElementDefinition_Discriminator": {
      "description": "Captures constraints on each element within the resource, profile, or extension.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "modifierExtension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "type": {
          "description": "How the element value is interpreted when discrimination is evaluated.",
          "enum": ["value", "exists", "pattern", "type", "profile"]
        },
        "_type": {
          "description": "Extensions for type",
          "$ref": "#/definitions/Element"
        },
        "path": {
          "description": "A FHIRPath expression, using [the simple subset of FHIRPath](fhirpath.html#simple), that is used to identify the element on which discrimination is based.",
          "$ref": "#/definitions/string"
        },
        "_path": {
          "description": "Extensions for path",
          "$ref": "#/definitions/Element"
        }
      },
      "additionalProperties": false
    },
    "ElementDefinition_Base": {
      "description": "Captures constraints on each element within the resource, profile, or extension.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "modifierExtension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "path": {
          "description": "The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [[[StructureDefinition]]] without a StructureDefinition.base.",
          "$ref": "#/definitions/string"
        },
        "_path": {
          "description": "Extensions for path",
          "$ref": "#/definitions/Element"
        },
        "min": {
          "description": "Minimum cardinality of the base element identified by the path.",
          "$ref": "#/definitions/unsignedInt"
        },
        "_min": {
          "description": "Extensions for min",
          "$ref": "#/definitions/Element"
        },
        "max": {
          "description": "Maximum cardinality of the base element identified by the path.",
          "$ref": "#/definitions/string"
        },
        "_max": {
          "description": "Extensions for max",
          "$ref": "#/definitions/Element"
        }
      },
      "additionalProperties": false
    },
    "ElementDefinition_Type": {
      "description": "Captures constraints on each element within the resource, profile, or extension.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "modifierExtension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "code": {
          "description": "URL of Data type or Resource that is a(or the) type used for this element. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition e.g. \"string\" is a reference to http://hl7.org/fhir/StructureDefinition/string. Absolute URLs are only allowed in logical models.",
          "$ref": "#/definitions/uri"
        },
        "_code": {
          "description": "Extensions for code",
          "$ref": "#/definitions/Element"
        },
        "profile": {
          "description": "Identifies a profile structure or implementation Guide that applies to the datatype this element refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the type SHALL conform to at least one profile defined in the implementation guide.",
          "items": {
            "$ref": "#/definitions/canonical"
          },
          "type": "array"
        },
        "targetProfile": {
          "description": "Used when the type is \"Reference\" or \"canonical\", and identifies a profile structure or implementation Guide that applies to the target of the reference this element refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the target resource SHALL conform to at least one profile defined in the implementation guide.",
          "items": {
            "$ref": "#/definitions/canonical"
          },
          "type": "array"
        },
        "aggregation": {
          "description": "If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.",
          "items": {
            "enum": ["contained", "referenced", "bundled"]
          },
          "type": "array"
        },
        "_aggregation": {
          "description": "Extensions for aggregation",
          "items": {
            "$ref": "#/definitions/Element"
          },
          "type": "array"
        },
        "versioning": {
          "description": "Whether this reference needs to be version specific or version independent, or whether either can be used.",
          "enum": ["either", "independent", "specific"]
        },
        "_versioning": {
          "description": "Extensions for versioning",
          "$ref": "#/definitions/Element"
        }
      },
      "additionalProperties": false
    },
    "ElementDefinition_Example": {
      "description": "Captures constraints on each element within the resource, profile, or extension.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "modifierExtension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "label": {
          "description": "Describes the purpose of this example amoung the set of examples.",
          "$ref": "#/definitions/string"
        },
        "_label": {
          "description": "Extensions for label",
          "$ref": "#/definitions/Element"
        },
        "valueBase64Binary": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "pattern": "^(\\s*([0-9a-zA-Z\\+/=]){4}\\s*)+$",
          "type": "string"
        },
        "_valueBase64Binary": {
          "description": "Extensions for valueBase64Binary",
          "$ref": "#/definitions/Element"
        },
        "valueBoolean": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "pattern": "^true|false$",
          "type": "boolean"
        },
        "_valueBoolean": {
          "description": "Extensions for valueBoolean",
          "$ref": "#/definitions/Element"
        },
        "valueCanonical": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "pattern": "^\\S*$",
          "type": "string"
        },
        "_valueCanonical": {
          "description": "Extensions for valueCanonical",
          "$ref": "#/definitions/Element"
        },
        "valueCode": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "pattern": "^[^\\s]+(\\s[^\\s]+)*$",
          "type": "string"
        },
        "_valueCode": {
          "description": "Extensions for valueCode",
          "$ref": "#/definitions/Element"
        },
        "valueDate": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?$",
          "type": "string"
        },
        "_valueDate": {
          "description": "Extensions for valueDate",
          "$ref": "#/definitions/Element"
        },
        "valueDateTime": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?$",
          "type": "string"
        },
        "_valueDateTime": {
          "description": "Extensions for valueDateTime",
          "$ref": "#/definitions/Element"
        },
        "valueDecimal": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "pattern": "^-?(0|[1-9][0-9]*)(\\.[0-9]+)?([eE][+-]?[0-9]+)?$",
          "type": "number"
        },
        "_valueDecimal": {
          "description": "Extensions for valueDecimal",
          "$ref": "#/definitions/Element"
        },
        "valueId": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "pattern": "^[A-Za-z0-9\\-\\.]{1,64}$",
          "type": "string"
        },
        "_valueId": {
          "description": "Extensions for valueId",
          "$ref": "#/definitions/Element"
        },
        "valueInstant": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "pattern": "^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))$",
          "type": "string"
        },
        "_valueInstant": {
          "description": "Extensions for valueInstant",
          "$ref": "#/definitions/Element"
        },
        "valueInteger": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "pattern": "^-?([0]|([1-9][0-9]*))$",
          "type": "number"
        },
        "_valueInteger": {
          "description": "Extensions for valueInteger",
          "$ref": "#/definitions/Element"
        },
        "valueMarkdown": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "pattern": "^[ \\r\\n\\t\\S]+$",
          "type": "string"
        },
        "_valueMarkdown": {
          "description": "Extensions for valueMarkdown",
          "$ref": "#/definitions/Element"
        },
        "valueOid": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "pattern": "^urn:oid:[0-2](\\.(0|[1-9][0-9]*))+$",
          "type": "string"
        },
        "_valueOid": {
          "description": "Extensions for valueOid",
          "$ref": "#/definitions/Element"
        },
        "valuePositiveInt": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "pattern": "^[1-9][0-9]*$",
          "type": "number"
        },
        "_valuePositiveInt": {
          "description": "Extensions for valuePositiveInt",
          "$ref": "#/definitions/Element"
        },
        "valueString": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "pattern": "^[ \\r\\n\\t\\S]+$",
          "type": "string"
        },
        "_valueString": {
          "description": "Extensions for valueString",
          "$ref": "#/definitions/Element"
        },
        "valueTime": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "pattern": "^([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?$",
          "type": "string"
        },
        "_valueTime": {
          "description": "Extensions for valueTime",
          "$ref": "#/definitions/Element"
        },
        "valueUnsignedInt": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "pattern": "^[0]|([1-9][0-9]*)$",
          "type": "number"
        },
        "_valueUnsignedInt": {
          "description": "Extensions for valueUnsignedInt",
          "$ref": "#/definitions/Element"
        },
        "valueUri": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "pattern": "^\\S*$",
          "type": "string"
        },
        "_valueUri": {
          "description": "Extensions for valueUri",
          "$ref": "#/definitions/Element"
        },
        "valueUrl": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "pattern": "^\\S*$",
          "type": "string"
        },
        "_valueUrl": {
          "description": "Extensions for valueUrl",
          "$ref": "#/definitions/Element"
        },
        "valueUuid": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "pattern": "^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$",
          "type": "string"
        },
        "_valueUuid": {
          "description": "Extensions for valueUuid",
          "$ref": "#/definitions/Element"
        },
        "valueAddress": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "$ref": "#/definitions/Address"
        },
        "valueAge": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "$ref": "#/definitions/Age"
        },
        "valueAnnotation": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "$ref": "#/definitions/Annotation"
        },
        "valueAttachment": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "$ref": "#/definitions/Attachment"
        },
        "valueCodeableConcept": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "$ref": "#/definitions/CodeableConcept"
        },
        "valueCoding": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "$ref": "#/definitions/Coding"
        },
        "valueContactPoint": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "$ref": "#/definitions/ContactPoint"
        },
        "valueCount": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "$ref": "#/definitions/Count"
        },
        "valueDistance": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "$ref": "#/definitions/Distance"
        },
        "valueDuration": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "$ref": "#/definitions/Duration"
        },
        "valueHumanName": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "$ref": "#/definitions/HumanName"
        },
        "valueIdentifier": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "$ref": "#/definitions/Identifier"
        },
        "valueMoney": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "$ref": "#/definitions/Money"
        },
        "valuePeriod": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "$ref": "#/definitions/Period"
        },
        "valueQuantity": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "$ref": "#/definitions/Quantity"
        },
        "valueRange": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "$ref": "#/definitions/Range"
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
        "valueTiming": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "$ref": "#/definitions/Timing"
        },
        "valueContactDetail": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "$ref": "#/definitions/ContactDetail"
        },
        "valueContributor": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "$ref": "#/definitions/Contributor"
        },
        "valueDataRequirement": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "$ref": "#/definitions/DataRequirement"
        },
        "valueExpression": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "$ref": "#/definitions/Expression"
        },
        "valueParameterDefinition": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "$ref": "#/definitions/ParameterDefinition"
        },
        "valueRelatedArtifact": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "$ref": "#/definitions/RelatedArtifact"
        },
        "valueTriggerDefinition": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "$ref": "#/definitions/TriggerDefinition"
        },
        "valueUsageContext": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "$ref": "#/definitions/UsageContext"
        },
        "valueDosage": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "$ref": "#/definitions/Dosage"
        },
        "valueMeta": {
          "description": "The actual value for the element, which must be one of the types allowed for this element.",
          "$ref": "#/definitions/Meta"
        }
      },
      "additionalProperties": false
    },
    "ElementDefinition_Constraint": {
      "description": "Captures constraints on each element within the resource, profile, or extension.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "modifierExtension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "key": {
          "description": "Allows identification of which elements have their cardinalities impacted by the constraint.  Will not be referenced for constraints that do not affect cardinality.",
          "$ref": "#/definitions/id"
        },
        "_key": {
          "description": "Extensions for key",
          "$ref": "#/definitions/Element"
        },
        "requirements": {
          "description": "Description of why this constraint is necessary or appropriate.",
          "$ref": "#/definitions/string"
        },
        "_requirements": {
          "description": "Extensions for requirements",
          "$ref": "#/definitions/Element"
        },
        "severity": {
          "description": "Identifies the impact constraint violation has on the conformance of the instance.",
          "enum": ["error", "warning"]
        },
        "_severity": {
          "description": "Extensions for severity",
          "$ref": "#/definitions/Element"
        },
        "human": {
          "description": "Text that can be used to describe the constraint in messages identifying that the constraint has been violated.",
          "$ref": "#/definitions/string"
        },
        "_human": {
          "description": "Extensions for human",
          "$ref": "#/definitions/Element"
        },
        "expression": {
          "description": "A [FHIRPath](fhirpath.html) expression of constraint that can be executed to see if this constraint is met.",
          "$ref": "#/definitions/string"
        },
        "_expression": {
          "description": "Extensions for expression",
          "$ref": "#/definitions/Element"
        },
        "xpath": {
          "description": "An XPath expression of constraint that can be executed to see if this constraint is met.",
          "$ref": "#/definitions/string"
        },
        "_xpath": {
          "description": "Extensions for xpath",
          "$ref": "#/definitions/Element"
        },
        "source": {
          "description": "A reference to the original source of the constraint, for traceability purposes.",
          "$ref": "#/definitions/canonical"
        }
      },
      "additionalProperties": false
    },
    "ElementDefinition_Binding": {
      "description": "Captures constraints on each element within the resource, profile, or extension.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "modifierExtension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "strength": {
          "description": "Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.",
          "enum": ["required", "extensible", "preferred", "example"]
        },
        "_strength": {
          "description": "Extensions for strength",
          "$ref": "#/definitions/Element"
        },
        "description": {
          "description": "Describes the intended use of this particular set of codes.",
          "$ref": "#/definitions/string"
        },
        "_description": {
          "description": "Extensions for description",
          "$ref": "#/definitions/Element"
        },
        "valueSet": {
          "description": "Refers to the value set that identifies the set of codes the binding refers to.",
          "$ref": "#/definitions/canonical"
        }
      },
      "additionalProperties": false
    },
    "ElementDefinition_Mapping": {
      "description": "Captures constraints on each element within the resource, profile, or extension.",
      "properties": {
        "id": {
          "description": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
          "$ref": "#/definitions/string"
        },
        "extension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "modifierExtension": {
          "description": "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
          "items": {
            "$ref": "#/definitions/Extension"
          },
          "type": "array"
        },
        "identity": {
          "description": "An internal reference to the definition of a mapping.",
          "$ref": "#/definitions/id"
        },
        "_identity": {
          "description": "Extensions for identity",
          "$ref": "#/definitions/Element"
        },
        "language": {
          "description": "Identifies the computable language in which mapping.map is expressed.",
          "$ref": "#/definitions/code"
        },
        "_language": {
          "description": "Extensions for language",
          "$ref": "#/definitions/Element"
        },
        "map": {
          "description": "Expresses what part of the target specification corresponds to this element.",
          "$ref": "#/definitions/string"
        },
        "_map": {
          "description": "Extensions for map",
          "$ref": "#/definitions/Element"
        },
        "comment": {
          "description": "Comments that provide information about the mapping or its use.",
          "$ref": "#/definitions/string"
        },
        "_comment": {
          "description": "Extensions for comment",
          "$ref": "#/definitions/Element"
        }
      },
      "additionalProperties": false
    }
  }
};
validate.errors = null;
module.exports = validate;