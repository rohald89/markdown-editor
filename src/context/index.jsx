import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import data from "../data.json";

const NoteContext = createContext();

function NoteProvider({ children }) {
  const [notes, setNotes] = useLocalStorage("notes", data);
  const [selectedNote, setSelectedNote] = useState(null);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const value = {
    notes,
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
