import React, { useState } from 'react';
import {settings} from "../../settings.tsx";
import {Note} from "../../interfaces/note.interface.tsx";

function FormComponent() {
  const [content, setContent] = useState('');

  const submitAction = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const note: Note = { id: 0, content };

    fetch(`${settings.API}/notes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note)
    }).then(() => {
      setContent('');
    })
  };

  return (
    <form onSubmit={submitAction}>
      <input type="text" value={content} onChange={(event) => setContent(event.target.value)} />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default FormComponent;
