import react,{useState} from 'react';
import Link from 'next/link';
const Search = (props)=>{

	const [search,setSearch] = useState('');

 
  
  return(
  <div className="d-flex">
        <input value={search} name="search" onChange={(e)=>setSearch(e.target.value)} className="form-control me-2" type="search" placeholder="Escribe una profesion" aria-label="Search" />
        <button className="btn btn-outline-primary" type="submit"><Link href={`/search/${search}`}>Buscar</Link></button>
      </div>
  );
}



export default Search;