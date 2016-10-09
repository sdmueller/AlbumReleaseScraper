import {Template} from 'meteor/templating';
import {Releases} from '../api/releases.js';

import './body.html';
import './release.js';

Template.body.helpers({
  releases() {
    return Releases.find({});
  },
});

Template.updateReleases.events({
  'click .updateButton'() {
    Meteor.call("getReleases");
  },
});
