import { Provider } from 'react-redux';
import './App.css';
import appStore from './StateManagement/store';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
    <Provider store={appStore}>
      <Header />
    </Provider>
    </div>
  );
}

export default App;