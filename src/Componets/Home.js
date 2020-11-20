import React from 'react';
import ReactDOM from 'react-dom';
import Header  from './Header'
import axios from 'axios'
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate'
import CONFIG from '../config/config'
import Mostvproject from './projects/Mostvproject'
class Home extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        offset: 0,
        data: [],
        perPage: 3,
        currentPage: 0,
        message:'',
        messageshow:false,
    };
    this.handlePageClick = this
        .handlePageClick
        .bind(this);
}
receivedData() {
  const ApiUrl=CONFIG.create_scan; 
    axios
        .get(ApiUrl)
        .then(res => {

            const data = res.data;
            const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
            const postData = slice.map(pd => 
              <tr>
                
                <td>{pd.projectname}</td>
                <td>Finished</td>
                <td>1</td>
                <td> 59 m 44</td>
                <td> <Link to={'/scanresult/'+pd.id} class="btn btn-info btn-sm s"> View result</Link></td>
              </tr>
            )

            const postData1 = slice.map(pd => 
              <tr>
                
                <td>{pd.projectname}</td>
                <td>In progress</td>
                
              </tr>
            )

            const postData2 = slice.map(pd => 
              <tr>
                
                <td>{pd.projectname}</td>
                <td>Scheduled</td>
                <td>13-10-2020 11.30AM</td>
                
              </tr>
            )

            this.setState({
                pageCount: Math.ceil(data.length / this.state.perPage),
               
                postData,
                postData1,
                postData2
            })
        });
}
handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.receivedData()
    });

};

scanedit=()=>{
this.props.history.push("/create-scan"); 
}
 

componentDidMount() {
    this.receivedData()
}
  render() {
    return (
        <div class="container " style={{marginBottom:'10%'}}>
  
        <Header />
        <div class="container " style={{marginTop:'5%',color:'#3685c9'}}>
        <div style={{color:'#3685c9'}}>
          <p ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg> Home</p>
        </div>
        <div style={{marginTop:'3%',color:'#3685c9'}}>
          <p class='page'>Deshboard</p>
          <hr />
        </div>
        <div class="container">
        <div class='row all'>
          <div class='col-lg-5 c'>
            <p>Current issus</p>
          </div>
          <div class='col-lg-6 c'>
            <p>Recent scans <span style={{float:'right'}}><Link to={'/allscans'} class="btn btn-info btn-sm s" >View scans</Link></span> </p>
            <table class="table table-sm">


  <thead>
    <tr>
      <th >Name</th>
      <th scope="col">Status</th>
      <th scope="col">Highest Exploitability</th>
      <th scope="col">Duration</th>
      <th scope="col">Action</th>
    </tr>
   
  </thead>
  <tbody>
   {this.state.postData}
    
  </tbody>
</table>
          </div>
        </div>


<div class='row all'>

<div class='col-lg-6 c'>
<p>Most vulnerable projects <span style={{float:'right'}}><Link to={'/all-project'} class="btn btn-info btn-sm s" >View projects</Link></span> </p>

<Mostvproject />

</div>
<div class='col-lg-5 c'>
<p>Running scans <span style={{float:'right'}}><Link to={'/allscans'} class="btn btn-info btn-sm s" >View scans</Link></span> </p>
<table class="table table-sm">


<thead>
<tr>
<th >Name</th>
<th scope="col">Status</th>

</tr>

</thead>
<tbody>
{this.state.postData1}

</tbody>
</table>
</div>
</div>


<div class='row all ds'>
          
          <div class='col-lg-6 c'>
            <p>Most serious vulnerabilities <span style={{float:'right'}}><Link to={'/all-project'} class="btn btn-info btn-sm s" >View projects</Link></span> </p>

            <Mostvproject />
            
          </div>
          <div class='col-lg-5 c'>
          <p>Upcoming scans <span style={{float:'right'}}><Link to={'/allscans'} class="btn btn-info btn-sm s" >View scans</Link></span> </p>
          <table class="table table-sm">


  <thead>
    <tr>
      <th >Name</th>
      <th scope="col">Status</th>
      <th scope="col">Time</th>
      
    </tr>
   
  </thead>
  <tbody>
   {this.state.postData2}
    
  </tbody>
</table>
          </div>
          </div>


        </div>
        </div>
    </div>)  
}
}

export default Home;