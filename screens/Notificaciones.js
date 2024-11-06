import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { db } from '../FireBaseConfig'; 
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const EnviarNotificacion = () => {
  const [cliente, setCliente] = useState(null);
  const [tipoNotificacion, setTipoNotificacion] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      const clientesCollection = collection(db, 'clientes');
      const clientesSnapshot = await getDocs(clientesCollection);
      const clientesList = clientesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setClientes(clientesList);
    };

    fetchClientes();
  }, []);

  const handleEnviarNotificacion = async () => {
    if (!cliente || !tipoNotificacion) {
      Alert.alert('Error', 'Debe seleccionar un cliente y un tipo de notificación');
      return;
    }

    const nuevaNotificacion = {
      cliente,
      tipo: tipoNotificacion,
      mensaje: mensaje || `El cliente ${cliente} ha ${tipoNotificacion}.`,
      fecha: new Date().toISOString(),
    };

    try {
      await addDoc(collection(db, 'notificaciones'), nuevaNotificacion);
      Alert.alert('Notificación Enviada', `Notificación de "${tipoNotificacion}" enviada a ${cliente}`);
      setCliente(null);
      setTipoNotificacion('');
      setMensaje('');
    } catch (error) {
      Alert.alert('Error', 'No se pudo enviar la notificación');
      console.error("Error al enviar notificación: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enviar Notificación</Text>
      
      <View style={styles.card}>
        <Text style={styles.label}>Seleccionar Cliente</Text>
        <Picker
          selectedValue={cliente}
          onValueChange={setCliente}
          style={styles.picker}
        >
          <Picker.Item label="Selecciona un cliente" value={null} />
          {clientes.length > 0 ? (
            clientes.map((cli) => (
              <Picker.Item key={cli.id} label={cli.nombre} value={cli.nombre} />
            ))
          ) : (
            <Picker.Item label="No hay clientes disponibles" value={null} />
          )}
        </Picker>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Tipo de Notificación</Text>
        <Picker
          selectedValue={tipoNotificacion}
          onValueChange={setTipoNotificacion}
          style={styles.picker}
        >
          <Picker.Item label="Selecciona el tipo de notificación" value="" />
          <Picker.Item label="Asistió al turno" value="asistido al turno" />
          <Picker.Item label="Canceló el turno" value="cancelado el turno" />
          <Picker.Item label="Reprogramó el turno" value="reprogramado el turno" />
          <Picker.Item label="Recordatorio de turno" value="recordatorio de turno" />
        </Picker>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Mensaje Opcional</Text>
        <TextInput
          style={styles.input}
          value={mensaje}
          onChangeText={setMensaje}
          placeholder="Escribe un mensaje adicional (opcional)"
          placeholderTextColor="#9e9e9e"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleEnviarNotificacion}>
        <MaterialIcons name="send" size={20} color="white" />
        <Text style={styles.buttonText}>Enviar Notificación</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e3f2fd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0d47a1',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  label: {
    fontSize: 16,
    color: '#1565c0',
    marginBottom: 8,
  },
  picker: {
    height: 40,
    color: '#1565c0',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f3f4f6',
    color: '#424242',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e88e5',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default EnviarNotificacion;
