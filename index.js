const express = require("express");
const app = express();
console.log("hii")

var room = [{"room_no": "1","amanities":"yes","price":100,"status":0},
{"room_no": "2","amanities":"yes","price":300,"status":0},
{"room_no": "3","amanities":"yes","price":700,"status":1},
{"room_no": "4","amanities":"yes","price":200,"status":0}]

app.get("/create/:room_no/:ama/:price",function(req,res){
    let x = req.params.room_no
    let y = req.params.ama
    let z = req.params.price
    room.push({"room_no":x,"amanities":y,"price":z,"status":0})
    console.log("added")
    res.json(room)
})
var booking=[{"room_id":0,"cust_name":"None","date":"0","starttime":"00:00","endtime":"00:01"}]

app.get("/booking/:room_id/:cust_name/:date/:starttime/:endtime",function(req,res){
    let x = req.params.room_id
    let y = req.params.cust_name
    let z = req.params.date
    let a = req.params.starttime
    let b = req.params.endtime
    
    
            booking.push({"room_id":x,"cust_name":y,"date":z,"starttime":a,"endtime":b})
            console.log("added...just check the last element in list")
    res.json(booking)
    
    
})

app.get("/all_booking", function(req, res){
    res.json(booking)
})
app.get("/all_room", function(req, res){
    res.json(room)
})

room.filter(function(item) {
    if (item.status==0) {
        console.log("hii")
    } else {
        console.log("bye")
    }
  });

app.listen(3000)