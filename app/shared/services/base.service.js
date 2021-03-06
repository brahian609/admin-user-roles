class BaseService {

    constructor(API_URL, $http, $q, $window, AuthTokenProvider, jwtHelper){
        this.API_URL = API_URL;
        this.$http = $http;
        this.$q = $q;
        this.$window = $window;
        this.AuthTokenProvider = AuthTokenProvider;
        this.jwtHelper = jwtHelper;
    }

    request(req) {

        let store = this.$window.localStorage;

        let url = store.getItem('tenant-url');

        //let url = this.API_URL;

        let config = {
            url: `${url}/${req.endpoint}`,
            method: req.method,
            data: req.dataObj,
            headers: {
                'Accept': req.accept || 'application/json',
                'Content-Type': req.content || 'application/json'
            }
        };

        return this.$q((resolve, reject) => {
            this.$http(config)
                .then(({data}) => resolve(data))
                .catch(reason => reject(reason));
        });

    }

    getUserId() {
        return this.$q((resolve) => {
            let token = this.AuthTokenProvider.getToken(),
                tokenPayLoad = this.jwtHelper.decodeToken(token);
            resolve(tokenPayLoad.id);
        });
    }

    getModules() {
        return this.$q((resolve, reject) => {
            this.request(
                {
                    endpoint: `crm_modules`,
                    method: 'GET'
                }
            ).then(({data}) => {
                resolve(data);
            }).catch(reason =>
                reject(reason)
            );
        });
    }

    /*validar si el usuario tiene acceso al modulo*/
    check_navigation(module, modules) {
        var validNav = modules.some((element) => {
            if(element == module){
                return true;
            }else{
                return false;
            }
        });

        return validNav;
    }

    checkPermissionAction(permissions, action) {
        var resutl = permissions.some((permission) => {
            if(permission == action){
                return true;
            }else{
                return false;
            }
        });

        return resutl;
    }

    parseRoute(route, getter) {

        let number = 0;
        if(getter == 'module'){
            number = 1;
        }else if(getter == 'action'){
            number = 2;
        }

        return route.split('.')[number];

    }

}

BaseService.$inject = ['API_URL', '$http', '$q', '$window', 'AuthTokenProvider', 'jwtHelper'];

export default BaseService;