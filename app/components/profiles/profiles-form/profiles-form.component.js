import template from './profiles-form.html';
import controller from './profiles-form.controller';

let profilesFormComponent = {
    template,
    controller,
    bindings: {
        profileData: '<'
    }
};

export default profilesFormComponent;