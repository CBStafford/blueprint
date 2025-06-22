import { useForm } from "react-hook-form"
import { setTrip } from "../../../api";


export default function CreateTripForm() {


  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = async (data) => {
    const res = await setTrip(data); 

    // console.log(data.address + "!!!!!!!!!!!!!!!!!!!!")
  
  }
  // const onSubmit = async (data) => {
  //   const res = await setTrip(data); 
  //       // if (res.status === 200) {
  //       //   router.refresh()
  //       //   router.push('/dashboard') 
  //       // } 
  // }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input type="number" style={{border: '1px solid rgba(0, 0, 0, 0.05)'}}
        {...register("requestedByID", { required: true })}
        aria-invalid={errors.requestedByID ? "true" : "false"}
      />
      {errors.requestedByID?.type === "required" && (
        <p role="alert">Requested by ID is required</p>
      )}

      <input style={{border: '1px solid rgba(0, 0, 0, 0.05)'}} placeholder="contactName"
        {...register("contactName", { required: "Contact name is required" })}
        aria-invalid={errors.contactName ? "true" : "false"}
      />
      {errors.contactName && <p role="alert">{errors.contactName.message}</p>}

      <input type="tel" style={{border: '1px solid rgba(0, 0, 0, 0.05)'}} placeholder="000-555-0000"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
        {...register("contactPhone", { required: "Phone number is required"  })}
        aria-invalid={errors.contactPhone ? "true" : "false"}
      />
      {errors.contactPhone && <p role="alert">{errors.contactPhone.message}</p>}

      <input type="email" style={{border: '1px solid rgba(0, 0, 0, 0.05)'}} placeholder="contactEmail"
        {...register("contactEmail", { required: "Email address is required" })}
        aria-invalid={errors.contactEmail ? "true" : "false"}
      />
      {errors.contactEmail && <p role="alert">{errors.contactEmail.message}</p>}
    
      <hr />

      <input style={{border: '1px solid rgba(0, 0, 0, 0.05)'}} placeholder="groupTitle"
        {...register("groupTitle", { required: "Group Title name is required" })}
        aria-invalid={errors.groupTitle ? "true" : "false"}
      />
      {errors.groupTitle && <p role="alert">{errors.groupTitle.message}</p>}

        <select {...register("type")}>
          <option value="athletics">Athletics</option>
          <option value="fieldtrip">Fieldtrip</option>
          <option value="other">other</option>
        </select>
      {errors.type && <p role="alert">{errors.type.message}</p>}


      <hr />

      <input style={{border: '1px solid rgba(0, 0, 0, 0.05)'}} placeholder="destination"
        {...register("destination", { required: "Destinationis required" })}
        aria-invalid={errors.destination ? "true" : "false"}
      />
      {errors.contactName && <p role="alert">{errors.contactName.message}</p>}

      <input style={{border: '1px solid rgba(0, 0, 0, 0.05)'}} placeholder="address"
        {...register("address", { required: "Address is required" })}
        aria-invalid={errors.address ? "true" : "false"}
      />
      {errors.contactName && <p role="alert">{errors.contactName.message}</p>}

      {/* <input style={{border: '1px solid rgba(0, 0, 0, 0.05)'}} placeholder="suite"
        {...register("suite")}
        aria-invalid={errors.suite ? "true" : "false"}
      />
      {errors.apt && <p role="alert">{"Invalid Apt/Unit value"}</p>} */}

      {/* <input type="text" id="apt" name="apt" value="t"></input> */}

      <input style={{border: '1px solid rgba(0, 0, 0, 0.05)'}} placeholder="city"
        {...register("city", { required: "City is required" })}
        aria-invalid={errors.city ? "true" : "false"}
      />
      {errors.city && <p role="alert">{errors.city.message}</p>}

      <input style={{border: '1px solid rgba(0, 0, 0, 0.05)'}} placeholder="state"
        {...register("state", { required: true, maxLength: 2 })}
        aria-invalid={errors.state ? "true" : "false"}
      />
      {errors.state && <p role="alert">{"State is Required"}</p>}

      <input style={{border: '1px solid rgba(0, 0, 0, 0.05)'}} placeholder="zip" pattern="[0-9]{5}"
        {...register("zip", { required: true })}
        aria-invalid={errors.zip ? "true" : "false"}
      />
      {errors.zip && <p role="alert">{"Zip Code is required" }</p>}

      <input style={{border: '1px solid rgba(0, 0, 0, 0.05)'}} placeholder="YYYY-MM-DD" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
        {...register("date", { required: true })}
        aria-invalid={errors.date ? "true" : "false"}
      />
      {errors.date && <p role="alert">{"Date of the trip is required" }</p>}

        <select {...register("pickupLocation")}>
          <option value="Arches (Middle School Office)">Arches (Middle School Office)</option>
          <option value="Athletics Center">Athletics Center</option>
          <option value="Hockey Ring">Dorms</option>  
          <option value="Hockey Ring">Hockey Ring</option>         
          <option value="Lower School">Lower School</option>   
          <option value="Pender Circle">Pender Circle</option>
          <option value="Performance Arts">Performance Arts</option>
          <option value="Tutor House">Tutor House</option>  
        </select>
      {errors.pickupLocation && <p role="alert">{errors.pickupLocation.message}</p>}

      <input style={{border: '1px solid rgba(0, 0, 0, 0.05)'}} placeholder="00:00" pattern="[0-9]{2}:[0-9]{2}"
        {...register("leaveTime", { required: true })}
        aria-invalid={errors.leaveTime ? "true" : "false"}
      />
      {errors.leaveTime && <p role="alert">{"Departure time is required" }</p>}

      <input style={{border: '1px solid rgba(0, 0, 0, 0.05)'}} placeholder="00:00" pattern="[0-9]{2}:[0-9]{2}"
        {...register("returnTime", { required: true })}
        aria-invalid={errors.returnTime ? "true" : "false"}
      />
      {errors.returnTime && <p role="alert">{"Return time is required" }</p>}

      <input type="number" style={{border: '1px solid rgba(0, 0, 0, 0.05)'}} placeholder="numStudents" 
        {...register("numStudents", { required: true , maxLength: 3})}
        aria-invalid={errors.numStudents ? "true" : "false"}
      />
      {errors.numStudents && <p role="alert">{"Number of Students is required" }</p>}

      <input type="number" style={{border: '1px solid rgba(0, 0, 0, 0.05)'}} placeholder="numChaperones" 
        {...register("numChaperones", { required: true , maxLength: 3})}
        aria-invalid={errors.numChaperones ? "true" : "false"}
      />
      {errors.numChaperones && <p role="alert">{"Number of Chaperones is required" }</p>}

      <input style={{border: '1px solid rgba(0, 0, 0, 0.05)'}} placeholder="equipment"
        {...register("equipment")}
      />

      <hr />

      <input type="number" style={{border: '1px solid rgba(0, 0, 0, 0.05)'}} placeholder="foodStops" 
        {...register("foodStops", { required: true , maxLength: 1})}
      />
      {errors.foodStops && <p role="alert">{"Number of food stops is required. If there are none, put 0 (zero)" }</p>}

      <textarea  style={{border: '1px solid rgba(0, 0, 0, 0.05)'}} placeholder="foodStopsDetail"
        {...register("foodStopsDetail")}
      />

      <textarea  type="textarea" style={{border: '1px solid rgba(0, 0, 0, 0.05)'}} placeholder="notes"
        {...register("notes")}
      />

      <input type="submit" />
    </form>
  )
}