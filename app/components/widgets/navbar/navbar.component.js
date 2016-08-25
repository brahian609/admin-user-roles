import template from './navbar.html';
import controller from './navbar.controller';

let navbarComponent = {
    template,
    controller,
    bindings: {
        checkNav: '&'
    }
};

export default navbarComponent;