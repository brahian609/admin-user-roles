import template from './leads-form.html';
import controller from './leads-form.controller';

let leadsFormComponent = {
    template,
    controller,
    bindings: {
        leadData: '<'
    }
};

export default leadsFormComponent;