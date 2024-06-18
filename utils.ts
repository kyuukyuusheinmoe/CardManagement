export function formatCardNumber(lastFourDigits: string) {
    // Split the card number into parts for formatting
    const firstPart = Array(12).fill(".").join("") // First 12 digits

    // Create a string with dots and spaces for the first 12 digits
    let formattedCardNumber = firstPart.replace(/.{4}/g, (match, index) => {
        return index === 0 ? match : '    ' + match;
    });

    // Append the last four digits
    formattedCardNumber += ' ' + lastFourDigits;

    return formattedCardNumber;
}