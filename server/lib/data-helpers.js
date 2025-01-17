"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {


      console.log(`Inserting new tweet:\n${newTweet.content.text}`);
      
      try{
        db.collection("tweets").insertOne(newTweet);
        callback(null);
      }
      catch (e){
        callback(e)
      }
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {

      console.log("Getting Tweets...");
      db.collection("tweets").find().toArray(callback);

    }

  };
}
