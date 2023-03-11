const noteTitle = document.querySelector(".form__note-title");
const noteContent = document.querySelector(".form__textarea");
const editNotePanel = document.querySelector(".note-edit");

export const notesBox = document.querySelector(".new-notes-box");

let editNoteTitleInput = document.querySelector(".note-edit__title");
let editNoteTextarea = document.querySelector(".note-edit__content");

let notePlace;
let idNoteNumber = 0;
let noteToEdit;
let newNoteTitle;
let newNoteContent;

export const addNewNote = () => {
  if (noteTitle.value !== "") {
    idNoteNumber++;

    notePlace = document.createElement("div");
    notePlace.classList.add("notes__new-note");
    notePlace.setAttribute("id", `id-note-${idNoteNumber}`);
    notesBox.appendChild(notePlace);
    newNoteTitle = document.createElement("p");
    newNoteTitle.innerHTML = noteTitle.value;
    newNoteTitle.classList.add("notes__new-note--title");
    notePlace.appendChild(newNoteTitle);

    newNoteContent = document.createElement("p");
    newNoteContent.innerHTML = noteContent.value;

    newNoteContent.classList.add("hidden");
    notePlace.appendChild(newNoteContent);
    createNewNoteBtns();
  } else {
    console.log("wprowadz tekst");
  }

  noteTitle.value = "";
  noteContent.value = "";
};

const createNewNoteBtns = () => {
  const btnsNoteArea = document.createElement("div");
  btnsNoteArea.classList.add("notes__new-note--buttons");
  notePlace.appendChild(btnsNoteArea);

  const editNoteBtn = document.createElement("button");
  editNoteBtn.classList.add("note__new-note--edit-btn");
  editNoteBtn.classList.add("note__new-note--btn");
  editNoteBtn.innerHTML = "edit";

  const deleteNoteBtn = document.createElement("button");
  deleteNoteBtn.classList.add("note__new-note--trash-btn");
  deleteNoteBtn.classList.add("note__new-note--btn");
  deleteNoteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

  btnsNoteArea.appendChild(editNoteBtn);
  btnsNoteArea.appendChild(deleteNoteBtn);
};

const deleteNote = (e) => {
  const noteToDelete = e.target.closest(".notes__new-note");
  noteToDelete.remove();
};

const openEditNotePanel = (e) => {
  const oldNote = e.target.closest(".notes__new-note").id;
  noteToEdit = document.getElementById(oldNote);
  editNoteTitleInput.value = noteToEdit.firstChild.textContent;
  editNoteTextarea.value = noteToEdit.firstChild.nextSibling.textContent;
  editNotePanel.classList.remove("hidden");
};

export const changeNote = (e) => {
  noteToEdit.firstChild.textContent = editNoteTitleInput.value;
  noteToEdit.firstChild.nextSibling.textContent = editNoteTextarea.value;
  editNotePanel.classList.add("hidden");
  editNoteTitleInput.innerHTML = "";
  editNoteTextarea.innerHTML = "";
};

export const actionBtns = (e) => {
  if (
    e.target.closest("button").classList.contains("note__new-note--trash-btn")
  ) {
    deleteNote(e);
  } else if (
    e.target.closest("button").classList.contains("note__new-note--edit-btn")
  ) {
    openEditNotePanel(e);
  }
};

export const closeEditNotePanel = () => {
  editNotePanel.classList.add("hidden");
};
