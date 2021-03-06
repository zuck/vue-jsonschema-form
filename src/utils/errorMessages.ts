import { ErrorMessagesConfig } from '@/types'

export const errorMessages : ErrorMessagesConfig = {
  minLength: (value: number) => `Minimal length: ${value}`,
  maxLength: (value: number) => `Maximum length: ${value}`,
  minValue: (value: number) => `Minimum value: ${value}`,
  maxValue: (value: number) => `Maximum value: ${value}`,
  required: 'Field is required',
  default: 'Invalid Value'
}
