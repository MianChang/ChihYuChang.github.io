var APP_DATA = {
  "scenes": [
    {
      "id": "0-ar-quests",
      "name": "AR Quests",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0951367788451662,
          "pitch": -0.4956928554850215,
          "rotation": 0,
          "target": "5-panorama3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-foyer",
      "name": "Foyer",
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
        "yaw": -1.571674858099401,
        "pitch": 0,
        "fov": 1.3650016530720892
      },
      "linkHotspots": [
        {
          "yaw": -1.1259533939332087,
          "pitch": 0.12048527674654963,
          "rotation": 6.283185307179586,
          "target": "0-ar-quests"
        },
        {
          "yaw": -3.077759087440059,
          "pitch": -0.48003204256445997,
          "rotation": 0,
          "target": "3-section"
        },
        {
          "yaw": -2.066953504646161,
          "pitch": -0.006841950101426519,
          "rotation": 0,
          "target": "4-functions"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-aussen-fassade",
      "name": "Aussen Fassade",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6340682394292756,
          "pitch": 0.47519282651702177,
          "rotation": 0,
          "target": "1-foyer"
        },
        {
          "yaw": -0.27953828574285566,
          "pitch": 0.00004623621406096845,
          "rotation": 0,
          "target": "6-panorama1"
        },
        {
          "yaw": -0.01682777170127281,
          "pitch": 0.5345016726090428,
          "rotation": 0,
          "target": "3-section"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-section",
      "name": "Section",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.79797967970614,
          "pitch": 0.4701699405463984,
          "rotation": 0,
          "target": "2-aussen-fassade"
        },
        {
          "yaw": 1.023696631989857,
          "pitch": 0.4667565157311113,
          "rotation": 0,
          "target": "1-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-functions",
      "name": "functions",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1026863102002586,
          "pitch": -0.47786318639802516,
          "rotation": 0,
          "target": "3-section"
        },
        {
          "yaw": 1.1286998967406667,
          "pitch": 0.19205543687182924,
          "rotation": 0,
          "target": "1-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-panorama3",
      "name": "Panorama3",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9339912932334791,
          "pitch": 0.4221483620395894,
          "rotation": 0,
          "target": "1-foyer"
        },
        {
          "yaw": -2.3678848841614037,
          "pitch": 0.33169370233051865,
          "rotation": 0,
          "target": "2-aussen-fassade"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-panorama1",
      "name": "Panorama1",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9252971580500837,
          "pitch": 0.04828991603116606,
          "rotation": 0,
          "target": "2-aussen-fassade"
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
    "viewControlButtons": false
  }
};
