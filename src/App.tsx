import React, { useEffect, useState } from "react";
import NoteDisplay from "./components/NoteDisplay";
import NoteEdit from "./components/NoteEdit";
import NotesList from "./components/NotesList";
import { NoteObj } from "./interfaces/interfaces";

const App: React.FC = () => {
  const [notes, setNotes] = useState<NoteObj[]>([]);
  const [selectedNote, setSelectedNote] = useState<number>();

  useEffect(() => {
    const localNotes = localStorage.getItem("notes");

    if (localNotes === null) {
      localStorage.setItem("notes", JSON.stringify(""));
    } else {
      setNotes(JSON.parse(localNotes));
    }
  }, []);

  useEffect(() => {
    if (notes.length > 0) setSelectedNote(notes[notes.length - 1].key);
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <main>
      <section className="left">
        <NotesList notes={notes} setNotes={setNotes} setSelectedNote={setSelectedNote} />
      </section>
      <section className="right">
        <NoteDisplay note={notes.find((n) => n.key === selectedNote)} />
        <NoteEdit note={notes.find((n) => n.key === selectedNote)} setNotes={setNotes} />
      </section>
    </main>
  );
};

export default App;
