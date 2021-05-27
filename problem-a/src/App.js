import React, { Component } from 'react'; //import React library

const EXAMPLE_SENATORS = [
  { id: 'C000127', name: 'Maria Cantwell', state: 'WA', party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

const colNames = ['Name', 'State', 'Phone', 'Twitter'];
/* Your code goes here */

export class App extends Component {

  render() {
    return (
      <div className="container">
        <h1>US Senators (Oct 2020)</h1>
        <SenatorTable senators={this.props.senators} />
      </div>

    );
  }
}

export class SenatorTable extends Component {

  render() {
    let listSens = this.props.senators.map((d) => {
      return <SenatorRow senator={d} key={d.id} />;
    });
    return (
      <table className="table table-b ordered">
        <TableHeader columnNames={colNames}></TableHeader>
        <tbody>
          {listSens}
        </tbody>
      </table>
    )
  }
}

export class TableHeader extends Component {

  render() {
    let thArray = this.props.columnNames.map((d) => {
      return <th key={d}>{d}</th>;
    })
    return (
      <thead>
        <tr>
          {thArray}
        </tr>
      </thead>
    );
  }
}

export class SenatorRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.senator.name}</td>
        <td>{this.props.senator.party.charAt(0) + ' - ' + this.props.senator.state}</td>
        <td><a href={'tel:' + this.props.senator.phone}>{this.props.senator.phone}</a></td>
        <td><a href={'https://twitter.com/' + this.props.senator.twitter}>{'@' + this.props.senator.twitter}</a></td>
      </tr>
    );
  }
}