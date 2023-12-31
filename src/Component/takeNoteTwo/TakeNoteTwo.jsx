
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Button, IconButton } from '@mui/material';
import { AddNote } from '../../Service/NoteService';
import { ArchiveOutlined, ColorLensOutlined, ImageOutlined, MoreVertOutlined, NotificationAddOutlined, PushPinOutlined, RedoOutlined, UndoOutlined } from '@mui/icons-material';



export default function TakeNoteTwo(props) {
    const [data, setData] = useState({
        title: '',
        description: '',
        bgColor: '',
        isArchive: false,
        isTash: false,
    });

    const getTitle = (e) => {
        setData(prevState => ({
            ...prevState,
            title: e.target.value
        }))
    }

    const getDescription = (e) => {
        setData(prevState => ({
            ...prevState,
            description: e.target.value
        }))
    }

    const archivedNote = (e) => {
        setData(prevState => ({
            ...prevState,
            isArchive: true,
        }))
        console.log("Note is added to Archived");
    }

    // const trashNote = (e) => {
    //     setData(prevState => ({
    //         ...prevState,
    //         isTash: true,
    //     }))
    //     console.log("Note is added to Trash.")
    // }

    const submitData = () => {
        AddNote(data)
            .then((response) => {
                console.log(response)
                props.autoRefresh()
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: '10px',

                }}

            >

                <Paper

                    sx={{
                        width: '80ch',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left',
                        padding: '1ch',
                        borderRadius: '10px',
                        boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)', // Add a thicker box shadow here
                        border: 'none',// Remove the border from the Paper
                    }}
                >
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '10px', // Add some margin for spacing
                    }}>
                        <TextField
                            required
                            variant='standard'
                            placeholder="Title..."
                            // value={input.title}
                            onChange={getTitle}
                            InputProps=
                            {{
                                disableUnderline: true,
                                style: {
                                    border: 'none',
                                    outline: 'none',
                                    width: '100%',
                                    textDecoration: 'none',
                                },
                            }}

                        /
                        ><IconButton aria-label="Pin Note">
                            <PushPinOutlined />
                        </IconButton>
                    </div>
                    <TextField
                        multiline
                        required
                        variant='standard'
                        placeholder="Take a note..."

                        onChange={getDescription}
                        InputProps={{
                            disableUnderline: 'true',
                            style: {
                                border: 'none',
                                outline: 'none',
                                width: '100%',
                            },
                        }}
                    />
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            rowGap: '0.5px',
                        }}
                    >
                        <IconButton aria-label="Add Notification">
                            <NotificationAddOutlined />
                        </IconButton>
                        <IconButton aria-label="Color" >
                            <ColorLensOutlined />
                        </IconButton>
                        <IconButton aria-label="Image">
                            <ImageOutlined />
                        </IconButton>
                        <IconButton aria-label="Archive" onClick={archivedNote}>
                            <ArchiveOutlined />
                        </IconButton>
                        <IconButton aria-label="More Options">
                            <MoreVertOutlined />
                        </IconButton>
                        <IconButton aria-label="Undo">
                            <UndoOutlined />
                        </IconButton>
                        <IconButton aria-label="Redo">
                            <RedoOutlined />
                        </IconButton>


                        <Button
                            type="submit"
                            onClick={() => {
                                if (data.title !== "") {
                                    submitData();
                                }
                                props.handleToggle();
                            }}
                            style={{ border: 'none', backgroundColor: 'none', color: 'grey', textTransform: 'lowercase', fontWeight: 'bolder' }}

                        >
                            Close
                        </Button>

                    </div>

                </Paper>

            </Box>

            {/* )} */}

        </>
    );

}