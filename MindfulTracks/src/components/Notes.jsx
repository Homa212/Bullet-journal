import React, { useState } from 'react';
// import '../Notes.css'; // Import your custom CSS

function Notes({ notes, handleChange }) {
  // const [noteText, setNoteText] = useState("");

  // const handleTextChange = (event) => {
  //   setNoteText(event.target.value);
  // };

  return (
    <div className="relative h-64">
      <div className="absolute inset-0 z-10 " style={{ pointerEvents: 'none' }}>
        {Array.from({ length: 9 }, (_, i) => (
            <div key={i} className="h-7 border-b border-gray-200" />
        ))}
      </div>
      <textarea
       className="notes-textarea z-0 h-full resize-none inset-0 outline-none"
       value={notes}
       onChange={handleChange}
       style={{ overflowY: 'hidden' }}
       id="notes" // Make sure to provide an 'id' that matches the state property
       placeholder="Start typing your notes here..."
       wrap="soft"
      />
    </div>
  );
}

export default Notes;
