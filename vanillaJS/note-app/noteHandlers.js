import NoteView from "./noteView.js";
import NoteAPI from "./noteAPI.js";
export default class NoteHandlers{
    constructor(root){
        this.root = root;
        this.noteAPIInstance = new NoteAPI();
        this.noteViewInstance = new NoteView(root,this.handlers());
        this.refreshList();
    }
    refreshList = ()=>{
        let notes = this.noteAPIInstance.getNotes();
        this.noteViewInstance.renderList(notes);
    }
    handlers = ()=>{
        return {
            handleSaveNote: (id,text)=>{
                this.noteAPIInstance.saveNote(id,text)
                this.refreshList();
            }
        }
    }
}