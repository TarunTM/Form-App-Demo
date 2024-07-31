import React, { useState } from 'react'

function App () {

  const[formData,setFormData] = useState({firstName:"" ,lastName:"" ,email:"", country:"India", address:"",city:"",state:"",postalCode:"",comment:false ,candidate:false ,offer:false ,pushNotification:"" });

  function changeHandler(event){
    const {name , value, checked, type } = event.target; 
    setFormData( (prev) =>({...prev , [name]:type === "checkbox" ? checked : value}));
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className='w-full md:max-w-[50%] mx-auto shadow p-8'>
      <form onSubmit={submitHandler} className='space-y-2'>
        <label htmlFor='firstName' className='text-sm font-medium leading-6 text-gray-900'>First name</label>
        <br/>
        <input type="text" placeholder='Tarun' name='firstName' id='firstName' value={formData.firstName} onChange={changeHandler} 
          className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400'
        />

        <br/>

        <label htmlFor='lastName' className='text-sm font-medium leading-6 text-gray-900'>Last name</label>
        <br/>
        <input type="text" placeholder='Madan' name='lastName' id='lastName' value={formData.lastName} onChange={changeHandler}
          className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400'
        />

        <br/>

        <label htmlFor='email' className='text-sm font-medium leading-6 text-gray-900'>Email address</label>
        <br/>
        <input type="text" placeholder='abcd@gmail.com' name='email' id='email' value={formData.email} onChange={changeHandler}
          className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400'
        />

        <br/>

        <label htmlFor='country' className='text-sm font-medium leading-6 text-gray-900'>Country</label>
        <br/>
        <select id="country" name="country" value={formData.country} onChange={changeHandler} className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400'>
          <option> India </option>
          <option> United States </option>
          <option> Canada </option>
          <option> Mexico </option>
        </select>

        <br/>

        <label htmlFor='address' className='text-sm font-medium leading-6 text-gray-900'>Street address</label>
        <br/>
        <input type="text" placeholder='295,XYZ,Nagpur' name='address' id='address' value={formData.address} onChange={changeHandler}
          className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400'
        />

        <br/>

        <label htmlFor='city' className='text-sm font-medium leading-6 text-gray-900'>City</label>
        <br/>
        <input type="text" placeholder='Nagpur' name='city' id='city' value={formData.city} onChange={changeHandler}
          className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400'
        />

        <br/>

        <label htmlFor='state' className='text-sm font-medium leading-6 text-gray-900'>State / Province</label>
        <br/>
        <input type="text" placeholder='Maharashtra' name='state' id='state' value={formData.state} onChange={changeHandler}
          className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400'
        />

        <br/>

        <label htmlFor='postalCode' className='text-sm font-medium leading-6 text-gray-900'>ZIP / Postal code</label>
        <br/>
        <input type="text" placeholder='440012' name='postalCode' id='postalCode' value={formData.postalCode} onChange={changeHandler}
          className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400'
        />

        <br/>

       <fieldset>
        <legend className='text-sm font-semibold leading-6 text-gray-900'>By Email</legend>
        <div className='mt-4 space-y-2'>
            <div className='flex'>
              <input type='checkbox' name='comment' id='comment' checked={formData.comment} onChange={changeHandler} className='h-4 w-4 rounded'></input>
              <div className='ml-3 text-sm leading-6 -mt-1'>
                <label htmlFor='comment' className='font-medium text-gray-900'>Comments</label>
                <p className='text-gray-500'>Get notified when someones posts a comment on a posting.</p>
              </div>
            </div>

            
            
            <div className='flex'>
              <input type='checkbox' name='candidate' id='candidate' checked={formData.candidate} onChange={changeHandler} className='h-4 w-4 rounded'></input>
              <div className='ml-3 text-sm leading-6 -mt-1'>
                <label htmlFor='candidate' className='font-medium text-gray-900'>Candidates</label>
                <p className='text-gray-500'>Get notified when a candidate applies for a job.</p>
              </div>
            </div>
            
          
            
            <div className='flex'>
              <input type='checkbox' name='offer' id='offer' checked={formData.offer} onChange={changeHandler} className='h-4 w-4 rounded'></input>
              <div className='ml-3 text-sm leading-6 -mt-1'>
                <label htmlFor='offer' className='font-medium text-gray-900'>Offers</label>
                <p className='text-gray-500'>Get notified when a candidate accepts or rejects an offer.</p>
              </div>
            </div>
        </div>
        

       </fieldset>

       <fieldset>
          <legend className='text-sm font-semibold leading-6 text-gray-900'>Push Notifications</legend>
          <p className='text-sm text-gray-500'>These are delivered via SMS to your mobile phone.</p>

          <div className='mt-4 space-y-2'>
              <input type='radio' name='pushNotification' id='pushEverything' value="Everything" onChange={changeHandler} className='h-4 w-4 '></input>
              <label htmlFor='pushEverything' className='ml-3 text-sm font-medium leading-6 text-gray-900'>Everything</label>

              <br/>

              <input type='radio' name='pushNotification' id='pushEmail' value="Same as email" onChange={changeHandler} className='h-4 w-4 '></input>
              <label htmlFor='pushEverything' className='ml-3 text-sm font-medium leading-6 text-gray-900 '>Same as email</label>

              <br/>

              <input type='radio' name='pushNotification' id='pushNothing' value="No push notifications" onChange={changeHandler} className='h-4 w-4 '></input>
              <label htmlFor='pushNothing' className='ml-3 text-sm font-medium leading-6 text-gray-900 '>No push notifications</label>
          </div>
          
       </fieldset>
      
      <button className='bg-blue-500 text-white font-bold rounded py-2 px-4' >Save</button>
      </form>
    </div>
  )
}

export default App