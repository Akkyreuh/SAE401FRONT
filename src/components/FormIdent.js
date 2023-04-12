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
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://akkyrlouis.alwaysdata.net/api/adduti",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            prenom,
            nom,
            pseudo,
            email,
            password
          })
        }
      );
      const data = await response.json();
      console.log(data);
      alert("Inscription réussie");
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'inscription");
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
              S'identifier
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
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="nom"
                    label="Nom"
                    name="nom"
                    autoComplete="nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="pseudo"
                    label="Pseudo"
                    name="pseudo"
                    autoComplete="pseudo"
                    value={pseudo}
                    onChange={(e) => setPseudo(e.target.value)}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="prenom"
                    label="Prenom"
                    name="prenom"
                    autoComplete="prenom"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Mot de passe"
                    name="passwod"
                    autoComplete="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
              <Grid container justifyContent="flex-end">
                <Link to="/login">
                  <Grid item>Vous avez un compte ? Connexion</Grid>
                </Link>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
      {/* <div>
    <form onSubmit={handleSubmit}>
      <label>
        Prénom:
        <input
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
      </label>
      <label>
        Nom:
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
      </label>
      <label>
        Pseudo:
        <input
          type="text"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Mot de passe:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">S'inscrire</button>
    </form>
    </div> */}
    </>
  );
};

export default Inscription;
