export const AddCardComponents = [{
    name: "number",
    label: "ATM/Debit/Credit card number",
    placeholder: "0000 0000 0000 0000",
    width: "100%",
    keyboardType: "numeric",
    format: /(\d{4})(?=\d)/g,
    replacement: '$1 '
}, {
    name: "name",
    label: "Name on Card",
    placeholder: "Ty Lee",
    width: "100%"
}, {
    name: "expiryDate",
    label: "Expiry date",
    placeholder: "MM/YY",
    width: "50%",
    keyboardType: "numeric",
    format: /^(\d{2})(?!$|\/)/,
    replacement: '$1/'
}, {
    name: "security_code",
    label: "CVV",
    width: "50%",
    keyboardType: "numeric"
}]