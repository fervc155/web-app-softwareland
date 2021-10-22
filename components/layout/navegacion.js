import React,{useContext} from 'react';
import Link from 'next/link';
import {css} from '@emotion/react'
import UserContext from '../../context/user/userContext';
import Search from '../search';
const Navegacion = (props)=>{

  const userContext = useContext(UserContext);
  const {user}= userContext;
  
  return(
  <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/"><img css={css`width:100px;`} src='/logo.png' /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">Inicio</Link>
        </li>

        { user ? ( <>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Mi cuenta
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" href="/cv">Mi CV</Link></li>
            <li><Link className="dropdown-item" href="/profile">Mi perfil</Link></li>
            <li><Link className="dropdown-item" href="/change-password">Cambiar constraseña</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" href="/logout">Salir</Link></li>
          </ul>
        </li> </>
        ) :(<>
        <li className="nav-item">
          <Link className="nav-link" href="/register">Registrate</Link>
        </li>      <li className="nav-item">
          <Link className="nav-link" href="/login">Login</Link>
        </li> </>
        )
        }
        
       
  
      </ul>
      <Search />
    </div>
  </div>
</nav>
  );
}



export default Navegacion;