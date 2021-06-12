
$('.blur').click(function(){
	window.location.href = "https://gopseulssi.neocities.org/day%204%20floormap/day4.html";
})








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
