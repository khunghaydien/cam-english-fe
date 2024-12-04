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

export const isChangeValues = (inititalValues: any, currentValues: any) => {
    const isChange =
        JSON.stringify(inititalValues) != JSON.stringify(currentValues);
    return { isChange };
};

export const getTextEllipsis = (
    text: any,
    maxEllipsis?: number | undefined
) => {
    const _maxEllipsis = maxEllipsis || 40
    let _text = text?.toString() || ''
    const indexBreakLine = _text.indexOf('\n')
    if (indexBreakLine > -1) {
        _text = `${text?.slice(0, indexBreakLine)}`
    }
    if (_text?.length < _maxEllipsis && indexBreakLine > -1) {
        return `${_text}...`
    } else if (_text?.length < _maxEllipsis && indexBreakLine === -1) {
        return _text
    }
    if (_text.length === _maxEllipsis) return _text
    return `${_text?.slice(0, _maxEllipsis)}...`
}