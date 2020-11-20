import React from 'react';
import ReactDOM from 'react-dom';
import Header  from '../Header'
import CONFIG from '../../config/config'
import axios from 'axios'
class Createscan extends React.Component {
    constructor(props){
        super(props)
        this.state={
            projectname:'',
            stime:'',
            sdate:'',
            testmode:'',
            scandatetime:'',
            scandate:'',
            messageshow:false,
            
            err_msg_projectname : '',
            err_msg_testmode : '',
        
            response:[]
            
        }
        this.onchangehandle=this.onchangehandle.bind(this);
        this.onSubmithandle=this.onSubmithandle.bind(this);
    }

    componentDidMount(){
    const ApiUrl=CONFIG.get_all_project;  
    axios.get(ApiUrl)
    .then((response)=>{
        console.log('deteisl',response)
        this.setState({
            response:response.data,
        })
      },
    (error)=>{
       console.log('error',error)
    }
    )


  }
    onchangehandle(event){
        const name = event.target.name;
        const value= event.target.value;
        this.setState({
            [name]:value,
        })
    }
   
    onFileChange = event => { 
     
        // Update the state 
        this.setState({ logfile: event.target.files[0] }); 
       
      }; 
    onSubmithandle(){
        this.setState({
            err_msg_projectname : '',
            err_msg_description : '',
           
        });
        if(this.state.projectname == '')
        {
            this.setState({err_msg_projectname : 'Please Select Project  .'})
            return;
        }
        if(this.state.testmode == '')
        {
            this.setState({err_msg_testmode : 'Please Select Testmode .'})
            return;
        }
        if(this.state.scandatetime=='Schedule'){

         var datess =this.state.sdate+this.state.stime
        }
        else{
          var  datess=new Date().toLocaleString()
        }
        console.log(this.state)
        let apiUrl;
        apiUrl= CONFIG.create_scan;
       
        // let formData = new FormData();    //formdata object
        
        // formData.append('projectname', this.state.projectname);
        // formData.append('testmode', this.state.testmode); 
        // formData.append('scandatetime', this.state.scandate);   //append the values with key, value pair
        
        let data ={ "projectname": this.state.projectname, "testmode": this.state.testmode, "scandatetime": datess}
        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
        axios.post(apiUrl, data)
            .then(response => {
            console.log(response)
            if(response.data.message== "Scan data add successfully!"){
                this.setState({
                    message:'Scan data add successfully!',
                    messageshow:true,
                    projectname:'',
                    testmode:'',
                    sdate:'',
                    stime:'',
                   
                  
                    receivetimeout:'',
                    err_msg_projectname : '',
                    err_msg_description : '',
                    err_msg_targeturl: '',
                    err_msg_logfile: '',

                })
            }else{
                this.setState({
                    message:'Try ageen',
                   messageshow:true,
                    projectname:'',
                    testmode:'',
                    sdate:'',
                    stime:'',
                   
                
                })
            }
           
               
             }).catch(error => {
                console.log(error)
                this.setState({
                     message:error.message,
                   messageshow:true,
                    projectname:'',
                    testmode:'',
                    sdate:'',
                    stime:'',
                })
               
                
              });
            
       }


        scacaincile=()=>{
this.props.history.push("/"); 
}
  render() {
    return (
        <div class="container">
  
        <Header />
        <div class="container " style={{marginTop:'2%'}}>
        <div  style={{color:'#3685c9'}}>

        <p ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-zoom-out" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
        <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
        <path fill-rule="evenodd" d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
        </svg><span style={{marginLeft:'1%'}}>Create a new scans </span>  
        </p></div>
        <div class='select project' >
            <p class='selectp'>Select projects</p>
            <hr  />
            {this.state.messageshow &&<div class="alert alert-success" role="alert">
           {this.state.message}
            </div>}
            <div class="container " >
            <div class='row'>
                <div class='col-lg-4'>
            <form>
 
  <div class="form-group">
    <select class="form-control" id="exampleFormControlSelect1" value={this.state.projectname} onChange={this.onchangehandle} name='projectname'>
      <option>select project</option>
      {this.state.response.map(res=>
      <option value={res.projectname}>{res.projectname}</option>
      )}
    </select>
    <p style={{color:'red'}}>{this.state.err_msg_projectname}</p>
  </div>
  <p> Test mode:</p>
    <div class='row'>
    <div class='col-lg-5 ins'>

    <label class="form-check-label" for="exampleRadios1">
    Quick Testing
    </label>
    <input class="form-check-input" type="radio" onChange={this.onchangehandle} name="testmode"  id="exampleRadios1" value="Quick Testing"  />

    </div>
    <div class='col-lg-5 ins'>

    <div class="form-check">
    <label class="form-check-label" for="exampleRadios2">
    Full Testing
    </label>
    <input class="form-check-input" type="radio" onChange={this.onchangehandle} name="testmode" id="exampleRadios1"  value=" Full Testing" />
    </div>
    </div>
    </div>
    </form>
    </div>
    </div>
    </div>
    <p style={{color:'red'}}>{this.state.err_msg_testmode}</p>
    </div>
        
    <div class='select project' style={{marginTop:'3%'}} >
            <p class='selectp'>Scan details</p>
            <hr  />
            <div class="container" >
                <div class='row'>
                    <div class='col-lg-5'>
                    <div class='scandiv'>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" onChange={this.onchangehandle} name="scandatetime"  value={this.state.scandatetime} id="inlineRadio1" value="soon" />
                <label class="form-check-label" for="inlineRadio1">Start as soon as possible</label>
                </div>
                </div>
                    </div>
                </div>
               
                <div class='row s'>
                <div class='col-lg-7'>
                <div class='scandiv'>
                <div class='row'>
                <div class='col-lg-2'>
                <div class="form-check form-check-inline ss">
                <input class="form-check-input" type="radio" onChange={this.onchangehandle} name="scandatetime"  value={this.state.scandatetime} id="inlineRadio1" value="Schedule" />
                <label class="form-check-label" for="inlineRadio1">Schedule for</label>
                </div>
               
                </div>
                <div class='col-lg-3'>
                <input type='date' onChange={this.onchangehandle}  value={this.state.sdate} name='sdate' class="form-control" />
                
                </div>
                {/* <p>at</p> */}
                <div class='col-lg-2'>
                <input type='time' onChange={this.onchangehandle} value={this.state.stime} name='stime' class="form-control" />
                </div>
                </div>
               </div>
               </div>
               
               </div>
               <div style={{marginTop:'4%'}}>
               <button class="btn btn-success s" onClick={this.onSubmithandle} type='button' >Save</button><button class="btn btn-success s ds" type='button' onClick={this.scacaincile} >Cancel</button>
               </div>
                </div>
                </div>
        
       
        </div>
    </div>)  
}
}

export default Createscan;