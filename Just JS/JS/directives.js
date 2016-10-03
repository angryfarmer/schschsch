var app = angular.module('myapp',[]);

app.directive('calendarBody', function(){
	return {
		restrict: 'E',
		templateUrl: 'HTML/calendarBody.html'
	};
});

app.directive('dateTile', function(){
	return {
		restrict: 'E',
		templateUrl: 'HTML/dateTile.html'
	};
});