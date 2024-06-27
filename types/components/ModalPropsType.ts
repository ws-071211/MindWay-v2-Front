import { BookInfoType } from "./BookInfoType";

export interface ModalPropsType {
  item?: BookInfoType
  onClose: () => void;
}
