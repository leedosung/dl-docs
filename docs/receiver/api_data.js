define({ "api": [
  {
    "type": "post",
    "url": "/dl/v1/analyses",
    "title": "Create a analysis",
    "version": "1.0.0",
    "group": "Analysis",
    "name": "Create",
    "permission": [
      {
        "name": "api"
      }
    ],
    "filename": "src/controllers/index.js",
    "groupTitle": "Analysis",
    "sampleRequest": [
      {
        "url": "https://api.chektdev.com/dl/v1/analyses"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Content-Type",
          "content": "Content-Type: application/json",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Array-Response",
          "content": "HTTP/1.1 200 OK\n[{\n    Json String Array\n}]",
          "type": "json"
        },
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    Json String\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-BadRequest",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"message\": \"Error Message\"\n}",
          "type": "json"
        },
        {
          "title": "Error-NotFound",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"message\": \"Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
