import { useState } from 'react'
import { useForm } from 'react-hook-form';


function App() {
  const { register, handleSubmit } = useForm();
  const [submittedData, setSubmittedData] = useState("");

  function onSubmit(data) {
    setSubmittedData(data)
  }

  return (
     <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Tell Us About Your Alpaca?</h1>
          <h5>To join the club we will need to gather some information about your lovely aplaca.</h5>
        </div>
        <div>
        <label>First Name:</label>
        <input type="text" {...register('firstName')} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" {...register('lastName')} />
        </div>
        <div>
          <label>Street Address:</label>
          <input type="text" {...register('streetAddress')} />
        </div>
        <div>
          <label>State/Province:</label>
          <input type="text" {...register('stateProvince')} />
        </div>
        <div>
          <label>Country:</label>
          <input type="text" {...register('country')} />
        </div>
        <div>
          <label>Favorite Alpaca Colors:</label>
          <div>
            <label>
              <input
                type="checkbox"
                value="White"
                {...register('favoriteAlpacaColors')}
              />{' '}
              White
            </label>
            <label>
              <input
                type="checkbox"
                value="Brown"
                {...register('favoriteAlpacaColors')}
              />{' '}
              Brown
            </label>
            <label>
              <input
                type="checkbox"
                value="Black"
                {...register('favoriteAlpacaColors')}
              />{' '}
              Black
            </label>
            <label>
              <input
                type="checkbox"
                value="Gray"
                {...register('favoriteAlpacaColors')}
              />{' '}
              Gray
            </label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>

      <div className="data">
        
        <div className="aplaca-card"
              style={
                !submittedData
                  ? { display: "none" }
                  : { display: "block" }
              }>
          <h2>Success!!</h2>
           <p>Your Alpaca, 
            {` ${submittedData.firstName} ${submittedData.lastName}`} 
            is from {`${submittedData.streetAddress}, 
                    ${submittedData.stateProvince}, 
                    ${submittedData.country}`}. {submittedData.firstName} has a gorgeous {submittedData.favoriteAlpacaColors} coat of fur! Your data has been collected, welcome to the club!!
            </p>
        </div>
        
      </div>
    </div>
  )
}

export default App
