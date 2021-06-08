import './App.css';
// import CountNumber from "./components/CountNumber/CountNumber";
import Person from "./components/Person/Person";

function App() {
  return (
    <>
      <div className="App">
        {/* <CountNumber initValue="0" /> */}
        <Person person={[{
          id: 1,
          name: 'Thức',
          age: '24'
        }]} />
      </div>
    </>
  );
}

export default App;
