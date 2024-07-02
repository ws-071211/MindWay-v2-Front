import { BookInfoType } from "./BookInfoType";

export interface ModalPropsType {
  item?: BookInfoType
  type?: RecommendType
  onClose: () => void;
}

export type RecommendType= 'NOVEL' | 'ESSAY';