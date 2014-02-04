'use strict';

angular.module('ngRUAApp.services', []).
    factory('CRUDModelFactory', ['$http', function($http) {        
        var urlBase = 'http://127.0.0.1:3000/api';        
        var username = "unit";
        var password = "Un1t&";                        
        
        var getHeaders = function() {
            var timestamp = moment().format('YYYYMMDDhhmmssSSS');
            
            var saltedPassword = (function() {
                var key = username + password + timestamp;
                var hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
                hmac.update(timestamp);
                var salt = hmac.finalize();

                return password + salt;
            })();
        
            var hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, saltedPassword);
            hmac.update(password + username + timestamp + saltedPassword);
            var hash = hmac.finalize();	
            
            var headers = {
                'X-Auth': hash,
                'X-Username': username,
                'X-Timestamp': timestamp
            };
            console.log(headers);
            
            return headers;
        };
        
        var list = function(modelKey) {                        
            var promise = $http.get(urlBase + '/list/' + modelKey, {
                headers: getHeaders()                
            }).then(function(response) {
                return response.data;
            });

            return promise;
        };
        
        var get = function(modelKey, id) {
            var promise = $http.get(urlBase + '/get/' + modelKey + '/' + id, {
                headers: getHeaders()                
            }).then(function(response) {
                return response.data;
            });

            return promise;            
        };
        
        return {
            list: list,
            get: get
        };
    }]);