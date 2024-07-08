import './App.css';
import Player from './components/player/player';

function App() {
  return (
    <main className="mx-auto w-full h-full relative bg-gray-900 ">
      <div className="border-[1px]  border-white w-[400px] h-[600px]">
        <Player />
      </div>
      <div className="w-full h-full absolute   bg-white  top-3 -z-10 left-3"></div>
    </main>
  );
}

export default App;
