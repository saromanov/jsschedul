

var graph = require('graph');
var http = require('http')

var JsSchedul = function(ident, value){
	var gr = new graph.Graph();
	var store = {}
	return {


		//name of job
		//action of job
		//define naame of job
		set: function(command, func){
			if (command != undefined){
				store[command] = func;
				//setTimeOut(func, parseModule(command));
			}
		},
		interval: function(command, timedata){
			inerv = parseModule(timedata)
			if (command in store){
				setInterval(store[command],inerv);
			}
		},

		//Set function parent
		setParent: function(name, func){

		},

		//Добавить событие с таким же интервалом
		like: function(event, func, name){

		},

	}	
}

//Parse of interval data
/*
 Format of time is 5 sec, 5 seconds, 5 hour, 5 min
*/
var parseModule = function(data){
	if(data.length == 0)
		throw "Information about interval is empty";
	value = data.split(" ");
	time = parseInt(value[0]);
	if (isNaN(time))
		throw "Time format is Unknown";
	if(value[1] =="sec")
		return time * 1000;
	if(value[2] == "min")
		return time * 1000*60;

}


//Basic implementation of interface in job
var Job = function(){

}

var httpServer = function(port){
	if(port == undefined)
		port = 8888;
	http.createServer(function (req, res) {
  		res.writeHead(200, {'Content-Type': 'text/plain'});
  		res.write("Was added " + events + " events")
  		res.end();
	}).listen(port);
}

