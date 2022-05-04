import { createContext } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0
});

function FavoritesContextProvidor(props) {

    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });

    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemIsFavoriteHandler() {
        return userFavorites.some(meetup => meetup.id !== meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: useravorites.length
    }
    return <FavoritesContext.Providor value={context}>
        {props.children}
    </FavoritesContext.Providor>
}