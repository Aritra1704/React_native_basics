import React from 'react';
import { Text, View, Button  } from 'react-native';
const util = require('util')

export default class FirstScreen extends React.Component {
    static navigationOptions = {
        title: "FirstScreen"
    };

    render() {
        var navigate = this.props.navigate;
        return(
            <View>
                <Text>This is first screen</Text>
                <Button 
                    onPress={
                        () => navigate('Second', {
                            name: "Aritra",
                            email: "test@test.com"
                        })
                    }
                    title="Go to second screen"
                    />
                    
                
            </View>
        )
    }
}