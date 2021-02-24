import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SuccessLaunch from "./SuccessfullLaunch";
import SuccessLanding from "./SuccessfullLanding";
import DefaultView from "./DefaultView";


function Filter(){
const [count, setCount] = useState(<div><DefaultView/></div>);

function filterSuccess(){
    setCount(<div><SuccessLaunch /></div>);
    }
function filterSuccessLanding(){
    setCount(<div><SuccessLanding /></div>)
}
function alltheLaunches(){
    setCount(<div><DefaultView/></div>)
}    

    return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link active" onClick={ alltheLaunches} href="#">All Launch</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" onClick={filterSuccess} href="#">Successfull Launch</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" onClick={filterSuccessLanding} href="#">Successfull Landing</a>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
<h6>{count}</h6>
</div>
        
    );
}
export default Filter;