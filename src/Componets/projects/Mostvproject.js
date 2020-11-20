
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
class Mostvproject extends React.Component {
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
                <td>Finished</td>
                <td>2</td>
                <td>55m 44s</td>
                <td> <Link to={'/project-result/'+pd.id} class="btn btn-info btn-sm s">View result </Link></td>
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
       

 <table class="table table-sm">
          
<thead>

     <th >Name</th>
      <th scope="col">Status</th>
      <th scope="col">Highest Exploitability</th>
      <th scope="col">Duration</th>
      <th scope="col">Action</th>


</thead>
<tbody>

{this.state.postData}


</tbody>
</table>
)  
}
}

export default Mostvproject;