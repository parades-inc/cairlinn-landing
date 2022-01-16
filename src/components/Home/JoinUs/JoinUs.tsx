import { FC } from "react";
import "./joinUs.css";
import joinUsImage from "../../../assets/images/joinUsImage.png";
import { Box, Button, Stack, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { TextField } from "@mui/material";

export const JoinUs: FC = () => {
    return (
        <div id="joinUs">
            <Box className="join-us-container">
                <img src={joinUsImage} />

                <Stack className="stack" spacing={1}>
                    <Typography className="join-us-text" variant="h1">
                        Join Us
                        <br />
                    </Typography>
                    <TextField id="outlined-textarea" label="Email" placeholder="Email" multiline />
                    <TextField
                        id="outlined-textarea"
                        label="DOB (MM/DD/YYYY)"
                        placeholder="DOB (MM/DD/YYYY)"
                        multiline
                    />
                    <TextField
                        id="outlined-textarea"
                        label="ZIP CODE"
                        placeholder="ZIP CODE"
                        multiline
                    />
                    <Button color="primary" variant={"contained"}>
                        GET NOTIFIED
                    </Button>
                </Stack>
            </Box>
        </div>
    );
};
