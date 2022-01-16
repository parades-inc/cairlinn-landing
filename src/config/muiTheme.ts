import { CenterFocusStrong } from "@mui/icons-material";
import createTheme from "@mui/material/styles/createTheme";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#327371",
        },
    },
    typography: {
        allVariants: {
            color: "#FAF7ED",
            fontFamily: ["'CitrusGothicSolid-Regular'", "'DIN Condensed'", "Roboto"].join(","),
            padding: 0,
        },
    },
    components: {
        // Name of the component
        MuiButton: {
            styleOverrides: {
                root: {
                    color: "#FAF7ED",
                    fontSize: 24,
                    padding: "16px 20px 8px 20px",

                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontFamily: ["'DIN Condensed'"].join(","),
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    label: "outlined",
                    variant: "outlined",
                    // input text needs to be centered
                    // input text needs to be white
                    // input text needs to not be impacted by opaqueness
                    backgroundColor: "grey", // needs to be black but then text doesnt appear
                    opacity: 0.4,
                },

                // input: {}, // this causes errors?
                // FilledInput: {} // same here
            },
        },
    },
});
