import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { NoteObject } from "../Model/NoteModel";

interface NoteProps {
  note: NoteObject;
  deleteNote: (id: number) => void;
}

const Note: React.FC<NoteProps> = ({ note, deleteNote }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Card
        sx={{
          height: "300px",
          backgroundColor: note.color,
          borderRadius: "12px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent
          sx={{
            flex: "1 1 auto",
            overflowY: "auto",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: "10px" }}>
            {note.title}
          </Typography>
          <Typography sx={{ fontSize: "16px" }}>{note.details}</Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
            {note.date}
          </Typography>

          <br />
        </CardContent>
        <Button
          variant="contained"
          color="inherit"
          sx={{ marginBottom: "15px", marginLeft: "15px", marginRight: "auto" }}
          onClick={() => deleteNote(note.id)}
        >
          Delete
        </Button>
      </Card>
    </Grid>
  );
};

export default Note;
