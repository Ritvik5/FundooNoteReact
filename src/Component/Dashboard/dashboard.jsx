import React, { useState, useEffect } from 'react'
import Header from '../header/headerbar'
import Navdrawer from '../navdrawer/navdrawer'
import TakeNoteOne from '../takeNoteOne/TakeNoteOne'
import TakeNoteTwo from '../takeNoteTwo/TakeNoteTwo'
import TakeNoteThree from '../takeNoteThree/TakeNoteThree'
import { getNote } from '../../Service/NoteService'

import { Box } from '@mui/material'


export default function Dashboard() {

    const [drawerToggle, setDrawerToggle] = useState(false);

    const [showNoteTwo, setShowNoteTwo] = useState(true);

    const [notList, setNoteList] = useState([]);

    const [noteOption, setNoteOption] = useState("Notes");


    const listenToDrawer = (options) => {
        setNoteOption(options)
    }



    const listenToHeader = () => {
        setDrawerToggle(!drawerToggle)
    };

    const handleToggle = () => {
        setShowNoteTwo(!showNoteTwo)
    };

    const fetchData = async () => {
        // let response = await getNote();
        // console.log(response);

        getNote()
            .then((response) => {
                let filterNote = []
                console.log('notes', response.data.result);
                let arr = response.data.result;
                if (noteOption === 'Notes') {
                    filterNote = response.data.result.filter((note) => {
                        if (note.isArchive === false && note.isTrash === false) {
                            return note
                        }
                    })

                }
                else if (noteOption === 'Archive') {
                    filterNote = response.data.result.filter((note) => {
                        if (note.isArchive === true && note.isTrash === false) {
                            return note
                        }
                    })
                }
                else if (noteOption === 'Trash') {
                    filterNote = response.data.result.filter((note) => {
                        if (note.isArchive === false && note.isTrash === true) {
                            return note
                        }
                    })
                }
                console.log(response)
                setNoteList(filterNote);
            })
            .catch((error) => {
                console.log(error);
            })
    };

    useEffect(() => {
        console.log("Data called");
        fetchData();
    }, [noteOption]);

    const autoRefresh = () => {
        fetchData()
    }

    return (
        <Box >
            <Header listenToHeader={listenToHeader} ></Header>
            <Navdrawer drawerToggle={drawerToggle} listenToDrawer={listenToDrawer} setNoteOption={setNoteOption}></Navdrawer>
            <div>
                {
                    showNoteTwo ? <TakeNoteOne handleToggle={handleToggle}></TakeNoteOne> : <TakeNoteTwo autoRefresh={autoRefresh} handleToggle={handleToggle}></TakeNoteTwo>
                }
            </div>
            <div style={{
                display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', width: '80vw',
                height: 'auto',
                position: 'relative',
                top: '60px',
                left: '9%',
                marginLeft: '20px'
            }} >

                {
                    notList.map((note) => (<TakeNoteThree autoRefresh={autoRefresh} key={note.id} note={note} />))
                }
            </div>

        </Box>
    )

}

