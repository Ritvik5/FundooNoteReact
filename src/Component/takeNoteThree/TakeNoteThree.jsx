import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import { ArchiveOutlined, ColorLensOutlined, DeleteForeverOutlined, ImageOutlined, NotificationsOutlined, PushPinOutlined } from '@mui/icons-material';
import { archivedNotes } from '../../Service/NoteService';
import { trashNotes } from '../../Service/NoteService';
import { deleteNotes } from '../../Service/NoteService';

export default function TakeNoteThree(props) {
  console.log(props);

  const archivedNote = (id) => {
    let archivedObj = {
      noteId: id,
    }
    console.log(archivedObj)
    archivedNotes(archivedObj)
      .then((response) => {
        props.autoRefresh()
        console.log(response)
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  const trashNote = (id) => {
    let trashNoteObj = {
      noteId: id,
    }

    console.log(trashNoteObj)
    trashNotes(trashNoteObj).then((response) => {
      props.autoRefresh()
      console.log(response)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const deleteNote = (id) => {
    let deleteNoteObj = {
      noteId: id,
    }

    console.log(deleteNoteObj);
    deleteNotes(deleteNoteObj).then((response) => {
      props.autoRefresh()
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })

  }

  return (


    // <div  onClick={handleOpenNote2}> {opennote2?<div style={{position:'absolute'}}> <TakeNote2 /></div>:""}
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'left',
          '& > :not(style)': {
            m: 1,
            width: 250,
            height: 'auto',
          },
        }}
      >
        <Paper elevation={3} >
          <div >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'row' }}>
              <div style={{ margin: '2ch' }}>
                <h3>{props.note.title}</h3>
                <p>{props.note.description}</p>
              </div >
              <IconButton>
                <PushPinOutlined />
              </IconButton>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
              <IconButton> <NotificationsOutlined /></IconButton>

              <IconButton aria-label="Color">
                <ColorLensOutlined />
              </IconButton>
              <IconButton aria-label="Image">
                <ImageOutlined />
              </IconButton>
              <IconButton aria-label="Archive" onClick={()=>{ archivedNote(props.note.noteId)}} >
                <ArchiveOutlined />
              </IconButton>
              <IconButton aria-label="More Options " onClick={()=> { props.note.isTrash === true ? deleteNote(props.note.noteId) : trashNote(props.note.noteId)} } >
                <DeleteForeverOutlined />
              </IconButton>
            </div>
          </div>
        </Paper>

        {/* {open &&(
          <div>
          <IconButton aria-label="Delete" onClick={handleDelete}>
            <Paper sx={{width:'15ch',height:'3ch', position:'absolute', fontSize:'1.3ch',textAlign:'center'}}>
              <p>Delete Note</p></Paper>
          </IconButton>
        </div> */}

      </Box>
    </div>
  );
}