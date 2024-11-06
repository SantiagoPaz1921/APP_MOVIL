import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import { db } from '../FireBaseConfig';
import { collection, addDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';

const Perfil = () => {
  const [nombreUsuario, setNombreUsuario] = useState('Juan Pérez');
  const [nombreMascota, setNombreMascota] = useState('Firulais');
  const [edadMascota, setEdadMascota] = useState(3); 
  const [razaMascota, setRazaMascota] = useState('Golden Retriever');

  useEffect(() => {
  }, []);

  const handleEliminarPerfilMascota = async () => {
    Alert.alert(
      'Eliminar Perfil',
      `¿Estás seguro de que deseas eliminar el perfil de "${nombreMascota}"?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          onPress: async () => {
            Alert.alert('Perfil Eliminado', `Perfil de "${nombreMascota}" eliminado correctamente`);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.avatar} />

      <Text style={styles.nombreUsuario}>{nombreUsuario}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nombre de la Mascota:</Text>
        <Text style={styles.value}>{nombreMascota}</Text>

        <Text style={styles.label}>Edad:</Text>
        <Text style={styles.value}>{edadMascota} años</Text>

        <Text style={styles.label}>Raza:</Text>
        <Text style={styles.value}>{razaMascota}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Función para editar perfil')}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={handleEliminarPerfilMascota}>
        <Text style={styles.buttonText}>Eliminar Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    backgroundColor: '#ddd',
  },
  nombreUsuario: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2B7A78',
    marginBottom: 10,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#00796b',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004d40',
    marginBottom: 10,
  },
  button: {
    width: '80%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#3E8E41',
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: '#E74C3C',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Perfil;
