import angular from 'angular';
import ContactsRoutes from './contacts.route';
import ContactsController from './contacts.controller';

import contactsForm from './contacts-form/contacts-form';

let contactsModule = angular.module('app.components.contacts', [
        contactsForm.name
    ])
    .config(ContactsRoutes)
    .controller('ContactsController', ContactsController);

export default contactsModule;