// JavaScript Document
/*var CAVAS_WIDTH = 200,CAVAS_HIGHT = 200;
window.onload = function(){
}

function createCanvas(){
	document.body.innerHTML = "<canvas id=\"mycavas\" width=\"" + CANVAS_WIDTH +"\" height=\"" + CANVAS_HIGHT +"\"></canvas>"
}*/
 
//淡入效果(含淡入到指定透明度)     
    function fadeIn(elem, speed, opacity){     
        /*     
        * 参数说明     
        * elem==>需要淡入的元素     
        * speed==>淡入速度,正整数(可选)     
        * opacity==>淡入到指定的透明度,0~100(可选)     
        */     
       speed = speed || 20;     
       opacity = opacity || 100;     
        //显示元素,并将元素值为0透明度(不可见)     
       elem.style.display = 'block';     
       iBase.SetOpacity(elem, 0);     
        //初始化透明度变化值为0     
       var val = 0;     
        //循环将透明值以5递增,即淡入效果     
       (function(){     
           iBase.SetOpacity(elem, val);     
           val += 5;     
           if (val <= opacity) {     
               setTimeout(arguments.callee, speed)     
           }     
       })();     
    }     
          
    //淡出效果(含淡出到指定透明度)     
    function fadeOut(elem, speed, opacity){     
        /*     
        * 参数说明     
        * elem==>需要淡入的元素     
        * speed==>淡入速度,正整数(可选)     
        * opacity==>淡入到指定的透明度,0~100(可选)     
        */     
       speed = speed || 20;     
       opacity = opacity || 0;     
       //初始化透明度变化值为0     
       var val = 100;     
        //循环将透明值以5递减,即淡出效果     
       (function(){     
           iBase.SetOpacity(elem, val);     
           val -= 5;     
           if (val >= opacity) {     
               setTimeout(arguments.callee, speed);     
           }else if (val < 0) {     
                //元素透明度为0后隐藏元素     
               elem.style.display = 'none';     
           }     
       })();     
    } 
	
function createCanvas(){
	mycanvas = document.getElementById("myCanvas");
	context = mycanvas.getContext("2d");
}
function drawImage(){
	var img1 = new Image();
	img1.src = "imgs/1.png";
	img.onload = function(){
		context.drawImage(img,0,0);
	}
}