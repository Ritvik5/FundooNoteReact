import React from "react";
import { useTheme } from "@mui/material/styles";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { InputBase, Box, Typography,useMediaQuery } from "@mui/material";
import fundooLogo from '../../Assets/FundooNotes.png'

export default function Header(props) {

    const openDrawer = () => {
        props.listenToHeader();
    };

    const theme = useTheme();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                height: '68px',
                width: '100%',
                border: '1px solid gray',
                borderColor: '#e0e0e0',
                boxShadow: '0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/15%)',
                position: 'fixed',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    height: '90%',
                    width: '18%',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '80%',
                        width: '20%',
                        marginLeft: 1,
                    }}
                >
                    <MenuSharpIcon onClick={openDrawer} />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        width: '10%',
                    }}

                >
                    <img src={fundooLogo} alt="Fundoo Logo" width={30} height={30} style={{ marginRight: '10px' }} />
                    {!isSmallScreen && (
                        <Typography variant="h6">Fundoo</Typography>
                    )}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        fontSize: '24px',
                        height: '80%',
                        width: '40%',
                    }}
                >
                    <span>{props.label}</span>
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    fontSize: '20px',
                    height: '75%',
                    width: '52%',
                    border: '1px solid lightgray',
                    borderRadius: '10px',
                    padding: '15px',
                    backgroundColor: 'lightgray',
                }}
            >
                <SearchOutlinedIcon />
                <InputBase
                    sx={{
                        border: 'none',
                        outline: 'none',
                        height: '85%',
                        width: '70%',
                        paddingLeft: 10,
                    }}
                    type="text"
                    placeholder="Search"
                />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    flexDirection: 'row',
                    height: '95%',
                    width: '28%',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '24px',
                        height: '90%',
                        width: '10%',
                    }}
                >
                    <RefreshOutlinedIcon />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '24px',
                        height: '90%',
                        width: '15%',
                    }}
                >
                    <ViewAgendaOutlinedIcon />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        fontSize: '24px',
                        height: '90%',
                        width: '18%',
                    }}
                >
                    <SettingsOutlinedIcon />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '24px',
                        height: '90%',
                        width: '13%',
                    }}
                >
                    <AppsOutlinedIcon />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '24px',
                        height: '90%',
                        width: '18%',
                    }}
                >
                    <AccountCircleOutlinedIcon />
                </Box>
            </Box>
        </Box>
    );
}
