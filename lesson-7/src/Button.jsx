
function Button(){

    // let count=0;
    // const handleClick=function(name){
    //     if(count<3){
    //         count++;
    //         console.log(`${name} you clocked me ${count} time/s`)
    //     }else{
    //         console.log(`${name} stop clicking me`);
    //     }
    // };

    const handleClick=(e)=>e.target.textContent="OUCH!😒"

    
  return (
    <button onClick={(e)=>handleClick(e)}>Click me 😊</button>
  )
}
export default Button; 