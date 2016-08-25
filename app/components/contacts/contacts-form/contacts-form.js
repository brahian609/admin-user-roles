import angular from 'angular';
import ContactsFormController from './contacts-form.controller';

let contactsFormModule = angular.module('contactsForm', [])
    .controller('ContactsFormController', ContactsFormController);

export default contactsFormModule;