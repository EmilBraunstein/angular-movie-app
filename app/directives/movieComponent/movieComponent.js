angular.module('app').directive('movieComponent', function($http) {
  return {
    restrict: 'E',
    templateUrl: '/app/directives/movieComponent/movie-component.html',
    scope:{
      actor:'='
    },
    link: function(scope){

      let API_KEY = '926536c71b42cca641ea429a5777aaa8';
      let URL = 'http://api.themoviedb.org/3/';
      scope.SITE_PATH="http://image.tmdb.org/t/p/w500/"

      scope.$watch('actor', function(newValue,oldValue,scope){
        if(newValue === undefined)
          return;

        getMoviesById(newValue.actorId,newValue.name);
      })

      let getMoviesById = function(id,actorName) {
  			scope.actorName = actorName;

  			var promise = $http.get(URL + 'person/' + id  + '/movie_credits' + '?api_key=' + API_KEY);
  			promise.then(successCallback, failureCallback)
  			function successCallback(result) {
  				console.log("successCallback", result.data.cast)
  				scope.movies = result.data.cast;
  				scope.moviesLoaded=true;
  			}

  			function failureCallback(result) {
  				console.log("failureCallback", result)
  			}
  		}
    }
  };
});
