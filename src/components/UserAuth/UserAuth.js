import React, {Component} from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import './UserAuth.css'


class UserAuth extends Component{

    render(){
        let handleInput = this.props.handleInput
        let handleSignup = this.props.handleSignup
        let handleLogin = this.props.handleLogin
        
        let signUpError = this.props.signupMessage
        let loginError = this.props.loginMessage

        return(


            <Modal
            id="loginModal"
            trigger={
            <div className='ui large buttons right floated'>
            <button className='ui button orange'>Login</button><div className='or'></div><button className='ui button black'>Signup</button>
            </div>}>
            
              <Modal.Content >

                        <div className="tc">
                            <h4 className=''>Login</h4>
                            <span className="errorMessage">{loginError}</span>
                            <form className="login ui form" onSubmit={handleLogin}>
                             <div className='two fields'>

                                <input
                                 type="text"
                                 name="email"
                                 onChange={handleInput}
                                 placeholder="Email"
                                />

                                <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handleInput}
                                />

                                </div>

                                <button 
                                className="loginButton"
                                type="submit"
                                >Login
                                </button>

                            </form> 
                        </div>

                   
                <div className="tc">
                    <h4 className=''>Sign Up</h4>
                    <form className='ui form' onSubmit={handleSignup}>
                    <span className="errorMessage">{signUpError}</span>
                    <div className=' fields'>
                        <div className='ui left icon input'>
                        <i className='user icon'></i>
                        <input className=''
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={handleInput}
                        />

                        <input className=''
                         type="password"
                         placeholder="Password"
                         name="password"
                         onChange={handleInput}/>
                         </div>
                         </div>
                         <input className=''
                         type="Submit"
                         value="Sign Up"
                         className="loginBtn"
                         />
                    
                   

                      </form>
                </div>
            </Modal.Content>
        </Modal>

            


                    
            
        )
    }
}


export default UserAuth;


// <Modal
//             id="loginModal"
//             trigger={
//             <div className='ui large buttons right floated'>
//             <button className='ui button orange'>Login</button><div className='or'></div><button className='ui button black'>Signup</button>
//             </div>}>
            
//               <Modal.Header className="modHead"></Modal.Header>
//               <Modal.Content >

//                         <div className="bg-orange mw7 center pa4 br2-ns ba b--black-10 tc">
//                             <h4 className='tc f3'>Login</h4>
//                             <span
//                                 className="errorMessage"
//                                 >{loginError}</span>
//                             <form className="login"
//                             onSubmit={handleLogin}
//                              >
//                              <div className='ui input focus loading fluid'>
//                                 <input
//                                  type="text"
//                                  name="email"
//                                  onChange={handleInput}
//                                  placeholder="Email"
//                                 />
//                                 <input
//                                 type="password"
//                                 placeholder="Password"
//                                 name="password"
//                                 onChange={handleInput}
//                                 />
//                                 </div>
//                                 <button 
//                                 className="loginButton"
//                                 type="submit"
//                                 >Login
//                                 </button>
//                             </form> 
//                         </div>

//                     </Modal.Content>
//                     <Modal.Header></Modal.Header>
//                   <Modal.Content >
//                 <div className="bg-orange mw7 center pa4 br2-ns ba b--black-10 tc">
//                     <h4 className='f3 tc'>Sign Up</h4>
//                       <form
//                       onSubmit={handleSignup}
//                       >
//                       <span
//                        className="errorMessage"
//                        >
//                        {signUpError}
//                        </span>
//                        <div className='ui input focus loading fluid'>
//                         <input className='mr3  ml3'
//                         type="text"
//                         name="email"
//                         placeholder="email"
//                         onChange={handleInput}
//                         />

//                         <input className='mr3 ml3'
//                          type="password"
//                          placeholder="Password"
//                          name="password"
//                          onChange={handleInput}/>
//                          </div>

//                          <input className='mr3 ml3'
//                          type="Submit"
//                          value="Sign Up"
//                          className="loginBtn"
//                          />
                    

//                       </form>
//                 </div>
//             </Modal.Content>
//         </Modal>
