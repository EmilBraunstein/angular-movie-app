	angular.module("app").controller("actorSearch", actorSearch)

	function actorSearch($scope, $http) {

	    var MOVIE_CREDIT = "movie_credits";
	    $scope.SITE_PATH = "http://image.tmdb.org/t/p/w500/"

	    $scope.changeActor = function(actorId, name) {
	        $scope.actor = {
	            actorId: actorId,
	            name: name
	        }
	    }

	};
