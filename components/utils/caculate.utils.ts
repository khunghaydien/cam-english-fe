export const convertEnumToOption = (enumObj: Record<string, string>) => {
    return Object.entries(enumObj).map(([key, value]) => ({
        value: value,
        label: key
            .split('_')
            .map(word => word.charAt(0) + word.slice(1).toLowerCase())
            .join(' '),
    }));
};

export const capitalizeWords = (input: string) => {
    if (!input) return '';

    return input
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}