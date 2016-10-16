{//APP Dimensions
	var screenWidth = 350;
	var screenHeight = 600;
	var calendarToDayViewRatio =0.5;
};
{//Calendar Constants
	var tilesPerRow = 7;
	var numberOfRows = 6;
	var dayHeaderValues = [{day: 'S'},{day: 'M'},{day: 'T'},{day: 'W'},{day: 'T'},{day: 'F'},{day: 'S'}];
	var monthNames = [{month:'January'},{month:'February'},{month:'March'},{month:'April'},{month:'May'},{month:'June'},{month:'July'},{month:'August'},{month:'September'},{month:'October'},{month:'November'},{month:'December'}];
};
{//Header items
	{//Calendar Header -- Top panel
		var calendarHeaderBorder = 1;
		var calendarHeaderRatio = 0.08;
		var calendarHeaderHeight = calendarHeaderRatio * screenHeight;	
		var calendarHeaderWidth = screenWidth - calendarHeaderBorder * 2;
	};
	{//Month and Year control Container
		var headerControlContainerBorder = 0;
		var headerControlContainerHeightRatio = 0.5;
		var headerControlContainerHeight = calendarHeaderHeight * headerControlContainerHeightRatio - headerControlContainerBorder * 2;
		var headerControlContainerWidth = calendarHeaderWidth - headerControlContainerBorder * 2;
	};
	{//Month Button
		var monthButtonLengthRatio = 0.5;
		var monthButtonBorder = 0;
		var monthButtonWidth = headerControlContainerWidth * monthButtonLengthRatio - 2 * monthButtonBorder;
		var monthButtonFloatFromLeft = (1 - monthButtonLengthRatio) * headerControlContainerWidth / 2;
	}
	{//Left Month Arrow
		var leftMonthArrowLengthRatio = 0.1;
		var leftMonthArrowLengthBorder = 0;
		var leftMonthArrowWidth = headerControlContainerWidth * leftMonthArrowLengthRatio - leftMonthArrowLengthBorder * 2;
		var leftMonthArrowFloatFromLeft = monthButtonFloatFromLeft - leftMonthArrowWidth;
	}
	{//right Month Arrow
		var rightMonthArrowLengthBorder = 0;
		var rightMonthArrowWidth = leftMonthArrowWidth;
		var rightMonthArrowFloatFromLeft = monthButtonFloatFromLeft + monthButtonWidth;
	}
	{//Days header SMTWTFS
		var dayHeaderBorder = 0;
		var dayHeaderHeightRatio = 0.3;
		var dayHeaderHeight = calendarHeaderHeight * dayHeaderHeightRatio - dayHeaderBorder * 2;
		var dayHeaderWidth = calendarHeaderWidth / tilesPerRow;
		var daysHeaderFloatFromBottom = 2;
	};
};
{//Day Tiles and container
	{//Day Tile contanier
		var calendarViewRatio = 0.5;
		var calendarViewBorder = 1;
		var calendarViewHeight = screenHeight * calendarViewRatio;
		var calendarViewWidth = screenWidth - calendarViewBorder * 2;
	};
	{//Individual day Tiles
		var dayTileBorder = 1;
		var dayTileHeight = calendarViewHeight / numberOfRows - dayTileBorder * 2;
		var dayTileWidth = calendarViewWidth / tilesPerRow - dayTileBorder * 2;
	};
};
{//Events display
	{//Overall Event Screen
		var dayViewBorder = 1;
		var dayViewRatio = 1 - calendarToDayViewRatio;
		var displayedHours = 4;
		var dayViewHeight = screenHeight * dayViewRatio - dayViewBorder * 2;
		var dayViewWidth = screenWidth - dayViewBorder * 2;
	};
	{//Individual Event
		var durationRatio = 0.5;
		var eventTileBorder = 1;
	};	
};

//~~~~~~~~~~~~~~~~~CSS feed objects~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
{ //Overall calendar Headers
	var calendarHeaderCSS = {
		'height': calendarHeaderHeight+'px', 
		'width': calendarHeaderWidth+'px',
		'border-style': 'solid',
		'border-width': calendarHeaderBorder + 'px',
		'margin': 0,
		'padding': 0,
		'float': 'left',
		'overflow' : 'hidden',
		'position': 'relative'
	};

	var headerControlContainerCSS = {
		'margin-left': 'auto',
		'margin-right': 'auto',
		'position':'relative',
		'margin': 0,
		'padding': 0,
	};

	var leftMonthArrowCSS = {
		'width': leftMonthArrowWidth + 'px',
		'margin': 0,
		'padding': 0,
		'left': leftMonthArrowFloatFromLeft + 'px',
		'textAlign':'center',
		'position':'absolute',
		'overflow': 'hidden'
	};

	var monthButtonCSS = {
		'width': monthButtonWidth + 'px',
		'margin': 0,
		'padding': 0,
		'left': monthButtonFloatFromLeft + 'px',
		'textAlign':'center',
		'position':'absolute',
		'overflow': 'hidden'
	};

	var rightMonthArrowCSS = {
		'width': rightMonthArrowWidth + 'px',
		'margin': 0,
		'padding': 0,
		'left': rightMonthArrowFloatFromLeft + 'px',
		'textAlign':'center',
		'position':'absolute',
		'overflow': 'hidden'
	};

	var dayHeaderContainerCSS = {
		'bottom': daysHeaderFloatFromBottom + 'px',
		'position':'absolute'
	};
	var dayHeaderCSS = {
		'height': dayHeaderHeight+'px', 
		'width': dayHeaderWidth+'px',
		'margin': 0,
		'padding': 0,
		'float': 'left',
		'border-style': 'solid',
		'border-width': dayHeaderBorder + 'px',
		'textAlign': 'center'
	};
};

{ //Tile sections
	var calendarViewCSS = { //day tile container
		'border-left': 'solid',
		'border-right': 'solid',
		'border-width': calendarViewBorder + 'px',
		'width': calendarViewWidth +'px',
		'clear': 'left'
	};										  
	var dateTileCSS = function(blur){
		var color = '#C1A4A4'
		if(blur){
			color = '#A49B9B'
		}

		return {
			'height': dayTileHeight+'px', 
			'width': dayTileWidth+'px',
			'border-style': 'solid',
			'border-width': dayTileBorder + 'px',
			'margin': 0,
			'padding': 0,
			'float': 'left',
			'background-color': color
		};
	};
};
			  
{	//Events sections
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

	var eventTileCSS = function(duration){
		var eventdayTileHeight = durationRatio * duration - eventTileBorder * 2;
		var eventdayTileWidth = screenWidth - eventTileBorder * 2;	
		
		return {
			'height': eventdayTileHeight+'px', 
			'width': eventdayTileWidth+'px',
			'border-style': 'solid',
			'border-top': 'none',
			'border-width': eventTileBorder + 'px',
			'margin': 0,
			'padding': 0,
		};
	};
};