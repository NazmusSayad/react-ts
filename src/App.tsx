import Wrapper from '$layouts/Wrapper'
import { useEffect } from 'react'

const App = () => {
  const jwt = $useStore((state) => state.auth.jwt)
  console.log(jwt)

  useEffect(() => {
    $store.auth.login('test')
  }, [])

  return (
    <Wrapper style={{ height: '90%', display: 'grid', placeContent: 'center' }}>
      <h1 style={{ textAlign: 'center', fontSize: '7vw' }}>Hello world!</h1>
    </Wrapper>
  )
}

export default App
