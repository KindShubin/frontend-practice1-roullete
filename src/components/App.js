import logo from '../img/logo.png';
import s from '../style/css/App.module.css';
import Table from './Table.js';
import AddPanel from './AddPanel.js';

function App() {
  return (
    <div className={s.App}>
      <Table data='123' />
      <AddPanel />
    </div>
  );
}

export default App;
