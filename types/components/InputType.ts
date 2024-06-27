import { ChangeEvent } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface InputType {
  label: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  error?: boolean;
  errorMessage?: string;
  value?: string;
  onChange?: (e: any) => void;
}

export interface ErrorType {
  error?: boolean;
}
