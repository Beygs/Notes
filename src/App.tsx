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

    /* setNotes([
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
    ]); */
  }, []);

  useEffect(() => {
    if (notes.length > 0) setSelectedNote(notes[notes.length - 1].key);
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  if (notes.length > 0 && selectedNote) {
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
  }

  return (
    <main>
      <p>loading...</p>
    </main>
  );
};

export default App;
