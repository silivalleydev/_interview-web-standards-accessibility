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
import SkipToContent from './accessibility/SkipToContent';
import FormWithError from './accessibility/FormWithError';
import Header from './semantic-tags/Header';
import Main from './semantic-tags/Main';
import Footer from './semantic-tags/Footer';
import Section from './semantic-tags/Section';
import Article from './semantic-tags/Article';
import Navigation from './semantic-tags/Navigation';
import Figure from './semantic-tags/Figure';
import Mark from './semantic-tags/Mark';
import DetailsNSummary from './semantic-tags/DetailsNSummary';

function App() {
  return (
    <div className="App">
      <h2>접근성 관련</h2>
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
      <FormWithError/>
      <SkipToContent/>
      <Header/>
      <Main/>
      <Footer/>
      <Section/>
      <Article/>
      <Navigation/>
      <Figure/>
      <Mark/>
      <DetailsNSummary/>
    </div>
  );
}

export default App;
