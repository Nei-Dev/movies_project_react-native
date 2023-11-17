import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Movie } from "../interfaces/movieInterface";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({movie, height = 400, width = 200}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation = useNavigation<StackNavigationProp<any, any>>();

    return (
        <TouchableOpacity 
            activeOpacity={0.8}
            onPress={() => navigation.navigate('DetailScreen', movie)}
            style={{...styles.container, width, height}}
        >
            <View
                style={styles.imageContainer}
            >
                <Image  
                    source={{uri}}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 15,
        },
        shadowOpacity: 0.24,
        shadowRadius: 1,
        elevation: 3,
    },
    container: {
        width: 200,
        height: 400,
        marginHorizontal: 9,
    }
})
