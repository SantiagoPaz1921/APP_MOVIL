import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      {/* Header con email y nombre de usuario */}
      <View style={styles.header}>
        <Text style={styles.email}>JuanPerez@gmail.com</Text>
        <Text style={styles.userName}>Juan Pérez</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.sectionRow}>
          <TouchableOpacity style={styles.sectionBox} onPress={() => props.navigation.navigate('categoria')}>
            <FontAwesome5 name="paw" size={24} color="#2B7A78" />
            <Text style={styles.sectionTitle}>Perfil</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionHeader}>Gestión de Turnos</Text>
        <View style={styles.sectionRow}>
          <TouchableOpacity style={styles.sectionBox} onPress={() => props.navigation.navigate('agregar')}>
            <MaterialIcons name="add-circle-outline" size={24} color="#66BB6A" />
            <Text style={styles.sectionTitle}>Notificaciones</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionBox} onPress={() => props.navigation.navigate('eliminar')}>
            <MaterialIcons name="search" size={24} color="#EF5350" />
            <Text style={styles.sectionTitle}>Gestion de Turnos</Text>
          </TouchableOpacity>
        </View>

        

        <Text style={styles.sectionHeader}>Consulta de Historial</Text>
        <View style={styles.sectionRow}>
          <TouchableOpacity style={styles.sectionBox} onPress={() => props.navigation.navigate('listar')}>
            <MaterialIcons name="list-alt" size={24} color="#42A5F5" />
            <Text style={styles.sectionTitle}>Historial de Visitas</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  header: {
    backgroundColor: '#4A90E2',
    padding: 20,
    alignItems: 'center',
  },
  email: {
    color: '#FFF',
    fontSize: 12,
    marginBottom: 5,
  },
  userName: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  sectionBox: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
});
