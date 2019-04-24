//Reference Docs:
//https://facebook.github.io/react-native/docs/props

import React,{Component} from 'react'
import { AppRegistry, StyleSheet, Image, Text, View } from 'react-native';
 
export default class HelloWorld extends Component {
    render() {
        console.log("text")
        let pic = {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
      return (
        
        // <View style={{ alignItems: "center", top: 50}}>
        //   <Text>Hello World</Text>
        //   <Image source={pic} style={{width: 193, height: 110}}/>
          
        //   <Greeting name='Aritra'/>
        //   <Greeting name='Ranjan'/>
        //   <Greeting name='Pal'/>
        //   <Blink text='I love to Blink'/>
        //   <Blink text='Blinking is so great'/>

        //   <Text style={styles.red}>just red</Text>
        //   <Text style={styles.bigBlue}>just blue</Text>
        //   <Text style={[styles.bigBlue, styles.red]}>first bigBlue, then red</Text>
        //   <Text style={[styles.red, styles.bigBlue]}>first red, then big blue</Text>

        //   <View style={{width: 50, height:50, backgroundColor: 'powderblue'}}/>

          
        // </View>

        //style={{height: 300}}
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'}}>

        <View style={{width: 50, height:50, backgroundColor: 'powderblue'}}/>
        <View style={{width: 50, height:50, backgroundColor: 'skyblue'}}/>
        <View style={{width: 50, height:50, backgroundColor: 'steelblue'}}/>

        <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
        <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
        <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
      </View>
        
      );
    }
  }

  const styles = StyleSheet.create({
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30
    },
    red: {
      color: 'red'
    }
  });

  class Blink extends Component {
    constructor(props) {
      super(props)
      this.state = { isShowingText: true };

      setInterval(() => {
        this.setState(previousState => (
          { isShowingText: !previousState.isShowingText }
        ))
      }, 1000);
    }
    render() {
      if(!this.state.isShowingText) {
        return null;
      }

      return(
        <Text>{this.props.text}</Text>
      )
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