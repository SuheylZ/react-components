/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable @typescript-eslint/no-unused-vars

import React, { Ref, useImperativeHandle } from 'react'
import { TextField } from '@mui/material'
import * as y from "yup"
import { useFormik } from "formik"
import { Layout } from './Layout'
import { IPageHandler } from '../book'
import { usePageHandler } from '../book/hooks/usePageHandler'


export type PersonData = {
  name: string
  description: string
}

const schema = y.object({
  name: y.string().required("name is required"),
  description: y.string().max(128, "only 128 letters allowed")
})


export function Person(props: unknown, ref: Ref<IPageHandler>) {

  const formik = useFormik({
    validationSchema: schema,
    initialValues: {
      name: "",
      description: ""
    } as PersonData,
    validate: (_) => { },
    onSubmit: (_) => { }
  })

  usePageHandler(ref,
    {
      validate: async () => {
        const ret = await formik.validateForm()
        const canContinue = Object.keys(ret).length === 0
        return new Promise<boolean>(r => r(canContinue))
      }
    })


  return (
    <Layout
      name={
        <>
          <TextField id="name"
            name="name"
            label="Full Name"
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.errors.name}
        </>
      }
      description={
        <>
          <TextField id="description"
            multiline={true}
            maxRows={5}
            name="description"
            label="Description"
            value={formik.values.description}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.errors.description}
        </>
      }
    />
  )
}

export default React.forwardRef(Person)



