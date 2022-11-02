function textConversion(text, len) {
    if (!text?.length) {
        return ""
    }
    if (text.includes('.') && text.length >= len) {
        const sliptText = text.split('.')
        const sortText = sliptText.map(single => single.toUpperCase().slice(0, 1));
        const main = sortText.join(".")
        if (main.length >= len) {
            return main.split('.').slice(0, len / 2).join('.')
        }
        return main
    }
    if (text.length >= len) {
        const sliptText = text.split(' ')
        if (sliptText.length === 1) {
            return text.slice(0, len - 3) + '...'
        }
        const sortText = sliptText.slice(1, len).map(single => single.toUpperCase().slice(0, 1));
        const mainText = [sliptText[0], ...sortText]
        return textConversion(mainText.join("."), len)
    }
    return text;

}
export default textConversion;