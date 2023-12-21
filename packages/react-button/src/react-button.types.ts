import type {
  ScaleType,
  RoundingType,
  ActionType
} from '../../react-base-component/src/types/attributes'
import type {
  ReactBaseComponentProperties,
  ReactBaseComponentAttributes
} from '../../react-base-component/src/types'

export interface ButtonAttributes extends ReactBaseComponentAttributes {
  disabled?: boolean
}

export interface ButtonProperties extends ReactBaseComponentProperties {
  action?: ActionType
  scale?: ScaleType
  rounded?: RoundingType
  isFullWidth?: boolean
  disabled?: boolean
}
