class BaseService {

    constructor(API_URL, $http, $q, $window){
        this.API_URL = API_URL;
        this.$http = $http;
        this.$q = $q;
        this.$window = $window;
    }

    request(req) {

        let store = this.$window.localStorage;

        let url = store.getItem('tenant-url');

        //let url = this.API_URL;

        let config = {
            url: `${url}/${req.endpoint}`,
            method: req.method,
            data: {
                [req.dataName || '']: req.dataObj || ''
            },
            headers: {
                'Accept': req.accept || 'application/json',
                'Content-Type': req.content || 'application/json'
            }
        };

        return this.$q((resolve, reject) => {
            this.$http(config)
                .then(promise => resolve(promise))
                .catch(reason => reject(reason));
        });

    }

}

BaseService.$inject = ['API_URL', '$http', '$q', '$window'];

export default BaseService;