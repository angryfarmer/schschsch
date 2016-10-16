app.controller('populateCalendar',function($scope){

	var today = new Date();
	$scope.selectedDay = today.getDate();
	$scope.events=findEventsInRange($scope.selectedDay,0,400);
	$scope.dayHeaderValues = dayHeaderValues;
	$scope.month = populateDates(today.getMonth() + 1,today.getFullYear());
	var todayIndex = 1;


	todayIndex = getDateIndex($scope.month[0].week[0].time,today.getDate(),today.getMonth(),today.getFullYear());

	$scope.changeMonthLeft = function(){
		today.setMonth(today.getMonth() - 1);
		console.log(today.getMonth());
		$scope.month = populateDates(today.getMonth() + 1,today.getFullYear());
		$scope.changeToDay(getDateIndex($scope.month[0].week[0].time,1,today.getMonth(),today.getFullYear()));
	}
	$scope.changeMonthRight = function(){
		today.setMonth(today.getMonth() + 1);
		console.log(today.getMonth());
		$scope.month = populateDates(today.getMonth() + 1,today.getFullYear());
		$scope.changeToDay(getDateIndex($scope.month[0].week[0].time,1,today.getMonth(),today.getFullYear()));
	}
	$scope.changeToDay  = function(index){
		var row = Math.ceil(index/tilesPerRow) - 1;
		var col = index % tilesPerRow - 1;
		if(index % tilesPerRow == 0){
			col = 6;
		}
		$scope.selectedDay = $scope.month[row].week[col].day;
		$scope.headerDisplay = monthNames[$scope.month[row].week[col].month - 1].month + ' ' + $scope.selectedDay + ', ' + $scope.month[row].week[col].year;
		$scope.events = findEventsInRange($scope.selectedDay,0,400);
	};
	$scope.changeToDay(todayIndex);
	
	//Style
	$scope.dateTileCSS = function(blur){
		return dateTileCSS(blur);
	};
	$scope.dayViewCSS = dayViewCSS;
	$scope.calendarHeaderCSS = calendarHeaderCSS;
	$scope.eventTileCSS = function(duration){
		return eventTileCSS(duration);
	}
	$scope.dayHeaderCSS = dayHeaderCSS;
	$scope.calendarViewCSS = calendarViewCSS;
	$scope.dayHeaderContainerCSS = dayHeaderContainerCSS;
	$scope.headerControlContainerCSS = headerControlContainerCSS;
	$scope.monthButtonCSS = monthButtonCSS;
	$scope.leftMonthArrowCSS = leftMonthArrowCSS;
	$scope.rightMonthArrowCSS = rightMonthArrowCSS;
	
});
