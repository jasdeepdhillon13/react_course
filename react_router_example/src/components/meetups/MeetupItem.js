import { useContext } from "react";
import classes from "./MeetupItem.module.css"
import Card from "../ui/Card.js"
import FavoritesContext from "../../store/favorites-context";


function MeetupItem(props){
    const favoritesCtx = useContext(FavoritesContext); 
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id); 

    function toggleFavoirteStatusHandler(){
        if (itemIsFavorite){
            favoritesCtx.removeFavorite(props.id); 
        }else {
            favoritesCtx.addFavorite({
                id: props.id, 
                title: props.title, 
                description: props.description, 
                image: props.image, 
                address: props.address
            }); 
        }
    }; 

    return (
        <li className={classes.item}>
            <Card>
            <div className={classes.image}>
            <img src={props.image} alt={props.title} />
            </div>

            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
            </div>

            <div className={classes.actions}>
                <button onClick={toggleFavoirteStatusHandler}> {itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
            </div>
            </Card>
        </li>

    ); 


}

export default MeetupItem; 