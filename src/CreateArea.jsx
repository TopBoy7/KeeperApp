import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';



function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isClicked, setClick] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isClicked === true ? <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null}
        
        <textarea
          name="content"
          onChange={handleChange}
          onClick={() => { setClick(true); }}
          value={note.content}
          placeholder="Take a note..."
          rows={isClicked === false ? 1 : 3}
        />
        <Zoom in={isClicked === true ? true : false}>
        <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
