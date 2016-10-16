var DAYMULTIPLIER = 86400000;

var populateDates = function(targetMonth,year){
	var startDate = new Date(year,targetMonth - 1,1,0,0,0,1);
	var index = 1
	startDate.setTime(startDate.getTime() - startDate.getDay() * DAYMULTIPLIER);
	var month = [];
	for(rows = 0; rows < numberOfRows ; rows++){
		weekObject = {week: []};
		for(cols = 0; cols < tilesPerRow; cols++){
			weekObject.week.push(new dayObject(index,startDate.getDate(),startDate.getMonth()+ 1,startDate.getFullYear(),targetMonth,startDate.getTime()));
			startDate.setTime(startDate.getTime() + DAYMULTIPLIER);
			index++;
		}
		month.push(weekObject);
	}
	return month;
};

var dayObject = function(index,day,month,year,targetMonth,time){
	this.index = index;
	this.day = day;
	this.month = month;
	this.year = year;
	this.blur = false;
	this.time = time;
	if(targetMonth != month){
		this.blur = true;
	}
};

var getDateIndex = function(startTime,day,month,year){
	var selectedDate = new Date(year,month,day,0,0,0,1);
	console.log((selectedDate.getTime() - startTime) / DAYMULTIPLIER + 1);
	return (selectedDate.getTime() - startTime) / DAYMULTIPLIER + 1;
};

var findEventsInRange = function(day,startTime,span){
	var numberOfEvents = listOfEvents.length;
	var schedule = [];
	var n;
	var m;
	var newN;
	var latestEventInRange;
	var pushed = false;
	
	var eventsInRange = [];
	for(n = 0; n < numberOfEvents ; n++){
		if(listOfEvents[n].day == day && listOfEvents[n].startTime >= startTime && listOfEvents[n].startTime < span + startTime){
			eventsInRange.push(listOfEvents[n]);
		}
	}
	for(n = 0; n < displayedHours * 2 ; n++){
		latestEventInRange = 0;
		pushed = false;
		for(m = 0; m < eventsInRange.length ; m++){

			if(eventsInRange[m].startTime >= n * 50 + startTime && eventsInRange[m].startTime < ( n + 1 ) * 50 + startTime){
				if(eventsInRange[m].startTime + eventsInRange[m].duration > latestEventInRange){
					latestEventInRange = eventsInRange[m].startTime + eventsInRange[m].duration;
				}
				if(	eventsInRange[m].startTime % 50 != 0){
					schedule.push(new blankEvent(day,n*50+ startTime,50-eventsInRange[m].startTime));
				}
				schedule.push(eventsInRange[m]);
				pushed = true;
			}
			if(latestEventInRange > n * 50){
				schedule.push(new blankEvent(day,latestEventInRange,50 - (latestEventInRange % 50)));
				n = Math.floor((latestEventInRange - startTime) / 50);
			}
		}
		if(pushed == false){
			schedule.push(new blankEvent(day,n * 50 + startTime,50));
		}
	}
	return schedule;
};

var calendarEvent = function(){
	this.day = 1;
	this.startTime = 100;
	this.duration = 100;
};

var blankEvent = function(day,time,duration){
	this.day = day;
	this.startTime = time;
	this.duration = duration;
};

