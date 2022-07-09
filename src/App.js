import React from 'react';
import { Formik,Form,Field,ErrorMessage } from 'formik';
import * as yup from 'yup';


const schema = yup.object({
  name:yup.string().required(),

})

const App = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name:"688",
          number:"",
        }}
        validationSchema={schema}

        onSubmit={(values)=>{
          console.log(values);
        }}
      >
        <Form>
          <label>Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
          <label>Number</label>
          <Field type="text" name="number" />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default App