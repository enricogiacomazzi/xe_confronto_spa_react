

export const getHash = (value: string) => {
    var hash = 0;
    if (value.length > 0) {
        for (var i = 0; i < value.length; i++) {
            var char = value.charCodeAt(i);
            hash = ((hash<<5)-hash)+char;
            hash = hash & hash; // Convert to 32bit integer
        }
    }

    return hash.toString();
}
