import { UseFormRegisterReturn } from "react-hook-form"

export interface InputType{
  label: string
  placeholder: string
  register?: UseFormRegisterReturn
  error?: boolean
  errorMessage?: string
}

export interface ErrorType{
  error?:boolean
}
