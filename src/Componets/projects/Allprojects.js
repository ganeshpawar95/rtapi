import React from 'react';
import ReactDOM from 'react-dom';
import Header  from '../Header'
import CONFIG from '../../config/config'
import axios from 'axios'
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/FadeLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
class Allprojects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        offset: 0,
        data: [],
        perPage: 10,
        currentPage: 0,
        messageshow:false,
        message:'',
        loading: true
    };
    this.handlePageClick = this
        .handlePageClick
        .bind(this);
}
scanedelete=(id)=>{
  this.setState({message:''})
  let apiUrl;
        apiUrl= CONFIG.getproject+id;
        axios.delete(apiUrl)
        .then(response => {
            console.log(response)
            if(response.data==''){
              this.setState({
              message:'Project was deleted successfully!',
              messageshow:true,
              });
            }
         
        })
        .catch(function(error){
          console.log(error);
        })

        this.receivedData()

}
receivedData() {
  const ApiUrl=CONFIG.get_all_project; 
    axios
        .get(ApiUrl)
        .then(res => {

            const data = res.data;
            const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
            const postData = slice.map(pd => 
              <tr>
                <th scope="row">{pd.projectname}</th>
                <td>finished</td>
                <td>1</td>
                <td>10-13-2020 11:20am</td>
                <td> <Link to={'/edit-project/'+pd.id} class="btn btn-info btn-sm"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg></Link>  <button type='button' onClick={() =>this.scanedelete(pd.id)}  class="btn btn-info btn-sm"> <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button></td>
              </tr>
            )

            this.setState({
                pageCount: Math.ceil(data.length / this.state.perPage),
               
                postData
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

componentDidMount() {
    this.receivedData()
}
  // componentDidMount(){
  //   const ApiUrl=CONFIG.get_all_project;  
  //   axios.get(ApiUrl)
  //   .then((response)=>{
  //       console.log('deteisl',response)
  //       this.setState({
  //           response:response.data,
  //       })
  //     },
  //   (error)=>{
  //      console.log('error',error)
  //   }
  //   )


  // }

  render() {
    return (
        <div class="container">
  
        <Header />
        <div class="container " style={{marginTop:'5%',color:'#3685c9'}}>
        <div  style={{color:'#3685c9'}}>
        
        
     
          <p ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-zoom-out" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
  <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
  <path fill-rule="evenodd" d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
</svg> Projects  
 <button type="button" class="btn btn-success df" ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg><a href='/create-project'> New project</a></button> </p>
 
        </div>
        <div style={{marginTop:'3%',color:'#3685c9'}}>
        <div class='pagediv'>
          <p class='page'>List


          <div class='listdiv'>
          <form >
      <input class="search" type="search" placeholder="Search" aria-label="Search" />
    
    </form>
    
          </div>
          </p>
          </div>
          <hr />
           {this.state.messageshow &&<div class="alert alert-success" role="alert">
           {this.state.message}
           </div>}
          <div class='tabls'>
          <table class="table table-sm">

              
<thead>
  <tr>
   
    <th >Project Name</th>
    <th scope="col">Current Status</th>
    <th scope="col">Highest Exploitability</th>
    <th scope="col">Last Scanned</th>
    <th scope="col">Action</th>
  </tr>

</thead>
<tbody>

{this.state.postData}
  
   
</tbody>
</table>
<ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
</div>
        </div>
       
        </div>
    </div>)  
}
}

export default Allprojects;