'use client'

// import { AppBar, Toolbar, Typography, CssBaseline } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import CssBaseline from "@mui/material/CssBaseline"

// import { makeStyles } from '@mui/styles'


// const useStyles = makeStyles((theme) => ({
//     appBar: {
//         borderBottom: `1px solid ${theme.palette}`,
//     }
// }))

const Header = () => {
    // const classes = useStyles();
    return (
        <>
            <CssBaseline />

            <AppBar
                color="white"
                position="static"
                elevation={0}
            // className={classes.appBar}
            >

                <Toolbar>

                    <Typography variant="h6" color='inherit' noWrap></Typography>

                </Toolbar>

            </AppBar>

        </>
    )
}

export default Header
