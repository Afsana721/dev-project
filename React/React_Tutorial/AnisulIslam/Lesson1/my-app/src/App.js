import React from "react";
import Card from "./components/Card"
import Data from "./data.json"

function App(){


//create an items array variable to store Data from jsonData file and mapping it to get data into component    
    /*let items = []; */

//use Map object JS & mapping by item to follow item index using Data json. 
        /*items =Data.map((item) => <Card  titleText = {item.title} descText = {item.desc} />)*/





    //use for loop to get Json data & pass to component as items
    // for(let x = 0; x<Data.length; x++){
    //     items.push(<Card titleText ={Data[x].title}   descText = {Data[x].desc} />)
    // };
   
    return(
        <div>
            <h1 className="headingStyle largeText">Todo APP</h1>

    {/* without creating items array, we can use directly Data to mapping */}

        {/* {Data.map((item) => < Card titleText = {item.title} descText = {item.desc} />)} */}

    {/* without creating items array, we can use directly Data to mapping with unique key by index*/}
        
        {Data.map((item, index) => < Card key={index} titleText = {item.title} descText = {item.desc} />)}



    {/* items array where store data_json data*/}
            {/* {items} */}

            {/*<Card titleText ={Data[0].title}   descText = {Data[0].desc} />
             <Card titleText = {Data[1].title}  descText = {Data[1].desc} />
            <Card titleText = {Data[2].title}  descText = {Data[2].desc} />
            <Card titleText = {Data[3].title}  descText = {Data[3].desc} /> */}
        </div>
    )
}





export default App;