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

    const splitEven = (string) => {
      const result = []
      string.split('').map((char, index) => {
        const test = checkEven(index)
        if(test) {
          result.push(char)
        }
        return test
      })
      return result
    }

    const splitOdd = (string) => {
      const result = []
      string.split('').map((char, index) => {
        const test = !checkEven(index)
        if(test) {
          result.push(char)
        }
        return test
      })
      return result
    }
        
    const checkTwinsStrings = (originString, destinationString) => {
      // check sizes
      if(originString.length === destinationString.length) {
        //split strings in even & odd indexes, and order them
        const originStringEven = splitEven(originString).sort()
        const originStringOdd = splitOdd(originString).sort()

        const destinationStringEven = splitEven(destinationString).sort()
        const destinationStringOdd = splitOdd(destinationString).sort()

        //And test if arrays are equals
        const testEven = originStringEven.every((char, index) => {
          return char === destinationStringEven[index]
        })

        const testOdd = originStringOdd.every((char, index) => {
          return char === destinationStringOdd[index]
        })

        if(testEven && testOdd){
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
