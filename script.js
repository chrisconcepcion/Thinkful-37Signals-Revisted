$(document).ready(function(){
	$('.product_box').eq(0).mouseenter(function(){
		$('.products').prepend('<img class="arrow basecamp" src="images/arrow-left.png">')
		$('.products_main').attr( 'id', 'hover_effect' );
		$('.products h1:first-child').html("<span>Basecamp</span> is the project management tool you wish you had on your last project.");
		$('.products p').first().html("Are you still managing projects with email? Are you still using Excel for your to-do lists? It’s time to upgrade to Basecamp. Manage projects and collaborate with your team and clients the modern way.");
	});
	$('.product_box').eq(1).mouseenter(function(){
		$('.products_main').attr( 'id', 'hover_effect' );
		$('.products').prepend('<img class="arrow highrise" src="images/arrow-left.png">')
		$('.products h1:first-child').html("<span>Highrise</span> remembers the important things about people you'd normally forget.");
		$('.products p').first().html("Keep a permanent record of people you do business with. Know who you talked to, when you talked to them, what was said, and when to follow up next. Over 20,000,000 contacts are tracked using Highrise.");
	});
	$('.product_box').eq(2).mouseenter(function(){
		$('.products').prepend('<img class="arrow campfire" src="images/arrow-right.png">')
		$('.products_main').attr( 'id', 'hover_effect' );
		$('.products h1:first-child').html("From near on far, <span>Campfire</span> helps teams work together over the web in real-time.");
		$('.products p').first().html("Share ideas, discussions, concepts, images, code samples, videos, mockups, and documents in a real-time private chat room. It's gaming changing. We couldn't run our own business without Campfire.");
	});
	$('.product_box').mouseleave(function(){
		$('.products_main').removeAttr('id');
		$('.arrow').remove();
		$('.products h1:first-child').html("Making collaboration productive and enjoyable for people every day.");
		$('.products p').first().html("Frustration-free web-based apps for collaboration, sharing information, and making decisions.");
	});
});