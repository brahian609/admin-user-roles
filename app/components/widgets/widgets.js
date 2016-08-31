import angular from 'angular';

import navbar from './navbar/navbar';
import adminNav from './admin-nav/admin-nav';
import tagsInput from './tags-input/tags-input';


let widgets = angular.module('crm.widgets', [
   navbar.name,
   adminNav.name,
   tagsInput.name
]);

export default widgets;