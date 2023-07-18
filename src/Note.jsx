import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={(event)=>{
        props.onDelete(props.id);
        event.preventDefault();
      }}>
      <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;