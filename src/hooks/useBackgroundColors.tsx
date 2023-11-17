import React from 'react';
import { useCardSelector } from "./selectors/useCardSelector";

interface colors{
    primary: string;
    secondary: string;
}

interface Props {
    colors: colors
}

export const useBackgroundColors = ({colors}: Props) => {

    const state = useCardSelector();

    return (
        <></>
    );
};
