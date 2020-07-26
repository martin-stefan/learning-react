import React from 'react'
import FormComp from './FormComp'

class Form extends React.Component {
  constructor() {
      super()
      this.state = {
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        location: "",
        dRestrictions: {
          isVegan: false,
          isKosher: false, 
          isLacFree: false
        }
      }

      this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type ==="checkbox" ? 
      this.setState(prevState => {
        return {
          dRestrictions: {
            ...prevState.dRestrictions,
            [name]: checked
          }

        }
      }) 
      :
      this.setState({
        [name]: value
      })
  }
  
  render() {
    return (
      <FormComp 
        handleChange={this.handleChange}
        data={this.state}
      />
    )
  }
}

export default Form;