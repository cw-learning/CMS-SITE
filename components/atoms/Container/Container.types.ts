export interface ContainerProps {
  children: React.ReactNode
  maxWidth?: 'small' | 'default' | 'large' | 'full'
  className?: string
  as?: 'div' | 'main' | 'section' | 'article' | 'aside' | 'header' | 'footer'
}
