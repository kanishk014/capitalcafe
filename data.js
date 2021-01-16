var APP_DATA = {
  "scenes": [
    {
      "id": "0-capital-cafe-entry",
      "name": "Capital Cafe Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -3.0303906344262046,
        "pitch": 0.1649695472157724,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": 2.9045716747967196,
          "pitch": 0.5490582083735145,
          "rotation": 0,
          "target": "1-hotspot-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hotspot-1",
      "name": "Hotspot 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.980828743183224,
        "pitch": 0.30049956538042366,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": -1.5582471937941165,
          "pitch": 0.5094512385361831,
          "rotation": 0,
          "target": "2-dance-floor"
        },
        {
          "yaw": 1.6297266346306687,
          "pitch": 0.26547204120329937,
          "rotation": 0,
          "target": "0-capital-cafe-entry"
        },
        {
          "yaw": -3.0550632938526654,
          "pitch": 0.44046943017560736,
          "rotation": 0,
          "target": "3-hotspot-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dance-floor",
      "name": "Dance Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.7835156077510437,
        "pitch": 0.060513407959380316,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": 2.0366500279788458,
          "pitch": 0.2929150318368947,
          "rotation": 0,
          "target": "3-hotspot-2"
        },
        {
          "yaw": 1.009746530686833,
          "pitch": 0.21639457175704635,
          "rotation": 0,
          "target": "1-hotspot-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hotspot-2",
      "name": "Hotspot 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.2221328138901839,
        "pitch": 0.01639167346003667,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": -0.48604085889686033,
          "pitch": 0.2242722674034141,
          "rotation": 0,
          "target": "4-smoking-zone"
        },
        {
          "yaw": 3.1196151017746363,
          "pitch": 0.29070965123661807,
          "rotation": 0,
          "target": "2-dance-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-smoking-zone",
      "name": "Smoking Zone",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.0008181724722718,
        "pitch": 0.2556481725065556,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": -0.3197724058068552,
          "pitch": 0.3304319584925324,
          "rotation": 6.283185307179586,
          "target": "3-hotspot-2"
        },
        {
          "yaw": -1.67243952332597,
          "pitch": 0.4697882183053075,
          "rotation": 0,
          "target": "5-private-party-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-private-party-hall",
      "name": "Private Party Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.565511949435021,
        "pitch": 0.10160376086799516,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": 1.5412713083486338,
          "pitch": 0.38449486787179765,
          "rotation": 0,
          "target": "4-smoking-zone"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
