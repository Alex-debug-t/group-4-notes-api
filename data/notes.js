// Simple in-memory storage for notes
let notes = [ 
{
    id: 1,
    tittle: "Welcome Note",
    content: "This is your first note from Group 4!",
    createdAt: new Date().toISOString()
}
];

let nextId = 2;
module.exports = {
    notes,
    getNextId: () => nextId++
};