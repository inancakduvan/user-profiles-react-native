import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.users}>
                <TouchableOpacity style={styles.usersItem} onPress={() => navigation.navigate("Profile")}>
                    <View style={styles.usersItemLeft}>
                        <Image
                            style={styles.profilePhoto}
                            source={{
                                uri:
                                    'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg',
                            }}
                        />

                        <Text style={styles.userName}>Ahmet</Text>
                    </View>

                    <View style={styles.usersItemRight}>
                        <MaterialIcons name="keyboard-arrow-right" size={40} color="#ddd"></MaterialIcons>
                    </View>
                </TouchableOpacity>
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
