import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import PropTypes from 'prop-types';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        getGifs(category).then(newImages => setImages(newImages));
        setisLoading(false);
    }, [ ]);

    return {
        images,
        isLoading
    }
}

useFetchGifs.propTypes = {
    category: PropTypes.string.isRequired
}
