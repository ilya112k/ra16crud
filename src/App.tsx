import { useState } from 'react'
import NoteListComponent from './components/note-list/note-list.component.tsx'
import FormComponent from './components/form/form.component.tsx'
import RefreshButtonComponent from './components/buttons/refresh-button.component.tsx'
import {Note} from "./interfaces/note.interface.tsx";

function App() {
  const [noteList, setNotes] = useState<Note[]>([]);

  const refreshAction = (data: Note[]) => {
    setNotes(data);
  };

  return (
    <div>
      <FormComponent />
      <RefreshButtonComponent refreshAction={refreshAction} />
      <NoteListComponent nodeList={noteList} refreshAction={refreshAction} />
    </div>
  );
}

export default App;
