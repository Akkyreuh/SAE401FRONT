// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import Grid from "@mui/material/Grid";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import IconButton from "@mui/material/IconButton";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { blue } from "@mui/material/colors";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import LOL from "../img/lol.jpg";

// export default function Rencontres() {
//   const [rencontre, setRencontre] = React.useState([]);
//   React.useEffect(() => {
//     const getMatch = async () => {
//       const response = await fetch(
//         `https://akkyrlouis.alwaysdata.net/api/getrencontres`
//       );
//       const data = await response.json();
//       console.log(data);
//       setRencontre(data);
//     };
//     getMatch();
//   }, []);
// }

// export function PageEquipe() {
//   const [pageEquipe, setPageEquipe] = React.useState([]);
//   React.useEffect(() => {
//     const getPageEquipe = async () => {
//       const response = await fetch(
//         `https://akkyrlouis.alwaysdata.net/api/??equipe`);
//       const data = await response.json();
//       console.log(data);
//       setPageEquipe(data);
//     };
//     PageEquipe();
//   }, [])

//   return (
//     <div>{rencontre.equipe1} </div>
//
