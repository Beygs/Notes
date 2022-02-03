import React from "react";

export interface NoteObj {
  title: string;
  content: string;
  key: number;
}

export interface NotesProps {
  notes: NoteObj[];
  setNotes: React.SetStateAction;
  setSelectedNote: React.SetStateAction;
  noteId?: number;
}

export interface NoteProps {
  note?: NoteObj;
  setSelectedNote?: React.SetStateAction;
}

export interface InputProps {
  content: string;
}
