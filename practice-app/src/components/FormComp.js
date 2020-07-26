import React from 'react'

function FormComp(props) {
  return (
    <main>
        <form>
          <input 
            placeholder="First Name" 
            name="firstName"
            value={props.data.firstName}
            onChange={props.handleChange}
          />
          <br />
          <input 
            placeholder="Last Name"
            name="lastName"
            value={props.data.lastName} 
            onChange={props.handleChange}

          />
            
          <br />
          <input 
            placeholder="Age" 
            name="age"
            value={props.data.age}
            onChange={props.handleChange}

          />
          <br />
          
          {/* Create radio buttons for gender here */}
          <br />
          <label>
            <input 
              type="radio"
              name="gender"
              value="male"
              checked={props.data.gender === "male"}
              onChange={props.handleChange}

            />Male
          </label>
          <label>
            <input 
              type="radio"
              name="gender"
              value="female"
              checked={props.data.gender === "female"}
              onChange={props.handleChange}

            />Female
          </label>
          <br />

          <label>Location
            <select 
              name="location" 
              value={props.data.location}
              onChange={props.handleChange}
            >
              <option value="">--Select a location--</option>
              <option value="Boston">Boston</option>
              <option value="New York">New York</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Washington D.C.">Washington D.C.</option>
            </select>
            
          </label>

          <br />

          <label>
            <input 
              type="checkbox"
              name="isVegan"
              onChange={props.handleChange}
              checked={props.data.dRestrictions.isVegan}
            /> Vegan?
          </label>

          <label>
            <input 
              type="checkbox"
              name="isKosher"
              onChange={props.handleChange}
              checked={props.data.dRestrictions.isKosher}
            /> Kosher?
          </label>

          <label>
            <input 
              type="checkbox"
              name="isLacFree"
              onChange={props.handleChange}
              checked={props.data.dRestrictions.isLacFree}
            /> Lactose Free?
          </label>
          <br />
          
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {props.data.firstName} {props.data.lastName}</p>
        <p>Your age: {props.data.age}</p>
        <p>Your gender: {props.data.gender}</p>
        <p>Your destination: {props.data.location}</p>
        <p>
            Your dietary restrictions: 
            <br />
            Vegan: {props.data.dRestrictions.isVegan ? "Yes " : "No "}
            <br />
            Kosher: {props.data.dRestrictions.isKosher ? "Yes " : "No "} 
            <br />
            Lactose Free: {props.data.dRestrictions.isLacFree ? "Yes " : "No "} 
        </p>
    </main>
  )
}

export default FormComp