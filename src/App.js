import './App.css';
import Developer from './developer';
import app from './developer/firebase';
import { getDatabase, ref, onValue } from 'firebase/database';
function App() {
  const database = getDatabase(app);
  const starCountRef = ref(database, 'developer/');

  return (
    <>
    {console.log("RENDER APP TODY")}
      {onValue(starCountRef, (snapshot) => {
        const data = snapshot.val()
        console.log("RENDER APP");
        console.log(data);
      })}
      <Developer />
    </>
  );
}

export default App;
