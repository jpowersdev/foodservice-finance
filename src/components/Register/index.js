import React from 'react';
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Register extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      register: null,
      count: null
    }
    this.geTableRowegister = this.getRegister.bind(this);
    this.getCount = this.getCount.bind(this);
  }

  componentDidMount() {
    this.getRegister();
  }

  insertOneRegister (data) {
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .catch(err => console.log(err))
    .then((response) => {
     console.log(response)
    })
  }

  getCount () {
    var that = this;
    fetch('/api/register/count').then(function(response) {
      return response.json();
    }).then(function(data) {
      that.setState({ count: data.count });
    }).catch(function(err) {
      console.log(err);
    });
  }

  getRegister () {
    var that = this;
    fetch('/api/register').then(function(response) {
      return response.json();
    }).then(function(data) {
      that.setState({ register: data });
    }).catch(function(err) {
      console.log(err);
    });
  }

  render () {
    const styles = {
      account: {
        textAlign: 'left'
      },
      flag: {
        textAlign: 'center'
      },
      date: {
        textAlign: 'center'
      },
      payee: {
        textAlign: 'left'
      },
      group: {
        textAlign: 'left'
      },
      category: {
        textAlign: 'left'
      },
      memo: {
        textAlign: 'left'
      },
      outflow: {
        textAlign: 'right'
      },
      inflow: {
        textAlign: 'right'
      },
      cleared: {
        textAlign: 'center'
      }
    }
    if (this.state.register != null) {

      const register = this.state.register
        .slice(0,20)
        .map((props) =>
          <TableRow id={props._id} style={{fontSize: '14px'}}>
            <TableRowColumn style={styles.account}>{props.Account}</TableRowColumn>
            <TableRowColumn style={styles.flag}>{props.Flag}</TableRowColumn>
            <TableRowColumn style={styles.date}>{props.Date}</TableRowColumn>
            <TableRowColumn style={styles.payee}>{props.Payee}</TableRowColumn>
            <TableRowColumn style={styles.group}>{props.Group}</TableRowColumn>
            <TableRowColumn style={styles.category}>{props.Category}</TableRowColumn>
            <TableRowColumn style={styles.memo}>{props.Memo}</TableRowColumn>
            <TableRowColumn style={styles.outflow}>{props.Outflow}</TableRowColumn>
            <TableRowColumn style={styles.inflow}>{props.Inflow}</TableRowColumn>
            <TableRowColumn style={styles.cleared}>{props.Cleared}</TableRowColumn>
          </TableRow>
        )

      return (
        <div id="container" style={{ margin: '0 auto', paddingLeft: '2vw', paddingRight: '2vw',
          position: 'absolute', left: '200px', top: '30px', right: '8px' }}>
          <div id='register' style={{ height: '75vh', overflow: 'auto'}}>
            <Table fixedHeader='true'
                   stripedRows='false'
                   showRowHover='true'
                   selectable='true'
                   multiSelectable='true'
                   deselectOnClickaway='true'
                   showCheckboxes='true'
                   height='100vh'>
              <TableHeader>
                <TableRow style={{fontWeight: 'bold', textAlign: 'center'}}>
                  <TableRowColumn>Account</TableRowColumn>
                  <TableRowColumn>Flag</TableRowColumn>
                  <TableRowColumn>Date</TableRowColumn>
                  <TableRowColumn>Payee</TableRowColumn>
                  <TableRowColumn>Group</TableRowColumn>
                  <TableRowColumn>Category</TableRowColumn>
                  <TableRowColumn>Memo</TableRowColumn>
                  <TableRowColumn>Outflow</TableRowColumn>
                  <TableRowColumn>Inflow</TableRowColumn>
                  <TableRowColumn>Cleared</TableRowColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                {register}
              </TableBody>
            </Table>
          </div>

          {/* <div style={{ display: 'block', textAlign: 'center' }}>
            <RaisedButton label="Count!"
              style={{ textAlign: 'center', margin: '0 auto' }}
              onClick={this.getCount}/>
            <h3>Count: {this.state.count ? this.state.count : 0}</h3>
          </div> */}
        </div>
      )
    }
    return (
      <h1>Nothing loaded yet...</h1>
    )
  }
}

export default Register
