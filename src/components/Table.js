import s from '../style/css/Table.module.css';
import Background from './Background';
import Dealer from './Dealer';
import Promo from './Promo';
import Numbers from './Numbers';
import TableInfoPanel from './TableInfoPanel';
import Price from './Price';

const arrExample = [13, 36, 26, 15, 34, 34, 0, 12, 34, 13, 16, 22];

const dealer = {
  name: 'Dealer',
  rate: 10
}

const table = {
  name: 'Jet Set Rcing Roulette',
  players: 873,
  new: true
}

const Table = () => {
  
  return <div className={s.table}>
    <Background />
    <Dealer dealer={dealer} />
    <Promo />
    <Numbers arrNum={arrExample}/>
    <TableInfoPanel table={table}/>
    <Price price='5' />
  </div>
}

export default Table;