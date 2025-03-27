import { useState } from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [submittedData, setSubmittedData] = useState("");

  function onSubmit(data) {
    setSubmittedData(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Tell Us About Your Alpaca?</h1>
          <h5>
            To join the club we will need to gather some information about your
            lovely alpaca.
          </h5>
        </div>
        <div>
          <label htmlFor="firstName">First Name:*</label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", {
              required: "First Name is required",
            })}
          />
          {errors.firstName && <p className="error">{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="lastName">Last Name:*</label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", {
              required: "Last Name is required",
            })}
          />
          {errors.lastName && <p className="error">{errors.lastName.message}</p>}
        </div>
        <div>
          <label htmlFor="streetAddress">Street Address:*</label>
          <input
            type="text"
            id="streetAddress"
            {...register("streetAddress", { 
              required: "Street Address is required" })}
          />
          {errors.streetAddress && <p className="error">{errors.streetAddress.message}</p>}
        </div>
        <div>
          <label htmlFor="stateProvince">State/Province:*</label>
          <input
            type="text"
            id="stateProvince"
            {...register("stateProvince", { 
              required: "State/Province is required" })}
          />
          {errors.stateProvince && <p className="error">{errors.stateProvince.message}</p>}
        </div>
        <div>
          <label htmlFor="country">Country:*</label>
          <input
            type="text"
            id="country"
            {...register("country", { 
              required: "Country is required" })}
          />
          {errors.country && <p className="error">{errors.country.message}</p>}
        </div>
        <div>
          <label>Your Alpaca Colors:</label>
          <div>
            
            <label>
              <input
                type="checkbox"
                value="White"
                {...register("favoriteAlpacaColors")}
              />{" "}
              White
            </label>
            <label>
              <input
                type="checkbox"
                value="Brown"
                {...register("favoriteAlpacaColors")}
              />{" "}
              Brown
            </label>
            <label>
              <input
                type="checkbox"
                value="Black"
                {...register("favoriteAlpacaColors")}
              />{" "}
              Black
            </label>
            <label>
              <input
                type="checkbox"
                value="Gray"
                {...register("favoriteAlpacaColors")}
              />{" "}
              Gray
            </label>
          </div>
          {errors.favoriteAlpacaColors && (
            <p>{errors.favoriteAlpacaColors.message}</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>

      <div className="data">
        <div
          className="aplaca-card"
          style={!submittedData ? { display: "none" } : { display: "block" }}
        >
          <h2>Success!!</h2>
          <p>
            Your Alpaca, {` ${submittedData.firstName} ${submittedData.lastName} `}
            is from {`${submittedData.streetAddress}, ${submittedData.stateProvince}, ${submittedData.country}`}.
            {submittedData.firstName} has a gorgeous{" "}
            {submittedData.favoriteAlpacaColors} coat of fur! Your data has been
            collected, welcome to the club!!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
