import {Template} from 'meteor/templating';
import {Releases} from '../api/releases.js';
import './release.html';

Template.release.events({
  'click .delete'() {
    Meteor.call('releases.remove', this._id);
  },
});
