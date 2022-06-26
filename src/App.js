import './App.css';
import Navbar from './Components/Navbar';
import PropTypes from "prop-types"
import Textform from './Components/Textform';
import About from './Components/About';


function App() {

      
  return (
    
    <>
    {/* <Navbar  title="TextUtils"   aboutText="About TextUtils"/> */}
    {/* <Navbar/> */}

    <Navbar title="TextEditor" aboutText="About Us" />
    <div className="container my-3">

    <Textform heading="Enter the text to analyze"/>
    </div>

    {/* <About/> */}
    </>

    
  );
}


// default proptypes
Navbar.defaultProps = { 
  title : 'Set title here',
 // aboutText: 'About text here'
  };


// string-object-number prop type
 Navbar.propTypes = {title: PropTypes.string.isRequired, aboutText: PropTypes.string}; 
  

export default App;
