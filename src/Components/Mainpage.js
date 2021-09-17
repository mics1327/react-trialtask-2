import React from 'react'
import './Mainpage.css';
import MilestoneList from './MilestoneList';
import FileList from './File';
import picture from './picture.jpeg';
import GroupedButton from './GroupedButtons';
import backarrow from './backarrow.png';
import { useHistory } from "react-router-dom";

function Mainpage() {
    let history=useHistory();
    function handleclick()
    {
        history.goBack();
    }
    return (
        <div class="page">
            <button className="back" onClick={handleclick}><img src={backarrow} alt="backarrow" className="backarrow" /></button>
            <h1>Fortaleza Ituxi</h1>
            <img src={picture} alt="Forest" className="fortalezaituxi" />
            <text><text className="brazil">Brazil</text><text className="link">vorro.org</text></text>
            <h3 className="bdhd1">Fortaleza Ituxi</h3>
            <p className="para1"> Manoa Farm preserves 74,038 ha of forestland in the heart of Northern Brazil's Amazon River Basin. The project region has long been subject to natural resource exploitation, and Manoa Farm forest has been under threat of degradation due to illegal logging. It is one of the few private forest areas remaining in the region. Manoa Farm aims to curb deforestation by training local stakeholders in forest protection and surveillance and supports socio-economic development through skilled-labor workshops on non-extractive forest management.</p>
            <h3>Project Monitoring Summary</h3>
            <p className="para2">We note no meaningful disturbance or biomass changes in the project. This is a very positive sign for this conservation project that is facing intense pressure as it indicates that there has been little natural or man-made disturbance (such as illegal logging) of the forest. Meanwhile, regional biomass has decreased dramatically as the project's surroundings have been almost entirely clear cut in the past three years. This activity appears to be increasing.</p>
            <h3>Timeline</h3>
            <MilestoneList />
            <h3>Project files</h3>
            <FileList />
            <GroupedButton />
    </div>  
    )
}

export default Mainpage
