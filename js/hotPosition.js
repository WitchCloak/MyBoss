
var divC=document.getElementsByClassName('divC');
// for (var i = 1; i < 10; i++) {
	
// }
var liA=document.getElementsByClassName("liA")

	
	
	

		for (var n = 0; n < liA.length; n++) {
			(function(j){
		
			liA[j].onclick=function(){
				for (let i = 0; i < divC.length; i++) {
					if (i==j+1) {
						divC[i].style.display="inline-block";
						
					}
					else{
						divC[i].style.display="none";
					}
					
				}
				
				
				for (let k = 0; k < liA.length; k++) {
					if (k==j) {
						liA[k].style.color="green";
						liA[k].style['border-bottom']="1px solid red ";
					}
					else{
						liA[k].style.color="grey";
						liA[k].style['border-bottom']="none";
					}
				}

				
		}
	})(n);
}
	
	
	
	
		// function li2(){

		// 		for (let i = 0; i < divC.length; i++) {
		// 			if (i!=2) {
		// 				divC[i].style.display="none";
						
		// 			}
		// 			else{
		// 				divC[i].style.display="inline-block";
		// 			}
					
		// 		}
				
				
		// 		for (let j = 0; j < liA.length; j++) {
		// 			if (j==1) {
		// 				liA[j].style.color="green";
		// 				liA[j].style['border-bottom']="1px solid red ";
		// 			}
		// 			else{
		// 				liA[j].style.color="grey";
		// 				liA[j].style['border-bottom']="none";
		// 			}
		// 		}
		// }
		// function li3(){

		// 		for (let i = 0; i < divC.length; i++) {
		// 			if (i!=3) {
		// 				divC[i].style.display="none";
						
		// 			}
		// 			else{
		// 				divC[i].style.display="inline-block";
		// 			}
					
		// 		}
				
				
		// 		for (let j = 0; j < liA.length; j++) {
		// 			if (j==2) {
		// 				liA[j].style.color="green";
		// 				liA[j].style['border-bottom']="1px solid red ";
		// 			}
		// 			else{
		// 				liA[j].style.color="grey";
		// 				liA[j].style['border-bottom']="none";
		// 			}
		// 		}
		// }
		// function li4(){

		// 		for (let i = 0; i < divC.length; i++) {
		// 			if (i!=4) {
		// 				divC[i].style.display="none";
						
		// 			}
		// 			else{
		// 				divC[i].style.display="inline-block";
		// 			}
					
		// 		}
				
				
		// 		for (let j = 0; j < liA.length; j++) {
		// 			if (j==3) {
		// 				liA[j].style.color="green";
		// 				liA[j].style['border-bottom']="1px solid red ";
		// 			}
		// 			else{
		// 				liA[j].style.color="grey";
		// 				liA[j].style['border-bottom']="none";
		// 			}
		// 		}
		// }

