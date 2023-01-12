import { PropsWithChildren } from 'react'

const Wrapper = ({ className, children, ...props }: PropsWithChildren<any>) => {
  return (
    <div {...props} className={$cn('wrapper', className)}>
      {children}
    </div>
  )
}

export default Wrapper
