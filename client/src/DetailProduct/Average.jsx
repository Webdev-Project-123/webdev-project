function Average(props) {
        let i=6;
        let tong=props.reduce((sum,avg)=>{
            i=i-1;
            return sum+avg*i;
        },0);
    return Math.floor(tong/(props.reduce((sum,avg)=>{
        return sum+avg;
    },0)));
  }
  export default Average;