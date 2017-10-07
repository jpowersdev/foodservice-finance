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
import FlatButton from 'material-ui/FlatButton'

class Register extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      register: null,
      count: null,
      sorted: null
    }
    this.geTableRowegister = this.getRegister.bind(this);
    this.getCount = this.getCount.bind(this);
    this.sortBy = this.sortBy.bind(this);
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

  // rewrite to just be one sorting method based on value, using array notation
  sortBy (e) {
    var value = e.currentTarget.children[0].children[1].innerHTML
    // console.log(value)
    var temp = this.state.register;
    switch (value) {
      case 'Account':
        if (this.state.sorted === 'Account') {
          this.setState({
            register: temp.sort((obj, next) => {
              if (obj.Account > next.Account) {
                return -1;
              } else if (obj.Account < next.Account) {
                return 1;
              } else {
                return 0;
              }
            }), sorted: null });
        } else {
          this.setState({
            register: temp.sort((obj, next) => {
              if (obj.Account > next.Account) {
                return 1;
              } else if (obj.Account < next.Account) {
                return -1;
              } else {
                return 0;
              }
            }), sorted: 'Account' });
        }
        break;
      case 'Flag':
        if (this.state.sorted === 'Flag') {
          this.setState({
            register: temp.sort((obj, next) => {
              if (obj.Flag > next.Flag) {
                return -1;
              } else if (obj.Flag < next.Flag) {
                return 1;
              } else {
                return 0;
              }
            }), sorted: null });
        } else {
          this.setState({
            register: temp.sort((obj, next) => {
              if (obj.Flag > next.Flag) {
                return 1;
              } else if (obj.Flag < next.Flag) {
                return -1;
              } else {
                return 0;
              }
            }), sorted: 'Flag' });
        }
        break;
      case 'Date':
        if (this.state.sorted === 'Date') {
          this.setState({
            register: temp.sort((obj, next) => {
              if (obj.Date > next.Date) {
                return -1;
              } else if (obj.Date < next.Date) {
                return 1;
              } else {
                return 0;
              }
            }), sorted: null });
        } else {
          this.setState({
            register: temp.sort((obj, next) => {
              if (obj.Date > next.Date) {
                return 1;
              } else if (obj.Date < next.Date) {
                return -1;
              } else {
                return 0;
              }
            }), sorted: 'Date' });
        }
        break;
      case 'Payee':
        if (this.state.sorted === 'Payee') {
          this.setState({
            register: temp.sort((obj, next) => {
              if (obj.Payee > next.Payee) {
                return -1;
              } else if (obj.Payee < next.Payee) {
                return 1;
              } else {
                return 0;
              }
            }), sorted: null });
        } else {
          this.setState({
            register: temp.sort((obj, next) => {
              if (obj.Payee > next.Payee) {
                return 1;
              } else if (obj.Payee < next.Payee) {
                return -1;
              } else {
                return 0;
              }
            }), sorted: 'Payee' });
        }
        break;
      case 'Group':
        if (this.state.sorted === 'Group') {
          this.setState({
            register: temp.sort((obj, next) => {
              if (obj.Group > next.Group) {
                return -1;
              } else if (obj.Group < next.Group) {
                return 1;
              } else {
                return 0;
              }
            }), sorted: null });
        } else {
          this.setState({
            register: temp.sort((obj, next) => {
              if (obj.Group > next.Group) {
                return 1;
              } else if (obj.Group < next.Group) {
                return -1;
              } else {
                return 0;
              }
            }), sorted: 'Group' });
        }
        break;
      case 'Category':
        if (this.state.sorted === 'Category') {
          this.setState({
            register: temp.sort((obj, next) => {
              if (obj.Category > next.Category) {
                return -1;
              } else if (obj.Category < next.Category) {
                return 1;
              } else {
                return 0;
              }
            }), sorted: null });
        } else {
          this.setState({
            register: temp.sort((obj, next) => {
              if (obj.Category > next.Category) {
                return 1;
              } else if (obj.Category < next.Category) {
                return -1;
              } else {
                return 0;
              }
            }), sorted: 'Category' });
        }
        break;
      case 'Memo':
        if (this.state.sorted === 'Memo') {
          this.setState({
            register: temp.sort((obj, next) => {
              if (obj.Memo > next.Memo) {
                return -1;
              } else if (obj.Memo < next.Memo) {
                return 1;
              } else {
                return 0;
              }
            }), sorted: null });
        } else {
          this.setState({
            register: temp.sort((obj, next) => {
              if (obj.Memo > next.Memo) {
                return 1;
              } else if (obj.Memo < next.Memo) {
                return -1;
              } else {
                return 0;
              }
            }), sorted: 'Memo' });
        }
        break;

        /*
          Sorting doesn't work, because the dollar values are strings
         */
      case 'Outflow':
        if (this.state.sorted === 'Outflow') {
          this.setState({
            register: temp.sort((obj, next) => {
              if (obj.Outflow > next.Outflow) {
                return -1;
              } else if (obj.Outflow < next.Outflow) {
                return 1;
              } else {
                return 0;
              }
            }), sorted: null });
        } else {
          this.setState({
            register: temp.sort((obj, next) => {
              if (obj.Outflow > next.Outflow) {
                return 1;
              } else if (obj.Outflow < next.Outflow) {
                return -1;
              } else {
                return 0;
              }
            }), sorted: 'Outflow' });
        }
        break;
      case 'Inflow':
        if (this.state.sorted === 'Inflow') {
          this.setState({
            register: temp.sort((obj, next) => {
              if (obj.Inflow > next.Inflow) {
                return -1;
              } else if (obj.Inflow < next.Inflow) {
                return 1;
              } else {
                return 0;
              }
            }), sorted: null });
        } else {
          this.setState({
            register: temp.sort((obj, next) => {
              if (obj.Inflow > next.Inflow) {
                return 1;
              } else if (obj.Inflow < next.Inflow) {
                return -1;
              } else {
                return 0;
              }
            }), sorted: 'Inflow' });
        }
        break;
      case 'Cleared':
        if (this.state.sorted === 'Cleared') {
          this.setState({
            register: temp.sort((obj, next) => {
              if (obj.Cleared > next.Cleared) {
                return -1;
              } else if (obj.Cleared < next.Cleared) {
                return 1;
              } else {
                return 0;
              }
            }), sorted: null });
        } else {
          this.setState({
            register: temp.sort((obj, next) => {
              if (obj.Cleared > next.Cleared) {
                return 1;
              } else if (obj.Cleared < next.Cleared) {
                return -1;
              } else {
                return 0;
              }
            }), sorted: 'Cleared' });
        }
        break;
      default:
        break;
    }
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
      body: {
        width: 'auto',
        overflow: 'visible'
      },
      index: {
        width: '5px',
        overflow: 'visible',
        textAlign: 'left',
        paddingRight: '0'
      },
      account: {
        textAlign: 'left',
        width: '80px',
        overflow: 'visible'
      },
      flag: {
        textAlign: 'center',
        width: '40px',
        overflow: 'visible'
      },
      date: {
        textAlign: 'center',
        width: '80px'
      },
      payee: {
        textAlign: 'left',
        width: '200px'
      },
      group: {
        textAlign: 'left',
        width: '100px'
      },
      category: {
        textAlign: 'left',
        width: '100px'
      },
      memo: {
        textAlign: 'left',
        width: '200px'
      },
      outflow: {
        textAlign: 'right',
        width: '60px'
      },
      inflow: {
        textAlign: 'right',
        width: '60px'
      },
      cleared: {
        textAlign: 'center',
        width: '80px'
      },
      container: {
        margin: '0 auto',
        paddingLeft: '2vw',
        paddingRight: '2vw',
        position: 'absolute',
        left: '15vw',
        top: '30px',
        right: '8px'
      }
    }
    if (this.state.register != null) {

      const register = this.state.register
        .slice(0,20)
        .map((props, index) =>
          <TableRow id={props._id} key={props._id} style={{fontSize: '14px'}}>
            <TableRowColumn style={styles.index}>{index + 1}</TableRowColumn>
            <TableRowColumn style={styles.account}>{props.Account}</TableRowColumn>
            <TableRowColumn style={styles.flag}>{props.Flag}</TableRowColumn>
            <TableRowColumn style={styles.date}>{props.Date}</TableRowColumn>
            <TableRowColumn style={styles.payee}>{props.Payee}</TableRowColumn>
            <TableRowColumn style={styles.group}>{props.Group}</TableRowColumn>
            <TableRowColumn style={styles.category}>{props.Category}</TableRowColumn>
            <TableRowColumn style={styles.memo}>{props.Memo}</TableRowColumn>
            <TableRowColumn style={styles.outflow}>
              {props.Outflow.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </TableRowColumn>
            <TableRowColumn style={styles.inflow}>
              {props.Inflow.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </TableRowColumn>
            <TableRowColumn style={styles.cleared}>{props.Cleared}</TableRowColumn>
          </TableRow>
        )

      return (
        <div id="container" style={styles.container}>
          <div id='register' style={{ height: '75vh', overflow: 'auto'}}>
            <Table
              fixedHeader={true}
              fixedFooter={false}
              selectable={false}
              multiSelectable={false}
              height='100vh'
              bodyStyle={styles.body}>
              <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}
                enableSelectAll={false}>
                <TableRow style={{fontWeight: 'bold', textAlign: 'center'}}>
                  <TableHeaderColumn style={styles.index}></TableHeaderColumn>
                  <TableHeaderColumn style={styles.account}>
                    <FlatButton label="Account" onClick={this.sortBy}/>
                  </TableHeaderColumn>
                  <TableHeaderColumn style={styles.flag}>
                    <FlatButton label="Flag" onClick={this.sortBy}/>
                  </TableHeaderColumn>
                  <TableHeaderColumn style={styles.date}>
                    <FlatButton label="Date" onClick={this.sortBy}/>
                  </TableHeaderColumn>
                  <TableHeaderColumn style={styles.payee}>
                    <FlatButton label="Payee" onClick={this.sortBy}/>
                  </TableHeaderColumn>
                  <TableHeaderColumn style={styles.group}>
                    <FlatButton label="Group" onClick={this.sortBy}/>
                  </TableHeaderColumn>
                  <TableHeaderColumn style={styles.category}>
                    <FlatButton label="Category" onClick={this.sortBy}/>
                  </TableHeaderColumn>
                  <TableHeaderColumn style={styles.memo}>
                    <FlatButton label="Memo" onClick={this.sortBy}/>
                  </TableHeaderColumn>
                  <TableHeaderColumn style={styles.outflow}>
                    <FlatButton label="Outflow" onClick={this.sortBy}/>
                  </TableHeaderColumn>
                  <TableHeaderColumn style={styles.inflow}>
                    <FlatButton label="Inflow" onClick={this.sortBy}/>
                  </TableHeaderColumn>
                  <TableHeaderColumn style={styles.cleared}>
                    <FlatButton label="Cleared" onClick={this.sortBy}/>
                  </TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={false}
                deselectOnClickaway={true}
                showRowHover={true}
                stripedRows={false}>
                {register}
              </TableBody>
            </Table>
          </div>
        </div>
      )
    }
    return (
      <h1 style={{textAlign: 'center'}}>Nothing loaded yet...</h1>
    )
  }
}

export default Register
