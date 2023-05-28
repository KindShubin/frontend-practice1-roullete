import s from '../style/css/TableInfoPanel.module.css';
import picplayer from '../img/player-icon.svg';

const TableInfoPanel = (props) => {
  console.log(props);
  return <div className={s.tableInfoPanel}>
    <div className={s.new}>{props.table.new ? 'new' : ' '}</div>
    <div className={s.name}>{props.table.name}</div>
    <div className={s.players}>{props.table.players}
      <img src={picplayer} alt='pic'/>
    </div>
  </div>
}

export default TableInfoPanel;