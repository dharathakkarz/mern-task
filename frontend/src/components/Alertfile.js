import React from 'react'
import { Alert } from 'reactstrap';


const Alertfile = (props) => {
  return (
    <div>
       <Alert color="primary">
 {props.message}
</Alert>
    </div>
  )
}

export default Alertfile
