import { ChangeEvent } from "react";
import { FilterValuesType } from "../../global-types";

export type ButtonPropsType = {
  onKeyDown?: any;
  children?: any;
  className: string;
  disabled?: boolean;
  onChange?: () => void;
  onClick?: () => void;
  editTodo?: (id: string, taska: string) => void;
  changeFilter?: (value: FilterValuesType) => void;
};

export type CheckboxPropsType = {
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  disabled: boolean;
};

export type CrossPropsType = {
  onClick: () => void;
};

export type EditTaskPropsType = {
  onClick: () => void;
};

export type OkPropsType = {
  onClick: (e: any) => void;
  onKeyDown?: any;
};

export type TrashPropsType = {
  onClick: () => void;
};
