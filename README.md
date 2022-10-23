# use-is-audio-active

> It is react custom hook to detect whether provided audio source is active

[![NPM](https://img.shields.io/npm/v/use-is-audio-active.svg)](https://www.npmjs.com/package/use-is-audio-active) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-is-audio-active
```

## Usage

```tsx
import * as React from 'react'

import useIsAudioActive from 'use-is-audio-active'



const Example = () => {
  const [stream, setStream] = React.useState(null)
  const isActive = useIsAudioActive({ source: stream });

  React.useEffect(() => {
    (async function createStream() {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setStream(stream)
    })()
  }, [])  
  
  return (
    <p>
      Am I speaking: {' '} { isActive ? 'yes, you are 🕺' : "seems like ain't 🦻" }
    </p>
  )
}
```

## License

MIT © [olzh2102](https://github.com/olzh2102) [evitla](https://github.com/evitla)
