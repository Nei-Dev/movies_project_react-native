import { useDispatch, useSelector } from "react-redux";
import { setColors, setPrevColors } from "../../store/cards/cardsSlices";
import { Movie } from "../../interfaces/movieInterface";
import { getImageColors } from "../../helpers/getColores";

export const useCardSelector = () => {

    const {colors, prevColors} = useSelector((state: any) => state.cards);

    const dispatch = useDispatch();

    const updatePrevColor = (colors: any)=>{
        dispatch(setPrevColors(colors));
    }

    const updateColor = (colors: any)=>{
        dispatch(setColors(colors));
    }

    const getPosterColors = async (movies: Movie[], index: number) =>{
        const movie = movies[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        const [primary, secondary] = await getImageColors(uri);

        updateColor({primary, secondary});
    }

    return {
        colors, 
        prevColors,
        updateColor,
        updatePrevColor,
        getPosterColors
    }
};
