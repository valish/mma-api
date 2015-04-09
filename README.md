
# MMA Fighter API
Get fighter JSON by name.  

## Install
From source:

```
git clone https://github.com/valish/mma-api
cd mma-api
npm install
```

From npm:

```
npm install mma
```

## Use

```
> var mma = require('mma');
> mma.fighter("Jon Jones", function(data) {
    console.log(data);
  });
> {
    "name": "Jon Jones",
    "nickname": "Bones",
    "fullname": "Jon \"Bones\" Jones",
    "record": "21-1-0",
    "association": "Jackson-Wink MMA",
    "age": "27",
    "birthday": "1987-07-19",
    "hometown": "Rochester, New York USA",
    "nationality": "United States",
    "location": "Endicott, New York USA",
    "height": "6' 4\"",
    "height_cm": "193",
    "weight": "205",
    "weight_kg": "93",
    "weight_class": "Light Heavyweight",
    "college": "Iowa Central",
    "degree": "Associates Degree",
    "summary": [
      "Wrestling",
      "jiu-jitsu",
      "muay thai"
    ],
    "wins": {
      "total": 21,
      "knockouts": 9,
      "submissions": 6,
      "decisions": 6,
      "others": 0
    },
    "losses": {
      "total": 1,
      "knockouts": 0,
      "submissions": 0,
      "decisions": 0,
      "others": 0
    },
    "strikes": {
        "attempted": 1679,
        "successful": 916,
        "standing": 541,
        "clinch": 188,
        "ground": 187
    },
    "takedowns": {
        "attempted": 64,
        "successful": 33,
        "submissions": 10,
        "passes": 22,
        "sweeps": 0
    },
    "fights": [
        {
            "name": "UFC 182 - Jones vs. Cormier",
            "date": "Jan / 03 / 2015",
            "url": "/events/UFC-182-Jones-vs-Cormier-38841",
            "result": "win",
            "method": "Decision (Unanimous)",
            "referee": "Herb Dean",
            "round": "5",
            "time": "5:00",
            "opponent": "Daniel Cormier"
        },
        {
            "name": "UFC 172 - Jones vs. Teixeira",
            "date": "Apr / 26 / 2014",
            "url": "/events/UFC-172-Jones-vs-Teixeira-34401",
            "result": "win",
            "method": "Decision (Unanimous)",
            "referee": "Dan Miragliotta",
            "round": "5",
            "time": "5:00",
            "opponent": "Glover Teixeira"
        },
        {
            "name": "UFC 165 - Jones vs. Gustafsson",
            "date": "Sep / 21 / 2013",
            "url": "/events/UFC-165-Jones-vs-Gustafsson-30249",
            "result": "win",
            "method": "Decision (Unanimous)",
            "referee": "John McCarthy",
            "round": "5",
            "time": "5:00",
            "opponent": "Alexander Gustafsson"
        }
    ]
}
``` 

### More data coming soon: 
- All fighter ranking information from FightMatrix.com profiles @ [fight-matrix-api](https://github.com/valish/fight-matrix-api)
