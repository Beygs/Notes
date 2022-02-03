import React, { useEffect, useState } from "react";
import NoteDisplay from "./components/NoteDisplay";
import NoteEdit from "./components/NoteEdit";
import NotesList from "./components/NotesList";
import { NoteObj } from "./interfaces/interfaces";

const App: React.FC = () => {
  const [notes, setNotes] = useState<NoteObj[]>([]);

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

  if (notes.length > 0) {
    return (
      <main>
        <NotesList notes={notes} setNotes={setNotes} />
        <NoteDisplay note={notes[0]} />
        <NoteEdit note={notes[0]} />
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
