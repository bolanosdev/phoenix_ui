import React from 'react'

interface TextProps {
  text: string
}
export const Text: React.FC<TextProps> = ({ text }) => (
  <span id="react-text-updated-again" className="text">
    {text}
  </span>
)
