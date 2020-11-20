import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Componets/Home'
import AllScans from './Componets/scans/AllScans'
import Scanresults from './Componets/scans/Scanresults'
import Createscan from './Componets/scans/Createscan'
import Allprojects from './Componets/projects/Allprojects'
import Projectresult from './Componets/projects/Projectresult'
import Createprojects from './Componets/projects/Createprojects'
import Editproject from './Componets/projects/Editproject'
import Editscan  from './Componets/scans/Editscan'
import About  from './Componets/About'
function App() {
  return (
    <main>
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/allscans" component={AllScans}  />
        <Route path="/about" component={About}  />
        <Route path="/scanresult/:id" component={Scanresults}  />
        <Route path="/create-scan" component={Createscan}  />
        <Route path="/all-project" component={Allprojects}  />
        <Route path="/create-project" component={Createprojects}  />
        <Route path="/edit-project/:id" component={Editproject}  />
        <Route path="/edit-scan/:id" component={Editscan}  />
        <Route path="/project-result/:id" component={Projectresult}  />
      
    </Switch>
</main>
  );
}

export default App;
