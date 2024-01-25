import React from 'react';
import './DisplayViewNotes.scss';
import { copyToClipboard } from '../../../../../utils';

function DisplayViewNotes({ notes = [] }) {
  return (
    <div className="display-view-notes">
      {notes.map((note, i) => (
        <div
          role="button"
          key={`${i}-${note}`}
          className="display-view-note"
          onClick={() => copyToClipboard(note)}
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
