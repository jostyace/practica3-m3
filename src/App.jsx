import './App.css'
import { Form } from './components/Form'
import { MainHeader } from './components/MainHeader'
import { Result } from './components/Result'


function App() {
  return (
    <>
    <MainHeader />
      <div className="general-wrapper">
        <Form />
        <Result/>
      </div>
    </>
  )
}

export default App
