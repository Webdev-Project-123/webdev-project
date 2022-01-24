function SumStar(props) {
    return props.reduce((sum,avg)=>{
        return sum+avg;
    },0) ;
  }
  export default SumStar;