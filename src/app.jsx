import React from "react"
export default class App extends React.Component{
    state={
        value:"",
        arr:[],
        index:"",
        time:""
    }
    handlesubmit=(e)=>{
        e.preventDefault()
        let ary= this.state.arr
        let value2= this.state.value
        let time2= this.state.time
        let obj={value2,time2}
        ary.push(obj)
        this.setState({
            arr:ary ,
            value:"",
            time:""
        })
        console.log(this.state.arr,`such`);
    }

    handlechange=(e)=>{
        let valeu1=e.target.value
        this.setState({
            value:valeu1
        })
    }

    handlechange2=(e)=>{
        this.setState({
            time:e.target.value
        })
    }

    check=()=>{
        console.log(`now`);
        var newdate =new Date()
        var tm=newdate.toTimeString().slice(0,5)
        console.log(tm);
        let sp=this.state.arr
        // if(this.state.time===tm){
        //     alert(`your time has come`)
        // }
        this.state.arr.map((e,i)=>{
            if(e.time2===tm){
                alert(`your time has come`)
                sp.splice(i,1)
                this.setState({
                    arr:sp
                })
            }
        })
    }

    moveup=(i)=>{
        if(i===0){
            alert(`already on top`)
        }
        else{
            console.log(i,`ig`);
        let orig=this.state.arr
        let temp=orig[i-1]
        orig[i-1] = orig[i]
        orig[i] = temp
        this.setState({
            arr:orig     
        })
        }
         
    }

    movedown=(i)=>{
        if(i===this.state.arr.length-1){
            alert(`already on bottom`)
        }
        else{
            console.log(i,`ig`);
        let orig=this.state.arr
        let temp=orig[i+1]
        orig[i+1] = orig[i]
        orig[i] = temp
        this.setState({
            arr:orig     
        })
        }    
    }

    edit=(i)=>{
        // console.log(i,`hhferu`);
        this.setState({
            value:this.state.arr[i].value2,
            time:this.state.arr[i].time2,
            index:i
        })
    }

    update=()=>{
        let indexx=this.state.index
        let arrr=this.state.arr
        arrr[indexx].value2=this.state.value
        arrr[indexx].time2=this.state.time
        this.setState({
            arr:arrr
        })
    }

    del=(i)=>{
        let dell=this.state.arr
        let a=dell.splice(i,1)
        this.setState({
            dell:a
        })
    }

    render(){
        console.log(this.state.value);
        setInterval(this.check,1000)
        let map1=this.state.arr.map((e,i)=>{
            console.log(e,`hhhhhha`);
            return <tr key={i}>
                <th>{i+1}</th>
                <td>{e.value2}</td>
                <td>{e.time2}</td>
                <td>
                    <button className="btn btn-danger ml-5" onClick={()=>this.del(i)}>del</button>
                    <button className="btn btn-info ml-5" onClick={()=>this.edit(i)}>edit</button>
                    <button className="btn btn-primary ml-5" onClick={()=>this.moveup(i)}>shift up</button>
                    <button className="btn btn-primary ml-5" onClick={()=>this.movedown(i)}>shift down</button>
                </td>
            </tr>
        })
        return(
            <div>
                <h1>TO Do List</h1>
                <form action="" onSubmit={this.handlesubmit}>
                    <input type="time" value={this.state.time} placeholder="Time" onChange={this.handlechange2}/>
                    <input type="text" value={this.state.value} placeholder="what to do" onChange={this.handlechange}/>
                </form>
                    <button className="btn btn-success my-3" onClick={()=>this.update()}>Update</button>
                <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    {map1}
  </tbody>
</table>
            </div>
            
        )
    }
}