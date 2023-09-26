import React, { useState } from 'react'
import TakeNote from '../Notes/takeanote'
import Header from '../header/headerbar'
import Navdrawer from '../navdrawer/navdrawer'

import { Box } from '@mui/material'


export default function Dashboard() {

    const [drawerToggle, setDrawerToggle] = useState(false)
    const [noteOption, setNoteOption] = useState("Notes")

    const listenToHeader = () => {
        setDrawerToggle(!drawerToggle)
    }

    const listenToDrawer = (options) => {
        setNoteOption(options)
    }

    return (
        <Box >
            <Header listenToHeader={listenToHeader}></Header>
            <Navdrawer drawerToggle={drawerToggle} listenToDrawer={listenToDrawer}></Navdrawer>
            <div>
                <TakeNote></TakeNote>
            </div>
        </Box>
    )

}

