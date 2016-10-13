var populateDates = function(month,year){
	var index = 1;
	var month = [];
	for(rows = 0; rows < numberOfRows ; rows++){
		weekObject = {week: []};
		for(cols = 0; cols < tilesPerRow; cols++){
			dayObject = {day: index, stuff: 123 +'wtf'};
			weekObject.week.push(dayObject);
			index++;
		}
		month.push(weekObject);
	}
	return month;
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
					console.log('latest'+ latestEventInRange + 'vs' + (n*50));
					
				}
				if(	eventsInRange[m].startTime % 50 != 0){
					schedule.push(new blankEvent(day,n*50+ startTime,50-eventsInRange[m].startTime));
					console.log(n+'pushingearlyshit');
				}
				schedule.push(eventsInRange[m]);
				pushed = true;

			}
			if(latestEventInRange > n * 50){
				schedule.push(new blankEvent(day,latestEventInRange,50 - (latestEventInRange % 50)));
				n = Math.floor((latestEventInRange - startTime) / 50);
				console.log(n+'makingshitup');
			}
		}
		if(pushed == false){
			schedule.push(new blankEvent(day,n * 50 + startTime,50));
			console.log(n+'pushfullblank');
		}
	}
	return schedule;
};

var listOfEvents = [];


var calendarEvent = function(){
	this.day = 1;
	this.startTime = 100;
	this.duration = 100;
};

var blankEvent = function(day,time,duration){
	this.day = day;
	this.startTime = time;
	this.duration = duration;
}

randomEvent = new calendarEvent();
listOfEvents.push(randomEvent);

var randomEvent2 = new calendarEvent();
randomEvent2.startTime = 220;
randomEvent2.duration = 400;
listOfEvents.push(randomEvent2);


var randomEvent3 = new calendarEvent();
randomEvent3.day = 2;	
listOfEvents.push(randomEvent3);

console.log(findEventsInRange(1,200,400));
