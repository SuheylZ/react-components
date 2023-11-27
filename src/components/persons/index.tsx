
import React, { Ref } from 'react'
import { TextField } from '@mui/material'
import * as y from "yup"
import { useFormik } from "formik"
import { Layout } from './Layout'
import { IPageEvents, PageEventsBase, usePageEvents } from '../book'


export type PersonData = {
  name: string
  description: string
}

const schema = y.object({
  name: y.string().required("name is required"),
  description: y.string().max(128, "only 128 letters allowed")
})


export function Person(props: unknown, ref: Ref<IPageEvents>) {

  const formik = useFormik({
    validationSchema: schema,
    initialValues: {
      name: "",
      description: ""
    } as PersonData,
    onSubmit: () => { }
  })

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
        return new Promise<boolean>(r => r(Object.keys(ret).length === 0))
      }
    })


  return (

    <Layout
      name={<TextField id="name"
        name="name"
        label="Full Name"
        value={formik.values.name}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />}
      description={<TextField id="description"
        multiline={true}
        maxRows={5}
        name="description"
        label="Description"
        value={formik.values.description}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />}
      error={{
        name: formik.errors.name,
        description: formik.errors.description
      }}
    />
  )
}

export default React.forwardRef(Person)


