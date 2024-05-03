import React from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {

    const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro', 'Ana', 'Isa',
        'Jack', 'Mayk', 'João'];

    function handleParticipantAdd() {
        console.log("Você Clicou no botão de ADICIONAR!");
    }

    function handleParticipantRemove(name: string) {
        console.log(`Você clicou em remover participante ${name}`);
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
                    placeholder='Nome do participante'
                    placeholderTextColor="#6b6b6b"
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