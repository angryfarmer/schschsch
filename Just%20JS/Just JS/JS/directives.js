var app = angular.module('myapp',['panhandler']);

app.directive('calendarBody', function(){
	return {
		restrict: 'E',
		templateUrl: 'HTML/calendarBody.html'
	};
});

app.directive('calendarView', function(){
	return {
		restrict: 'E',
		templateUrl: 'HTML/calendarView.html'
	};
});

app.directive('dateTile', function(){
	return {
		restrict: 'E',
		templateUrl: 'HTML/dateTile.html'
	};
});

app.directive('calendarHeader', function(){
	return {
		restrict: 'E',
		templateUrl: 'HTML/calendarHeader.html'
	};
});

app.directive('dayView', function() {
	return {
		restrict: 'E',
		templateUrl: 'HTML/dayView.html'
	};
});

app.directive('navWheel', function(){
	return {
		restrict: 'E',
		templateUrl: 'HTML/navWheel'
	};
});