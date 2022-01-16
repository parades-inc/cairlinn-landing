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
                {/* <div className="join-us-form"> */}
                <Stack className="stack" spacing={1}>
                    <Typography className="join-us-text" variant="h1">
                        Join Us
                        <br />
                    </Typography>
                    <TextField id="fullWidth" label="EMAIL" variant="filled" defaultValue="EMAIL" />
                    <TextField id="fullWidth" defaultValue="DOB (MM/DD/YYYY)" />
                    <TextField id="fullWidth" defaultValue="ZIP CODE" />
                    <Button color="primary" variant={"contained"}>
                        GET NOTIFIED
                    </Button>
                </Stack>
                {/* </div> */}
            </Box>
        </div>
    );
};
/*
<Typography className="join-text" variant="h1">
                    Join Us
                    <br />
                </Typography>
*/
