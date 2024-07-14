import { PropsWithChildren } from 'react';

export default function MainComponent({children}: PropsWithChildren) {
  return (
    <div className="container">
      {children}
    </div>
  )
}
