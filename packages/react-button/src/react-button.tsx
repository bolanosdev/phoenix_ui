import type React from 'react'
import classnames from 'classnames'
import { ReactBaseComponent } from '../../react-base-component'
import {
  getTextColorAttribute,
  getBackgroundColorAttribute,
  getActionColorAttribute,
} from '../../react-base-component/react-base-component.utils'
import {
  type ButtonAttributes,
  type ButtonProperties,
} from './react-button.types.ts'

const Button: React.FC<ButtonProperties> = (properties) => {
  const classNames = classnames(
    'button',
    properties?.colors?.text && getTextColorAttribute(properties.colors.text),
    properties.colors?.background &&
      getBackgroundColorAttribute(properties.colors.background),
    properties.scale || 'medium',
    properties.action && getActionColorAttribute(properties.action),
    properties.rounded,
    properties.isFullWidth ? 'w-full' : '',
    properties.className
  )

  const attributes: ButtonAttributes = {}

  if (properties.disabled) {
    attributes.disabled = true
  }

  return ReactBaseComponent({
    component: 'button',
    className: classNames,
    attributes,
    properties,
  })
}

Button.displayName = 'Button'
export { Button }
