$(document).ready(function() {
	
	$(function() {		
		var img = $("#images img");
		var max = parseInt(img.length, 10);
		var caption = $("#images img:nth-child(1)").attr('alt');
		$('#caption').html(caption);
		$("#slider").slider({
			value:1,
			min: 1,
			max: max,
			step: 1,
			slide: function(event, ui) {	
				$("#images img:visible").addClass('dn');
				var curr = $("#images img:nth-child("+ui.value+")");
				var caption = curr.attr('alt');				
				curr.removeClass('dn');		
				$('#caption').html(caption);
			}
		});
	});

});