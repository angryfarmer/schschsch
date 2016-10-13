//Calendar View
var tilesPerRow = 7;
var numberOfRows = 6;

//APP Height
var screenWidth = 350;
var screenHeight = 600;
var calendarToDayViewRatio =0.5;

//Individual Event
var durationRatio = 0.5;
var eventTileBorder = 1;

//Overall Event Screen
var dayViewBorder = 1;
var dayViewRatio = 1 - calendarToDayViewRatio;
var displayedHours = 4;
var dayViewHeight = screenHeight * dayViewRatio - dayViewBorder * 2;
var dayViewWidth = screenWidth - dayViewBorder * 2;


//Individual day Tiles
var dayTileBorder = 1;
var dayTileHeight = screenHeight * calendarToDayViewRatio / numberOfRows - dayTileBorder * 2;
var dayTileWidth = screenWidth / tilesPerRow - dayTileBorder * 2;
	

//CSS feed objects
var dayViewCSS = {
					'height': dayViewHeight+'px', 
					'width': dayViewWidth+'px',
					'border-style': 'solid',
					'border-width': dayViewBorder + 'px',
					'margin': 0,
					'padding': 0,
					'float': 'left',
					'overflow' : 'hidden'
				  };

var dateTileCSS = {
					'height': dayTileHeight+'px', 
					'width': dayTileWidth+'px',
					'border-style': 'solid',
					'border-width': dayTileBorder + 'px',
					'margin': 0,
					'padding': 0,
					'float': 'left',
					'overflow': 'hidden'
				  };			  
				  
var eventTileCSS = function(duration){
	var eventdayTileHeight = durationRatio * duration - eventTileBorder * 2;
	var eventdayTileWidth = screenWidth - eventTileBorder * 2;	
	
	return {
		'height': eventdayTileHeight+'px', 
		'width': eventdayTileWidth+'px',
		'border-style': 'solid',
		'border-width': eventTileBorder + 'px',
		'margin': 0,
		'padding': 0,
		};
}