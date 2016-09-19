import angular from 'angular';
import GroupsRoutes from './groups.route';
import GroupsController from './groups.controller';

import groupsForm from './groups-form/groups-form';

let groupsModule = angular.module('app.components.groups', [
        groupsForm.name
    ])
    .config(GroupsRoutes)
    .controller('GroupsController', GroupsController);

export default groupsModule;