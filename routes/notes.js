const express = require('express');
const router = express.Router();
const { notes, getNextId } = require('../data/notes');

// GET all notes
router.get('/', (req, res) => {
    res.json(notes);
});

// GET single note by id 
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const note = notes.find(n => n.id === id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
});

// POST create new note
router.post('/', (req, res) => {
    const { title, content } = req.body;
    if(!title || !content) {
        return res.status(400).json({ message: "Title and content required" });
}
const newNote = {
    id: getNextId(),
    title,
    content,
    createdAt: new Date().toISOString()
};
notes.push(newNote); res.status(201).json(newNote);
});

// PUT update note
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const note = notes.find(n => n,id === id);
    if (!note) return res.status(404).json({ message: "Note not found" });

    const { title, content } = req.body;
    if (title) note.title = title;
    if (content) note.content = content;

    res.json(note);
});

// DELETE note
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = notes.findIndex(n => n.id === id);
    if (index === -1) return res.status(404).json({ message: "Note not found" });
    
    const deleted = notes.splice(index, 1);
    res.json(deleted[0]);
});

module.exports = router;