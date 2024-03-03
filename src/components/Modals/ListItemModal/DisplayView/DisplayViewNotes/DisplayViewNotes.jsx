import React from 'react';
import './DisplayViewNotes.scss';

function DisplayViewNotes({ notes = [] }) {
  return (
    <div className="display-view-notes">
      {notes.map((note, i) => (
        <div
          role="button"
          key={`${i}-${note}`}
          className="display-view-note"
        >
          <span>
            -
            {note}
          </span>
        </div>
      ))}
    </div>
  );
}

export default DisplayViewNotes;
