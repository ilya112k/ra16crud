import {Note} from "../../interfaces/note.interface.tsx";

export interface RefreshButtonComponentProps {
    refreshAction: (data: Note[]) => void;
}
