import React from 'react';
import ReactDOM from 'react-dom';
import Header  from '../Header'
import CONFIG from '../../config/config'
import axios from 'axios'
class Projectresult extends React.Component {
 constructor(props){
        super(props)
        this.state={
             id:this.props.match.params.id,
           
            response:[]
            
        }
        
    }


   componentDidMount(){
    console.log(this.props.match.params.id)
    let apiUrl;
    apiUrl= CONFIG.getproject+this.state.id;
    axios.get(apiUrl)
    .then(response => {
    console.log(response)
    this.setState({
    response:response.data,
   
   
   
    });
    })
    .catch(function(error){
    console.log(error);
    })
        

  }
  Backbutton=()=>{
    this.props.history.push("/"); 
  }
  render() {
    return (
        <div class="container">
  
        <Header />
        <div class="container " style={{marginTop:'5%'}}>
        <div  style={{color:'#3685c9'}}>
         
          <p ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0H4zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z"/>
</svg> Results  
  <button type="button" class="btn btn-success df"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-arrow-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4a.5.5 0 0 0-1 0v3.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 11.293V7.5z"/>
</svg> Export PDF</button> </p>
 
        </div>
        <div style={{marginTop:'3%'}}>
        <div class='pagediv' style={{color:'#3685c9'}}>
          <p class='page'>Result
          <div class='listdiv'>
        <form >
        <input class="search" type="search" placeholder="Search" aria-label="Search" />

        </form>
    
          </div>
    
       </p>
       </div>

       <div class='resule'>
           <div class='row '>
              
               <div class='col-lg-2 '><h3>Project Name: </h3></div>
               <div class='col-lg-8'><p class='ps'>{this.state.response.projectname}</p></div>
           </div>

           <div class='row'>
             
               <div class='col-lg-2'><h3>Project Url: </h3></div>
               <div class='col-lg-8'><p class='ps'>fdsfds</p></div>
           </div>

           <div class='row'>
              
               <div class='col-lg-2'><h3>Status: </h3></div>
               <div class='col-lg-8'><p class='ps'>fdsfds</p></div>
           </div>

           <div class='row'>
              
               <div class='col-lg-2'><h3>Started: </h3></div>
               <div class='col-lg-8'><p class='ps'>{this.state.response.scandatetime}</p></div>
           </div>

           <div class='row'>
               
               <div class='col-lg-2'><h3>Finished: </h3></div>
               <div class='col-lg-8'><p class='ps'>fdsfds</p></div>
           </div>
</div>
           <p class='page'>Failures</p>

         <div class='failure'>
          <table class="table table-sm">

              
<thead>
  <tr>
    <th >S. No</th>
    <th >Exploitability</th>
    <th scope="col">OWASP</th>
    <th scope="col">API Endpoint</th>
    
  </tr>
 
</thead>
<tbody>
  <tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>
  <tr>
    <th scope="row">2</th>
    <td>Jacob</td>
    <td>Thornton</td>
    <td>@fat</td>
  </tr>
  <tr>
    <th scope="row">3</th>
    <td colspan="2">Larry the Bird</td>
    <td>@twitter</td>
  </tr>
</tbody>
</table>
</div>

<button class="btn btn-success s" onClick={this.Backbutton} type='button' >Back</button>
       </div>
       </div>
       
    </div>)  
}
}

export default Projectresult;