	    var flag=0;
	    var width=window.innerWidth;
		var height=window.innerHeight;
		// var flag=1;
		window.onload=function(){
			var container=document.getElementById("container");
			var imglist=document.getElementsByTagName("img");
			var list=document.getElementById("list");
			document.getElementById('container').style.width=width+'px';
			document.getElementById('container').style.height=height+'px';
			document.getElementById('mask').style.width=width+'px';
			document.getElementById('mask').style.height=height+'px';
			document.getElementById('list').style.width=width*6+'px';
			document.getElementById('introduction').style.width=width+'px';
			for(var i=0;i<6;i++){
				imglist[i].style.width=width+'px';
				imglist[i].style.height=height+'px';
			}
		//	var inter=setInterval("move()",9000);

		}
		function move(){
			var list=document.getElementById("list");
			// alert(list.offsetLeft);
			if(list.offsetLeft<-(window.innerWidth*4)){
				list.style.left=0+'px';
			}
			else{
				list.style.left=parseInt(list.offsetLeft)-window.innerWidth+'px';
			}
		}
		function moving(path){
			if(path==='left'){
				if(list.offsetLeft>=0){
					list.style.left=-(window.innerWidth*5)+'px';
				}else{
					list.style.left=parseInt(list.offsetLeft)+window.innerWidth+'px';
				}
			}
			else{
				if(list.offsetLeft<=-(window.innerWidth*5)){
					list.style.left=0+'px';
				}else{
					list.style.left=parseInt(list.offsetLeft)-window.innerWidth+'px';
				}
			}
		}
		function showIntroduction(){
			document.getElementById('introduction').style.height=height+'px';
			document.getElementById('centerlogo').style.top='-50%';
		}
		function hiddenIntroduction(){
			document.getElementById('introduction').style.height=0+'px';
			document.getElementById('centerlogo').style.top='50%';
		}
		function showSummary(){
			showIntroduction();
			document.getElementById('summary_text1').style.left='45%';
			document.getElementById('summary_pic1').style.right='40%';
			document.getElementById('summary_underline').style.width='500px';
		}
		function hiddenSummary(){
			document.getElementById('summary_text1').style.left='-45%';
			document.getElementById('summary_pic1').style.right='-40%';
			document.getElementById('summary_underline').style.width='0px';
			hiddenIntroduction();
		}
		function showrouteIntroduction(){
			showIntroduction();
			document.getElementById('route_start').style.top='30%';
			document.getElementById('route_end').style.top='30%';
			document.getElementById('route_line').style.top='32%';
			document.getElementById('route_line').style.width=width-800+'px';
			document.getElementById('route_text1').style.left='60%';
			document.getElementById('route_text2').style.left='60%';
			document.getElementById('show_map').style.display='block';
		}
		function hiddenrouteIntroduction(){
			document.getElementById('route_start').style.top='-30%';
			document.getElementById('route_end').style.top='-30%';
			document.getElementById('route_line').style.top='-32%';
			document.getElementById('route_line').style.width=0+'px';
			document.getElementById('route_text1').style.left='-60%';
			document.getElementById('route_text2').style.left='1200%';
			document.getElementById('show_map').style.display='none';
			hiddenmap();
			hiddenIntroduction();
		}
		function showmap(){
			document.getElementById('route_map').style.display='block';
		}
		function hiddenmap(){
			document.getElementById('route_map').style.display='none';
		}
		function showGuide(){
			showIntroduction();
			document.getElementById('guide_box').style.display='block';
		}
		function hiddenGuide(){
			hiddenIntroduction();
			document.getElementById('guide_box').style.display='none';
		}
