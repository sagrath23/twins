import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    let a = [
      'cdab',
      'dcba'
    ]

    let b = [
      'abcd',
      'abcd'
    ]

    const checkEven = (value) => {
      return (value%2 === 0)
    }

    const swapEven = (string, pivot, position) => {
      const evenPosition = ((2*position)+1)
      if(checkEven(pivot + 1) && checkEven(evenPosition + 1)) {
        let tempArr = string.split("")
        let temp = tempArr[pivot]
        tempArr[pivot] = tempArr[evenPosition]
        tempArr[evenPosition] = temp
        return tempArr.join("")
      } 
    }

    const swapOdd = (string, pivot, position) => {
      const oddPosition = ((2*position))
      if(!checkEven(pivot + 1) && !checkEven(oddPosition + 1)) {
        let tempArr = string.split("")
        let temp = tempArr[pivot]
        tempArr[pivot] = tempArr[oddPosition]
        tempArr[oddPosition] = temp
        return tempArr.join("")
      }
    }

    const checkTwinsStrings = (originString, destinationString) => {
      // check sizes
      if(originString.length === destinationString.length) {
        let pivot = 0
        let positionOdd = 1
        let positionEven = 1
        let result = originString
        while (result !== destinationString && pivot <= Math.round(originString.length/2)) {
          if(checkEven(pivot + 1)){
            result = swapEven(result, pivot, positionEven)
            positionEven++
          } else {
            result = swapOdd(result, pivot, positionOdd)
            positionOdd++
          }
          pivot++
        }
        if(result === destinationString){
          return 'YES'
        } else {
          return 'NO'
        }
      } else {
        return 'NO'
      }
    }

    if(a.length === b.length) {
      const result = a.map((originString, index) => {
        let destinationString = b[index]
        return checkTwinsStrings(originString, destinationString)
      })
      console.log(result)
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
