// In App.js or index.js
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // CHANGE THIS: Use HashRouter instead of BrowserRouter
    <Router> 
       <Layout>
         <Routes>
            {/* Your routes here */}
         </Routes>
       </Layout>
    </Router>
  );
}
