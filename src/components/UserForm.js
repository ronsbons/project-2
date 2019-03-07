import React, { Component } from 'react';

class UserForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Name" />
                        
                    
                    <button type='submit'>Edit</button>
                </form>
            </div>
        );
    }
}

export default UserForm;
