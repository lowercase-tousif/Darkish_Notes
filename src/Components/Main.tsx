import { Outlet } from "react-router-dom";
import Header from "./Header";
import CreateNotes from "./CreateNotes";
import { useEffect, useState } from "react";
import { NoteObject } from "../Model/NoteModel";
import Notes from "./Notes";

const Main = () => {
  const [notes, setNotes] = useState<NoteObject[]>([]);

  useEffect(() => {
    if (localStorage.getItem("notes")) {
      setNotes(JSON.parse(localStorage.getItem("notes") as string));
    }
  }, []);

  const addNotes = (note: NoteObject) => {
    setNotes([note, ...notes]);
    localStorage.setItem("notes", JSON.stringify([note, ...notes]));
  };

  const deleteNote = (id: number) => {
    const abc = notes.filter((note) => note.id != id);
    setNotes(abc);
    localStorage.setItem("notes", JSON.stringify(abc));
  };
  return (
    <>
      <Header />
      <CreateNotes addNotes={addNotes} />
      <Notes notes={notes} deleteNote={deleteNote} />
      <Outlet></Outlet>
    </>
  );
};

export default Main;
