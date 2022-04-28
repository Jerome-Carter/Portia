import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['Temp1', 'Temp2', 'Temp3',
           'Temp4', 'Temp5'],
  datasets: [
    {
      label: 'Title',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class Graph extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Temp text',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}