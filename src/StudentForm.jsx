import React from 'react'
import {Formik} from 'formik'
function StudentForm() {

  return (
    <div className='border border-2 border-success p-2 m-2'>
        <h1>StudentForm</h1>
        <Formik 
            initialValues={{
                firstname:'',
                lastname:'',
                graduation:'',
                percentage:''
            }} 
            validate={(values)=>{
                var errors={}
                if(!values.firstname){
                    errors.firstname='First Name is Mandatory'
                }
                if(!values.graduation){
                    errors.graduation='Graduation is Mandatory'
                }
                console.log(errors)
                return errors;
            }} 
            onSubmit={(values)=>{console.log("inside submit",values)}}
        >
            {
                ({values,errors,touched,handleChange,handleBlur,handleSubmit})=>{
                    console.log("touched::",touched)
                    return(
                        <form onSubmit={handleSubmit}>
                            First Name:
                            <input type="text" name="firstname" onBlur={handleBlur} onChange={handleChange} value={values.firstname}
                            className={errors && errors.firstname && touched.firstname && 'border border-danger'}
                            /><br/>
                            <div>
                                {
                                    errors && errors.firstname && touched.firstname && (<b className='text-danger'>{errors.firstname}</b>)
                                }
                            </div>
                            Last Name:<input type="text" name="lastname" onBlur={handleBlur} onChange={handleChange} value={values.lastname}/><br/>
                            Graduation:<input type="text" name="graduation" onBlur={handleBlur} onChange={handleChange} value={values.graduation}/><br/>
                            <div>
                                {
                                    errors && errors.graduation && touched.graduation && (<b>{errors.graduation}</b>)
                                }
                            </div>
                            Percentage:<input type="text" name="percentage" onBlur={handleBlur} onChange={handleChange} value={values.percentage}/><br/>
                            <button type='submit'>Save Students</button>
                        </form>
                    )
                }
            }
        </Formik>
    </div>
  )
}

export default StudentForm