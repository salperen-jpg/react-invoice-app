import './App.css';
import Sidebar from './Components/Sidebar';
import Form from './Components/Form';
import Title from './Components/Title';
import Invoices from './Components/Invoices';
import Modal from './Components/Modal';

function App() {
  return (
    <main>
      <Title />
      <Sidebar />
      <Form />
      <Invoices />
      <Modal />
    </main>
  );
}

export default App;
