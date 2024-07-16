import { BookInfoType, RecommendBookType } from "./BookInfoType";

export interface ModalPropsType {
  item?: BookInfoType
  editItem?: RecommendBookType
  type?: RecommendType
  onClose: () => void;
}

export type RecommendType= 'NOVEL' | 'ESSAY';