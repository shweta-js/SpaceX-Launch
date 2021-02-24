import React from 'react';
import {  Table } from "semantic-ui-react";

import successfulLand from './landSuccess.json';


function SuccessLanding(){
    return <div >
    <div><span>Details of Successfull Landing:</span></div>
       <Table singleLine>
       <Table.Header>
         <Table.Row>
           <Table.HeaderCell>Mission Name</Table.HeaderCell>
           <Table.HeaderCell>Rocket Name</Table.HeaderCell>
           <Table.HeaderCell>Rocket Type</Table.HeaderCell>
           <Table.HeaderCell>Launch Year</Table.HeaderCell>
           <Table.HeaderCell>Successfull Landing</Table.HeaderCell>
           
         </Table.Row>   
       </Table.Header>
 
       <Table.Body>
         { 
        true?
         
         successfulLand.map(el => {
           return (
             <Table.Row key={el}>
                <Table.Cell>{el.mission_name}</Table.Cell>
               <Table.Cell> {el.rocket.rocket_name} </Table.Cell>
               <Table.Cell> {el.rocket.rocket_type}</Table.Cell>
               <Table.Cell> {el.launch_year}</Table.Cell>
               <Table.Cell> true</Table.Cell>
              
             </Table.Row>
           );
         })
         :<h1>not sure</h1>
         }
        
       </Table.Body>
     </Table>
     </div>
  

}
export default SuccessLanding;