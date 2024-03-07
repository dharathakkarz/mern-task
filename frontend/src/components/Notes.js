import React, { useContext, useEffect } from 'react';
import noteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';


function Notes() {
  const context = useContext(noteContext);
  const { notes, getallNote } = context;
  useEffect(() => {
    console.log("useEffect in Notes component");
    getallNote();
  }, []);

  const updateNote =(note)=>{

  }

  return (
    <div>
      <AddNote />
      <div className='container my-3'>
        <h1>Your Notes</h1>
        {notes.map((note) => (
          <Noteitem key={note._id}  updateNote={updateNote} note={note} />
        ))}
      </div>
    </div>
  );
}

export default Notes;

// // Notes.js
// import React, { useContext, useEffect } from 'react';
// import noteContext from '../context/notes/NoteContext';
// import Noteitem from './Noteitem';
// import AddNote from './AddNote';

// function Notes() {
//   const context = useContext(noteContext);
//   const { notes, getallNote } = context;

//   useEffect(() => {
//     getallNote();
//   }, []);

//   console.log("Notes:", notes);

//   return (
//     <div>
//       <AddNote />
//       <div className='container my-3'>
//         <h1>Your Notes</h1>
//         {notes.map((note) => (
//           <Noteitem key={note._id} note={note} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Notes;

