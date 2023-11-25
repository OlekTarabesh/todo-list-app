import { Button } from "./Button";

import { CrossPropsType } from "./types";

import styled from "./styles.module.css";

export const Cross: React.FC<CrossPropsType> = ({ onClick }) => {
  return (
    <div className={styled.cross}>
      <Button onClick={onClick} className={styled.crossBtn} />
    </div>
  );
};
