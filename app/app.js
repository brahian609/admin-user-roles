import angular from 'angular';
import components from './components/componentes';
import libraries from './app.libraries';
import constants from './app.constants';
import appComponents from './app.component';
import appRoutes from './app.routes';
import appRun from './app.run';
import shared from './shared/shared';

angular.module('app', [
        libraries.name,
        constants.name,
        shared.name,
        components.name
    ])
    .config(appRoutes)
    .run(appRun)
    .component('app', appComponents);