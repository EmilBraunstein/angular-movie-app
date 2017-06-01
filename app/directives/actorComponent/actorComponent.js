angular.module('app').directive('actorComponent', function($http) {
  return {
    restrict: 'E',
    templateUrl: '/app/directives/actorComponent/actor-component.html',
    scope:{
      changeActor:'='
    },
    link: function(scope){

      let API_KEY = '926536c71b42cca641ea429a5777aaa8';
      let URL = 'http://api.themoviedb.org/3/';
      scope.SITE_PATH="http://image.tmdb.org/t/p/w500/"

      scope.selectMovie = function(id,name){
        scope.changeActor(id,name);
      }

      scope.$watch('searchQuery',function(newValue,oldValue,scope){
        getActors();
      })

      let getActors = function() {
  			var promise = $http.get(URL + "search/person?api_key=" + API_KEY + "&query=" +  scope.searchQuery);
  			promise.then(successCallback, failureCallback)

  			function successCallback(result) {
  				console.log("successCallback", result.data.results)
  				scope.actors = result.data.results;
  			}

  			function failureCallback(result) {
  				console.log("failureCallback", result)
  			}

  		}
    }
  };
});
