import React from 'react';
import { View, ImageBackground, Text, StyleSheet, Platform } from 'react-native';

const getType = (type: string) => {
    switch (type.toLowerCase()) {
        case "electric":
            return { borderColor: "#FFD700", emoji: "⚡︎" };
        case "water":
            return { borderColor: "#6493EA", emoji: "💧" };
        case "fire":
            return { borderColor: "#FF5733", emoji: "💥" };
        case "grass":
            return { borderColor: "#66CC66", emoji: "🌿" };
        default:
            return { borderColor: "#A0A0A0", emoji: "❓" };
    }
};

export default function PokemonCard({
    name,
    image,
    type,
    hp,
    moves,
    weaknesses
}) {
    const { borderColor, emoji } = getType(type);
    return (
        <View style={styles.card}>
            <View style={styles.nameCont}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hp}>❤️{hp}</Text>
            </View>
            <ImageBackground
                style={styles.imageBackground}
                imageStyle={styles.image}
                source={image}
            >
                <View style={styles.whiteBackground} />
            </ImageBackground>
            <View style={styles.typeCont}>
                <View style={[styles.badge, { borderColor }]}>
                    <Text style={styles.emojiType}>{emoji}</Text>
                    <Text style={styles.TextType}>{type}</Text>
                </View>
            </View>
            <View style={styles.movesCont}>
                <Text style={styles.movesText}>Move: {moves.join(" ,  ")}</Text>
            </View>
            <View style={styles.movesCont}>
                <Text style={styles.movesText}>Weakness: {weaknesses.join(" ,  ")}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        borderWidth: 2,
        margin: 16,
        padding: 16,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 2 },
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4
            },
            android: {
                elevation: 5,
            }
        })
    },
    nameCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 32
    },
    name: {
        fontSize: 30,
        fontWeight: "bold"
    },
    hp: {
        fontSize: 23
    },
    imageBackground: {
        width: "100%",
        height: 200,
        marginBottom: 16,
        backgroundColor: 'white',
    },
    image: {
        resizeMode: 'contain'
    },
    typeCont: {
        marginBottom: 40,
        alignItems: 'center'
    },
    badge: {
        flexDirection: 'row',
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 4
    },
    emojiType: {
        fontSize: 30,
        marginRight: 12
    },
    TextType: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    movesCont: {
        marginBottom: 16,
    },
    movesText: {
        fontSize: 22,
        fontWeight: 'bold'
    }
});
