export const StringUtils = {
    capitalize: (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    },
    decapitalize: (s) => {
        return s[0].toLowerCase() + s.slice(1);
    },

    removeExtraSpaces: (s) => {
        return s.replace(/\s+/g, ' ').trim();
    },

    uuid: () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
