import React from "react";
import s from './ListItem.module.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from "@material-ui/icons/Favorite";

export const ListItem = (props) => {
    return (
        <Card className={s.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Knife"
                    height="140"
                    image={props.img}
                    title="Knife"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <div>Blade: {props.blade}</div>
                        <div>Handle: {props.handle}</div>
                        <div>Length: {props.length}</div>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <div className={s.cardActions}>
                <FavoriteIcon fontSize={"large"} color={props.favorite ? 'secondary' : 'action'}
                              onClick={() => props.toggles.toggleFavorite(props.id)}/>
                <Button size="medium" color={props.compare ? 'primary' : 'action'}
                        onClick={() => props.toggles.toggleCompare(props.id)}>
                    COMPARE
                </Button>
                <Button size="medium" color={props.inCart ? 'primary' : 'action'}
                        onClick={() => props.toggles.toggleCart(props.id)}>
                    CART
                </Button>
            </div>
        </Card>
    );
}
