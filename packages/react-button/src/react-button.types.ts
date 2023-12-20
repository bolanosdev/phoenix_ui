import type {
  ScaleType,
  RoundingType,
  ActionType,
} from '../../react-base-component/types/attributes'
import type {
  ReactBaseComponentProperties,
  ReactBaseComponentAttributes,
} from '../../react-base-component/react-base-component.types'

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
