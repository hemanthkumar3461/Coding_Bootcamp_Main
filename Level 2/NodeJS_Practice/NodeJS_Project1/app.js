
const express = require('express');
const app = express();
app.get('/employee/:id', function(req,res){ // Dynamic Route with a Path
console.log(req.query);
console.log(req.params)
res.send("Hello Employee. I know your id is .."+ req.params.id);
res.end();
})

app.delete('employee/:id', function(req,res) {
    res.send("Done With Deletion!");
    res.end();
})

app.post('/employee', function(req,res) {
res.send("Inside Post API call");
res.end();
})

app.put('/employee/:id', function(req,res) {
res.send("Inside PUT API call!");
res.end();
})

app.listen(3001, function() {
console.log("Server started successfully on port 3001")
})
