const fs = require('fs')
const path = require('path')
const dataFile = path.join(__dirname, '../data/notes.json')

// helper to load data
function loadNotes(){
    if(!fs.existsSync(dataFile)) fs.writeFileSync(dataFile, '[]');
    return JSON.parse(fs.readFileSync(dataFile));
}

// helper to save data
function saveNotes(notes){
    fs.writeFileSync(dataFile, JSON.stringify(notes, null, 2));
}

exports.getNotes = (req, res) =>{
    const notes = loadNotes();
    res.json(notes);
}

exports.createNote = (req, res) => {
    const {title, content} = req.body;
    if(!title || !content) return res.status(400).json({error:'title and content required'})

    const notes = loadNotes();
    const newNote = {
        id: Date.now().toString(),
        title,
        content,
    }
    notes.push(newNote);
    saveNotes(notes);
    res.status(201).json(newNote);
}

exports.updateNote = (req, res) =>{
    const{id} = req.params;
    const {title, content} = req.body;
    const notes = loadNotes();
    const index = notes.findIndex(note=> note.id === id);
    if(index === -1) return res.status(404).json({ error: 'Note not found'});

    notes[index] = {...notes[index], title, content};
    saveNotes(notes);
    res.json(notes[index])
}

exports.deleteNote = (req, res)=>{
    const {id} = req.params;
    let notes = loadNotes();
    const filtered = notes.filter(note => note.id !==id);
    if(notes.length === filtered.length) return res.status(404).json({error: 'Note not found'})

    saveNotes(filtered);
    res.json({message: "Note deleted successfully"})
}