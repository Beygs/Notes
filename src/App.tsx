import React, { useEffect, useState } from "react";
import NoteDisplay from "./components/NoteDisplay";
import NoteEdit from "./components/NoteEdit";
import NotesList from "./components/NotesList";
import { NoteObj } from "./interfaces/interfaces";

const App: React.FC = () => {
  const [notes, setNotes] = useState<NoteObj[]>([]);
  const [selectedNote, setSelectedNote] = useState<number>();

  useEffect(() => {
    setNotes([
      {
        title: "Test1",
        content: "#test\n##Coucou je suis du markdown\n`Voici du code`",
        key: 1,
      },
      {
        title: "Test2",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sapiente.",
        key: 2,
      },
    ]);
  }, []);

  useEffect(() => {
    if (notes.length > 0) setSelectedNote(notes[notes.length - 1].key);
  }, [notes]);

  if (notes.length > 0 && selectedNote) {
    return (
      <main>
        <NotesList notes={notes} setNotes={setNotes} setSelectedNote={setSelectedNote} />
        <NoteDisplay note={notes.find((n) => n.key === selectedNote)} />
        <NoteEdit note={notes.find((n) => n.key === selectedNote)} />
      </main>
    );
  }

  return (
    <main>
      <p>loading...</p>
    </main>
  );
};

export default App;
