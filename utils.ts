const CARD_NUMBER_PREFIX = "."
const CARD_PREFIX_LENGTH = 12;
const CARD_PREFIX_BREAK = 4;


export function formatCardPrefix() {
    let formattedCardNumber = "";
    for (let i = 0; i < CARD_PREFIX_LENGTH; i++) {
        formattedCardNumber = formattedCardNumber + `${(i + 1) % CARD_PREFIX_BREAK == 0 ? CARD_NUMBER_PREFIX + "    " : CARD_NUMBER_PREFIX}`
    }

    return formattedCardNumber;
}