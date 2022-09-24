
import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
      <Sidebar />
    </div>
  );
}

export default App;
