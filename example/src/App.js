import React from 'react'

import hookConfig from '../package.json';

import useIsAudioActive from 'use-is-audio-active'

const App = () => {
  const { name, description, repository = {}, author = {} } = hookConfig;

  const { url: repositoryUrl } = repository;
  const repositoryExists = typeof repositoryUrl === 'string';

  const repositoryUrlDisplay = repositoryExists && repositoryUrl.split('://')[1];

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
    <main>
      <style jsx global>{`
        body {
          font-family: sans-serif;
          padding: 0;
          margin: 0;
        }

        main {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1em 0;
        }

        h1 {
          font-size: 2em;
        }

        img {
          max-width: 100%;
        }

        pre {
          overflow: auto;
          max-height: 15em;
          background-color: #eeeeee;
          padding: 1em;
        }

        section,
        footer {
          width: 100%;
          max-width: 50em;
          margin: 0 auto;
        }

        footer p {
          font-size: .9em;
        }

        footer p,
        footer a {
          color: #546e7a;
        }
      `}</style>

      <section>

        <h1>{ name }</h1>

        <p>{ description }</p>

        { repositoryExists && (
          <p>
            <a href={repositoryUrl}>
              { repositoryUrlDisplay }
            </a>
          </p>
        )}

        <h2>How to use</h2>

        <p>
          The hook return boolean depending on if passed audio
          source is active (speaking, playing and etc.).
        </p>

        <h2>Examples</h2>

        <p></p>

        <h3>Set and grab message</h3>
        <p>
          <strong>Input:</strong>
        </p>
        <pre>
          <code>
{`
  const [stream, setSteam] = useState(null)
  const isUserSpeaking = useIsAudioActive({source: stream});
  
  useEffect(() => {
    (async function createStream() {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setStream(stream)
    })()
  }, [])
`}
          </code>
        </pre>
        <p>
          <strong>Output:</strong>
        </p>
        <p>
          Am I speaking: {' '} { isActive ? 'yes, you are 🕺' : "seems like ain't 🦻" }
        </p>
      </section>

      <footer>
        <p>
          Made by <span>Olzhas Kurikov and Dinmukhamed Sailaubek</span>
        </p>
      </footer>
    </main>
  );
}
export default App
