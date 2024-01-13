import { Provider } from 'react-redux';
import './App.css';
import appStore from './StateManagement/store';

function App() {
  return (
    <div className="App">
    <Provider store={appStore}>
      <Body />
    </Provider>
    </div>
  );
}

export default App;