import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, Alert, TouchableOpacity, TextInput } from 'react-native';


export default class App extends Component {

  constructor(pros){
    super(pros);
    this.state = {consumido:0, status:'Ruim', pct:'0%', meta:0, inputTexto:''};

    this.addGlass = this.addGlass.bind(this);
    this.update = this.update.bind(this);
    this.addGoal = this.addGoal.bind(this);

  }

  
  addGoal(){
    let s = this.state;
    s.meta = (35 * parseFloat(s.inputTexto));
    this.setState(s);
    s.pct= 0;
    s.consumido = 0;
    this.inputTexto.clear();
  }

  update(){
    let s = this.state;
    s.pct = Math.floor(((s.consumido/s.meta)*100));

    if(s.pct >= 100){
      s.status = 'Bom';
      Alert.alert('Parabéns você atingiu sua meta!!');
    }
    else{
      s.status = 'Ruim';
    }

    s.pct += '%';

    this.setState(s);

  }

  addGlass(){
    let s = this.state;
    s.consumido += 200;

    this.setState(s);
    
    this.update();
  }

  render() {
    return (
      
      <View style={ styles.body }>
        <ImageBackground style={ styles.imgBackground } source={require('./images/waterbg.png')}>
        <View> 
            <View style={styles.infoArea}>

                <View style={styles.area}>
                    <Text style={styles.areaTitle}>
                      Meta
                    </Text>
                    <Text style={styles.areaData}>
                      {this.state.meta}ML
                    </Text>
                </View>
                <View style={styles.area}>
                    <Text style={styles.areaTitle}>
                      Consumido
                    </Text>
                    <Text style={styles.areaData}>
                      {this.state.consumido}ML
                    </Text>
                </View>
                <View style={styles.area}>
                    <Text style={styles.areaTitle}>
                      Status
                    </Text>
                    <Text style={styles.areaData}>
                      {this.state.status}
                    </Text>
                </View>

            </View>

            <View style={styles.pctArea}>
              <Text style={styles.pctText}>{this.state.pct}</Text>
            </View>

            <View style={styles.btnArea}>
              <TouchableOpacity style={styles.btn} onPress={this.addGlass}>
                <Text style={styles.btnText}>BEBE 200ML</Text>
              </TouchableOpacity>
              
            </View>

            <View style={styles.weightArea}>
              <TextInput style={styles.input}
                placeholder="INFORME SEU PESO" 
                ref={input => {this.inputTexto = input}}
                onChangeText={ (inputTexto) => this.setState({inputTexto})}
                keyboardType={'phone-pad'}
              />   
              <TouchableOpacity style={styles.btn} onPress={this.addGoal}>
                <Text style={styles.textGoal}>DEFINIR META</Text>
              </TouchableOpacity>
            </View>

        </View>

        </ImageBackground>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    paddingTop:10
  },
  imgBackground: {
    flex:1,
    width:null
  },
  infoArea:{
    flex:1,
    flexDirection:'row',
    marginTop:50
  },
  area:{
    flex:1,
    alignItems: 'center'
  },
  areaTitle:{
    color:'#45b2fc'
  },
  areaData:{
    color:'#2b4274',
    fontSize:15,
    fontWeight:'bold'
  },
  pctArea:{
    marginTop:150,
    alignItems:'center'
  },
  pctText:{
    fontSize:80,
    color:'#ffffff',
    backgroundColor:'transparent'
  },
  btnArea:{
    marginTop:30,
    alignItems:'center',
  },
  btn:{
    backgroundColor:'#FFFFFF',
    padding:10,
    borderRadius:5,
    borderWidth:2,
    borderColor:'#008ae6'
  },
  btnText:{
    fontSize:20,
    color:'#008ae6',
    fontWeight:'bold'
  },
  weightArea:{
    marginTop:50,
    flexDirection:'row',
    justifyContent:'center'
   
  },
  textGoal:{
    fontSize:16,
    color:'#008ae6',
    fontWeight:'bold',
    textAlign:'center'
  },
  input:{
    backgroundColor:'#ffffff',
    width:135,
    marginRight:10,
    borderRadius:5,
    borderWidth:2,
    borderColor:'#008ae6',
    textAlign:'center',
    fontSize:13,
    fontWeight:'bold'
  }
})
