
import React, { Ref } from 'react'
import { TextField } from '@mui/material'
import * as y from "yup"
import { Layout } from './Layout'
import { IPageEvents, PageEventsBase, usePageEvents } from '../../../book'
import useFormik2 from '../../../../hooks/useFormik2'
import { PersonData } from './data'


const schema = y.object<PersonData>({
  name: y.string().required("name is required"),
  age: y.number().min(18, "you must be 18 years old or above").max(100, "only people with 100 years age are allowed"),
  notes: y.string()
})


export function Person(props: unknown, ref: Ref<IPageEvents>) {

  const formik = useFormik2(
    schema,
    {
      name: "",
      age: 18,
      notes: ""
    } as PersonData,
  )

  usePageEvents(ref,
    new class MyClass extends PageEventsBase {
      override onLoad(args: object | string | unknown) {
        formik.setValues(JSON.parse(args as string))
      }
      override onSave(): object | string | unknown {
        return JSON.stringify(formik.values)
      }
      override async onValidate() {
        const ret = await formik.validateForm()
        return Object.keys(ret).length === 0
      }
    })


  return (

    <Layout
      name={<TextField id="name"
        name="name"
        label="Full Name"
        value={formik.values["name"]}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />}
      description={<TextField id="description"
        multiline={true}
        maxRows={5}
        name="description"
        label="Description"
        value={formik.values["description"]}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />}
      error={{
        name: formik.errors["name"] as string,
        description: formik.errors["description"] as string
      }}
    />
  )
}

export default React.forwardRef(Person)


