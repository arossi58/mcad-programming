import React from 'react';
import { useForm } from 'react-hook-form';

function NewItemForm({ addCard }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    if (!data.name || !data.price) {
      alert("Please fill in both the Name and Price fields.");
      return;
    }
    addCard(data);
    reset();
  }; 

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="new-item-form">
      <div>
        <label>Name:<span className='required'>*</span> </label>
        <input
          placeholder="Camera name"
          {...register('name', { required: true })}
        />
        {errors.name && <span className='required'>This field is required</span>}
      </div>
      <div>
        <label>Price:<span className='required'>*</span> </label>
        <input
          placeholder="Price e.g., $299"
          {...register('price', { required: true })}
        />
        {errors.price && <span className='required'>This field is required</span>}
      </div>
      <div>
        <label>Image URL:<span className='required'>*</span> </label>
        <input
          placeholder="Image URL"
          {...register('imageURL', {required: true})}
        />
        {errors.imageURL && <span className='required'>This field is required</span>}
      </div>
      <div>
        <label>Key Features: </label>
        <textarea
          placeholder="Key features"
          {...register('keyFeatures')}
        ></textarea>
      </div>
      <div>
        <label>Released Year: </label>
        <input
          placeholder="Released year"
          type="number"
          {...register('releasedYear')}
        />
      </div>
      <div>
        <label>Lens Mount Type: </label>
        <input
          placeholder="Lens Mount Type"
          {...register('lensMountType')}
        />
      </div>
      <div>
        <label>Battery Type: </label>
        <input
          placeholder="Battery Type"
          {...register('batteryType')}
        />
      </div>
      <button type="submit">Add Camera</button>
    </form>
  );
}

export default NewItemForm;
