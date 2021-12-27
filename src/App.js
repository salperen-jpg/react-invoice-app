import './App.css';
import Sidebar from './Components/Sidebar';
import Form from './Components/Form';
import { useGlobalContext } from './context';
import Title from './Components/Title';
import Invoices from './Components/Invoices';

function App() {
  return (
    <main>
      <Title />
      <Sidebar />
      <Form />
      <Invoices />
    </main>
  );
}

export default App;
