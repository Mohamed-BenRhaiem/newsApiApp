import { useContext } from "react";

import { FaStar } from "react-icons/fa";
import './Categorie.css'
import FilterContext from "./FilterContext";
import { NavLink } from "react-router-dom";

function Categorie(props) {
   
        const { setCategoryFilter } = useContext(FilterContext);
      
        const Filtrer = () => {
            setCategoryFilter(props.categorie.toLowerCase());
            
        }
  return (
    <>
        <NavLink to={"/newsList"} className={'text-decoration-none'}>
        <div className='border categorie mb-5 mt-5' onClick={Filtrer}>
            <h3 className="text-danger">{props.categorie}</h3>
            <h5 className="d-flex mt-4">
                <FaStar className="text-warning"/>
              <p className='small text-secondary'>{props.paragraph}</p>
            </h5>

        </div>
        </NavLink>
    </>
  )
}

export default Categorie