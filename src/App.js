import { useRef } from "react"

const App = () => {
  const refInput = useRef(null)
  const refHeading = useRef(null)
  const refLink = useRef(null)

  const formSubmit = (event) => {
    event.preventDefault()
    // console.log(refInput.current)
    // console.log(refInput.current.style.backgroundColor = "red")
    // console.log(refInput.current.style.color = "white")
    // console.log(refHeading.current.style.color = "orange")
    // console.log(refHeading.current.textContent = "Nový text")
    console.log(refLink.current.href = "https://www.seznam.cz")
    console.log(refLink.current.textContent = "SEZNAM.CZ")
  }

  return <div>
    <h1 ref={refHeading}>Formulář</h1>
    <form onSubmit={formSubmit}>
      <input type="text" ref={refInput} /> <br />
      <input type="submit" />
    </form>
    <a href="https://www.google.com" ref={(refLink)} target="_blank" >GOOGLE.COM</a>
  </div>
}

export default App