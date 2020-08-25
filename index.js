const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const port = process.env.PORT || 5000;
const path = require("path");

//middleware
app.use(cors());
app.use(express.json());
if(process.env.NODE_ENV === "production"){
    app.use(express.static("./client/build"))
}

//routes

//create mentor
app.post("/mentors", async(req, res) => {
    try{
        const {fname, lname, email, number, grade, years, bio, interestedSubjects} = req.body;
        const newMentor = await pool.query("INSERT INTO mentors (fname, lname, email, number, grade, years, bio, interestedSubjects) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", [fname, lname, email, number, grade, years, bio, interestedSubjects]);
        res.json(newMentor.rows[0]);

    }catch (err){
        console.error(err.message);
    }
});


//get mentors
app.get('/mentors', async(req, res) => {
    try{
        const allMentors = await pool.query("SELECT * FROM mentors");
        res.json(allMentors.rows);
    } catch (err){
        console.error(err.message);
    }
});

//select a mentor
app.get('/mentors/:id', async(req, res) => {
    try{
       const { id } = req.params;
       const mentor = await pool.query("SELECT * FROM mentors WHERE mentor_id = $1",[id]);
       res.json(mentor.rows[0]);
    } catch (err){
        console.error(err.message);
    }
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"))
});

app.listen(port, () => {
    console.log("server working");
});