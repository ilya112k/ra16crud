import {Note} from "../../interfaces/note.interface.tsx";

export interface NoteListComponentProps {
    nodeList: Note[];
    refreshAction: (data: Note[]) => void;
}
