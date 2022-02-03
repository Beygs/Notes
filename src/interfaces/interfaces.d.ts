import React from "react";

export interface NoteObj {
  title: string;
  content: string;
  key: number;
}

export interface NotesProps {
  note?: NoteObj;
  notes: NoteObj[];
  setNotes: React.SetStateAction;
  setSelectedNote: React.SetStateAction;
}

export interface NoteProps {
  note?: NoteObj;
  setSelectedNote?: React.SetStateAction;
  setNotes?: React.SetStateAction;
}

export interface InputProps {
  content: string;
}

export interface EditProps {
  content: string | undefined;
  setNotes: React.SetStateAction;
  noteKey: number | undefined;
}
