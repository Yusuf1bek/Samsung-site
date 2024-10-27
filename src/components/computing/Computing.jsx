import React from 'react'
import Main from '../main/Main'
import picture1 from "../../assets/images/galaxy.avif"
import picture2 from "../../assets/images/tv-audio.jpeg"
import picture3 from "../../assets/images/appliance.png"

const Computing = () => {
    return (
    <div className='container'>
        <Main 
        title={"Mobile & Computing"} 
        navbarItems = {["Galaxy S24 Ultra","Galaxy Z Fold6","Galaxy Z Flip6","Galaxy Tab S10 Series","Galaxy Watch Ultra"]}
        image={picture1}
        subTitle={"Galaxy S24 Ultra"}
        desc={"Get up to $750 trade in up to $275 off without. Plus double the storage on us"}
        btn={"Buy Now"}
        />
        <Main 
        title={"TV & Audio"} 
        navbarItems = {["Neo QLED 8K QN900D"," OLED S95D 77"," Q990D soundbar"]}
        image={picture2}
        subTitle={"Lets make this super clear"}
        desc={"Save $2,200 on an 85 Class Samsung Neo QLED 8K QN900D and get our best picture in a huge range of contrast and color with Neo Quantum HDR 8K Pro."}
        btn={"Buy Now"}
        />
        <Main 
        title={"Home Appliances"} 
        navbarItems = {["Early Black Friday","Refrigerators","Bespoke Laundry","Cooking Power Pair"]}
        image={picture3}
        subTitle={"Get the best deals of the season"}
        desc={"Make the holidays brighter with early Black Friday deals on Bespoke appliances and save $1,700."}
        btn={"Buy Now"}
        />
    </div>
  )
}

export default Computing