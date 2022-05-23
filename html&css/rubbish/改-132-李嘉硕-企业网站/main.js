function pics1(){
	var mying=document.getElementById("ad");
	var ul = mying.nextElementSibling;
	if(mying.src.match("img/1.jpg")){
		mying.src="img/2.jpg";
		for (var i = 0; i < 4; i++) {
			ul.children[i].style.removeProperty("background-color");
		}
		ul.children[1].setAttribute("style","background-color: rgba(255,255,255,.3);");
	}else if(mying.src.match("img/2.jpg")){
		mying.src="img/3.jpg";
		for (var i = 0; i < 4; i++) {
			ul.children[i].style.removeProperty("background-color");
		}
		ul.children[2].setAttribute("style","background-color: rgba(255,255,255,.3);");
	}else if(mying.src.match("img/3.jpg")){
		mying.src="img/4.jpg";
		for (var i = 0; i < 4; i++) {
			ul.children[i].style.removeProperty("background-color");
		}
		ul.children[3].setAttribute("style","background-color: rgba(255,255,255,.3);");
	}else{
		mying.src="img/1.jpg";
		for (var i = 0; i < 4; i++) {
			ul.children[i].style.removeProperty("background-color");
		}
		ul.children[0].setAttribute("style","background-color: rgba(255,255,255,.3);");
	}
}
function exctPic1(){
	var t=setInterval(pics1,2000);
	var lis = document.getElementById("btn").getElementsByTagName("li");
	var mying=document.getElementById("ad");
	for(var i=0;i<lis.length;i++){
		lis[i].onmousemove=function(){
			for (var i = 0; i < lis.length; i++) {
				lis[i].style.removeProperty("background-color");
			}
			clearInterval(t);
			for(var i=0;i<lis.length;i++){
				if(lis[i]==this){
					mying.src="img/"+(i+1)+".jpg";
					lis[i].setAttribute("style","background-color: rgba(255,255,255,.3);");
				}
			}
		}
		lis[i].onmouseout=function(){
			t=setInterval(pics1,2000);
		}
	}
}

