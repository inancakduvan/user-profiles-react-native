import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

export default function Home({ navigation }) {
    const [users, setUsers] = useState([
        {
            "results": [
                {
                    "gender": "male",
                    "name": {
                        "title": "Mr",
                        "first": "Önal",
                        "last": "Beşok"
                    },
                    "location": {
                        "street": {
                            "number": 4942,
                            "name": "Doktorlar Cd"
                        },
                        "city": "Kırklareli",
                        "state": "Uşak",
                        "country": "Turkey",
                        "postcode": 95029,
                        "coordinates": {
                            "latitude": "8.7464",
                            "longitude": "-137.4775"
                        },
                        "timezone": {
                            "offset": "-6:00",
                            "description": "Central Time (US & Canada), Mexico City"
                        }
                    },
                    "email": "onal.besok@example.com",
                    "login": {
                        "uuid": "d33727cf-2b6a-46c9-8805-c839db1f47f7",
                        "username": "angryfrog792",
                        "password": "loulou",
                        "salt": "jRANxYKY",
                        "md5": "27c9f6343871ec1515ad14f17f873636",
                        "sha1": "8542726fc21e4eb1901240e4e774ad6b0c94010f",
                        "sha256": "ddbc7c63e1165ddf04cefd5b5aba26c052f389d0883a3cf2eaea08b2a9aa4573"
                    },
                    "dob": {
                        "date": "1971-11-20T14:47:40.429Z",
                        "age": 49
                    },
                    "registered": {
                        "date": "2006-03-18T17:00:13.203Z",
                        "age": 14
                    },
                    "phone": "(861)-934-9488",
                    "cell": "(057)-322-9911",
                    "id": {
                        "name": "",
                        "value": null
                    },
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/men/56.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/men/56.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/56.jpg"
                    },
                    "nat": "TR"
                }
            ],
            "info": {
                "seed": "04cf26e6521e2121",
                "results": 1,
                "page": 1,
                "version": "1.3"
            }
        },
        {
            "results": [
                {
                    "gender": "female",
                    "name": {
                        "title": "Mrs",
                        "first": "Melike",
                        "last": "Örge"
                    },
                    "location": {
                        "street": {
                            "number": 4126,
                            "name": "Tunalı Hilmi Cd"
                        },
                        "city": "Mersin",
                        "state": "Kahramanmaraş",
                        "country": "Turkey",
                        "postcode": 16423,
                        "coordinates": {
                            "latitude": "4.0860",
                            "longitude": "146.8556"
                        },
                        "timezone": {
                            "offset": "-8:00",
                            "description": "Pacific Time (US & Canada)"
                        }
                    },
                    "email": "melike.orge@example.com",
                    "login": {
                        "uuid": "af726a69-15d9-4a98-81e1-36359fa634c6",
                        "username": "bigelephant476",
                        "password": "travis1",
                        "salt": "vZJOKHIf",
                        "md5": "3e32a5ba7c686f35a2ad47c77193d310",
                        "sha1": "c169ed91cef0aca560f673b9c8bfcf9aa03917b4",
                        "sha256": "18f176e5ada39478532aee70892ae72b29edad041b273bd8690a933cb7173142"
                    },
                    "dob": {
                        "date": "1957-09-01T02:32:17.435Z",
                        "age": 63
                    },
                    "registered": {
                        "date": "2008-10-11T13:45:06.687Z",
                        "age": 12
                    },
                    "phone": "(964)-227-3375",
                    "cell": "(689)-222-2177",
                    "id": {
                        "name": "",
                        "value": null
                    },
                    "picture": {
                        "large": "https://randomuser.me/api/portraits/women/60.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/women/60.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/60.jpg"
                    },
                    "nat": "TR"
                }
            ],
            "info": {
                "seed": "b4eb1386a33a8f24",
                "results": 1,
                "page": 1,
                "version": "1.3"
            }
        }
    ])

    const renderUsers = () => {
        return users.map((item) => (
            <TouchableOpacity key={item.results[0].phone} style={styles.usersItem} onPress={() => navigation.navigate("Profile", item)}>
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
                {renderUsers()}
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
