
import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class HomeScreen extends Component {
    render() {
        return (
          //style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
          <View >
            <Text>Home Screen</Text>
            <Button
              title="Go to Details"
              onPress={() => this.props.navigation.navigate('Details')}
            />
          </View>
        );
      }
}