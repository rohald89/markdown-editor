import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import data from "../data.json";

const NoteContext = createContext();

function NoteProvider({ children }) {
  const [notes, setNotes] = useLocalStorage("notes", data);
  const [selectedNote, setSelectedNote] = useState(1);

  const getNote = (id) => {
    return notes.find((note) => note.id === id);
  };

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const updateName = (id, name) => {
    const updatedNotes = notes.map((note) => {
        if (note.id === id) {
            return { ...note, name };
        }
        return note;
    });
    setNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  }

  const value = {
    notes,
    getNote,
    updateName,
    deleteNote,
    selectedNote,
    setSelectedNote,
    addNote,
  };
  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
}

const useNotes = () => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error("useNotes must be used within a NoteProvider");
  }
  return context;
};

export { NoteProvider, useNotes };
