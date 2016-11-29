myApp.controller("SheltersController", ['$http', function($http) {
    console.log('Shelters controller Running');
    var self = this;

    self.states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
    self.selectState = '';

    var key = 'ff0874bda6aee17c9869854bd209ef4e';
    var baseURL = 'http://api.petfinder.com/';

    self.getShelters = function() {
        var query = baseURL + 'shelter.find';
        query += '?key=' + key;
        query += '&location=' + self.selectState;
        query += '&format=json';

        console.log('query: ', query);

        var request = encodeURI(query) + '&callback=JSON_CALLBACK';

        $http.jsonp(request).then(function(response) {
            self.shelters = response.data.petfinder.shelters.shelter;
            console.log(self.shelters);
        });

    };

        // self.getShelters();

    }]);
