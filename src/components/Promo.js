import s from '../style/css/Promo.module.css';
import img from '../img/logo.png';

console.log(img);
const Promo = () => {
  return <div className={s.promo}>
    <img src={img} alt='promo'/>
  </div>;
}

export default Promo;