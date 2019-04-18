import React, { Component } from 'react'
import { Col, Row, Grid } from "react-native-easy-grid";
import { Content, Button, Text } from 'native-base';
import {StyleSheet} from 'react-native'
import { connect } from 'react-redux';
import {calFirstValue} from '../actions/calValues'

class Calculator extends Component {

  state={
    firstValue: 0,
    lastValue:0,
    operator: null,
    finalValue: 0
  }
  
  handleDelete=()=>{
    let str =  this.state.finalValue.toString();
    let finalValue =  str.slice(0,-1);
    if(finalValue == ''){
      finalValue: 0
    }
    this.setState({
      finalValue: finalValue,
    }) 
  }

  handleClear=()=>{
    this.state.firstValue = 0
    this.state.operator = null
    this.state.lastValue = 0
    this.state.finalValue = 0
    this.props.addFirstValue(this.state.firstValue, this.state.operator, this.state.lastValue, this.state.finalValue)
  }

  handleClick(value){
    this.setState({
      finalValue: this.state.finalValue + value,
    })
  }

  handleAdd=()=>{
    let str =  this.state.finalValue.toString();
    if(str.charAt(0) === '0'){
      this.state.finalValue = str.substring(1)  
    }
    console.log('====================================');
    console.log(this.state.finalValue);
    console.log('====================================');
    this.state.firstValue = this.state.finalValue
    this.state.operator = '+'
    this.state.lastValue = 0
    this.state.finalValue = 0
    this.props.addFirstValue(this.state.firstValue, this.state.operator, this.state.lastValue, this.state.finalValue)
  }

  handleSubtract=()=>{
    let str =  this.state.finalValue.toString();
    if(str.charAt(0) === '0'){
      this.state.finalValue = str.substring(1)  
    }
    this.state.firstValue = this.state.finalValue
    this.state.operator = '-'
    this.state.lastValue = 0
    this.state.finalValue = 0
    this.props.addFirstValue(this.state.firstValue, this.state.operator, this.state.lastValue, this.state.finalValue)
  }

  handleMultipy=()=>{
    let str =  this.state.finalValue.toString();
    if(str.charAt(0) === '0'){
      this.state.finalValue = str.substring(1)  
    }
    this.state.firstValue = this.state.finalValue
    this.state.operator = '*'
    this.state.lastValue = 0
    this.state.finalValue = 0
    this.props.addFirstValue(this.state.firstValue, this.state.operator, this.state.lastValue, this.state.finalValue)
  }

  handleDivide=()=>{
    let str =  this.state.finalValue.toString();
    if(str.charAt(0) === '0'){
      this.state.finalValue = str.substring(1)  
    }
    this.state.firstValue = this.state.finalValue
    this.state.operator = '/'
    this.state.lastValue = 0
    this.state.finalValue = 0
    this.props.addFirstValue(this.state.firstValue, this.state.operator, this.state.lastValue, this.state.finalValue)
  }

  handleOperations=()=>{
    this.state.operator = this.props.prod.calculator.operator
    let str =  this.state.finalValue.toString();
    if(str.charAt(0) === '0'){
      this.state.finalValue = str.substring(1)  
    }
    this.state.lastValue = this.state.finalValue
    let z = parseInt(this.state.lastValue)
    this.state.firstValue  =this.props.prod.calculator.firstValue
    let  y = parseInt(this.state.firstValue)
    
    // this.props.addFirstValue(this.state.firstValue, this.state.operator, this.state.lastValue, this.state.finalValue)
    
    if(this.state.operator === '+'){
      let x = y+z
      this.state.finalValue = x
      this.setState({
        finalValue: this.state.finalValue
      })
    }
    if(this.state.operator === '-'){
      let x = y-z
      this.state.finalValue = x
      this.setState({
        finalValue: this.state.finalValue
      })
    }
    if(this.state.operator === '*'){
      let x = y*z
      this.state.finalValue = x
      this.setState({
        finalValue: this.state.finalValue
      })
    }
    if(this.state.operator === '/'){
      let x = y/z
      this.state.finalValue = x
      this.setState({
        finalValue: this.state.finalValue
      })
    }
    this.props.addFirstValue(this.state.firstValue, this.state.operator, this.state.lastValue, this.state.finalValue)
  }
  render() {
    return (
      <Grid>
        <Row size={45} style={{backgroundColor: 'beige'}}>
          <Grid>
            <Row size={70}>
              <Text style={styles.values}>
                {this.props.prod.calculator.firstValue}
                {this.props.prod.calculator.operator}
                {this.props.prod.calculator.lastValue}
              </Text>
            </Row>
            <Row size={30}>
              <Text style={styles.outputText}>
                {this.state.finalValue}
              </Text>
            </Row>
          </Grid>
        </Row>
        <Row size={55} style={{backgroundColor: 'cadetblue'}}>
          <Content padder>
            <Grid>
              <Col style={styles.padding}>
                <Button bordered large block dark rounded onPress={this.handleClear}>
                  <Text style={styles.btnText}>C</Text>
                </Button>
              </Col>
              <Col style={styles.padding}>
                <Button block bordered large dark rounded onPress={this.handleDelete}>
                  <Text style={styles.btnText}>DEL</Text>
                </Button>
              </Col>
            </Grid>
            <Grid>
              <Col style={styles.padding}>
                <Button block rounded large bordered dark onPress={this.handleClick.bind(this, '7')}>
                  <Text style={styles.btnText}>7</Text>
                </Button>
              </Col>
              <Col style={styles.padding}>
                <Button block bordered large dark rounded onPress={this.handleClick.bind(this, '8')}>
                  <Text style={styles.btnText}>8</Text>
                </Button>
              </Col>
              <Col style={styles.padding}>
                <Button block bordered dark large rounded onPress={this.handleClick.bind(this, '9')}>
                  <Text style={styles.btnText}>9</Text>
                </Button>
              </Col>
              <Col style={styles.padding}>
                <Button block rounded bordered large dark onPress={this.handleDivide}>
                  <Text style={styles.btnText}>/</Text>
                </Button>
              </Col>
            </Grid>
            <Grid>
              <Col style={styles.padding}>
                <Button block rounded bordered large dark onPress={this.handleClick.bind(this, '4')}>
                  <Text style={styles.btnText}>4</Text>
                </Button>
              </Col>
              <Col style={styles.padding}>
                <Button block rounded bordered dark large onPress={this.handleClick.bind(this, '5')}>
                  <Text style={styles.btnText}>5</Text>
                </Button>
              </Col>
              <Col style={styles.padding}>
                <Button block rounded bordered large dark onPress={this.handleClick.bind(this, '6')}>
                  <Text style={styles.btnText}>6</Text>
                </Button>
              </Col>
              <Col style={styles.padding}>
                <Button block rounded bordered large dark onPress={this.handleMultipy}>
                  <Text style={styles.btnText}>*</Text>
                </Button>
              </Col>
            </Grid>
            <Grid>
              <Col style={styles.padding}>
                <Button rounded block bordered large dark onPress={this.handleClick.bind(this, '1')}>
                  <Text style={styles.btnText}>1</Text>
                </Button>
              </Col>
              <Col style={styles.padding}>
                <Button block rounded bordered large dark onPress={this.handleClick.bind(this, '2')}>
                  <Text style={styles.btnText}>2</Text>
                </Button>
              </Col>
              <Col style={styles.padding}>
                <Button block rounded bordered large dark onPress={this.handleClick.bind(this, '3')}>
                  <Text style={styles.btnText}>3</Text>
                </Button>
              </Col>
              <Col style={styles.padding}>
                <Button block rounded bordered large dark onPress={this.handleAdd}>
                  <Text style={styles.btnText}>+</Text>
                </Button>
              </Col>
            </Grid>
            <Grid>
              <Grid>
                <Col style={styles.padding}>
                  <Button block rounded bordered large dark onPress={this.handleOperations}>
                    <Text style={styles.btnText}>=</Text>
                  </Button>
                </Col>
              </Grid>
              {/* <Col style={styles.padding}>
                <Button bordered block dark>
                  <Text style={styles.btnText}>.</Text>
                </Button>
              </Col> */}
              <Grid>
                <Col style={styles.padding}>
                  <Button block rounded bordered large dark onPress={this.handleClick.bind(this, '0')}>
                    <Text style={styles.btnText}>0</Text>
                  </Button>
                </Col>
                <Col style={styles.padding}>
                  <Button block bordered dark large rounded onPress={this.handleSubtract}>
                    <Text style={styles.btnText}>-</Text>
                  </Button>
                </Col>
              </Grid>
            </Grid>
          </Content>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    prod: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
      addFirstValue: (firstValue, operator, lastValue, finalValue) => {        
            dispatch(calFirstValue(firstValue, operator, lastValue, finalValue))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)

const styles = StyleSheet.create({
  btnText:{
    fontWeight: 'bold',
    fontSize: 20
  },
  padding:{
    padding:6
  },
  outputText:{
    // flex: 1,
    padding:20, 
    fontWeight: 'bold', 
    fontSize: 55
  },
  values:{
    padding:20, 
    fontWeight: 'bold', 
    fontSize: 34
  }
})