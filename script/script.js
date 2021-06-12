$('.namebox').click(function(){
	$(this).fadeOut();
})

$('.titlebox').click(function(){
	$(this).fadeOut();
})

$('.statementbox').click(function(){
	$(this).slideUp(3000);
})


$('.preface').click(function(){
	$(this).slideUp(1000);
})

$('.receipt').draggable();
$('.candle').draggable();
$('.candle2').draggable();
$('.candle3').draggable();
$('.popup').draggable();

setTimeout(function(){
	$('.popup').show();
},15000);

setTimeout(function(){
	$('.smoke').fadeOut();
	$('.smoke2').fadeOut();
	$('.smoke3').fadeOut();
},30000)



$('.blur').click(function(){
	alert('점검중입니다.');
	window.location.href = "https://cantodayandtomorrowbedifferent.github.io/day4/updatemap/";
});



/** 아날로그 시계 왜 안되는 것인가? 
const secondHand = document.querySelector('.sec-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
	const now = new Date();

	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = 'rotate(${secondsDegrees}deg)';

	const mins = now.getMinutes();
	const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
	minsHand.style.transform = 'rotate(${minsDegrees}deg)';

	const hour = now.getHours();
	const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
	hourHand.style.transform = 'rotate(${hourDegrees}deg)';
};

setInterval(setDate, 1000);

setDate();
**/








/**
$(document).ready(function() {

setTimeout(function(){
	alert('무슨일이 일어났다 확인해보시 겠습니까?');
	location.href="event/day2/day2.html"
	},7000)

});
**/
