import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const AgregarScreen = () => {
  return (
    <View style={styles.contenedorpadre}>
      <View style={styles.tarjeta}>
        <View style={styles.contenedor}>
            <TextInput placeholder='Ingrese el nombre del producto' style={styles.TextInput}/>
            <TextInput placeholder='Ingrese el nombre del producto' style={styles.TextInput}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedorpadre: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tarjeta:{
    margin:20,
    backgroundColor:'white',
    borderRadius:20,
    width:'90%',
    padding:20, 
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:2
    },
    shadowOpacity:0.25,
    shadowRadius:4,
    elevation:5
  },
  contenedor:{
    padding:20
  }
});

export default AgregarScreen;
