import React from "react";
import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

class MediaCard extends React.Component {
    render() {
      return (
    <Card item sx={{minWidth: 340, margin: "1em"}}>
      <CardMedia
        component="img"
        height="140"
        image={this.props.image}
        alt={this.props.alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {this.props.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={this.props.create}>Crear</Link>
        <Link to={this.props.view}>Ver</Link>
      </CardActions>
    </Card>
    );
}
}
export default MediaCard;
