import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function Categories () {
  let params = useParams();
  console.log(params["lang"]);
  return <h1>Categories</h1>
}  
export default Categories;