app.service('ClientService', function ($http) {
    this.getClients = function () {
        return $http.get('Test data/Client.json');
    }
});