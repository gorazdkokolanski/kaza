import './App.css';
import WebRoutes from './webRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <Router basename="/kaza">
      <WebRoutes />
    </Router>
  );
}

export default App;



