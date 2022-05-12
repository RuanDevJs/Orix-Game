import React, { useState, useRef } from 'react';
import { SafeAreaView, View, Text, Image, Dimensions, StyleSheet, FlatList, Platform, Animated } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import Lottie from "lottie-react-native";

const { height , width } = Dimensions.get('window');
import DATA from '../../services/data';

const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
const SPACERR_ITEM_SIZE = (width - ITEM_SIZE) / 2;

export default function Games() {
    const scrollX = useRef(new Animated.Value(0)).current;
    
    const [data, setData] = useState([{
        key: "left"
    },
    ...DATA,
    {
        key: "right"
    }])

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1}}>
                <Animated.FlatList
                    data={data}
                    keyExtractor={((_, index) => index)}
                    renderItem={(({ item, index }) => {
                        const inputRange = [
                            (index - 2) * ITEM_SIZE,
                            (index - 1) * ITEM_SIZE,
                            index * ITEM_SIZE
                        ]
                        if(!item._id){
                            return <View style={{ width: SPACERR_ITEM_SIZE }} /> 
                        }

                        return(
                            <View style={{ width: ITEM_SIZE }}>
                                <Animated.View style={{ 
                                    marginHorizontal: 10,
                                    transform: [
                                        {
                                            translateY: scrollX.interpolate({
                                                inputRange,
                                                outputRange: [10, -30, 20]
                                            })
                                        }
                                    ]
                                 }}>
                                    <Animated.Image
                                        source={{ uri: item.url }}
                                        style={[styles.poster]}
                                    />
                                    <View style={styles.wrap}>
                                        <Text style={styles.title}>
                                            {item.title}
                                        </Text>
                                    </View>
                                </Animated.View>
                            </View>
                        )
                    })}
                    horizontal
                    pagingEnabled
                    scrollEventThrottle={16}
                    bounces={false}
                    decelerationRate={0}
                    snapToInterval={ITEM_SIZE}
                    contentContainerStyle={{ 
                        alignItems: 'flex-end'
                    }}
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event([{ nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: false})}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1.23,
        paddingBottom: 32
    },
    poster: {
        width: '100%',
        height: ITEM_SIZE * 1.2,
        resizeMode: 'cover',
        borderRadius: 12,
    },
    wrap: {
        width: '100%',
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 18,
        color: "#333",
        textAlign: 'center',
        marginBottom: 24
    }
})