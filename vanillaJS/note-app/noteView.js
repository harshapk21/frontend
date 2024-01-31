export default class NoteView {
  constructor(root, handlers) {
    this.root = root;
    this.handlers = handlers;
    // document.querySelector('.add-button')?.addEventListener('click',()=>{
    //     this.handlers.handleSaveNote(undefined,'');
    // });
  }

  createButton = ()=>{
    let button = document.createElement('button')
    button.classList.add('add-button');
    button.innerText = '+';
    button.addEventListener('click',()=>{
        this.handlers.handleSaveNote(undefined,'')});
    return button;
  }

  createNoteView = (note) => {
    let newNote = document.createElement('TextArea');
    newNote.classList.add('new-note');
    newNote.value = note.text;
    newNote.dataset.id = note.id; 
    newNote.placeholder = 'Write anything and click outside note card to save'
    newNote.addEventListener('blur',(e)=>this.handlers.handleSaveNote(note.id,e.target.value.trim()))
    return newNote; // append for actual element , appendChild for a string
    // return `
    //     <Textarea class='new-note' data-id=${note.id}>
    //     </Textarea>
    //    `;
  };
  renderList = (notes) => {
    this.root.innerHTML = '';
    notes.forEach((note)=>{
    this.root.append(this.createNoteView(note))
    // this.root.insertAdjacentHTML('beforeEnd',this.createNoteView(note)) //append vs append child vs insertAdjacentHTML
    })
    this.root.append(this.createButton())
  };
}