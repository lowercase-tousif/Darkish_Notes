import { Box, Grid, Typography } from "@mui/material";
import { NoteObject } from "../Model/NoteModel";
import Note from "./Note";

interface INotesProps {
  notes: NoteObject[];
  deleteNote: (id: number) => void;
}

const Notes: React.FC<INotesProps> = ({ notes, deleteNote }) => {
  return (
    <Box sx={{ padding: "20px", marginTop : "100px" }}>
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        Notes
      </Typography>
      <Grid container spacing={4}>
        {notes.map((note) => (
          <Note note={note} key={note.id} deleteNote={deleteNote} />
        ))}
      </Grid>
    </Box>
  );
};

export default Notes;
