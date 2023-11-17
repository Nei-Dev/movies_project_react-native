import { StackScreenProps } from "@react-navigation/stack";
import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { RouteStackParams } from "../navigation/Navigation";
import { ScrollView } from "react-native-gesture-handler";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { MovieDetails } from "../components/MovieDetails";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Props extends StackScreenProps<RouteStackParams, 'DetailScreen'>{}

const screenHeight = Dimensions.get('screen').height;

export const DetailScreen = ({route, navigation}: Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { isLoading, cast, movieFull } = useMovieDetails(movie.id);

    return (
        <ScrollView>
            <View
                style={styles.imageContainer}
            >
                <View style={styles.imageBorder}>
                    <Image  
                        source={{uri}}
                        style={styles.image}
                    />
                </View>
            </View>
            <View
                style={styles.marginContainer}
            >
                <Text style={styles.subtitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>
            <View
                style={{...styles.marginContainer, marginTop: 20}}
            >
                {
                    isLoading
                    ? <ActivityIndicator
                        color="red"
                        size={35}
                        style={{marginTop: 20}}
                    />
                    : <MovieDetails movieFull={movieFull!} cast={cast} />
                }
            </View>
            <View
                style={styles.backButton}
            >
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    style={{
                        justifyContent: 'center',
                    }}
                >
                    <Icon
                        name='arrow-back-ios'
                        color='#fff'
                        size={60}
                        style={{
                            marginLeft: 5,
                        }}
                    />
                </TouchableOpacity>
            </View>
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 7,
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25,
        overflow: 'hidden',
    },
    imageBorder: {
        flex: 1,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
        overflow: 'hidden',
        borderColor: 'gray',
        borderWidth: 5,
    },
    image: {
        flex: 1,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    subtitle:{
        fontSize: 16,
        opacity: 0.8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 30,
        left: 25,
        borderRadius: 50,
        borderColor: 'gray',
    }
});