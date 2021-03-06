myApp.controller("DogsController", ['$http', function($http) {
    console.log('Dog controller Running');
    var self = this;

    var key = 'ff0874bda6aee17c9869854bd209ef4e';
    var baseURL = 'http://api.petfinder.com/';

    self.getDog = function() {
        var query = baseURL + 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal=dog';
        query += '&output=basic';
        query += '&format=json';

        console.log('query: ', query);

        var request = encodeURI(query) + '&callback=JSON_CALLBACK';

        $http.jsonp(request).then(function(response) {
            self.pet = response.data.petfinder.pet;
            console.log(self.pet);
            self.img = self.pet.media.photos.photo[2];
            self.img = self.img.$t;
            console.log(self.img);
        });

    };

    self.getDog();

}]);
