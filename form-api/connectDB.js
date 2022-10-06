const mongoose = require("mongoose"),
    express = require("express")
mongoose.connect("mongodb+srv://coffee:kader_1680@cluster0.witpw2s.mongodb.net/test");

const db = mongoose.connection;
db.on('open', () => {
    console.log('connection kayan ya zebi')
})

const app = express();
app.get("/", (res, req) => {

    console.log("zebi zebi")
})

app.listen(1680, ()=>{
    console.log("nikah")
})