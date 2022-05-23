function startMove(){
	var box=document.getElementById("box");
	if(box.offsetLeft<=-1*imgWidth*2){
		moveToStart();
	}else{
		moveToNext();
	}
	
}
function moveToStart(){
	box.style.left=0;
}
function moveToNext(){
	box.style.left=box.offsetLeft-imgWidth+"px";
	
}
function pic2(){
	imgWidth=240;
	setInterval(startMove,2000);
}
function showButton(){
	document.getElementById("prev").style.display="block";
	document.getElementById("next").style.display="block";
}
function hideButton(){
	document.getElementById("prev").style.display="none";
	document.getElementById("next").style.display="none";
}
function moveToPre(){
	box.style.left=box.offsetLeft+imgWidth+"px";
}
window.onload=function(){exctPic1();pic2();}