import s from '../style/css/Price.module.css';
import arrow from '../img/expand-limits.svg';

const Price = (props) => {
  return <div className={s.price}>
    € {props.price} <img src={arrow} alt='arrow'/>
  </div>
}

export default Price;