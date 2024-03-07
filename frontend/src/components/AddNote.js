import React, { useContext } from 'react';
import noteContext from '../context/notes/NoteContext';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = React.useState({ title: "", description: "", tag: "default" });

    const handleSubmit = (e) => {
        e.preventDefault(); 
        addNote(note.title, note.description, note.tag);
      
        setNote({ title: "", description: "", tag: "" });
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <div className='container my-3'>
                <h1>Add A Note</h1>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input id="title" name="title" type="text" onChange={onChange} value={note.title} />
                        
                        <Label for="description">Description</Label>
                        <Input id="description" name="description" type="text" onChange={onChange} value={note.description} />
                        
                        <Label for="tag">Tag</Label>
                        <Input id="tag" name="tag" type="text" onChange={onChange} value={note.tag} />
                    </FormGroup>
                    <Button type='submit' color='primary'>
                       Add
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddNote;




// // AddNote.js
// import React, { useContext } from 'react';
// import noteContext from '../context/notes/NoteContext';
// import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

// const AddNote = () => {
//   const context = useContext(noteContext);
//   const { addNote } = context;

//   const [note, setNote] = React.useState({ title: "", description: "", tag: "default" });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addNote(note.title, note.description, note.tag);
//     setNote({ title: "", description: "", tag: "" });
//   };

//   const onChange = (e) => {
//     setNote({ ...note, [e.target.name]: e.target.value });
//   };

//   return (
//     <div>
//       <div className='container my-3'>
//         <h1>Add A Note</h1>
//         <Form onSubmit={handleSubmit}>
//           <FormGroup>
//             <Label for="title">Title</Label>
//             <Input id="title" name="title" type="text" onChange={onChange} value={note.title} />

//             <Label for="description">Description</Label>
//             <Input id="description" name="description" type="text" onChange={onChange} value={note.description} />

//             <Label for="tag">Tag</Label>
//             <Input id="tag" name="tag" type="text" onChange={onChange} value={note.tag} />
//           </FormGroup>
//           <Button type='submit' color='primary'>
//             Add
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default AddNote;
