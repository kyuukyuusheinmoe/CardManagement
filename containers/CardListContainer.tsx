import { FlatList, View, StyleSheet, Text } from "react-native";
import CardComponent from '../components/Card';
import ImageComponent from '../components/Image';
import { Card } from "../types";
import { formatCardNumber } from "../utils";

interface CardListContainerProps {
    cards: Card[]
}

const brandImageMapper: { [key: string]: string } = {
    "Visa": require("../assets/visa_brand.png"),
    "Jcb": require("../assets/jcb_brand.png"),
    "Mastercard": require("../assets/mastercard_brand.png"),
}

const CardListContainer = ({ cards }: CardListContainerProps) => {
    const renderCard = ({ item }: { item: Card }) => (
        <CardComponent header={<ImageComponent imageSource={brandImageMapper[item.brand]} imageStyle={styles.image} />}
            body={<View>
                <View><Text style={styles.cardNumber}>{formatCardNumber(item.last_digits)}</Text></View>
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
        justifyContent: "space-between"
    },
    image: {
        width: 75,
        height: 30
    },
    cardNumber: { fontSize: 18, marginVertical: 16, color: "#808080", fontWeight: "bold" },
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