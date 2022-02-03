export interface Note {
  title: string;
  content: string;
  key: number;
}

export interface NotesProps {
  notes: Note[];
}

export interface NoteProps {
  note: Note;
}

export interface InputProps {
  content: string;
}
