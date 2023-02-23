import {CardProps} from '../card/types';

export interface FormProps {
  tasksList: CardProps[];
  setTasksList: React.Dispatch<React.SetStateAction<CardProps[]>>;
}
