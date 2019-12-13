var http = require("http")
var string = 'myz1'

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
	
	var spawn = require('child_process').spawn;
	free = spawn('./cli.js', ['call','Asset','0xd0919442a9680f1957a9713af040af68680e911f','select', string]);

	// 捕获标准输出并将其打印到控制台
	free.stdout.on('data', function (data) {
		res.end(data)
	});

	// 捕获标准错误输出并将其打印到控制台
	free.stderr.on('data', function (data) {
	console.log('standard error output:\n' + data);
	});

	// 注册子进程关闭事件
	free.on('exit', function (code, signal) {
	console.log('child process eixt ,exit:' + code);
	});
}).listen(8888)

