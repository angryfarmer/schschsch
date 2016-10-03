app.controller('populateCalendar',function($scope){
	var dates = [];
	$scope.test = getMonth();
	var populateDates = function(month,year){
		var index = 1;
		var month = [];
		for(rows = 0; rows < 6 ; rows++){
			weekObject = {week: []};
			for(cols = 0; cols < 7; cols++){
				dayObject = {day: index};
				weekObject.week.push(dayObject);
				index++;
			}
			month.push(weekObject);
		}
		return month;
	};
	$scope.month = populateDates(1,2);
	console.log(populateDates(1,2));
	
});

var abc = 'po';
var getMonth = function(){
	return abc;
};