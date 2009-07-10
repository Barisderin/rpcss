(function($) {
	$.fn.smartColumns = function(options) {
		var opts = $.extend({}, $.fn.smartColumns.defaults, options);

		$(this).css({ 'width' : "100%"})

		var colWrap = $(this).width();
		var colNum = Math.floor(colWrap / opts.dimensions);
		var colFixed = Math.floor(colWrap / colNum);

		$(this).css({ 'width' : colWrap})
		$(this).children('li').css({ 'width' : colFixed});

		return $(this);
	};

	$.fn.smartColumns.defaults = {
		dimensions : 200
	};
})(jQuery);

	// 
	// Call it like this:
	// $(’ul.column’).smartColumns();
	// 
	// Or hand in the dimension:
	// $(’ul.column’).smartColumns({ dimensions : 300 });