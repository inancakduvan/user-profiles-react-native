import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import io from "socket.io-client";

//Connect to the server, so that is possible to get data.
const client = io('https://wunder-provider.herokuapp.com/');
const event = 'userList';

export default function Home({ navigation }) {

    const [users, setUsers] = useState([])

    useEffect(() => {
        client.on(event, data => {
            setUsers(users => [...users, data])
        })
    }, [client, event])

    const renderUsers = () => {
        return users.map((item) => (
            <TouchableOpacity key={item.results[0].phone + item.results[0].name.last} style={styles.usersItem} onPress={() => navigation.navigate("Profile", item)}>
                <View style={styles.usersItemLeft}>
                    <Image
                        style={styles.profilePhoto}
                        source={{
                            uri: item.results[0].picture.medium,
                        }}
                    />

                    <Text style={styles.userName}>{item.results[0].name.title}. {item.results[0].name.first} {item.results[0].name.last}</Text>
                </View>

                <View style={styles.usersItemRight}>
                    <MaterialIcons name="keyboard-arrow-right" size={40} color="#ddd"></MaterialIcons>
                </View>
            </TouchableOpacity>
        ))
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.users}>
                {users.length === 0 ? <Text style={styles.loaderText}>Connecting</Text> : renderUsers()}
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: "#fff"
    },
    loaderText: {
        fontSize: 24,
        color: "#8895f5",
        marginTop: 20,
        textAlign: "center"
    },
    users: {
        width: "100%"
    },
    usersItem: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        borderBottomColor: "#eee",
        borderBottomWidth: 1
    },
    usersItemLeft: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center"
    },
    usersItemRight: {
        backgroundColor: "#fff"
    },
    profilePhoto: {
        width: 45,
        height: 45,
        resizeMode: 'cover',
        marginRight: 12,
        borderRadius: 40
    },
    userName: {
        fontSize: 18,
        color: "#8895f5",
        fontWeight: "bold"
    }
});
