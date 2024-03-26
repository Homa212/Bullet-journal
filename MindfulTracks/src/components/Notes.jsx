import React, { useState } from 'react';
import '../Notes.css'; // Import your custom CSS

function Notes({ notes, handleChange }) {
  // const [noteText, setNoteText] = useState("");

  // const handleTextChange = (event) => {
  //   setNoteText(event.target.value);
  // };

  return (
    <div className="notes-container ">
      <textarea
       className="notes-textarea"
       value={notes}
       onChange={handleChange}
       id="notes" // Make sure to provide an 'id' that matches the state property
       placeholder="Start typing your notes here..."
       wrap="soft"
      />
    </div>
  );
}

export default Notes;
