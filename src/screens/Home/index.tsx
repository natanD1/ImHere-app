import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {

    const [participants, setParticipants] = useState (['Natan Dourado']);
    const [newParticipant, setNewParticipant] = useState("");

    function handleParticipantAdd() {
        if (participants.includes(newParticipant)){
           return Alert.alert("Participante existe!","Já existe um participante na lista com este nome.")
        }

        setParticipants(prevState => [...participants, newParticipant]);
        setNewParticipant("");
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover",`Remover o participante ${name}?`,[
            {
                text: "Sim",
                onPress: () => Alert.alert("Removido","Participante removido com sucesso.")
            },
            {
                text: "Não",
                style: 'cancel'
            }
        ]);
        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do Evento
            </Text>

            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2024
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#BFBFC4"
                    value={newParticipant}
                    onChangeText={setNewParticipant}
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data = { participants }
                keyExtractor = { item => item }
                renderItem = {({ item }) => (
                    <Participant
                        name = {item}
                        key = {item}
                        onRemove = {() => handleParticipantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator= {false}
                ListEmptyComponent={( ) => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda ? Adicione participantes
                        a sua lista de presença.
                    </Text>
                )}
            />
        </View>
    );
}