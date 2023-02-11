import './App.css';
import { Provider } from 'react-redux';
import store from './redux/config/configStore';
import Router from './shared/Router';


function App() {
  return (
    <Provider store = {store}>
      <Router />
    </Provider>
  )
}

export default App;