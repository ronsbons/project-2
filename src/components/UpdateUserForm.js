// import React, { Component } from 'react';

// class UpdateUserForm extends Component {
//   state={
//     user: {
//       userFullName: "",
//       userCity: ""
//     }
//   }

//   onInputChange = (event) => {
//     this.setState({
//       user: event.target.value
//     })
//   }

//   onFormSubmit = (event) => {
//     event.preventDefault()
//     let user = this.state.user
//     this.props.updateUser(user)
//     user: ""
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.onFormSubmit}>
//           <input 
//           onChange={this.onInputChange}
//           type="text"
//           placeholder="Name"
//           value={(this.state.user.userFullName) || ""}
//           />
//           <input 
//           onChange={this.onInputChange}
//           type="text"
//           placeholder="Current City"
//           value={(this.state.user.userCity) || ""}
//           />
//           <button type="submit">Change</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default UpdateUserForm;