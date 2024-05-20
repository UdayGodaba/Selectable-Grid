import "./App.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import SelectableGrid from "./components/SelectableGrid";
import { useState } from "react";

function App() {
  const [rows, setRows] = useState(10);
  const [columns, setColumns] = useState(10);

  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          padding: 5,
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid item>
          <Typography variant="h4" fontWeight="900">
            Selectable Grid
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            label="Rows"
            type="number"
            autoComplete="off"
            onChange={(e) => setRows(Number(e.target.value))}
          />
          <TextField
            variant="outlined"
            label="Columns"
            type="number"
            autoComplete="off"
            onChange={(e) => setColumns(Number(e.target.value))}
          />
        </Grid>
        <Grid item>
          <SelectableGrid rows={rows} columns={columns} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
