var events = require('events');
var eventEmitter = new events.EventEmitter();

var eventhandler = function(){

console.log("you have fired the event handler");

}

eventEmitter.on('fired', eventhandler);

eventEmitter.emit('fired');

var util = require('util');

var Person = function(nam){

    name = this.nam;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var sam = new Person('sam');
var mark = new Person('mark');

var people = [james, sam, mark];
people.forEach(function(person) {
    person.on('speaks', function(mssg){

    console.log(person.name +" spoke : "+mssg)

    })
    
});

james.emit('speaks', "Hi Arjun");
sam.emit('speaks', "hi shanu how are you??");
console.log(james.name);
