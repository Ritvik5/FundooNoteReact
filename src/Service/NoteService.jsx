import axios from 'axios'

// function Authentication() {
//     headerConfig = {
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${localStorage.getItem("token")}`
//         }
//     }
// }


// export const getNote = async () =>{
//     console.log(headerConfig);
//     let response = await axios.get("https://localhost:44383/api/Note/get",headerConfig)

//     console.log(response);
//         return response;
// }

export const AddNote = async (addNoteObj) => {
    let response = await axios.post("https://localhost:44383/api/Note/create", addNoteObj, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    });
    return response;
}

export const getNote = async () => {
    // let response = axios.get("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",headerConfig)
    let response = await axios.get("https://localhost:44383/api/Note/get", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    })
    return response
}

export const archivedNotes = (archiveNoteObj) => {
    console.log('id', archiveNoteObj.noteId);
    let response = axios.put(`https://localhost:44383/api/Note/Archive?noteId=${archiveNoteObj.noteId}`, archiveNoteObj.noteId, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    })
    return response;
}

export const trashNotes = (trashNoteObj) => {
    let response = axios.put(`https://localhost:44383/api/Note/Trash?noteId=${trashNoteObj.noteId}`, trashNoteObj, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    })
    return response;
}

export const deleteNotes = async (deleteNoteObj) => {
    let response = await axios.delete(`https://localhost:44383/api/Note?noteId=${deleteNoteObj.noteId}`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    })
    return response;
}
