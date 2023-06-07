function isID(text) {
    // ID pattern: 8 characters
    const characters = '0123456789@$ABCDEFGH!-abcdefghijklmnopqrstuvwxyz';
    const length = 8;

    // Check if the text has the correct length
    if (text.length !== length) {
        return false;
    }

    // Check if each character in the text is from the allowed characters
    for (let i = 0; i < length; i++) {
        if (!characters.includes(text[i])) {

            return false;
        }
    }

    return true;
}
export default isID