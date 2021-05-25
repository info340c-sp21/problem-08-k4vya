import React, { Component } from 'react'; //import React library

const EXAMPLE_SENATORS = [
  { id: 'C000127', name: 'Maria Cantwell', state: 'WA', party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */

export function App (props) {
  let senators = props.senators;
    return (
      <div className="container">
        <h1>US Senators (Oct 2020)</h1>
        <SenatorTable senators={senators} />
      </div>

    );
}

export function SenatorTable(props) {
  let senators = props.senators;

    let colNames = ['Name', 'State', 'Phone', 'Twitter'];
    let listSens = [];
    senators.map((d) => { 
      let senRow = <SenatorRow senators={d} key={d.id.toString()}></SenatorRow>
      listSens.push(senRow);
      return listSens;
    });
    return (
      <table className="table table-b ordered">
        <TableHeader columnNames={colNames} key={senators.name}></TableHeader>
        <tbody>
          {listSens};
        </tbody>
      </table>
    )
  }

export function TableHeader(props) {
  let columnNames = props.columnNames;

  let thArray = [];
  columnNames.map((d) => {
    let th = <th>{d}</th>
    thArray.push(th);
    return thArray;
  })
  return (
    <thead>
      <tr>
        {thArray};
      </tr>
    </thead>
  );
}

export function SenatorRow(props){ 
  let senators = props.senators;

  return ( 
    <tr>
      <td>{senators.name}</td>
      <td>{senators.state}</td>
      <td>{senators.phone}</td>
      <td>{senators.twitter}</td>
    </tr>
  )
}