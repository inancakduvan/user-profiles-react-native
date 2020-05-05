import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { WebView } from 'react-native-webview';

export default function Profile({ navigation }) {
    const maleIcon = "../assets/male.png";
    const femaleIcon = "../assets/female.png";

    const item = navigation.getParam("results")[0];

    const long = item.location.coordinates.longitude;
    const lat = item.location.coordinates.latitude;

    const mapSrc = "https://maps.google.com/maps?q=+" + lat + "+,+" + long + "+&hl=es&z=14&amp;output=embed"

    return (
        <View style={styles.container}>
            <ScrollView style={styles.profile}>
                <View style={styles.profileHeader}>
                    <Image
                        style={styles.profilePhoto}
                        source={{
                            uri: item.picture.large,
                        }}
                    />

                    <View style={styles.profileInfo}>
                        <Text style={styles.profileInfoHeading}>Name</Text>
                        <Text style={styles.profileInfoName}>{item.name.title}. {item.name.first} {item.name.last}</Text>
                    </View>
                </View>

                <View>
                    <WebView
                        source={{ html: '<iFrame src=' + mapSrc + ' width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iFrame>' }}
                        style={{ marginTop: 20, width: "100%", height: 300 }}
                    />
                </View>

                <View style={styles.mailInfo}>
                    <View style={styles.mailInfoLeft}>
                        <MaterialIcons name="mail" size={35} color="#fff" />
                    </View>

                    <Text style={styles.email}>{item.email}</Text>
                </View>

                <View style={styles.profileInfoDetail}>
                    <View style={styles.profileInfoDetailSection}>
                        <Text style={styles.profileInfoDetailHeading}>Gender</Text>
                        <Image style={styles.profileInfoDetailIcon} source={item.gender === "female" ? require(femaleIcon) : require(maleIcon)} />
                    </View>

                    <View style={styles.profileInfoDetailSection}>
                        <Text style={styles.profileInfoDetailHeading}>Age</Text>
                        <Text style={styles.profileInfoDetailDesc}>{item.dob.age}</Text>
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
        borderTopWidth: 1,
        borderTopColor: "#eee"
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
    },
    mailInfo: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: -3
    },
    mailInfoLeft: {
        alignItems: "center",
        justifyContent: "center",
        width: "25%",
        height: 80,
        backgroundColor: "#8895f5"
    },
    email: {
        width: "75%",
        fontSize: 15,
        textAlign: "center",
        fontWeight: "bold"
    }
});
