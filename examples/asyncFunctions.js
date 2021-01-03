const axios = require("axios");

module.exports = {
    
    getUsers: async function() {

        return axios.get('https://jsonplaceholder.typicode.com/users');
    }

}
