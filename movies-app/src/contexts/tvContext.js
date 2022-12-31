import React, { useState } from "react";

export const TVContext = React.createContext(null);

const TVContextProvider = (props) => {
    const [favourites, setFavourites, myReviews, setMyReviews, mustWatch, setMustWatch] = useState([])


    const addToFavourites = (tv) => {
        let newFavourites = [...favourites];
        if (!favourites.includes(tv.id)) {
            newFavourites.push(tv.id);
        }
        setFavourites(newFavourites);
    };

    const addToMustWatch = (tv) => {
        let newMustWatch = [...mustWatch];
        if (!mustWatch.includes(tv.id)) {
            newMustWatch.push(tv.id);
        }
        setMustWatch(newMustWatch);
        console.log(newMustWatch)
    };

    // We will use this function in a later section
    const removeFromFavourites = (tv) => {
        setFavourites(favourites.filter(
            (mId) => mId !== tv.id
        ))
    };

    const addReview = (tv, review) => {
        setMyReviews({ ...myReviews, [tv.id]: review })
    };

    return (
        <TVContext.Provider
            value={{
                favourites,
                addToFavourites,
                removeFromFavourites,
                addReview,
                mustWatch,
                addToMustWatch,
            }}
        >
            {props.children}
        </TVContext.Provider>
    );
};

export default TVContextProvider;