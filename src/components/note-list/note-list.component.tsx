import {settings} from "../../settings.tsx";
import {NoteListComponentProps} from "./note-list.component.props.tsx";

function NoteListComponent({ nodeList, refreshAction }: NoteListComponentProps) {

  const removeAction = (id: number) => {
    fetch(`${settings.API}/notes/${id}`, { method: 'DELETE' })
      .then(() => {
        const correctNoteList = nodeList.filter(note => note.id !== id);
        refreshAction(correctNoteList);
      });
  };

  return (
    <div>
      {nodeList.map(note => (
        <div key={note.id}>
          <p>{note.content}</p>
          <button onClick={() => removeAction(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default NoteListComponent;
