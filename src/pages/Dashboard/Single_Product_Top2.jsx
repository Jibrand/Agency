import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  return (
    <React.Fragment>
      <div className='p-1' style={{ textAlign: "left", overflowY: "scroll", maxHeight: "160px" }}>
        <h5 style={{ color: "black", fontWeight: "bold" }}><u>Activity Overview</u></h5>
      
            <React.Fragment  >
              <p className='lato'style={{ marginBottom: "-5px", color: "#430e7e" }}>notification.name</p>
              <p className='teko' style={{ color: "GrayText", marginBottom: "10px" }}><i>notification.date1</i></p>
            </React.Fragment>
      
      </div>
    </React.Fragment>
  );
}
