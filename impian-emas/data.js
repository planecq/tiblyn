var APP_DATA = {
  "scenes": [
    {
      "id": "0-street",
      "name": "Street",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": 3.0887094202630063,
        "pitch": -0.17197953829248291,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": 3.0607220383167544,
          "pitch": 0.07175707152071809,
          "rotation": 0,
          "target": "23-car-porch"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-parents-bathroom",
      "name": "Parents bathroom",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": 3.090606244304716,
        "pitch": 0.08730261986580246,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": 1.712997879963189,
          "pitch": 0.18138868869687386,
          "rotation": 0,
          "target": "2-walk-in-wardrobe"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-walk-in-wardrobe",
      "name": "Walk-in wardrobe",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": 0.7715206169103244,
        "pitch": 0.32808404228105204,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": -1.447592197400395,
          "pitch": 0.22261175363268926,
          "rotation": 0,
          "target": "1-parents-bathroom"
        },
        {
          "yaw": -2.25650102476801,
          "pitch": 0.21531039526807838,
          "rotation": 0,
          "target": "3-parents-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-parents-room",
      "name": "Parents room",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": -1.5332771578977855,
        "pitch": 0.24606303171077215,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": 0.3112555331151352,
          "pitch": 0.1811982956540117,
          "rotation": 0,
          "target": "2-walk-in-wardrobe"
        },
        {
          "yaw": 2.685577079132118,
          "pitch": 0.13627151932966086,
          "rotation": 0,
          "target": "9-upstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-miles-room",
      "name": "Miles room",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": -2.8006920862411953,
        "pitch": 0.24341719266009854,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": 0.9874858472081982,
          "pitch": 0.19332210111122095,
          "rotation": 0,
          "target": "9-upstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-store-bathroom",
      "name": "Store \"bathroom\"",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": -3.0182095458775784,
        "pitch": 0.21960464120426693,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": 1.0455972208181237,
          "pitch": 0.10097129750947964,
          "rotation": 0,
          "target": "6-wes-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-wes-room",
      "name": "Wes room",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": -3.096683596813328,
        "pitch": 0.11906987377561506,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": -0.9193830510785084,
          "pitch": 0.10692847699395003,
          "rotation": 0,
          "target": "5-store-bathroom"
        },
        {
          "yaw": -0.1678783662634693,
          "pitch": 0.32642554197505547,
          "rotation": 0,
          "target": "8-reading"
        },
        {
          "yaw": 0.16777758144035282,
          "pitch": 0.07118010485209858,
          "rotation": 0,
          "target": "7-reading-window"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-reading-window",
      "name": "Reading window",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": -0.23066924617000772,
        "pitch": 0.5318136491813767,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": -0.12045624878249583,
          "pitch": 0.9897229896563768,
          "rotation": 0,
          "target": "24-japanese-garden"
        },
        {
          "yaw": -0.09791045732741921,
          "pitch": 0.5352856122761231,
          "rotation": 0,
          "target": "25-patio"
        },
        {
          "yaw": -2.2563140271482496,
          "pitch": 0.16193976562370516,
          "rotation": 0,
          "target": "4-miles-room"
        },
        {
          "yaw": -2.984024209398509,
          "pitch": 0.17457498447391373,
          "rotation": 0,
          "target": "6-wes-room"
        },
        {
          "yaw": -2.535635459647402,
          "pitch": 0.5346200304941,
          "rotation": 0,
          "target": "8-reading"
        },
        {
          "yaw": -2.0392809967585954,
          "pitch": 0.3809818035969119,
          "rotation": 0,
          "target": "9-upstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-reading",
      "name": "Reading",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": -1.8083246580878338,
        "pitch": 0.1432454055881145,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": -1.958897295900739,
          "pitch": 0.2150038129333698,
          "rotation": 0,
          "target": "4-miles-room"
        },
        {
          "yaw": -1.4999905670658862,
          "pitch": 0.43785120037731495,
          "rotation": 0,
          "target": "9-upstairs"
        },
        {
          "yaw": -0.9091455976950247,
          "pitch": 0.12216084776626523,
          "rotation": 0,
          "target": "3-parents-room"
        },
        {
          "yaw": 0.5321155843497039,
          "pitch": 0.14321778958373343,
          "rotation": 0,
          "target": "7-reading-window"
        },
        {
          "yaw": 3.0065403438834934,
          "pitch": 0.14985750370244233,
          "rotation": 0,
          "target": "6-wes-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-upstairs",
      "name": "Upstairs",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": 1.5047228562181996,
        "pitch": 0.06914106589807645,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": 1.6440092586411383,
          "pitch": 0.5256063941467968,
          "rotation": 0,
          "target": "8-reading"
        },
        {
          "yaw": 1.0941456113476136,
          "pitch": 0.08054063279495338,
          "rotation": 0,
          "target": "7-reading-window"
        },
        {
          "yaw": 2.2723757786198107,
          "pitch": 0.06095238917520085,
          "rotation": 0,
          "target": "6-wes-room"
        },
        {
          "yaw": 0.12949569041568765,
          "pitch": 0.16574954908541706,
          "rotation": 0,
          "target": "3-parents-room"
        },
        {
          "yaw": -1.3404663947898712,
          "pitch": 0.7203565877677462,
          "rotation": 0,
          "target": "10-stairs"
        },
        {
          "yaw": -2.781650969070281,
          "pitch": 0.15357584480574715,
          "rotation": 0,
          "target": "4-miles-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-stairs",
      "name": "Stairs",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": 0.5981069834319701,
        "pitch": 0.5715012349411897,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": 0.09515028827356886,
          "pitch": 0.5731605471327974,
          "rotation": 0,
          "target": "20-living"
        },
        {
          "yaw": 1.0999633412368919,
          "pitch": 0.615211610799296,
          "rotation": 0,
          "target": "21-hall"
        },
        {
          "yaw": 0.981189429578528,
          "pitch": 0.34705132352220147,
          "rotation": 0,
          "target": "24-japanese-garden"
        },
        {
          "yaw": 0.6324533136399939,
          "pitch": 0.3473840576008733,
          "rotation": 0,
          "target": "22-main-door"
        },
        {
          "yaw": 1.8247084154693844,
          "pitch": -0.265329253146632,
          "rotation": 0,
          "target": "9-upstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-utility-area",
      "name": "Utility area",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": -0.8226522673142753,
        "pitch": -0.015875034303917346,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": -1.7131875944470156,
          "pitch": 0.3008668111735311,
          "rotation": 0,
          "target": "27-garden-back"
        },
        {
          "yaw": 1.506759825599084,
          "pitch": 0.19181227826394398,
          "rotation": 0,
          "target": "12-wet-kitchen-out"
        },
        {
          "yaw": 0.2062381920851486,
          "pitch": 0.017231958851871454,
          "rotation": 0,
          "target": "13-maid-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-wet-kitchen-out",
      "name": "Wet kitchen (out)",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": 1.226833778302451,
        "pitch": -0.1296461134820177,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": 0.3665174194200631,
          "pitch": 0.20436174639091576,
          "rotation": 0,
          "target": "14-wet-kitchen-in"
        },
        {
          "yaw": -1.445828708415906,
          "pitch": 0.24866135789219257,
          "rotation": 0,
          "target": "11-utility-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-maid-room",
      "name": "Maid room",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": 1.1390569855120916,
        "pitch": 0.4864946755508832,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": 1.733036994661295,
          "pitch": 0.20414614860483482,
          "rotation": 0,
          "target": "14-wet-kitchen-in"
        },
        {
          "yaw": -2.9635365610061264,
          "pitch": 0.2760151862178368,
          "rotation": 0,
          "target": "11-utility-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-wet-kitchen-in",
      "name": "Wet kitchen (in)",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": 2.535320387107557,
        "pitch": 0.10544860475367557,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": -2.7079882159511968,
          "pitch": 0.2786492500211857,
          "rotation": 0,
          "target": "12-wet-kitchen-out"
        },
        {
          "yaw": -1.3521373449954126,
          "pitch": 0.22942836572913095,
          "rotation": 0,
          "target": "13-maid-room"
        },
        {
          "yaw": 0.3161239206563291,
          "pitch": 0.3737579083647802,
          "rotation": 0,
          "target": "16-dry-kitchen"
        },
        {
          "yaw": -2.1731646632527752,
          "pitch": 0.04611923641394533,
          "rotation": 0,
          "target": "11-utility-area"
        },
        {
          "yaw": 0.21593076506197662,
          "pitch": 0.027286217174301797,
          "rotation": 0,
          "target": "18-bar-counter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-guest-room--office",
      "name": "Guest room / office",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": -2.256268439081161,
        "pitch": 0.23812551455880637,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": 1.2001458637798486,
          "pitch": 0.46969104875341827,
          "rotation": 0,
          "target": "19-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-dry-kitchen",
      "name": "Dry kitchen",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": 2.280155291786741,
        "pitch": 0.23812551455881703,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": -2.656318658680668,
          "pitch": 0.2520582165620677,
          "rotation": 0,
          "target": "14-wet-kitchen-in"
        },
        {
          "yaw": -0.8809660381085305,
          "pitch": 0.1174221328652365,
          "rotation": 0,
          "target": "17-wash-basin"
        },
        {
          "yaw": 0.1479570055368189,
          "pitch": 0.10087830739348114,
          "rotation": 0,
          "target": "18-bar-counter"
        },
        {
          "yaw": -0.4049939125652582,
          "pitch": 0.22088205449445475,
          "rotation": 0,
          "target": "19-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-wash-basin",
      "name": "Wash basin",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": -0.12860320804168524,
        "pitch": 0.16404202114051714,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": 1.1111394710678546,
          "pitch": 0.13936557806097838,
          "rotation": 0,
          "target": "18-bar-counter"
        },
        {
          "yaw": 1.8572145257935198,
          "pitch": 0.20677825523642213,
          "rotation": 0,
          "target": "16-dry-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-bar-counter",
      "name": "Bar counter",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": -0.38580962412506103,
        "pitch": 0.04502025487926353,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": -1.9543025611582152,
          "pitch": 0.1340030427110097,
          "rotation": 0,
          "target": "17-wash-basin"
        },
        {
          "yaw": -3.0233175275065918,
          "pitch": 0.1735123968628649,
          "rotation": 0,
          "target": "16-dry-kitchen"
        },
        {
          "yaw": -1.1561139040051707,
          "pitch": 0.3483164480295109,
          "rotation": 0,
          "target": "19-dining"
        },
        {
          "yaw": -0.048785658479216565,
          "pitch": 0.1087604205171715,
          "rotation": 0,
          "target": "24-japanese-garden"
        },
        {
          "yaw": -0.6810192684100649,
          "pitch": 0.17536280250680925,
          "rotation": 0,
          "target": "21-hall"
        },
        {
          "yaw": -1.5086955173608718,
          "pitch": 0.10835603711565689,
          "rotation": 0,
          "target": "15-guest-room--office"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-dining",
      "name": "Dining",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": 1.982122460452043,
        "pitch": 0.1772712163937804,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": -2.1230697968862664,
          "pitch": 0.3547611131091202,
          "rotation": 0,
          "target": "15-guest-room--office"
        },
        {
          "yaw": 2.7846903070757563,
          "pitch": 0.12040015337492171,
          "rotation": 0,
          "target": "16-dry-kitchen"
        },
        {
          "yaw": 2.299681087373349,
          "pitch": 0.10305792701285199,
          "rotation": 0,
          "target": "18-bar-counter"
        },
        {
          "yaw": 0.4150283458869257,
          "pitch": 0.09828828866110051,
          "rotation": 0,
          "target": "24-japanese-garden"
        },
        {
          "yaw": -0.33355303883421783,
          "pitch": 0.5045974044257733,
          "rotation": 0,
          "target": "21-hall"
        },
        {
          "yaw": -0.046597105244750026,
          "pitch": 0.10500503495023139,
          "rotation": 0,
          "target": "22-main-door"
        },
        {
          "yaw": -0.6684586887623709,
          "pitch": 0.09708023792789078,
          "rotation": 0,
          "target": "20-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-living",
      "name": "Living",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": 0.28986754828442685,
        "pitch": 0.19843792879902722,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": -1.347163016892143,
          "pitch": 0.3753999686810552,
          "rotation": 0,
          "target": "29-garden-living"
        },
        {
          "yaw": -3.0173218186201005,
          "pitch": -0.3191177485105836,
          "rotation": 0,
          "target": "10-stairs"
        },
        {
          "yaw": 2.3849700491309065,
          "pitch": 0.13897193844440991,
          "rotation": 0,
          "target": "19-dining"
        },
        {
          "yaw": 1.8574700212460078,
          "pitch": 0.40989006830534613,
          "rotation": 0,
          "target": "21-hall"
        },
        {
          "yaw": 1.4153247809422922,
          "pitch": 0.14735529821460602,
          "rotation": 0,
          "target": "24-japanese-garden"
        },
        {
          "yaw": 0.8535532663157941,
          "pitch": 0.22824478191036235,
          "rotation": 0,
          "target": "22-main-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-hall",
      "name": "Hall",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": -0.8001977389260553,
        "pitch": 0.11906275727940852,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": -1.0883711983373399,
          "pitch": 0.43717715418000935,
          "rotation": 0,
          "target": "20-living"
        },
        {
          "yaw": -1.2845389829095808,
          "pitch": 0.06661683332569623,
          "rotation": 0,
          "target": "29-garden-living"
        },
        {
          "yaw": 0.17962588974193494,
          "pitch": 0.3533135589698695,
          "rotation": 0,
          "target": "22-main-door"
        },
        {
          "yaw": 1.1645569938128073,
          "pitch": 0.2201474050506338,
          "rotation": 0,
          "target": "24-japanese-garden"
        },
        {
          "yaw": 0.6223901390296263,
          "pitch": 0.09249041783991352,
          "rotation": 0,
          "target": "25-patio"
        },
        {
          "yaw": 2.851724763971176,
          "pitch": 0.40951034355595617,
          "rotation": 0,
          "target": "19-dining"
        },
        {
          "yaw": -2.1684904672988807,
          "pitch": -0.14549835781382292,
          "rotation": 0,
          "target": "10-stairs"
        },
        {
          "yaw": 2.480779594976479,
          "pitch": 0.045675371261964415,
          "rotation": 0,
          "target": "18-bar-counter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-main-door",
      "name": "Main door",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": -3.03560588729788,
        "pitch": 0.08731268867156672,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": -2.9207576205885246,
          "pitch": 0.4195253249691735,
          "rotation": 0,
          "target": "21-hall"
        },
        {
          "yaw": 3.1046395554023363,
          "pitch": 0.20949717035731474,
          "rotation": 0,
          "target": "19-dining"
        },
        {
          "yaw": -1.994718042865541,
          "pitch": 0.24986842891589234,
          "rotation": 0,
          "target": "20-living"
        },
        {
          "yaw": 2.1791946324769373,
          "pitch": 0.4324119419960972,
          "rotation": 0,
          "target": "24-japanese-garden"
        },
        {
          "yaw": 0.21357898985553625,
          "pitch": 0.3549422396605326,
          "rotation": 0,
          "target": "26-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-car-porch",
      "name": "Car porch",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": 2.802428068657612,
        "pitch": -0.007937517151969331,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": 2.4004250748132776,
          "pitch": 0.3673711730770748,
          "rotation": 0,
          "target": "26-entrance"
        },
        {
          "yaw": -1.712064142938079,
          "pitch": 0.15806588982570347,
          "rotation": 0,
          "target": "30-garden-front"
        },
        {
          "yaw": 2.7917210346645973,
          "pitch": 0.12367120426736022,
          "rotation": 0,
          "target": "22-main-door"
        },
        {
          "yaw": 2.2384901597094107,
          "pitch": 0.059225383912712815,
          "rotation": 0,
          "target": "25-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-japanese-garden",
      "name": "Japanese garden",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": 0.20821471778177347,
        "pitch": 0.16668786019117832,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": 0.1772699499932031,
          "pitch": 0.1936015388196033,
          "rotation": 0,
          "target": "25-patio"
        },
        {
          "yaw": -0.23150912493992415,
          "pitch": 0.20639505659551816,
          "rotation": 0,
          "target": "26-entrance"
        },
        {
          "yaw": -0.88343049775564,
          "pitch": 0.3855759789227271,
          "rotation": 0,
          "target": "22-main-door"
        },
        {
          "yaw": -1.5225422852142945,
          "pitch": 0.2042728821109705,
          "rotation": 0,
          "target": "20-living"
        },
        {
          "yaw": -2.824410972351872,
          "pitch": 0.19713809488623646,
          "rotation": 0,
          "target": "19-dining"
        },
        {
          "yaw": 2.781162436104017,
          "pitch": -1.0466253688060938,
          "rotation": 0,
          "target": "7-reading-window"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-patio",
      "name": "Patio",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": -3.1354686913020995,
        "pitch": 0.1825628944951223,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": 3.112765036735513,
          "pitch": 0.2800028335419267,
          "rotation": 0,
          "target": "24-japanese-garden"
        },
        {
          "yaw": -1.2118813908519108,
          "pitch": 0.6186913018708111,
          "rotation": 0,
          "target": "26-entrance"
        },
        {
          "yaw": -1.292558218681961,
          "pitch": 0.13379126746924896,
          "rotation": 0,
          "target": "30-garden-front"
        },
        {
          "yaw": -0.8582436233660111,
          "pitch": 0.2399766677421873,
          "rotation": 0,
          "target": "23-car-porch"
        },
        {
          "yaw": -2.3023198602084385,
          "pitch": 0.12998907243135527,
          "rotation": 0,
          "target": "22-main-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-entrance",
      "name": "Entrance",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": 3.019113407835812,
        "pitch": 0.1164169182287651,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": -3.0738583966464734,
          "pitch": 0.32832027966106025,
          "rotation": 0,
          "target": "22-main-door"
        },
        {
          "yaw": 2.6292206321877654,
          "pitch": 0.1645102408569823,
          "rotation": 0,
          "target": "24-japanese-garden"
        },
        {
          "yaw": 1.970453194362503,
          "pitch": 0.2773766120375285,
          "rotation": 0,
          "target": "25-patio"
        },
        {
          "yaw": -0.5514746384808689,
          "pitch": 0.36624025824104045,
          "rotation": 0,
          "target": "23-car-porch"
        },
        {
          "yaw": -1.2735640352140418,
          "pitch": 0.16009892868822284,
          "rotation": 0,
          "target": "30-garden-front"
        },
        {
          "yaw": -0.21279668598714885,
          "pitch": 0.083697732690025,
          "rotation": 0,
          "target": "0-street"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-garden-back",
      "name": "Garden (back)",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": -0.018380540778336396,
        "pitch": 0.16404202114052424,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": -0.0017472909717355378,
          "pitch": 0.21544169291351878,
          "rotation": 0,
          "target": "28-garden-middle"
        },
        {
          "yaw": 1.5350418089598055,
          "pitch": 0.3955754921414787,
          "rotation": 0,
          "target": "11-utility-area"
        },
        {
          "yaw": 1.5943288323608709,
          "pitch": 0.11830569814992842,
          "rotation": 0,
          "target": "12-wet-kitchen-out"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-garden-middle",
      "name": "Garden (middle)",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": -2.5538445230819597,
        "pitch": -0.02666810929273211,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": -3.1147822776780867,
          "pitch": 0.1443068278505244,
          "rotation": 0,
          "target": "27-garden-back"
        },
        {
          "yaw": -0.022549828892373114,
          "pitch": 0.2488963838710614,
          "rotation": 0,
          "target": "29-garden-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-garden-living",
      "name": "Garden (living)",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": -2.2828056089945346,
        "pitch": 0.052916781013070846,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": -3.0844221822239817,
          "pitch": 0.27214362804708614,
          "rotation": 0,
          "target": "28-garden-middle"
        },
        {
          "yaw": 0.020163825368893384,
          "pitch": 0.21864026477730292,
          "rotation": 0,
          "target": "30-garden-front"
        },
        {
          "yaw": 1.7064910780518563,
          "pitch": 0.388180108072504,
          "rotation": 0,
          "target": "20-living"
        },
        {
          "yaw": 1.584156166501245,
          "pitch": 0.015694384335418476,
          "rotation": 0,
          "target": "24-japanese-garden"
        },
        {
          "yaw": 1.9723746576199623,
          "pitch": 0.0773110679981901,
          "rotation": 0,
          "target": "21-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-garden-front",
      "name": "Garden (front)",
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
      "faceSize": 760,
      "initialViewParameters": {
        "yaw": 2.8537664260679207,
        "pitch": -0.08466684962090909,
        "fov": 1.5769200741895182
      },
      "linkHotspots": [
        {
          "yaw": -3.10591137634367,
          "pitch": 0.2518688255178958,
          "rotation": 0,
          "target": "29-garden-living"
        },
        {
          "yaw": 1.7277284198348326,
          "pitch": 0.194519770531846,
          "rotation": 0,
          "target": "26-entrance"
        },
        {
          "yaw": 0.8966260814193099,
          "pitch": 0.3210561232700133,
          "rotation": 0,
          "target": "23-car-porch"
        },
        {
          "yaw": 0.4947410653343187,
          "pitch": 0.07914435953421872,
          "rotation": 0,
          "target": "0-street"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Emas virtual tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
