interface ButtonProps {
  title?: string
}

function Button(props: ButtonProps){
  return (
    <button>{props.title ? props.title : "NULL"}</button>
  )
}

function App() {
  return (<>
    <Button title="T1"/>
    <Button title="T2"/>
    <Button />
  </>)
}

export default App
