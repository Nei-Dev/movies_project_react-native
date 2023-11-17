import React from 'react';
import { Cast } from "../interfaces/creditsInterface";
import { Image, StyleSheet, Text, View } from "react-native";

interface Props {
    castItem: Cast;
}

export const CastItem = ({castItem}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${castItem.profile_path}`;
    return (
        <View style={style.container}>
            {
                castItem.profile_path && (
                <Image
                    source={{uri}}
                    style={{width: 50, height: 50, borderRadius: 10}}
                />)
            }
            <View style={{marginLeft: 5}}>
                <Text
                    style={{fontSize: 16, fontWeight: 'bold'}}
                >{castItem.name}</Text>
                <Text
                    style={{fontSize: 14, opacity: 0.7}}
                >{castItem.character}</Text>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'red',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
        marginRight: 10,
        paddingRight: 20,
        height: 50,
    },
    actorInfo: {
        marginLeft: 10,
    }
})