import { useRouteError } from 'react-router-dom'

function Errorpage() {
    const Error = useRouteError()
  return (
    <>
    <h1>Errrorrr Found </h1>
    <div>{Error.status}</div>
    </>
  )
}

export default Errorpage