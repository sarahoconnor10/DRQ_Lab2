import logo from './logo.svg';
import Content from './Content.js'
import Header from './Header.js'
import Footer from './Footer.js'
import NavigationBar from './NavigationBar.js';

import './App.css';

function App() {
  return (

    /*
      Add hello world title and use Date() to display current time  
    */
    <div className="App">
      <NavigationBar></NavigationBar>
      <Content></Content>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
