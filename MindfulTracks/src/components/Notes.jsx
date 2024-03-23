import React, { useState } from 'react';
import '../Notes.css'; // Import your custom CSS

function Notes() {
  const [noteText, setNoteText] = useState("");

  const handleTextChange = (event) => {
    setNoteText(event.target.value);
  };

  return (
    <div className="notes-container mt-">
      <textarea
        className="notes-textarea"
        value={noteText}
        onChange={handleTextChange}
        placeholder="Start typing your notes here..."
        wrap="soft"
      />
    </div>
  );
}

export default Notes;
