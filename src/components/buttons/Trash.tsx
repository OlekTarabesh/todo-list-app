import { Button } from "./Button";

import { TrashPropsType } from "./types";

import styled from "./styles.module.css";

export const Trash: React.FC<TrashPropsType> = ({ onClick }) => {
  return (
    <div className={styled.deleteButton}>
      <Button onClick={onClick} className={styled.deleteButton} />
    </div>
  );
};
