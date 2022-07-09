import React from 'react';
import { Formik,Form,Field } from 'formik';


const App = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name:"688",
          number:"",
        }}

        onSubmit={(values)=>{
          console.log(values);
        }}
      >
        <Form>
          <label>Name</label>
          <Field type="text" name="name" />
          <label>Number</label>
          <Field type="text" name="number" />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default App