export const convertEnumToOption = (enumObj: Record<string, string>) => {
    return Object.entries(enumObj).map(([key, value]) => ({
        value: value,
        label: key
            .split('_')
            .map(word => word.charAt(0) + word.slice(1).toLowerCase())
            .join(' '),
    }));
};