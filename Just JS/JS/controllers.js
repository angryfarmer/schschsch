app.controller('populateCalendar',function($scope){

	$scope.currentDay = 1;
	$scope.events=findEventsInRange($scope.currentDay,0,400);
	
	$scope.month = populateDates(1,2);
	
	$scope.changeToDay  = function(day){
		$scope.currentDay = day;
		$scope.events = findEventsInRange($scope.currentDay,0,400);
	};
	
	
	//Style
	$scope.dateTileCSS = dateTileCSS;
	$scope.dayViewCSS = dayViewCSS;
	$scope.eventTileCSS = function(duration){
		return eventTileCSS(duration);
	}
	
	
});
