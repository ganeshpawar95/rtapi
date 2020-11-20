import React from 'react';
import ReactDOM from 'react-dom';
import Header  from './Header'
import axios from 'axios'
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate'
import CONFIG from '../config/config'
import Mostvproject from './projects/Mostvproject'
class About extends React.Component {

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
        <div class="container " style={{marginTop:'5%',fontSize:'small'}}>
        <div style={{color:'#3685c9'}}>
          <p ><svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-exclamation-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
</svg> About API Vulnerability Scanner</p>
          
        </div>
        <div style={{marginTop:'3%'}}>
          <p class='pages'>3rd party licenses</p>
          <hr style={{color:'#3685c9'}} />
        </div>
        <div class="container about" >
           <div class='abotss'>

           </div>
            <p>Ramognee Technologies thanks the fllowing project used by APIVulnerability Scanner</p>
    
           <div style={{marginTop:'4%'}}>
               <p style={{fontWeight:'bold'}}>Software name</p>
               <p>Apache Http server</p>
               <p>Labrary name2</p>
               <p>Labrary name3</p>
               <p>Labrary name4</p>
               <p>Labrary name5</p>
               <p>Labrary name6</p>
               <p>Labrary name7</p>
               <p>Labrary name8</p>
               <p>Labrary name9</p>
               <p>Labrary name10</p>
               

           </div>

        </div>
        </div>
    </div>)  
}
}

export default About;