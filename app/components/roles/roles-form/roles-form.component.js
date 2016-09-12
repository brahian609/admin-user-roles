import template from './roles-form.html';
import controller from './roles-form.controller';

let rolesFormComponent = {
    template,
    controller,
    bindings: {
        roleData: '<'
    }
};

export default rolesFormComponent;