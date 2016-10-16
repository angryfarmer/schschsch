var listOfEvents = [];

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
