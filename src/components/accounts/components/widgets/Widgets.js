import React from "react";
import "./Widgets.scss"
import logo from "./assets/user-alt-solid.svg"

const Widgets = props => (
    <div className="widgets-container">
        {props.usersArr.map(user => {
            return(
                <div className="widget-container" key={user.username}>
                    <div className="widget-basic">
                        <div className="logo-container">
                            <img src={logo} alt="user logo"/>
                        </div>
                        <p>{user.username}</p>
                    </div>
                    <div className="widget--hover">
                        <p>Email:<br/>{user.email}</p>
                        <p>Phone:<br/><b>{user.phone}</b></p>
                        <button>Details</button>
                    </div>
                </div>
            )
        })
        }
    </div>
);

export default Widgets;