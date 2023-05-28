// import ReactHtmlParser from 'react-html-parser';
import s from '../style/css/Numbers.module.css';

const arrExample = [13, 36, 26, 15, 34, 34, 12, 34, 13, 16, 22];

const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
const blackNumbers = [2, 4, 6, 8, 10, 11, 13 ,15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];

// const getSpanWhithClass = (num) => {
//   return num == 0 ? `<span class="${s.Num} ${s.Num__zero}">${num}</span>`
//     : num in redNumbers ? `<span class="${s.Num} ${s.Num__red} ${s.Num__active}">${num}</span>`
//       : `<span class="${s.Num} ${s.Num__black}">${num}</span>`;
// }

// const getConcatSpans = (arrNum) => {
//   let result = "";
//   arrNum.forEach(function(item) {
//     result += getSpanWhithClass(item);
//   });
//   return result;
// }

const Numbers = (props) => {
  return <div className={s.numbers}>
    {/* { ReactHtmlParser (getConcatSpans(props.arrNum)) } */}
    {props.arrNum.map(num => {
      const classes = num == 0 
        ? s.num + ' ' + s.num_green
          : redNumbers.includes(num)
            ? s.num + ' ' + s.num_red + ' ' + s.num_active
              : s.num + ' ' + s.num_black;
      return <div className={classes}>{num}</div>;
    })}
  </div>;
}

export default Numbers;