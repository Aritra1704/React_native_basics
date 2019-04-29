import React from 'react';
import { Text, View, Button  } from 'react-native';
const util = require('util')

export default class SecondScreen extends React.Component {
    static navigationOptions = {
        title: "SecondScreen"
    };

    render() {
        return(
            <View>
                <Text>This is first screen</Text>
                <Button 
                    onPress={

                    }
                    title="Go to back to first screen"
                    />
                    
                
            </View>
        )
    }
}