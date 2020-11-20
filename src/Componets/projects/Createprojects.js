import React from 'react';
import ReactDOM from 'react-dom';
import Header  from '../Header'
import CONFIG from '../../config/config'
import axios from 'axios'
class Createprojects extends React.Component {
    constructor(props){
        super(props)
        this.state={
            projectname:'',
            description:'',
            targeturl:'',
            logfile:'',
            message:'',
            messageshow:false,
            connectiontimout:'',
            sendtimeout:'',
            receivetimeout:'',
            err_msg_projectname : '',
            err_msg_description : '',
            err_msg_targeturl: '',
            err_msg_logfile: '',
            
        }
        this.onchangehandle=this.onchangehandle.bind(this);
        this.onSubmithandle=this.onSubmithandle.bind(this);
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
            err_msg_targeturl: '',
            err_msg_logfile: '',
            err_msg_connectiontimout: '',
            err_msg_sendtimeout: '',
            err_msg_receivetimeout: '',
        });
        if(this.state.projectname == '')
        {
            this.setState({err_msg_projectname : 'Please Enter Project Name .'})
            return;
        }
        if(this.state.description == '')
        {
            this.setState({err_msg_description : 'Please Enter Project Description .'})
            return;
        }
        if(this.state.targeturl == '')
        {
            this.setState({err_msg_targeturl : 'Please Enter Targe Url .'})
            return;
        }
        if(this.state.logfile == '')
        {
            this.setState({err_msg_logfile : 'Please Enter Log File .'})
            return;
        }
        console.log(this.state)
        let apiUrl;
        apiUrl= CONFIG.insertproject;
       
        let formData = new FormData();    //formdata object
        
        formData.append('projectname', this.state.projectname);
        formData.append('description', this.state.description); 
        formData.append('targeturl', this.state.targeturl);   //append the values with key, value pair
        formData.append('logfile', this.state.logfile);
        formData.append('connectiontimout', this.state.connectiontimout);
        formData.append('sendtimeout', this.state.sendtimeout);
        formData.append('receivetimeout', this.state.receivetimeout);
      
        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
        axios.post(apiUrl, formData)
            .then(response => {
            console.log(response)
            if(response.data.message== "Project data add successfully!"){
                this.setState({
                    message:'Project data add successfully!',
                    messageshow:true,
                    projectname:'',
                    description:'',
                    targeturl:'',
                    logfile:'',
                   
                    connectiontimout:'',
                    sendtimeout:'',
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
                    description:'',
                    targeturl:'',
                    logfile:'',
                   
                    connectiontimout:'',
                    sendtimeout:'',
                    receivetimeout:'',
                    err_msg_projectname : '',
                    err_msg_description : '',
                    err_msg_targeturl: '',
                    err_msg_logfile: '',
                })
            }
           
               
             }).catch(error => {
                console.log(error)
                this.setState({
                    projectname:'',
                    description:'',
                    targeturl:'',
                    logfile:'',
                   
                    connectiontimout:'',
                    sendtimeout:'',
                    receivetimeout:'',
                    err_msg_projectname : '',
                    err_msg_description : '',
                    err_msg_targeturl: '',
                    err_msg_logfile: '',
                     })
                
              });
            
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
        </svg><span style={{marginLeft:'1%'}}>Create a new project </span>  
        </p></div>
       
        
    <div class='select project' style={{marginTop:'3%'}} >
            <p class='selectp'>Project details</p>
            <hr  />
           {this.state.messageshow &&<div class="alert alert-success" role="alert">
           {this.state.message}
            </div>}
            <form enctype="multipart/form-data">
            <div class="container" >
            <div class='row'>
        <div class='col-lg-6'>
       
        <div class="form-group">
        <label for="exampleInputEmail1">Project name</label>
        <input type="text" class="form-control" value={this.state.projectname}  onChange={this.onchangehandle} name='projectname' id="exampleInputEmail1" aria-describedby="emailHelp" />
       
            <p style={{color:'red'}}>{this.state.err_msg_projectname}</p>
        </div>
        <div class="form-group">
        <label for="exampleInputPassword1">Description</label>
        <textarea class="form-control" value={this.state.description} name='description'  onChange={this.onchangehandle} id="exampleFormControlTextarea1" rows="3"></textarea>
        <p style={{color:'red'}}>{this.state.err_msg_description}</p>
        </div>

        <div class="form-group">
        <label for="exampleInputEmail1">Target application URL:</label>
        <input type="url" class="form-control" value={this.state.targeturl}  onChange={this.onchangehandle} name='targeturl' id="exampleInputEmail1" aria-describedby="emailHelp" />
        <p style={{color:'red'}}>{this.state.err_msg_targeturl}</p>
        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Log file:</label>
       
        </div>
       
        <div class="form-check form-check-inline">
  
        <label class="form-check-label" for="inlineCheckbox1">Availble</label>
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
        </div>
        <div class="form-check form-check-inline">

        <label class="form-check-label" for="inlineCheckbox2"> Not Availble </label>
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option2" />
        </div>

        <div class="input-group is-invalid">
    <div class="custom-file">
      <input type="file"  name='logfile' class="custom-file-input"   onChange={this.onFileChange} id="validatedInputGroupCustomFile"  />
      <label class="custom-file-label" for="validatedInputGroupCustomFile">Select file...</label>
     
    </div>

   
    </div>

    <p style={{color:'red'}}>{this.state.err_msg_logfile}</p>
       
        </div>
       
       
   
            </div>
            </div>
            <div class='projecglobel' style={{marginTop:'3%'}}>
    <p class='selectp'>Project Global Varibles</p>
    <hr  />
    </div>
    <div class="container" >
    <div class='row'>
        <div class='col-lg-6'>
        
        <div class="form-group">
        <label for="exampleInputEmail1">Connection Timeout:</label>
        <input type="number" value={this.state.connectiontimout} class="form-control"  onChange={this.onchangehandle} name='connectiontimout' id="exampleInputEmail1" aria-describedby="emailHelp" />

        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Send Timeout:</label>
        <input type="number" class="form-control" value={this.state.sendtimeout} onChange={this.onchangehandle} name='sendtimeout' id="exampleInputEmail1" aria-describedby="emailHelp" />

        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Receive Timeout:</label>
        <input type="number" class="form-control" value={this.state.receivetimeout} onChange={this.onchangehandle} name='receivetimeout' id="exampleInputEmail1" aria-describedby="emailHelp" />

        </div>
       
        </div>
        
        </div>
        <div style={{marginTop:'4%'}} class='foo'>
               <button class="btn btn-success s"  onClick={this.onSubmithandle} type='button' >Save</button><button class="btn btn-success s ds" type='button' >Cancel</button>
               </div>
        </div>
            </form>
   
                
              
               
                </div>
        
       
        </div>
    </div>)  
}
}

export default Createprojects;