export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface HeadingProps {
  children: React.ReactNode
  level?: HeadingLevel
  size?: HeadingLevel
  className?: string
}
