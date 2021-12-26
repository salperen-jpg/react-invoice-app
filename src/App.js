import './App.css';
import Sidebar from './Components/Sidebar';
import Form from './Components/Form';
import Loading from './Components/isLoading';

function App() {
  return (
    <main>
      <Sidebar />
      <Form />
      <Loading />
    </main>
  );
}

export default App;
