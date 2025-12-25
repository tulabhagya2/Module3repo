
import React, { useReducer } from 'react'
const initialstate = {
  step: 1,
  formvalues: {
    name: "",
    email: "",
    username: "",
    password: "",
  },
  isSubmitted: false,

}
function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formvalues: {
          ...state.formvalues,
          [action.field]: action.value,
        },
      };
    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,

      }
    case "PREVIOUS_STEP":
      return {
        ...state,
        step: state.step - 1,

      }
    case "SUBMIT_FORM":
      return {
        ...state,
        isSubmitted: true,
      }
    case "RESET_FORM":
      return initialstate;
    default:
      return state;

  }
}


const MultiForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialstate);
  const { step, formvalues, isSubmitted } = state;
  function renderFunction() {


    switch (step) {
      case 1:
        return (
          <>
            <input type="text" placeholder="enter your name" value={formvalues.name} onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "name", value: e.target.value })} /><br></br>
            <input type="text" placeholder="enter your email" value={formvalues.email} onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "email", value: e.target.value })} />
          </>
        )

      case 2:
        return (
          <>
            <input type="text" placeholder="enter your name" value={formvalues.username} onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "username", value: e.target.value })} /><br></br>
            <input type="text" placeholder="enter your name" value={formvalues.password} onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "password", value: e.target.value })} />


          </>

        )
      case 3:
        return (
          <>
            <h3>Review</h3>
            <p><b>Name:</b>{formvalues.name}</p>
            <p><b>Email:</b>{formvalues.email}</p>
            <p><b>Username:</b>{formvalues.username}</p>
          </>
        )
      default:
        return null;

    }
  };
  if (isSubmitted) {

    return (
      <div>
        <h2>submitted successfully</h2>
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>Reset form</button>
      </div>
    )

  }

  return (
    <div>

      <h1>Multi step registration form</h1>
      <p>step {step} out of 3</p>
      {renderFunction()}
      {step > 1 && <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>PREVIOUS</button>}
      {step < 3 && <button onClick={() => dispatch({ type: "NEXT_STEP" })}>NEXT</button>}
      {step === 3 && <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>SUBMIT</button>}

    </div>
  )
}

export default MultiForm
