import logo from './logo.svg';
import './App.css';
import AccessibleButton from './accessibility/AccessibleButton';
import AccessibleForm from './accessibility/AccessibleForm';
import KeyboardNavigation from './accessibility/KeyboardNavigation';
import AccessibleImage from './accessibility/AccessibleImage';
import AccessibleAlert from './accessibility/AccessibleAlert';

function App() {
  return (
    <div className="App">
      <AccessibleButton/>
      <AccessibleForm/>
      <KeyboardNavigation/>
      <AccessibleImage/>
      <AccessibleAlert/>
    </div>
  );
}

export default App;
