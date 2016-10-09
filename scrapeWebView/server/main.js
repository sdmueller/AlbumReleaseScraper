import {HTTP} from 'meteor/http';
import {scrapingHubApiKey} from './serverConstants.js';
import {scrapingHubProjectId} from './serverConstants.js';
import {sputnikSpider} from './serverConstants.js';
import '../imports/api/releases.js';

Meteor.methods({
  getReleases: function() {
    var url = "https://storage.scrapinghub.com/items/"+scrapingHubProjectId+"/"+sputnikSpider;
    this.unblock();
    HTTP.get(url, {auth:scrapingHubApiKey+":", params:{format:"json"}}, function(error, response) {
      var respJson = JSON.parse(response.content);
      for(row in respJson) {
        console.log(respJson[row].artist + " - " + respJson[row].album);
      }
      //TODO clean from duplicates and save to database for showing
    });
  }
});
