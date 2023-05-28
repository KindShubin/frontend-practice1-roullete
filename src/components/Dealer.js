import s from '../style/css/Dealer.module.css';

const Dealer = (props) => {
  return <div className={s.dealer}>
    <span>{props.dealer.name}</span>
  </div>
}

export default Dealer;