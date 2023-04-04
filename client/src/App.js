import Chatbot from "./Components/Chatbot";
import AllRoutes from "./Routes/AllRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <AllRoutes/>
     <Chatbot/>
    </div>
  );
}

export default App;
