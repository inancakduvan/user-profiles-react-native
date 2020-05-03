import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { WebView } from 'react-native-webview';

export default function Home() {
    const maleIcon = "../assets/male.png";
    const femaleIcon = "../assets/female.png";

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

                <View>
                    <WebView
                        source={{ html: '<iFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.019327543697!2d28.99383995145631!3d41.04670642490543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab70a6056ba9f%3A0xd9d0ab19bd17d964!2zxZ5pxZ9saSDDlsSfcmV0bWVuZXZp!5e0!3m2!1str!2str!4v1588511742606!5m2!1str!2str" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iFrame>' }}
                        style={{ marginTop: 20, width: "100%", height: 300 }}
                    />
                </View>

                <View style={styles.profileInfoDetail}>
                    <View style={styles.profileInfoDetailSection}>
                        <Text style={styles.profileInfoDetailHeading}>Gender</Text>
                        <Image style={styles.profileInfoDetailIcon} source={require(maleIcon)} />
                    </View>

                    <View style={styles.profileInfoDetailSection}>
                        <Text style={styles.profileInfoDetailHeading}>Age</Text>
                        <Text style={styles.profileInfoDetailDesc}>34</Text>
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
        backgroundColor: "#fff"
    },
    profile: {
        width: "100%",
        paddingTop: 10
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
    },
    profileInfoDetail: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    profileInfoDetailSection: {
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#eee"
    },
    profileInfoDetailHeading: {
        color: "gray",
        marginBottom: 10,
        textAlign: "center"
    },
    profileInfoDetailDesc: {
        fontSize: 34,
        color: "#8895f5",
        textAlign: "center"
    },
    profileInfoDetailIcon: {
        width: 40,
        height: 40
    }

});
