import React from 'react';
import { Text, View } from "react-native";
import { MovieFull } from "../interfaces/movieInterface";
import { Cast } from "../interfaces/creditsInterface";
import Icon from "react-native-vector-icons/MaterialIcons";
import currencyFormatter from 'currency-formatter';
import { CastItem } from "./CastItem";
import { FlatList } from "react-native-gesture-handler";

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
    return (
        <>
            <View style={{marginBottom: 20}}>
                {/* Detalles */}
                <View style={{marginHorizontal: 10, flexDirection: 'row'}}>
                    <Icon  
                        name='star-outline'
                        color='gold'
                        size={12}
                    />
                    <Text>{movieFull.vote_average}</Text>
                    <Text style={{marginLeft: 5}}>
                        - {movieFull.genres.map(g => g.name).join(', ')}
                    </Text>
                </View>

                {/* Historia */}
                <View style={{marginTop: 10}}>
                    <Text style={{fontSize: 23, fontWeight: 'bold'}}>
                        Overview
                    </Text>
                    <Text style={{fontSize: 16}}>
                        {movieFull.overview}
                    </Text>
                </View>

                {/* Presupuesto */}
                <View style={{marginTop: 10}}>
                    <Text style={{fontSize: 23, fontWeight: 'bold'}}>
                        Budget
                    </Text>
                    <Text style={{fontSize: 16}}>
                        {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
                    </Text>
                </View>

                {/* Casting */}
                <View style={{marginTop: 10}}>
                    <Text style={{fontSize: 23, fontWeight: 'bold'}}>
                        Casting
                    </Text>
                    <FlatList
                        data={cast}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({item}) => <CastItem castItem={item} />}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{marginTop: 10, height: 55}}
                    />
                </View>
            </View>

        </>
    );
};
