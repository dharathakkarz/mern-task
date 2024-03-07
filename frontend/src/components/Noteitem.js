import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardSubtitle, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import noteContext from '../context/notes/NoteContext';

const Noteitem = ({ note }) => {
  console.log('Noteitem rendered with note:', note);

  const context = React.useContext(noteContext);
  const { deleteNote } = context;


  return (
    <Row>
      <Col md='3'>
        <Card style={{ width: '18rem' }} className='mb-3'>
          <CardBody>
            <CardTitle tag="h5">{note.title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Note Description
            </CardSubtitle>
            <CardText>{note.description}</CardText>
            <FontAwesomeIcon className='mx-2' onClick={()=>{deleteNote(note._id)}} icon={faTrash} />
            <FontAwesomeIcon  className='mx-2' icon={faEdit} />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Noteitem;

// // Noteitem.js
// import React from 'react';
// import { Card, CardBody, CardTitle, CardText, CardSubtitle, Row, Col } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
// import noteContext from '../context/notes/NoteContext';

// const Noteitem = ({ note }) => {
//   const context = React.useContext(noteContext);
//   const { deleteNote } = context;

//   return (
//     <Row>
//       <Col md='3'>
//         <Card style={{ width: '18rem' }} className='mb-3'>
//           <CardBody>
//             <CardTitle tag="h5">{note.title}</CardTitle>
//             <CardSubtitle className="mb-2 text-muted" tag="h6">
//               Note Description
//             </CardSubtitle>
//             <CardText>{note.description}</CardText>
//             <FontAwesomeIcon className='mx-2' onClick={() => { deleteNote(note._id) }} icon={faTrash} />
//             <FontAwesomeIcon className='mx-2' icon={faEdit} />
//           </CardBody>
//         </Card>
//       </Col>
//     </Row>
//   );
// };

// export default Noteitem;

