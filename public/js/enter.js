
window.onload=function(){ 
	var btn=document.getElementById('selectPortal');
  	var btn_lis=btn.getElementsByTagName('button');
    for (var i = 0;i < btn_lis.length; i++) {
      btn_lis[i].index = i;
      btn_lis[i].onclick=function(){
        var j=this.index+1;
		console.log(j)
		localStorage.setItem("type", j);
		window.location.href='login.html?type'+j
      }
    }
} 