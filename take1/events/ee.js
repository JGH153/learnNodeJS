//event emiters. not propper way? not real
//used in 10 js
//js class
function Emitter(){
	this.events = {
		//prop: []
	};
}

Emitter.prototype.on = function(type, listener){
	this.events[type] = this.events[type] || [];
	this.events[type].push(listener);
}

Emitter.prototype.emit = function(type){
	if(this.events[type]){
		this.events[type].forEach(function(listener){
			listener();
		});
	}
}

module.exports = Emitter;
