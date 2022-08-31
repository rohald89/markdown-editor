import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import data from "../data.json";

const NoteContext = createContext();

function NoteProvider({ children }) {
  const [notes, setNotes] = useLocalStorage("notes", data);
  const [selectedNote, setSelectedNote] = useState(1);

  const getActiveNote = () => {
    return notes.find((note) => note.id === selectedNote);
  }

  const addNote = () => {
    setNotes([...notes, {
        id: Date.now(),
        name: "Untitled",
        content: "",
        createdAt: Date.now(),

    }]);
  };

  const updateNote = (e) => {
    const updatedNotes = notes.map((note) => {
        if (note.id === selectedNote) {
            for (const key in note) {
                if (key === e.target.name) {
                    return { ...note, [key]: e.target.value };
                }
            }
        }
        return note;
    });
    setNotes(updatedNotes);
  }

  const deleteNote = () => {
    console.log("DELETING NOTE", selectedNote);
  }

  const value = {
    notes,
    getActiveNote,
    updateNote,
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
