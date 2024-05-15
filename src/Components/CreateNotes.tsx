import {
  Box,
  Button,
  InputBase,
  TextField,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import React from "react";
import { NoteObject } from "../Model/NoteModel";
import { v4 as uuid } from "uuid";

// Default Object
const defaultObj: NoteObject = {
  id: 0,
  title: "",
  details: "",
  color: "",
  date: new Date().toLocaleString().toString(),
};

interface ICreateNoteProps {
  addNotes: (note: NoteObject) => void;
}

const CreateNotes: React.FC<ICreateNoteProps> = ({ addNotes }) => {
  const [note, setNote] = useState<NoteObject>(defaultObj);
  const [error, setError] = useState<string>("");

  const onValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (error) {
      setError("");
    }
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const onCreateNote = () => {
    if (!note.title && !note.details) {
      setError("All fields are mandatory");
      return;
    }
    addNotes({ ...note, id: uuid() });
    setNote(defaultObj);
  };

  return (
    <Box sx={{ marginTop: "85px", marginLeft: "50px", alignItems: "center" }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={10} sm={6} md={3}>
          <TextField
            id="note-name"
            label="Note Name"
            variant="outlined"
            fullWidth
            multiline
            rows={2}
            InputLabelProps={{ shrink: true }}
            sx={{ bgcolor: "background.paper" }}
            onChange={(e) => onValueChange(e)}
            name="title"
            value={note.title}
            inputProps={{
              maxLength: 50,
            }}
          />
          <span style={{ fontSize: "10px", color: "#616161" }}>
            {note.title.length} / 50
          </span>
        </Grid>
        <Grid item xs={10} sm={6} md={4}>
          <TextField
            id="note-details"
            label="Note Details"
            variant="outlined"
            fullWidth
            multiline
            rows={2}
            InputLabelProps={{ shrink: true }}
            sx={{ bgcolor: "background.paper" }}
            name="details"
            onChange={(e) => onValueChange(e)}
            value={note.details}
            inputProps={{
              maxLength: 300,
            }}
          />
          <span style={{ fontSize: "10px", color: "#616161" }}>
            {note.details.length} / 300
          </span>{" "}
        </Grid>
        <Grid item xs={10} sm={4} md={1}>
          <InputBase
            id="note-color"
            type="color"
            style={{
              borderRadius: "50%", // Set borderRadius to make it rounded
              width: "100px",
              height: "40px",
            }}
            onChange={(e) => onValueChange(e)}
            name="color"
            value={note.color}
          />
        </Grid>
        <Grid item xs={10} sm={2} md={1}>
          <Button onClick={onCreateNote} variant="contained" fullWidth>
            Create
          </Button>
        </Grid>
      </Grid>
      {error && (
        <Typography sx={{ color: "red", marginTop: "50px" }}>
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default CreateNotes;
