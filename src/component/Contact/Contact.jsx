import React, { Component } from 'react'
import "./Contact.css"

export default class Contact extends Component {
  
  render() {
    return (
      <div className='container'>
       <h1>Contact US</h1>
       <form >
        
        <label>First Name</label>
        <input type="text" name="fname" id="fname" placeholder='First Name'/>
        
        <label >Last Name</label>
        <input type="text" name="lname" id="lname" placeholder='Last Name'/>
        
        <label >Subject</label>
        <input type="text" name="subject" id="subject" placeholder='Subject'/>
        
        <label >Message</label>
        <textarea name="message" id="message" placeholder='Your Message'></textarea>

        <input type="submit" value="Send" />
      </form>
    </div>
    )
  }
}
