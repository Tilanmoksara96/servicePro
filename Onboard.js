import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, Dimensions, TouchableOpacity, Alert } from 'react-native';
import Swiper from 'react-native-swiper';

const {width, height} = Dimensions.get('window');

export default class Onboarding extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _onPress = text => {
        Alert.alert(text);
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <Swiper>
                    <View style={styles.slide}>
                        <Image source={require('./assets/servicescover.png')} 
                        style={styles.Image}

                        />
                    </View>
                </Swiper>
                <View style={styles.textContainer}>
                  <View style={styles.titleContainer}>
                      <Text style={styles.title}> ServicePro </Text> 
                </View>
                    <View style={styles.subTitleContainer}>
                         <Text style={styles.subTitle}> Your Service Provider </Text>
                      </View>
               </View>
                   <View style={styles.buttonContainer}>
                   <TouchableOpacity onPress={() => this._onPress('Tapped Home')}>
                       <View style={styles.homeContainer}>
                           <Text style={styles.home}> Home </Text>
                       </View>
                       </TouchableOpacity>
                   </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Image: {
        width: width,
        height: height
    },
    textContainer: {
        position: 'absolute',
        bottom: 200,
        marginLeft:20,
        height: 120,
        alignItems: 'flex-start',
        justifyContent: 'center'    
    },
    titleContainer: {
        width: 300,
        height: 70,
        backgroundColor: '#3B55E6',
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'Helvetica',
        fontSize: 40,
        color: '#ffffff'
    },
    subTitleContainer: {
        width: 200,
        height: 50,
        backgroundColor: '#3B55E6',
        opacity: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    subTitle: {
        fontFamily: 'Helvetica',
        fontSize: 24,
        color: '#ffffff'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 70,
        width: 370,
        height: 60,
        marginRight: 20,
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    homeContainer: {
        width: 180,
        height: 60,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    home: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#3B55E6'
    }
});