import React, { Component } from 'react';
import { View, Text, AsyncStorage, ActivityIndicator} from 'react-native';


class StartingScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstLauch: true
        }
    }

    render() {
        if (this.state.firstLauch === false) {
            return (
                <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                    <ActivityIndicator size="large" color="rgba(238,73,167,1)" />
                </View>
            );
        }else {
            return this.props.navigation.navigate('Home')
        }
    }
}

export default StartingScreen;