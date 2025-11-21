import { useState } from 'react';
import {RefreshButtonComponentProps} from "./refresh-button.component.props.tsx";
import {Note} from "../../interfaces/note.interface.tsx";
import {settings} from "../../settings.tsx";


function RefreshButtonComponent({ refreshAction }: RefreshButtonComponentProps) {
  const [isLoading, setIsLoading] = useState(false);

  const submitAction = () => {
    setIsLoading(true);
    fetch(`${settings.API}/notes`)
      .then(response => response.json())
      .then((data: Note[]) => {
        refreshAction(data);
        setIsLoading(false);
      });
  };

  return (
    <button onClick={submitAction} disabled={isLoading}>
      {isLoading ? 'Loading...' : 'Refresh Notes'}
    </button>
  );
}

export default RefreshButtonComponent;
