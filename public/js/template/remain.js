var remain={
	getData:function(){
		var url = tenantUrl + "m-audit-noset.html";
		var data = { 
			"unique":localStorage.getItem("unique")
		};
		httpHelper.post(url, data, function(data){
			console.log(data)
			remain.HTMLVal(data)
		});
	},
	HTMLVal:function(data){
		var cells = data['agencyList'];
		console.log(cells)
		var html="",ih="",remainhtml="";
		for(var j = 0;j < cells.length; j++){
			var header=tenantUrl+cells[j]['examineImg'];	
			if(cells.length>1) {
				html +="<li  onclick='remain.sendPage("+cells[j]['examineid']+")'>";
				html +="<img class='history-header' src="+header+" alt='header' />";
				html +="<div>";
				html +="<div class='fn_clear title'>";
				html +="<h2>"+cells[j]['examineTitle']+"</h2>";
				html +="<span>"+cells[j]['examineTime']+"</span>";
				html +="</div>";
				html +="<div class='userData'>";
				html +="<span>发送人：</span>";
				html +="<span>"+cells[j]['examineDept']+"<span>"+cells[j]['examineObj']+"</span></span>";
				html +="<span>"+cells[j]['examineName']+"</span>";
				html +="</div>";
				html +="<img class='examine' src='../images/work/examine.png' alt='examined' />";
				html +="</div>";
				html +="</li>";
			} else {
				ih +="<p class='noneCon'>无待审核事项</p>";
				
				}
		}
		remainhtml += html + ih;	
		$('#historyLists').append(remainhtml);
	},
	sendPage:function(collid){
		window.location.href = "remainDetailed.html?collid=" + collid;
	}
	
}
$(function(){
	remain.getData()
})
