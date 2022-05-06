import * as React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Container} from "@mui/material";
import Navbar from "../navbar/navbar";
import Button from "@mui/material/Button";

const theme = createTheme();

function Form() {
  return (
    <>
      <Navbar />
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container sx={{ mt: 15, width: 450, maxWidth: "100%" }}>
          <Typography height="15vh" align="center" variant="h3">
            Order Form
          </Typography>

          <div>
            <TextField
              fullWidth
              required
              id="standard-textarea"
              label="First Name"
              placeholder="First Name"
              multiline
              variant="standard"
            />
          </div>
          <div>
            <TextField
              fullWidth
              required
              id="standard-textarea"
              label="Last Name"
              placeholder="Last Name"
              multiline
              variant="standard"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              fullWidth
              required
              id="standard-textarea"
              label="Address"
              placeholder="Address"
              multiline
              variant="standard"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              fullWidth
              required
              id="standard-textarea"
              label="Quantity"
              placeholder="Amount in kg"
              multiline
              variant="standard"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              fullWidth
              required
              id="standard-textarea"
              label="Date Of Delivery"
              placeholder="Date"
              multiline
              variant="standard"
            />
          </div>
          <Container sx={{ mt: 10, ml: 15 }} position="center">
            <Button variant="contained">Submit</Button>
          </Container>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Form;
