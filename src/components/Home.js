import './Home.css';
import Sidebar from './Sidebar';
import Visuals from './Visuals';

function Home() {
  return (
    <div className="Home">
      <div className='container'>
        <Sidebar />
        <Visuals />
      </div>
    </div>
  );
}

export default Home;