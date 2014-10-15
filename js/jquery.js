$(document).ready(function(){
	$(".one").mouseover(function(){
		$('.ab').fadeIn("slow");
	});
	$(".one").mouseleave(function(){
		$(".ab").fadeOut("slow");
	});
	$(".sev").mouseover(function(){
		$('.as').fadeIn("slow");
	});
	$(".sev").mouseleave(function(){
		$(".as").fadeOut("slow");
	});
	$(".five").mouseover(function(){
		$('.af').fadeIn("slow");
	});
	$(".five").mouseleave(function(){
		$(".af").fadeOut("slow");
	});
	$(".thumbt").mouseover(function(){
		$('.at').fadeIn("slow");
	});
	$(".thumbt").mouseleave(function(){
		$(".at").fadeOut("slow");
	});
	$(".thumbo").mouseover(function(){
		$('.ao').fadeIn("slow");
	});
	$(".thumbo").mouseleave(function(){
		$(".ao").fadeOut("slow");
	});
	$('.thumbo').on('click',function(){
		$.ajaxSetup({ cache:true });
		var newhtml = 'result.php',
			loader	='<i class="fa fa-circle-o-notch fa-5x"></i>';
		$('.total').html(loader).load(newhtml);
	});
	$(".fa").on('click',function(){
		$.ajaxSetup({ cache:true });
		var ind = 'index.php';
			loader	='<i class="fa fa-circle-o-notch fa-5x"></i>';
		$('.total').html(loader).load(ind);
	})
});
