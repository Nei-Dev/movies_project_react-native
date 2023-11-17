import React, { useEffect } from 'react';
import { ActivityIndicator, Button, Dimensions, Text, View } from "react-native";
import { useMovies } from "../hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MoviePoster } from "../components/MoviePoster";
import Carousel from 'react-native-snap-carousel';
import { ScrollView } from "react-native-gesture-handler";
import { HorizontalSlider } from "../components/HorizontalSlider";
import { GradientBackground } from "../components/GradientBackground";
import { useCardSelector } from "../hooks/selectors/useCardSelector";

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

    const {getPosterColors} = useCardSelector();

    useEffect(() => {
        if (nowPlaying.length > 0) {
            getPosterColors(nowPlaying, 0);
        }
    }, [nowPlaying])

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="red" size={100} />
            </View>
        );
    }
    
    return (
        <GradientBackground >
            <ScrollView>
                <View
                    style={{
                        marginTop: top + 20,
                    }}
                >
                    <View
                        style={{
                            height: 440
                        }}
                    >
                        <Carousel  
                            data={nowPlaying}
                            renderItem={({item}: any) => <MoviePoster movie={item} />}
                            sliderWidth={windowWidth}
                            itemWidth={200}
                            inactiveSlideOpacity={1}
                            onSnapToItem={index => getPosterColors(nowPlaying, index)}
                        />
                    </View>
                    <HorizontalSlider title="Populars" movies={popular} />
                    <HorizontalSlider title="Top Rated" movies={topRated} />
                    <HorizontalSlider title="Upcoming" movies={upcoming} />
                </View>
            </ScrollView>
        </GradientBackground>
    );
};
