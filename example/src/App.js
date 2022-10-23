import React from 'react'

import { useMyHook } from 'use-is-audio-active'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
