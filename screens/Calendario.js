import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, FlatList } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const Turno = () => {
  const [fecha, setFecha] = useState(new Date());
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);

  const horariosMañana = ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'];
  const horariosTarde = ['6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'];

  const handleConfirmarFecha = (event, selectedDate) => {
    const currentDate = selectedDate || fecha;
    setMostrarCalendario(false);
    if (currentDate >= new Date()) {
      setFecha(currentDate);
    } else {
      Alert.alert("Fecha inválida", "No puedes seleccionar una fecha pasada.");
    }
  };

  const handleSeleccionarHorario = (horario) => {
    setHorarioSeleccionado(horario);
    Alert.alert("Horario seleccionado", `Has seleccionado el horario de ${horario}`);
  };

  const renderHorario = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.horarioButton,
        horarioSeleccionado === item && styles.horarioSeleccionado,
      ]}
      onPress={() => handleSeleccionarHorario(item)}
    >
      <Text style={styles.horarioText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona tu fecha de turno</Text>

      {/* Botón para abrir el calendario */}
      <TouchableOpacity onPress={() => setMostrarCalendario(true)} style={styles.dateButton}>
        <Text style={styles.dateText}>{moment(fecha).format('LL')}</Text>
      </TouchableOpacity>

      {/* DateTimePicker para seleccionar la fecha */}
      {mostrarCalendario && (
        <DateTimePicker
          value={fecha}
          mode="date"
          display="calendar"
          minimumDate={new Date()}
          onChange={handleConfirmarFecha}
        />
      )}

      <Text style={styles.subtitle}>Horarios de la mañana</Text>
      <FlatList
        data={horariosMañana}
        keyExtractor={(item) => item}
        renderItem={renderHorario}
        horizontal
      />

      <Text style={styles.subtitle}>Horarios de la tarde</Text>
      <FlatList
        data={horariosTarde}
        keyExtractor={(item) => item}
        renderItem={renderHorario}
        horizontal
      />

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => {
          if (horarioSeleccionado) {
            Alert.alert(
              "Turno Confirmado",
              `Tu turno ha sido agendado para el ${moment(fecha).format('LL')} a las ${horarioSeleccionado}.`
            );
          } else {
            Alert.alert("Seleccione un horario", "Por favor, elija un horario disponible.");
          }
        }}
      >
        <Text style={styles.confirmButtonText}>Confirmar Turno</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  dateButton: {
    padding: 15,
    backgroundColor: '#4a90e2',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 18,
    color: 'white',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  horarioButton: {
    padding: 15,
    backgroundColor: '#e6e6e6',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  horarioText: {
    fontSize: 16,
  },
  horarioSeleccionado: {
    backgroundColor: '#4a90e2',
  },
  confirmButton: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#3E8E41',
    borderRadius: 10,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Turno;
