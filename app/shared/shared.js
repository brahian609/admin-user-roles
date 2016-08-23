import angular from 'angular';

import providers from './providers/providers';

let sharedModule = angular.module('app.shared', [
        providers.name
    ]);

export default sharedModule;