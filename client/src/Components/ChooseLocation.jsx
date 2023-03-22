import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

const ChooseLocation = (props) => {
    const [locationList,setLocationList]=useState([]);
    const [loading,setLOADING]=useState(true);
    const navigate=useNavigate();

    useEffect(()=>{
         fetch(`${process.env.REACT_APP_API_URL}camps/state/nods`).then((res)=>{
            return res.json();
         }).then((res)=>{
             setLOADING(false)
            setLocationList(res);
         })
    },[]);

    const handleNavigate=(el)=>{
          navigate(`/explore/${el}`)
    }


  return (
    <>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <span style={{fontWeight:"bold"}}>Available Locations</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className='choose_location_btn_modal'>
       {
        loading==false? locationList.map((el)=>{
            return <button variant='dark' onClick={()=>{handleNavigate(el)}} key={el}>{el}</button>
        }): <p>Loading</p>
       }
       </div>
      </Modal.Body>
    </Modal>
    </>
  )
}

export default ChooseLocation