import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';

const screenSize = Dimensions.get('screen')

const SingleMountain = ({route}) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text>{route.params.mountain.hillname}</Text>
                </View>
                <View>
                    <TouchableOpacity disabled={true}>
                        <MapView style={styles.map} initialRegion={{
                            latitude: route.params.mountain.latitude,
                            longitude: route.params.mountain.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }} mapType={'satellite'} 
                        >
                        <MapView.Marker
                            coordinate = {{
                                latitude: route.params.mountain.latitude,
                                longitude: route.params.mountain.longitude
                            }}
                            title={"title"}
                            description={"description"}
                        />
                        </MapView>
                    </TouchableOpacity>
                </View>
                <View style={styles.description}>
                    <Text>{route.params.mountain.description1}</Text>
                    <Text>{route.params.mountain.description2}</Text>
                </View>
                <View style={styles.info}>
                    <Text>Longitude: {route.params.mountain.longitude}</Text>
                    <Text>Latitude: {route.params.mountain.latitude}</Text>
                    <Text>Height in feet: {route.params.mountain.feet} </Text>
                    <Text>Height in metres: {route.params.mountain.metres} metres</Text>
                    <Text>{route.params.mountain.classification}</Text> 
                </View>
                <View style={styles.weather}>

                </View>
                <View style={styles.img}>
                    <Image
                        source={{ uri: route.params.mountain.img_hres_url }}
                        style={styles.image}
                    ></Image>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    image: {
        borderRadius: 14,
        width: screenSize.width * 0.9,
        height: screenSize.height * 0.25
      },
    description: {
        width: screenSize.width * 0.9,
    },
    info: {
        width: screenSize.width * 0.9,
    },
    map: {
        borderColor: 0x000000ff,
        borderWidth: 1,
        borderRadius: 14,
        width: screenSize.width * 0.95,
        height: screenSize.height * 0.25,
    }
})

export default SingleMountain;