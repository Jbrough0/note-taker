const fs = require('fs');
const path = require('path');

module.exports= app => {
    fs.readFile("./data/db.json","utf8", (err, data) => {

        if (err) throw err; 
        const notes= JSON.parse(data);
        
        app.get("/api/notes", function(req, res) {
            res.json(notes);
        });

        app.post("/api/notes", function(req, res){
            let newNote=req.body;
            notes.push(newNote);
            updateDB();
            return console.log("New note added:"+newNote.title);
        });

        app.get("/api/notes/:id", function(req, res){
            res.JSON(notes[req.params.id]);
        });

        app.delete("/api/notes/:id", function(req, res){
            notes.splice(req.params.id, 2);
            updateDB();
            console.log("Deleted note with id"+req.params.id);
        });

        
        function updateDB() {
            fs.writeFile("./data/db.json", JSON.stringify(notes,'/t'),err => {
                if(err) throw err;
                return true;
            });
        }
    });
}

