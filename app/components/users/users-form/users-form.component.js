import template from './users-form.html';
import controller from './users-form.controller';

let usersFormComponent = {
    template,
    controller,
    bindings: {
        userData: '<'
    }
};

export default usersFormComponent;