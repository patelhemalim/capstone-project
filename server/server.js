const express = require('express');
const app = express();
// const path = require('path')
const bcrypt = require('bcrypt');
const cors = require("cors");
const { SERVER_PORT } = process.env;


const { seed, getStudents, deleteStudent,createStudent, getReport,createOrUpdateReportCard } = require('./controller.js')



app.use(cors());
const path = require('path');
const { login } = require('./controller.js')
app.use(express.json());

const users = require('./db.json');



const Rollbar = require("rollbar");
const rollbar = new Rollbar({
    accessToken: "ce184a12bd834f65bba31050f82d2271", 
    captureUncaught: true,
    captureUnhandledRejections: true
});

rollbar.log("Hello world!");

 app.get('/users', (req, res) => {
    res.json(users)
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index1.html"));
});

app.get("/style1.css", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/style1.css"));
});

app.get("/main.js", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/main.js"));
});
app.get("/client/index2.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index2.html"));
});
app.get("/client/index3.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index3.html"));
});
app.get("/client/student.js", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/student.js"));
});
app.get("/client/chart.js", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/chart.js"));
});
app.get("/client/reportcard.js", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/reportcard.js"));
});
app.get("/client/printreport.js", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/printreport.js"));
});
app.get("/client/index4.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index4.html"));
});
app.get("/client/index5.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index5.html"));
});
app.get("/client/chart.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/chart.html"));
});
app.get("/client/style3.css", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/style3.css"));
});
app.get("/client/style2.css", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/style2.css"));
});
app.get("/client/style4.css", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/style4.css"));
});
app.get("/client/style5.css", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/style5.css"));
});
app.post('/users', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        console.log(salt)
        console.log(hashedPassword)
        const user = { name: req.body.names, password: hashedPassword }
        users.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
});

app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name = req.body.name)
    console.log(user)
    console.log(req.body.password)
    if (user === null) {
        return res.status(400).send('can not find user')
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.status(200).send('Success')
        } else {
            res.status(500).send('Error')
        }
    } catch {
        res.status(500).send('Error')
    }


});

app.post('/seed', seed)


app.get('/students', getStudents);
app.post("/students",createStudent);
app.delete('/students/:id', deleteStudent);

app.get('/reportcard/:id',getReport)
app.post("/reportcard",createOrUpdateReportCard);


app.use(express.static(path.join(__dirname, '../client')))

app.get('/', function(req, res){res.sendFile(path.join(__dirname, '../index1.html'))})

const port = process.env.PORT || 4005

app.listen(port, () => console.log(`Server listening on ${port}`));