
import {LOGIN_URL} from './constants'
'use strict';
var api = {
    login() {
         return fetch(LOGIN_URL)
    }
};


export default api;