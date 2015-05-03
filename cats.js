var change = function (changePic) {
	
	$('.catpic').mouseenter(function () {
	oldsrc = $('.catpic').attr('src');
	newsrc = 'http://www.placekitten.com/g/' + Math.floor((Math.random() * 1000) + 100) + '/' + Math.floor((Math.random() * 1000) + 100);
	$('.catpic').attr('src', newsrc);
	console.log($('.catpic').attr('src'));
	});
	
};


$(document).ready(change);