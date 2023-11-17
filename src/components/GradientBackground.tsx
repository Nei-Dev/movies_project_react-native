import React, { useEffect } from 'react';
import { Animated, StyleSheet, Text, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from "react-redux";
import { useFade } from "../hooks/useFade";
import { useCardSelector } from "../hooks/selectors/useCardSelector";

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: Props) => {

    const {colors, prevColors, updatePrevColor} = useCardSelector();

    const {opacity, fadeIn, fadeOut} = useFade();

    useEffect(() => {
      fadeIn(()=>{
        updatePrevColor(colors);
        fadeOut();
      });
    
    }, [colors])
    

    return (
        <View
            style={{flex: 1}}
        >
            <LinearGradient  
                colors={[prevColors.primary, prevColors.secondary, 'gray']}
                style={{...StyleSheet.absoluteFillObject}}
                start={{x: 0.3, y: 0.3}}
                end={{x: 0.9, y: 0.9}}
            />

            <Animated.View
                style={{
                    ...StyleSheet.absoluteFillObject, 
                    opacity
                }}
            >
                <LinearGradient  
                    colors={[colors.primary, colors.secondary, 'gray']}
                    style={{...StyleSheet.absoluteFillObject}}
                    start={{x: 0.3, y: 0.3}}
                    end={{x: 0.9, y: 0.9}}
                />
            </Animated.View>
            {/* </LinearGradient> */}
            {children}
        </View>
    );
};
