import React, { useState } from "react";
import ReactTooltip from 'react-tooltip'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faInfoCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./Details.scss"

const Details = props => {

    const listCopy = Object.assign([], props.usersArr);
    const [list, setList] = useState(listCopy);
    
    
    const handleClick = username => {
        setList(list.filter(user => user.username !== username));
    };

    return(
        <div className="details-container">
            <ReactTooltip className="tip" place="right" effect="solid" type="light"/>
            <p className="list" data-tip="Account list">LIST<FontAwesomeIcon icon={faInfoCircle}/></p>
            {list.map(user => {
            return(
                <div className="user-container" key={user.username}>
                    <p>{user.username}</p>
                    <div className="user-container__info" key={user.username}>
                        <p>Email: <b>{user.email}</b></p>
                        <p>Phone: <b>{user.phone}</b></p>
                        <button type="button" onClick={() => handleClick(user.username)}><FontAwesomeIcon icon={faTrashAlt}/></button>
                    </div>
                </div>
                )
            })
            }
            <button className="integration-btn"><FontAwesomeIcon icon={faPlusCircle}/><p className="btn-content">Add account</p></button>
        </div>
    )
}

export default Details;