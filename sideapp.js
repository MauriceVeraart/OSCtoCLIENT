const electron = require('electron');
//
const {CasparCG} = require("casparcg-connection");
var CCG1 = new CasparCG();
//
const dgram = require("dgram");
const oscmsg = require("osc-msg");

const socket = dgram.createSocket("udp4");
//
const myBtn1 = document.getElementById('test1')
const myBtn2 = document.getElementById('test2')
const myVld = document.getElementById('inputveld')

myBtn1.addEventListener('click',function(){
    document.getElementById('tochange').innerHTML = "SEND PLAY"
    var daAdres = "/control/play"
    var message = {
        address: daAdres,
        args: [
          { type: "integer", value: 1}
        ]
      };
      var buffer = oscmsg.encode(message);
      console.log(buffer)
      socket.send(buffer, 0, buffer.length, 6250, "127.0.0.1");
})

myBtn2.addEventListener('click',function(){
    document.getElementById('tochange').innerHTML = "SEND STOP"
    var daAdres = "/control/stop"
    var message = {
        address: daAdres,
        args: [
          { type: "integer", value: 1}
        ]
      };
      var buffer = oscmsg.encode(message);
      console.log(buffer)
      socket.send(buffer, 0, buffer.length, 6250, "127.0.0.1");
})

myVld.addEventListener('change',function(){
    document.getElementById('tochange').innerHTML = "SEND PLAY TO UID =>" + myVld.value;
    var daAdres = "/control/"+ myVld.value + "/play"
    var message = {
        address: daAdres,
        args: [
          { type: "integer", value: 1}
        ]
      };
      var buffer = oscmsg.encode(message);
      console.log(buffer)
      socket.send(buffer, 0, buffer.length, 6250, "127.0.0.1");
      animateT();
      myVld.value = null;
})
