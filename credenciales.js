import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { db } from '../credenciales'; // Ajusta la ruta según la ubicación de credenciales.js
import { collection, addDoc } from 'firebase/firestore';

const Agregar = ({ agregarProducto, categorias }) => {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState(null);
  const [stock, setStock] = useState('');
  const [precio, setPrecio] = useState('');

  const handleAgregar = async () => {
    if (!nombre || !categoria || !stock || !precio) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    const nuevoProducto = {
      nombre,
      categoria,
      stock: parseInt(stock),
      precio: parseFloat(precio),
    };

    try {
      const docRef = await addDoc(collection(db, 'productos'), nuevoProducto);
      console.log('Producto agregado con ID: ', docRef.id);
      agregarProducto({ ...nuevoProducto, id: docRef.id });
      Alert.alert('Producto Agregado', `Producto ${nombre} agregado correctamente`);
      setNombre('');
      setCategoria(null);
      setStock('');
      setPrecio('');
    } catch (e) {
      console.error('Error al agregar el producto: ', e);
      Alert.alert('Error', 'No se pudo agregar el producto');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre del Producto:</Text>
      <TextInput style={styles.input} value={nombre} onChangeText={setNombre} />

      <Text style={styles.label}>Categoría:</Text>
      <Picker selectedValue={categoria} onValueChange={setCategoria}>
        <Picker.Item label="Selecciona una categoría" value={null} />
        {categorias.map((cat) => (
          <Picker.Item key={cat.id} label={cat.nombre} value={cat.nombre} />
        ))}
      </Picker>

      <Text style={styles.label}>Stock:</Text>
      <TextInput style={styles.input} value={stock} onChangeText={setStock} keyboardType="numeric" />

      <Text style={styles.label}>Precio:</Text>
      <TextInput style={styles.input} value={precio} onChangeText={setPrecio} keyboardType="numeric" />

      <TouchableOpacity style={styles.button} onPress={handleAgregar}>
        <Text style={styles.buttonText}>Agregar Producto</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#3E8E41',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Agregar;
