import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewHome from './NewHome';
import Cups from './Cups';
import Coffee from './Coffee';
import { Link } from 'react-router-dom';

// import Badge from 'react-bootstrap/Badge';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Button from 'react-bootstrap/Button';
// import Image from 'react-bootstrap/Image';
// import Form from 'react-bootstrap/Form';
// import Figure from 'react-bootstrap/Figure';
// import Accordion from 'react-bootstrap/Accordion';
// import NewOrder from './NewOrder';
// import NewCoffeetypeForm from './new-coffeetype-form';

 
export default function App(){

  return(
    
    <>
      <>
        <BrowserRouter>
          <div>
            <ul>
              <li>
                <Link to ='/' >Home</Link>
              </li>
              <li>
                <Link to ='Cups'>Cups</Link>
              </li>
              <li>
                <Link to ='Coffee'>Coffee</Link>
              </li>
            </ul>
            <Routes>
              <Route path="/" element={<NewHome />} />
              <Route path="Cups" element={<Cups />}/>
              <Route path="Coffee" element={<Coffee />}/>
            </Routes>
            </div>
          {/* //Above is 1.-3. on components with Home,Cups, and Coffee's being components.*/}
        </BrowserRouter></>
       
      </>
 
  );
}
