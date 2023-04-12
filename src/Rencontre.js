import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { blue } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function AllRenc() {
  const [rencontre, setRencontre] = React.useState([]);
  React.useEffect(() => {
    const getMatch = async () => {
      const response = await fetch(
        `https://akkyrlouis.alwaysdata.net/api/getrencontres`
      );
      const data = await response.json();
      console.log(data);
      setRencontre(data);
    };
    getMatch();
  }, []);

  return (
    <>
      {rencontre.map((rencontre) => (
        <div class="card1">
          <div class="team-logo1"></div>
          <div class="team-info1">
            <h2>
              <a href="/PageEquipeView.js">{rencontre.equipe1}</a>
            </h2>
            <div class="betting-info1">
              <div class="betting-odds1">
                <span>{rencontre.cote_equipe1}</span>
              </div>
              <form class="listrenc">
                <label for="bet-amount">Mise :</label>
                <input
                  type="number"
                  id="bet-amount"
                  name="bet-amount"
                  min="1"
                  max="1000"
                  placeholder="Entrez votre mise"
                  value=""
                ></input>
                <button type="submit">Valider le pari</button>
              </form>
            </div>
          </div>
          <h2>{rencontre.jeux} </h2>
          <div class="team-info1">
            <h2>{rencontre.equipe2}</h2>
            <div class="betting-info1">
              <div class="betting-odds1">
                <span>{rencontre.cote_equipe2}</span>
              </div>
              <form class="listrenc">
                <label for="bet-amount">Mise :</label>
                <input
                  type="number"
                  id="bet-amount"
                  name="bet-amount"
                  min="1"
                  max="1000"
                  placeholder="Entrez votre mise"
                  value=""
                ></input>
                <button type="submit">Valider le pari</button>
              </form>
            </div>
          </div>
          <p class="match-date1">Date du match : {rencontre.daterenc}</p>
        </div>
      ))}
    </>
  );
}
