import React, { useState, useEffect } from 'react';

const useMediaQuery = (query) => {

    const [match, setMatch] = useState(false);

    const handleMatch = (e) => {
        setMatch(e.matches);
    }

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        setMatch(mediaQueryList.matches);
        mediaQueryList.addEventListener("change", handleMatch);
        return () => {
            mediaQueryList.removeEventListener("change", handleMatch);
        };
    }
        , [query]);

    return match;
}

export default useMediaQuery;