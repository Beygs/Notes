import React from "react";

export interface NoteObj {
  title: string;
  content: string;
  key: number;
}

export interface NotesProps {
  notes: NoteObj[];
  setNotes: React.SetStateAction;
}

export interface NoteProps {
  note: NoteObj;
}

export interface InputProps {
  content: string;
}
