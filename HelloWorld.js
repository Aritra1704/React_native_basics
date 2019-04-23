import React,{Component} from 'react'
import { Text, View } from 'react-native';
import { AppRegistry, Image } from 'react-native';
 
export default class HelloWorld extends Component {
    render() {
        console.log("text")
        let pic = {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
      return (
        
        <View style={{ alignItems: "center", top: 50}}>
          <Text>Hello World</Text>
          <Image source={pic} style={{width: 193, height: 110}}/>
          
          <Greeting name='Aritra'/>
          <Greeting name='Ranjan'/>
          <Greeting name='Pal'/>
        </View>
        
      );
    }
  }

  class Greeting extends Component {
    render(){
      return (
        <View style={{alignItems: 'center'}}>
          <Text>Hello {this.props.name}</Text>
        </View>
      );
    }
  }