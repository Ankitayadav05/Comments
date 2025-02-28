import {useState}from"react";
export default function CommentForm(){
  let [fullData,setFullData]=useState({
    fullname:"",
    username:"",
  })
  let onChange=(event)=>{
    setFullData((currdata)=>{
      return{...currdata,[event.target.name]:event.target.value};
    })
  }
  return(
    <div>
      <h2>comments</h2>
      <form>
        <label htmlFor="fullname"></label>
        
        <input placeholder="fullname" name="fullname" value={fullData.fullname} onChange={onChange} id="fullname"></input>

        <br></br> <br></br>
        <label htmlFor="username"></label>
        <input placeholder="username" name="username" value={fullData.username} onChange={onChange} id="username"/>
        <br></br>
        <br></br>
        <button style={{border:"1px solid black"}}>submit</button>
      </form>
    </div>
  )
}