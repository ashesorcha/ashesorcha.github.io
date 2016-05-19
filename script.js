
function calendar(){
 var day=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 var month=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 var d=new Date();
 setText('calendar-day', day[d.getDay()]);
 setText('calendar-date', d.getDate());
 setText('calendar-month-year', month[d.getMonth()]+' '+(1900+d.getYear()));
};

function setText(id, val){
 if(val < 10){
 val = '0' + val; //add leading 0 if val < 10
 }
 document.getElementById(id).innerHTML = val;
};
window.onload = calendar;


var imagecount = 1;
var total = 5;

function photo(x){
	var image = document.getElementById('image');
	imagecount = imagecount + x;
	if(imagecount > total){imagecount = 1;}
	if(imagecount < 1){imagecount = total;}
	image.src = "Slideshow/img"+ imagecount +".jpg";
}
	
window.setInterval(function photoA(){
	var image = document.getElementById('image');
	imagecount = imagecount + 1;
	if(imagecount > total){imagecount = 1;}
	if(imagecount < 1){imagecount = total;}
	image.src = "Slideshow/img"+ imagecount +".jpg";
},5000);