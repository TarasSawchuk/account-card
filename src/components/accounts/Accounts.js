import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./Accounts.scss"
import Widgets from "./components/widgets/Widgets"
import Details from "./components/details/Details"

const Accounts = props => {
    return(
        <div className="accounts-container">
            <h3>Accounts</h3>
            <Tabs>
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Details</Tab>
                </TabList>
                <TabPanel>
                    <Widgets usersArr={props.usersArr}/>
                </TabPanel>
                <TabPanel>
                    <Details usersArr={props.usersArr}/>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Accounts;