import angular from 'angular';

import adminNav from './admin-nav/admin-nav';
import navbar from './navbar/navbar';
import tagsInput from './tags-input/tags-input';


let widgets = angular.module('crm.widgets', [
   adminNav.name,
   navbar.name,
   tagsInput.name
]);

export default widgets;