import { EditTaskPropsType } from "./types";

import styled from "./styles.module.css";
import { Button } from "./Button";

export const EditTask: React.FC<EditTaskPropsType> = ({ onClick }) => {
  return (
    <div>
      <Button
        disabled={false}
        onClick={onClick}
        className={styled.editTaskButton}
      />
    </div>
  );
};
