import React from 'react';
import { View, Text } from 'react-native';

const SingleMountain = ({route}) => {
    console.log(route.params)
    return (
        <View>
            <Text>{route.params.mountain.hillname}</Text>
        </View>
    );
};

export default SingleMountain;