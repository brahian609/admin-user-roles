import template from './groups-form.html';
import controller from './groups-form.controller';

let groupsFormComponent = {
    template,
    controller,
    bindings: {
        groupData: '<'
    }
};

export default groupsFormComponent;