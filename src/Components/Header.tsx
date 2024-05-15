import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import NotesIcon from "@mui/icons-material/Notes";

const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" sx={{ width: "full" }}>
        <Toolbar>
          <NotesIcon sx={{ fontSize: 30, mr: 2 }} />

          <Typography variant="h6" component="a" sx={{ flexGrow: 1 }}>
            Darkish | Note
          </Typography>

          <Typography variant="subtitle1">
            <a
              className="my"
              target="_blank"
              href="https://www.facebook.com/tousif.tasrik"
            >
              Tousif Tasrik
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
