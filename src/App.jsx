import Logo from './assets/logo.svg'
import DollarIcon from './assets/icon-dollar.svg'
import PersonIcon from './assets/icon-person.svg'
import './App.css'
import InputField from './components/InputField'
import TipOptions from './components/TipOptions'

function App() {

  return (
    <div id="app">
      <img id="logo" src={Logo}/>

      <div id="calculator">
        <InputField icon={DollarIcon} label="Bill"/>
        <InputField icon={PersonIcon} label="Number of people"/>
        <TipOptions/>
      </div>
      
    </div>
  )
}

export default App
