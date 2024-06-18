import { FlatList, View, StyleSheet, Text } from "react-native";
import CardComponent from '../components/Card';
import ImageComponent from '../components/Image';
import { Card } from "../types";
import { formatCardPrefix } from "../utils";

interface CardListContainerProps {
    cards: Card[]
}

const brandImageMapper: { [key: string]: string } = {
    "Visa": require("../assets/visa_brand.png"),
    "Jcb": require("../assets/jcb_brand.png"),
    "Mastercard": require("../assets/mastercard_brand.png"),
}

const CardNumberComponent = ({ last_digits }: { last_digits: string }) => {
    const cardPrefix = formatCardPrefix()
    return (<View style={styles.cardNumber}>
        <Text style={styles.dot}>{cardPrefix}</Text>
        <Text> {last_digits}</Text>
    </View>)
}

const CardListContainer = ({ cards }: CardListContainerProps) => {
    const renderCard = ({ item }: { item: Card }) => (
        <CardComponent header={<ImageComponent imageSource={brandImageMapper[item.brand]} imageStyle={styles.image} />}
            body={<View>
                <CardNumberComponent last_digits={item.last_digits} />
                <View style={styles.infoContainer}>
                    <View>
                        <Text style={styles.subLabel}>
                            Name on Card
                        </Text>
                        <Text style={styles.data}>
                            {item.name}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.subLabel}>
                            Expires
                        </Text>
                        <Text style={styles.data}>
                            {item.expiration_month}/{item.expiration_year}
                        </Text>
                    </View>
                </View>
            </View>}>
        </CardComponent>
    );

    return (<FlatList
        data={cards}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
    />)
}

const styles = StyleSheet.create({
    infoContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        letterSpacing: 2
    },
    image: {
        width: 75,
        height: 30
    },
    cardNumber: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 16,
    },
    dot: { fontWeight: "bold", fontSize: 30, lineHeight: 24, textAlign: "center", color: "#808080", },
    last_digits: { lineHeight: 24, fontSize: 18, marginLeft: 4, color: "#808080", },
    subLabel: {
        fontSize: 10,
        color: "#8F8F8F",
        marginVertical: 10
    },
    data: {
        fontSize: 13,
    }
})

export default CardListContainer;