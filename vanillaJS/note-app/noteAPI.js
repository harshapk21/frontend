export default class NoteAPI {
  constructor() {
    //localStorage.clear('notes')
  }

  getNotes = () => {
    let notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
  };
  setNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
  };
  saveNote = (id, noteText) => {
    let notes = this.getNotes();
    console.log(id,'id');
    if (id) {
      notes.forEach((note) => {
        if (note.id == id) note.text = noteText;
      });
    } else {
      let newNoteObj = {
        id: Math.floor(Math.random() * 1000),
        text: noteText,
      };
      notes.push(newNoteObj);
    }
    this.setNotes(notes);
  };
}

