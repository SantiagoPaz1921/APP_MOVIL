import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const HistorialVisitas = ({ visitas }) => {
  const renderVisita = ({ item }) => (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: item.estado === 'ASISTIDO' ? '#d4edda' : '#f8d7da' }, // Verde para asistido, rojo para cancelado
      ]}
    >
      <Text style={styles.itemText}>Fecha: {item.fecha}</Text>
      <Text style={styles.itemText}>Estado: {item.estado}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={visitas}
        keyExtractor={(item) => item.id}
        renderItem={renderVisita}
        ListEmptyComponent={<Text style={styles.emptyText}>No hay visitas registradas</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  itemContainer: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#888',
    marginTop: 20,
  },
});

export default HistorialVisitas;

const visitas = [
  { id: '1', fecha: '2024-11-01', estado: 'ASISTIDO' },
  { id: '2', fecha: '2024-10-15', estado: 'CANCELADO' },
  { id: '3', fecha: '2024-09-30', estado: 'ASISTIDO' },
];