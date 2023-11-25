import { OkPropsType } from "./types";
import { Button } from "./Button";

import styled from "./styles.module.css";

export const Ok: React.FC<OkPropsType> = ({ onClick, onKeyDown }) => {
  return (
    <div className={styled.ok} onClick={onClick}>
      <Button onKeyDown={onKeyDown} className={styled.okBtn} />
    </div>
  );
};
