import React, { Component } from 'react'
import LifecycleB from './LifecycucleB'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Aneeba'
      }

      console.log('Lifecycle constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('lifecycleA getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

  render() {
    console.log('lifecycleA render')
    return (
      <div>
        <div>LifecycleA</div>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA