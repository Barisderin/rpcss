(function($) {

	$.fn.autoWidthColumns = function(options) {
		debug(this);
		// build main options before element iteration
		var opts = $.extend({}, $.fn.autoWidthColumns.defaults, options);
		
		// iterate and reformat each matched element
		return this.each(function() {
			$this = $(this);
			// build element specific options
			var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
			
			var cols = $this.children();
			var numCols = cols.length;
			var colWidth = (1/numCols * 100);
			cols.each(function(){
				$(this).width(colWidth+'%');
			});
			console.log(colWidth);
			// update element styles
			// $this.css({
			// 				backgroundColor: o.background,
			// 				color: o.foreground
			// 			});
			// 			var markup = $this.html();
			
			// call our format function
			// markup = $.fn.autoWidthColumns.format(markup);
			// 		$this.html(markup);
		});
		
		
		/*
		find the number of direct children
		var colWidth = (totalUnits/10 * 100);
		for each direct child of selected parent element
			set width of child to colWidth
		
		
		
		*/
	};

	// private function for debugging
	function debug($obj) {
		if (window.console && window.console.log)
		window.console.log('hilight selection count: ' + $obj.size());
	};

	// plugin defaults
	$.fn.autoWidthColumns.defaults = {
		
	};

})(jQuery);