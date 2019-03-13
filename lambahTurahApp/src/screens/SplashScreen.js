import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

class SplashScreen extends Component {

    componentDidMount() {
        setTimeout(
            () => {
                this.props.navigation.navigate('Home')
            },
            2000
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={{ backgroundColor: '#fbc2ba' }}>
                    <StatusBar
                        barStyle="light-content"
                        backgroundColor="#fbc2ba"
                    />
                </SafeAreaView>
                <Image style={styles.logo} source={require('../../assets/icon.png')} />
            </View>
        );
    }
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fbc2ba'
    },
    logo:{
        width: 300,
        height: 250
    }
})