var httpHelper = {

	post: function(obj) {
		
		$.ajax({
			type: "post",
			url: obj.url,
			async: true,
			data: obj.para,
			dataType: "json",
			traditional:true,
			success: function(data, textStatus, jqXHR) {
				obj.result(data);
			}
		})

	},
	post: function(url, para, result) {	
		
		$.ajax({
			type: "post",
			url: url,
			async: true,
			data: para,
			dataType: "json",
			traditional:true,
			success: function(data, textStatus, jqXHR) {
				result(data);
			}
		})

	},
		put: function(url, para, result,method) {	
		
		$.ajax({
			type: "post",
			url: url,
			method:'put',
			async: true,
			data: para,
			dataType: "json",
			traditional:true,
			success: function(data, textStatus, jqXHR) {
				result(data);
			}
		})

	},
	delete: function(url, para, result,method) {	
		
		$.ajax({
			type: "post",
			url: url,
			method:'delete',
			async: true,
			data: para,
			dataType: "json",
			traditional:true,
			success: function(data, textStatus, jqXHR) {
				result(data);
			}
		})

	},
	get: function(obj) {
		

		$.ajax({
			type: "get",
			url: obj.url,
			async: true,
			dataType: "json",
			traditional:true,
			success: function(data, textStatus, jqXHR) {
				obj.result(data);
			}
		})

	},
	get: function(url, result) {


		$.ajax({
			type: "get",
			url: url,
			async: true,
			dataType: "json",
		 	traditional:true,
			success: function(data, textStatus, jqXHR) {
				result(data);
			}
		})

	}

}