// NoteState.js
import React, { useState, useEffect } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //get all notes
  const getallNote = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlODM5ZWE5MTRhZWFlZDlhNTU1ZGVkIn0sImlhdCI6MTcwOTcyMDMwOX0.N6R-OCLvX_-x3WRwae-48Wh2ED4QFBdLhx3rno6FS1c",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch notes. Status: ${response.status}`);
      }

      const json = await response.json();
      console.log('Response data:', json);
      setNotes(json);
    } catch (error) {
      console.error('Error fetching notes:', error.message);
    }
  };

  // add notes
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlODM5ZWE5MTRhZWFlZDlhNTU1ZGVkIn0sImlhdCI6MTcwOTcyMDMwOX0.N6R-OCLvX_-x3WRwae-48Wh2ED4QFBdLhx3rno6FS1c",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    console.log("Adding new notes");

    if (!response.ok) {
      console.error(`Failed to add note. Status: ${response.status}`);
      return;
    }

    const note = await response.json();
    setNotes([...notes, note]);
  };

  // delete notes
  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlODM5ZWE5MTRhZWFlZDlhNTU1ZGVkIn0sImlhdCI6MTcwOTcyMDMwOX0.N6R-OCLvX_-x3WRwae-48Wh2ED4QFBdLhx3rno6FS1c",
        },
      });

      if (!response.ok) {
        console.error(`Failed to delete note. Status: ${response.status}`);
        return;
      }

      const newNotes = notes.filter((note) => note._id !== id);
      setNotes(newNotes);
    } catch (error) {
      console.error('Error deleting note:', error.message);
    }
  };

  // edit notes
  const editNote = async (id, title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlODM5ZWE5MTRhZWFlZDlhNTU1ZGVkIn0sImlhdCI6MTcwOTcyMDMwOX0.N6R-OCLvX_-x3WRwae-48Wh2ED4QFBdLhx3rno6FS1c",
        },
        body: JSON.stringify({ title, description, tag }),
      });

      if (!response.ok) {
        console.error(`Failed to update note. Status: ${response.status}`);
        return;
      }

      await response.json();

      // Update the notes in state
      const updatedNotes = notes.map((note) =>
        note._id === id ? { ...note, title, description, tag } : note
      );
      setNotes(updatedNotes);
    } catch (error) {
      console.error('Error updating note:', error.message);
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getallNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;




// // NoteState.js
// import React, { useState, useEffect } from 'react';
// import NoteContext from './NoteContext';

// const NoteState = (props) => {
//   const host = "http://localhost:5000";
//   const [notes, setNotes] = useState([]);

//   useEffect(() => {
//     getallNote();
//   }, []);

//   const getallNote = async () => {
//     try {
//       const response = await fetch(`${host}/api/notes/fetchallnotes`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlODM5ZWE5MTRhZWFlZDlhNTU1ZGVkIn0sImlhdCI6MTcwOTcyMDMwOX0.N6R-OCLvX_-x3WRwae-48Wh2ED4QFBdLhx3rno6FS1c",
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to fetch notes. Status: ${response.status}`);
//       }

//       const json = await response.json();
//       setNotes(json);
//     } catch (error) {
//       console.error('Error fetching notes:', error.message);
//     }
//   };

//   const addNote = async (title, description, tag) => {
//     try {
//       const response = await fetch(`${host}/api/notes/addnotes`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlODM5ZWE5MTRhZWFlZDlhNTU1ZGVkIn0sImlhdCI6MTcwOTcyMDMwOX0.N6R-OCLvX_-x3WRwae-48Wh2ED4QFBdLhx3rno6FS1c",
//         },
//         body: JSON.stringify({ title, description, tag })
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to add note. Status: ${response.status}`);
//       }

//       const newNote = await response.json();
//       setNotes([...notes, newNote]);
//     } catch (error) {
//       console.error('Error adding note:', error.message);
//     }
//   };

//   const deleteNote = async (id) => {
//     try {
//      const response= await fetch(`${host}/api/notes/deletenotes/${id}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//           'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlODM5ZWE5MTRhZWFlZDlhNTU1ZGVkIn0sImlhdCI6MTcwOTcyMDMwOX0.N6R-OCLvX_-x3WRwae-48Wh2ED4QFBdLhx3rno6FS1c",
//         },
//       });

//       const json = response.json();
//       console.log(json)

//       console.log("deleted id" + id)
//       const newNotes = notes.filter((note)=>{return note._id !== id})
     

//     } catch (error) {
//       console.error('Error deleting note:', error.message);
//     }
//   };

//   const editNote = async (id, title, description, tag) => {
//     try {
//       await fetch(`${host}/api/notes/updatenotes/${id}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlODM5ZWE5MTRhZWFlZDlhNTU1ZGVkIn0sImlhdCI6MTcwOTcyMDMwOX0.N6R-OCLvX_-x3WRwae-48Wh2ED4QFBdLhx3rno6FS1c",
//         },
//         body: JSON.stringify({ title, description, tag })
//       });

//       const updatedNotes = notes.map((note) =>
//         note._id === id
//           ? { ...note, title, description, tag }
//           : note
//       );

//       setNotes(updatedNotes);
//     } catch (error) {
//       console.error('Error updating note:', error.message);
//     }
//   };

//   return (
//     <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getallNote }}>
//       {props.children}
//     </NoteContext.Provider>
//   );
// };

// export default NoteState;
