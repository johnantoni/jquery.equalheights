/**
 * Equal Heights Plugin
 * Equalize the heights of elements. Great for columns or any elements
 * that need to be the same size (floats, etc).
 * 
 * Version 1.1
 * Updated 28/06/2010
 *
 * Copyright (c) 2008 Rob Glazebrook (cssnewbie.com) 
 *
 * Usage: $(object).equalHeights([minHeight], [maxHeight]);
 * 
 * Example 1: $(".cols").equalHeights(); Sets all columns to the same height.
 * Example 2: $(".cols").equalHeights(400); Sets all cols to at least 400px tall.
 * Example 3: $(".cols").equalHeights(100,300); Cols are at least 100 but no more
 * than 300 pixels tall. Elements with too much content will gain a scrollbar.
 * 
 */

(function($) {
	$.fn.equalHeights = function(minHeight, maxHeight) {
		tallest = (minHeight) ? minHeight : 0;
		this.each(function() {
    		if ($.browser.msie && $.browser.version.substr(0, 1) < 7) {
    			if(this.offsetHeight > tallest) { tallest = this.offsetHeight; }
			}
			else {
    			if($(this).height() > tallest) { tallest = $(this).height(); }
			}
			
		});
		
		if((maxHeight) && tallest > maxHeight) tallest = maxHeight;
			
			return this.each(function() {
        		if ($.browser.msie && $.browser.version.substr(0, 1) < 7) { $(this).height(tallest); }
	    		else { $(this).css({'*height' : tallest, 'min-height' : tallest }); } //use min height for FF and height for IE browsers

				//for rounded corners support, check if we have any child elements and resize them as well:
				$childElements = $(this).children('.autoPadDiv')
				$childElements.css({'*height' : tallest, 'min-height' : tallest });
			});
		}
})(jQuery);