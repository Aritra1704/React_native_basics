import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class DetailsScreen extends React.Component {
    render() {
        return (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
              title="Go to Details... again"
              onPress={() => this.props.navigation.navigate('Details')}
            />
          </View>
        );
      }
}