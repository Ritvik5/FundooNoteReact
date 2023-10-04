import {React, useState}  from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { BrushOutlined, CheckBoxOutlined, ImageOutlined } from '@mui/icons-material';

export default function TakeNoteOne({handleToggle}) {

    return (

        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '10px',
                '& > :not(style)': {
                    m: 1,
                    width: '75ch',
                    height: '5ch',
                },
            }}
        >
            <Paper elevation={3} onClick={handleToggle}>
                <div
                    style={{
                        cursor: 'text',
                        margin: '1ch',
                        color: 'grey',
                        fontSize: '2ch',
                        display: 'flex',
                        justifyContent: 'space-between',

                    }}

                >

                    Take a Note...
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        rowGap: '0.5px',
                    }}>
                        <CheckBoxOutlined style={{ marginRight: '3ch' }} />
                        <BrushOutlined style={{ marginRight: '3ch' }} />
                        <ImageOutlined />
                    </div>
                </div>



            </Paper>
        </Box>
    );
}