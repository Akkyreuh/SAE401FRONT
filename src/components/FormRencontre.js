import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

const Inscription = () => {
  const [jeux, setJeux] = useState("");
  const [equipe2, setEquipe2] = useState("");
  const [equipe1, setEquipe1] = useState("");
  const [cote_equipe1, setCote_equipe1] = useState("");
  const [cote_equipe2, setCote_equipe2] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://akkyrlouis.alwaysdata.net/api/postrencontres",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            jeux,
            equipe2,
            equipe1,
            cote_equipe1,
            cote_equipe2
          })
        }
      );
      const data = await response.json();
      console.log(data);
      alert("Rencontre ajouté");
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'ajout");
    }
  };

  return (
    <>
      <div>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Ajouter une rencontre
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="jeux"
                    label="Jeux"
                    name="jeux"
                    autoComplete="jeux"
                    value={jeux}
                    onChange={(e) => setJeux(e.target.value)}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="equipe1"
                    label="Equipe1"
                    name="equipe1"
                    autoComplete="equipe1"
                    value={equipe1}
                    onChange={(e) => setEquipe1(e.target.value)}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="equipe2"
                    label="Equipe2"
                    name="equipe2"
                    autoComplete="equipe2"
                    value={equipe2}
                    onChange={(e) => setEquipe2(e.target.value)}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="cote_equipe1"
                    label="Cote_equipe1"
                    name="cote_equipe1"
                    autoComplete="cote_equipe1"
                    value={cote_equipe1}
                    onChange={(e) => setCote_equipe1(e.target.value)}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="cote_equipe2"
                    label="Cote_equipe2"
                    name="cote_equipe2"
                    autoComplete="cote_equipe2"
                    value={cote_equipe2}
                    onChange={(e) => setCote_equipe2(e.target.value)}
                    autoFocus
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Valider
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
      {/* <div>
    <form onSubmit={handleSubmit}>
      <label>
        jeux:
        <input
          type="text"
          value={jeux}
          onChange={(e) => setJeux(e.target.value)}
        />
      </label>
      <label>
        Equipe1:
        <input
          type="text"
          value={equipe1}
          onChange={(e) => setEquipe1(e.target.value)}
        />
      </label>
      <label>
        Equipe2:
        <input
          type="text"
          value={equipe2}
          onChange={(e) => setEquipe2(e.target.value)}
        />
      </label>
      <label>
        Cote Equipe 1:
        <input
          type="number"
          value={cote_equipe1}
          onChange={(e) => setCote_equipe1(e.target.value)}
        />
      </label>
      <label>
        Cote Equipe 2:
        <input
          type="number"
          value={cote_equipe2}
          onChange={(e) => setCote_equipe2(e.target.value)}
        />
      </label>
      <button type="submit">S'inscrire</button>
    </form>
    </div> */}
    </>
  );
};

export default Inscription;
