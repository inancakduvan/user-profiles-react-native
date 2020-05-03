import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

export default function Home() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.profile}>
                <View style={styles.profileHeader}>
                    <Image
                        style={styles.profilePhoto}
                        source={{
                            uri:
                                'https://gpluseurope.com/wp-content/uploads/Mauro-profile-picture.jpg',
                        }}
                    />

                    <View style={styles.profileInfo}>
                        <Text style={styles.profileInfoHeading}>Name</Text>
                        <Text style={styles.profileInfoName}>Ahmet Mümtaz</Text>
                    </View>
                </View>
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
    },
    profile: {
        width: "100%",
        paddingTop: 40
    },
    profileHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    profilePhoto: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        marginRight: 30,
        borderRadius: 40
    },
    profileInfo: {
        flexDirection: "column"
    },
    profileInfoHeading: {
        fontSize: 18,
        color: "gray"
    },
    profileInfoName: {
        fontSize: 24,
        color: "#8895f5",
        fontWeight: "bold"
    }
});
