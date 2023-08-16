
import Navbar from "./Components/Navbar/Navbar";
import TextForm from "./Components/TextForm/TextForm";


function App() {
  return (
    <>
      <Navbar title="Textutils" about="About us"/>
      <div className="container my-5">
      <TextForm heading="Enter Text To Analyze"/>
      

      </div>
    </>
  );
}

export default App;
