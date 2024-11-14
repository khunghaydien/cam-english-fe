import { createTheme } from "@mui/material/styles";
export const getTheme = (mode: "dark" | "light") => {
    return createTheme({
        palette: {
            mode,
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        fontFamily: "GeistMonoVF, Arial, sans-serif",
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        fontFamily: "GeistMonoVF, Arial, sans-serif",
                        textTransform: "capitalize",
                        fontWeight: "bold",
                        minWidth: '100px '
                    },
                },
            },
            MuiMenu: {
                styleOverrides: {
                    paper: {
                        marginBottom: "0.25rem",
                        marginTop: "0.25rem",
                        paddingInline: "0.25rem",
                        "& li": {
                            borderRadius: "0.25rem",
                            marginBottom: "0.5rem",
                            "&:last-child": {
                                marginBottom: "unset",
                            },
                        },
                    },
                },
            },
            MuiAutocomplete: {
                styleOverrides: {
                    paper: {
                        width: "100%",
                        paddingInline: "0.25rem",
                    },
                    listbox: {
                        "& li": {
                            borderRadius: "0.25rem",
                            marginBottom: "0.5rem",
                            "&:last-child": {
                                marginBottom: "unset",
                            },
                        },
                    },
                },
            },
        },
    });
};