PLAN_TASK_SCHEMA = '''{
    "additionalProperties": false,
    "properties": {
        "departure_time": {
            "format": "date-time",
            "type": "string"
        },
        "detail": {
            "default": true,
            "type": "boolean"
        },
        "geo_provider": {
            "maxLength": 256,
            "minLength": 1,
            "type": "string"
        },
        "result_timezone": {
            "default": 0,
            "format": "int32",
            "maximum": 12,
            "minimum": -12,
            "type": "integer"
        },
        "transport_type": {
            "default": "CAR",
            "enum": [
                "CAR",
                "TRUCK",
                "CAR_GT",
                "TUK_TUK",
                "BICYCLE",
                "PEDESTRIAN",
                "PUBLIC_TRANSPORT"
            ],
            "nullable": false,
            "type": "string"
        },
        "waypoints": {
            "items": {
                "additionalProperties": false,
                "nullable": true,
                "properties": {
                    "duration": {
                        "default": 0,
                        "format": "int32",
                        "maximum": 43800,
                        "minimum": 0,
                        "type": "integer"
                    },
                    "latitude": {
                        "format": "double",
                        "maximum": 90,
                        "minimum": -90,
                        "type": "number"
                    },
                    "longitude": {
                        "format": "double",
                        "maximum": 180,
                        "minimum": -180,
                        "type": "number"
                    }
                },
                "required": [
                    "latitude",
                    "longitude"
                ],
                "type": "object"
            },
            "maxItems": 9000,
            "minItems": 2,
            "type": "array",
            "uniqueItems": false
        }
    },
    "required": [
        "waypoints"
    ],
    "type": "object"
}'''