app.filter('accTypeFilter', function() {
    return function(account, type) {
		var filteredAcc = [];
		if(type == undefined || type == null)
			return account;
		for(var i=0;i<account.length;i++) {
			if(Object.keys(account[i])[0].toUpperCase().indexOf(type.toUpperCase()) != -1) {
				filteredAcc.push(account[i]);
			}
		}
		return filteredAcc;
    };
});