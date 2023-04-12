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
import Rocket from "../img/rocketleague.jpg";

// const cards = [1, 2, 3];

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function AllRenc() {
  const [rencontre, setRencontre] = React.useState([]);
  React.useEffect(() => {
    const getMatch = async () => {
      const response = await fetch(
        `https://akkyrlouis.alwaysdata.net/api/getavrencontres?jeux=Rocket`
      );
      const data = await response.json();
      console.log(data);
      setRencontre(data);
    };
    getMatch();
  }, []);

  return (
    <>
      <div>
        <div>
          <img width="50%" src={Rocket} alt="Rocketleague" />
        </div>
        <div>
          {rencontre.map((rencontre) => (
            <div class="card1">
              <div class="team-logo1"></div>
              <div class="team-info1">
                <h2>{rencontre.equipe1}</h2>
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
              <div class="team-logo1"></div>
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
        </div>
      </div>
    </>
  );
}

// export default function Rocketleague() {
//   return (
//     <div>
//       <div>
//         <img width="100%" src={Rocket} alt="Rocketleague" />
//       </div>
//       <div>
//         <Container component="main">
//           <main>
//             <Container sx={{ py: 2 }} maxWidth="md">
//               {/* End hero unit */}
//               <Grid container spacing={4}>
//                 {cards.map((card) => (
//                   <Grid item key={card} xs={12} sm={6} md={4}>
//                     <Card
//                       sx={{
//                         height: "100%",
//                         display: "flex",
//                         flexDirection: "column"
//                       }}
//                     >
//                       <CardHeader
//                         avatar={
//                           <Avatar
//                             sx={{ bgcolor: blue[500] }}
//                             aria-label="recipe"
//                           >
//                             R
//                           </Avatar>
//                         }
//                         action={
//                           <IconButton aria-label="settings">
//                             <MoreVertIcon />
//                           </IconButton>
//                         }
//                         title="Shrimp and Chorizo Paella"
//                         subheader="September 14, 2016"
//                       />
//                       <CardMedia
//                         component="img"
//                         sx={{
//                           // 16:9
//                           pt: "2%"
//                         }}
//                         image="https://source.unsplash.com/random"
//                         alt="random"
//                       />
//                       <CardContent sx={{ flexGrow: 1 }}>
//                         <Typography gutterBottom variant="h5" component="h2">
//                           Heading
//                         </Typography>
//                         <Typography>
//                           This is a media card. You can use this section to
//                           describe the content.
//                         </Typography>
//                       </CardContent>
//                       <CardActions disableSpacing>
//                         <IconButton aria-label="add to favorites">
//                           <FavoriteIcon />
//                         </IconButton>
//                         <IconButton aria-label="share">
//                           <ShareIcon />
//                         </IconButton>
//                       </CardActions>
//                     </Card>
//                   </Grid>
//                 ))}
//               </Grid>
//             </Container>
//           </main>
//         </Container>
//       </div>
//     </div>
//   );
// }
