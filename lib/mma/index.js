
/*

  MMA API in NodeJS
  -----------------

  Copyright: (c) 2015 Andrew Valish
  License: BSD, see LICENSE for more details

*/

var google = require('google');
var ufc = require('ufc');
var sherdog = require('sherdog');

//-------------------------------------------------------+
//  Get Fighter Profile Data
//  mma.getFighter("Jon Jones", callback(data));
//-------------------------------------------------------+

var fighter = function(query, callback) {

  //----------------------------------+
  //  JSON object for Fighter
  //----------------------------------+ 
  var fighter = {
    name: "",
    nickname: "",
    fullname: "",
    record: "",    
    association: "",
    age: "",
    birthday: "",
    hometown: "",
    nationality: "",
    location: "",
    height: "",
    height_cm: "",
    weight: "",
    weight_kg: "",
    weight_class: "",
    college: "",
    degree: "",
    summary: [],
    wins: {
      total: 0,
      knockouts: 0,
      submissions: 0,
      decisions: 0,
      others: 0
    },
    losses: {
      total: 0,
      knockouts: 0,
      submissions: 0,
      decisions: 0,
      others: 0
    },
    strikes: {
      attempted: 0,
      successful: 0,
      standing: 0,
      clinch: 0,
      ground: 0
    },
    takedowns: {
      attempted: 0,
      successful: 0,
      submissions: 0,
      passes: 0,
      sweeps: 0
    },
    fights: []
  };

  //-----------------------------------------------+
  //  Query Google Search for Fighter Profiles
  //  https://github.com/jprichardson/node-google
  //-----------------------------------------------+
  
  google.resultsPerPage = 5;

  // Search for Sherdog profile first
  google(query + ' sherdog', function(err, next, links) {
    if (err) console.error(err);

    var sherdog_url, ufc_url;
    var resultContains = function(link, query) {
      if (link.href !== null) {
        if (link.href.indexOf(query) > -1) { return true; }
      }
    };

    for (var i = 0; i < links.length; ++i) {
      if (resultContains(links[i], "sherdog.com/fighter/")) {
        sherdog_url = links[i].href;
        i = 10;
      }
    }

    //------------------------------------------+
    //  Crawl and Parse Sherdog Profile
    //  https://github.com/valish/sherdog-api
    //------------------------------------------+
    sherdog.getFighter(sherdog_url, function(data) {
      fighter.name = data.name;
      fighter.nickname = data.nickname;
      fighter.association = data.association;
      fighter.age = data.age;
      fighter.birthday = data.birthday;
      fighter.hometown = data.locality;
      fighter.nationality = data.nationality;
      fighter.height = data.height;
      fighter.weight = data.weight;
      fighter.weight_class = data.weight_class;
      fighter.wins = data.wins;
      fighter.losses = data.losses;
      fighter.fights = data.fights;

      // Search for UFC profile
      google(query + ' ufc', function(err, next, links) {
        if (err) console.error(err);
        
        for (var i = 0; i < links.length; ++i) {
          if (resultContains(links[i], "ufc.com/fighter/")) {
            ufc_url = links[i].href;
            i = 10;
          }
        }
        
        //------------------------------------------+
        //  Crawl and Parse UFC Profile
        //  https://github.com/valish/ufc-api
        //------------------------------------------+
        if (ufc_url) {
          ufc.getFighter(ufc_url, function(data) {
            fighter.fullname = data.fullname;
            fighter.hometown = data.hometown;
            fighter.location = data.location;
            fighter.height = data.height;
            fighter.height_cm = data.height_cm;
            fighter.weight = data.weight;
            fighter.weight_kg = data.weight_kg;
            fighter.record = data.record;
            fighter.college = data.college;
            fighter.degree = data.degree;
            fighter.summary = data.summary;
            fighter.strikes = data.strikes;
            fighter.takedowns = data.takedowns;
            
            callback(fighter);
          });
        } else {
          callback(fighter);
        }
      });
      
    });

  });
}

module.exports.fighter = fighter;
