import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

export const Releases = new Mongo.Collection('releases');

Meteor.methods({
  'releases.remove'(taskId){
    check(taskId, String);
    
    //make sure user is logged in before deleting
    if(!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Releases.remove(taskId);
  },
});
