import React from 'react';
import ReactDOM from 'react-dom';
class Header extends React.Component {
  render() {
    return (

        <div>
            <nav class="navbar navbar-expand-lg header">
  <a class="navbar-brand" href="/"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-layers-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M7.765 1.559a.5.5 0 0 1 .47 0l7.5 4a.5.5 0 0 1 0 .882l-7.5 4a.5.5 0 0 1-.47 0l-7.5-4a.5.5 0 0 1 0-.882l7.5-4z"/>
  <path fill-rule="evenodd" d="M2.125 8.567l-1.86.992a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882l-1.86-.992-5.17 2.756a1.5 1.5 0 0 1-1.41 0l-5.17-2.756z"/>
</svg></a>
  

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item dropdown">
        <button class="nav-link dropdown-toggle"  id="Projects" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Projects
        </button>
        <div class="dropdown-menu" aria-labelledby="Projects">
          <a class="dropdown-item" href="/all-project">All projects</a>
          <a class="dropdown-item" href="/all-project">In-progress</a>
          <a class="dropdown-item" href="/all-project">Finished</a>
          <a class="dropdown-item" href="/all-project">Failed</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/create-project"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>    Add a new project</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <button class="nav-link dropdown-toggle" href="#" id="scans" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Scans
        </button>
        <div class="dropdown-menu" aria-labelledby="scans">
          <a class="dropdown-item" href="/allscans">All scans</a>
          <a class="dropdown-item" href="/allscans">In progress</a>
          <a class="dropdown-item" href="/allscans">Scheduled</a>
          <a class="dropdown-item" href="/allscans">Finished</a>
          <a class="dropdown-item" href="/allscans">Failed</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/create-scan"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>    Create new scans</a>
        </div>
      </li>
      
    </ul>
    <div class="nav-item dropdown right">
        <button class="nav-link dropdown-toggle"  id="settings" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Settings
        </button>
        <div class="dropdown-menu" aria-labelledby="settings">
          <a class="dropdown-item" href="#">Licensing</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/about">About</a>
        </div>
      </div>
  </div>
</nav>
        </div>
    )
   
}
}

export default Header;