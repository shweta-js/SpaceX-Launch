import React from 'react';
import {  Table } from "semantic-ui-react";
import AllSpacexLaunches from './AllSpacexLaunches.json';



function DefaultView(){
    return <div>
    <div><span>Details of All the SpaceX Launch:</span></div>
       <Table singleLine>
       <Table.Header>
         <Table.Row>
           <Table.HeaderCell>Mission Name</Table.HeaderCell>
           <Table.HeaderCell>Rocket Name</Table.HeaderCell>
           <Table.HeaderCell>Rocket Type</Table.HeaderCell>
           <Table.HeaderCell>Launch Year</Table.HeaderCell>
           
         </Table.Row>
       </Table.Header>
 
       <Table.Body>
         {AllSpacexLaunches.map(el => {
           return (
             <Table.Row key={el.mission_name}>
                <Table.Cell>{el.mission_name}</Table.Cell>
               <Table.Cell> {el.rocket.rocket_name} </Table.Cell>
               <Table.Cell> {el.rocket.rocket_type}</Table.Cell>
               <Table.Cell>{el.launch_year}</Table.Cell>
              
             </Table.Row>
           );
         })}
       </Table.Body>
     </Table>
     </div>
  

}
export default DefaultView;