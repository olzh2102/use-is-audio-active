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

import { useMyHook } from 'use-is-audio-active'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [olzh2102](https://github.com/olzh2102)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
