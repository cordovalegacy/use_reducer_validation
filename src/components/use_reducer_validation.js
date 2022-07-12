import {useReducer} from 'react';

const initialState = {
    firstName: {
        value: '',
        error: ''
    },

    lastName: {
        value: '',
        error: ''
    },

    emailAddress: {
        value:'',
        error: ''
    },
    hasBeenSubmitted: false
}

const regex =  (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

const reducer = (state, action) => {
    switch (action.type) {
        case 'setFirstName':
            return {
                ...state,
                firstName: {
                    ...state.firstName,
                value: action.payload
                }
            }
            case 'setFirstNameError':
                return {
                    ...state,
                    firstName: {
                        ...state.firstName,
                    error: action.payload
                    }
                }
        case 'setLastName':
            return {
                ...state,
                lastName: {
                    ...state.lastName,
                value: action.payload    
                }
            }
        case 'setLastNameError':
            return {
                ...state,
                lastName: {
                    ...state.lastName,
                error: action.payload    
                }
            }
        case 'setEmailAddress':
            return {
                ...state,
                emailAddress: {
                        ...state.emailAddress,
                    value: action.payload
                }
            }
            case 'setEmailAddressError':
                return {
                    ...state,
                    emailAddress: {
                            ...state.emailAddress,
                        error: action.payload
                    }
                }
        case 'setSubmittedBoolean':
            return {
                ...state,
                hasBeenSubmitted: action.payload
            }
        default:
            return state;
    }
}

export default() => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleFirstNameChange = (e) => {
//
        if(e.target.value.length < 2){
        dispatch({
            type: 'setFirstNameError',
            payload: "Field requires two characters or more"
        });
    } else {
        dispatch({
            type: "setFirstNameError",
            payload: ""
        });
    }
        dispatch({
            type: 'setFirstName',
            payload: e.target.value
        })
    }
//
    const handleLastNameChange = (e) => {
        
        if(e.target.value.length < 2){
            dispatch({
                type: "setLastNameError",
                payload: "Field requires two characters or more"
            });
        } else {
            dispatch({
                type:"setLastNameError",
                payload: ""
            });
        }
        dispatch({
            type: 'setLastName',
            payload: e.target.value
        });
    }
//
    const handleEmailAddressChange = (e) => {

        if(state.emailAddress.value !== regex){
            dispatch({
                type: 'setEmailAddressError',
                payload: "Must be a valid email address"
            });
        }else{
            dispatch({
                type: 'setEmailAddressError',
                payload: ''
            });
        }
        dispatch({
            type: 'setEmailAddress',
            payload: e.target.value
        })
    }
//
    const handleHasBeenSubmitted = (e) => {

        if({handleHasBeenSubmitted} == true){
            dispatch({
                type:"setSubmittedBoolean",
                payload: "Your form has been submitted!"
            });
        }
        e.preventDefault();
        dispatch({
            type: 'setSubmittedBoolean',
            payload: true
        })
    }
//

return(
    <form onSubmit={handleHasBeenSubmitted}>
        <h1>{state.hasBeenSubmitted.value}</h1>
    <div id="first-name">
    <label htmlFor="firstName"> First Name: </label>
    <input
        type = "text"
        id = "firstName"
        value={state.firstName.value}
        onChange={(e) => handleFirstNameChange(e)}
        />
    </div>

    <p>{state.firstName.error}</p>
    
    <div id="last-name">
    <label htmlFor="lastName"> Last Name: </label>
    <input
        type = "text"
        id = "lastName"
        value={state.lastName.value}
        onChange={(e) => handleLastNameChange(e)} 
        />
    </div>

    <p>{state.lastName.error}</p>

    <div id ="email-address">
    <label htmlFor="emailAddress"> Email Address: </label>
    <input
        type = "text"
        id = "emailAddress"
        value={state.emailAddress.value}
        onChange={(e) => handleEmailAddressChange(e)} 
        />
    </div>

    <p>{state.emailAddress.error}</p>

    <div>
        <input 
        type="submit"
        id="submit-btn"
        onClick={(e) => handleHasBeenSubmitted}
        />
    </div>
    </form>
    )}
