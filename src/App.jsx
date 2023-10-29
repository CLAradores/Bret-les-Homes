// import { useState } from 'react';
import { Header, Footer } from './components';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
