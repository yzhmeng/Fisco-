var http = require("http")


http.createServer(function(req,res){

	var url_info = require('url').parse(req.url,true)
	res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});

	if (url_info.pathname == '/select'){
		var str = "";
        	req.on('data',function(data){
        	    var temp = decodeURIComponent(data);
        	    console.log(temp);
        	    let datatemp2 = temp.split('&'); 
        	    str += datatemp2[0].split('=')[1];
        	    console.log(str);

		var spawn = require('child_process').spawn;
		free = spawn('./cli.js', ['call','Asset','0xd0919442a9680f1957a9713af040af68680e911f','select',str]);


		free.stdout.on('data', function (data) {
			res.end(data)
		});


		free.stderr.on('data', function (data) {
			console.log('standard error output:\n' + data);
		});


		free.on('exit', function (code, signal) {
			console.log('child process eixt ,exit:' + code);
		});
        	});
	} else if(url_info.pathname == '/register'){
		var str = "";
		var str2 = "";
        	req.on('data',function(data){
			var temp = decodeURIComponent(data);
			let datatemp2 = temp.split('&'); 
            		str += datatemp2[0].split('=')[1];
            		str2 += datatemp2[1].split('=')[1];
			var int = parseInt(str2, 10);

        	    	console.log(str);
			console.log(str2);

		var spawn = require('child_process').spawn;
		free = spawn('./cli.js', ['call','Asset','0xd0919442a9680f1957a9713af040af68680e911f','register', str, int]);


		free.stdout.on('data', function (data) {
			res.end(data)
		});


		free.stderr.on('data', function (data) {
			console.log('standard error output:\n' + data);
		});


		free.on('exit', function (code, signal) {
			console.log('child process eixt ,exit:' + code);
		});
        	});

	} else if(url_info.pathname == '/transfer'){
		var str = "";
		var str2 = "";
		var str3 = "";
        	req.on('data',function(data){
			var temp = decodeURIComponent(data);
			let datatemp2 = temp.split('&'); 
            		str += datatemp2[0].split('=')[1];
            		str2 += datatemp2[1].split('=')[1];
			str3 += datatemp2[2].split('=')[1];
			var int = parseInt(str3, 10);
        	    	console.log(str);
			console.log(str2);
			console.log(str3);

		var spawn = require('child_process').spawn;
		free = spawn('./cli.js', ['call','Asset','0xd0919442a9680f1957a9713af040af68680e911f','transfer', str, str2, int]);


		free.stdout.on('data', function (data) {
			res.end(data)
		});


		free.stderr.on('data', function (data) {
			console.log('standard error output:\n' + data);
		});


		free.on('exit', function (code, signal) {
			console.log('child process eixt ,exit:' + code);
		});
        	});

	}
	
}).listen(8888)


