import logo from './logo.svg';
import './App.css';
import AccessibleButton from './accessibility/AccessibleButton';
import AccessibleForm from './accessibility/AccessibleForm';
import KeyboardNavigation from './accessibility/KeyboardNavigation';
import AccessibleImage from './accessibility/AccessibleImage';
import AccessibleAlert from './accessibility/AccessibleAlert';
import DynamicUpdate from './accessibility/DynamicUpdate';
import FocusManagement from './accessibility/FocusManagement';
import KeyboardList from './accessibility/KeyboardList';
import HighContrastButton from './accessibility/HighContrastButton';
import AccessibleInput from './accessibility/AccessibleInput';
import ExpandableSection from './accessibility/ExpandableSection';

function App() {
  return (
    <div className="App">
      <AccessibleButton/>
      <AccessibleForm/>
      <KeyboardNavigation/>
      <AccessibleImage/>
      <AccessibleAlert/>
      <DynamicUpdate/>
      <FocusManagement/>
      <KeyboardList/>
      <HighContrastButton/>
      <AccessibleInput/>
      <ExpandableSection/>
    </div>
  );
}

export default App;
