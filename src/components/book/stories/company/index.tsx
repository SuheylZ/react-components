
import React, { Ref } from 'react'
import { Layout } from './Layout'
import { TextField } from '@mui/material'
import useFormik2 from '../../../../hooks/useFormik2'
import CompanyData from './data'
import * as y from "yup"
import { usePageEvents } from '../../hooks/usePageEvents'
import PageEventsBase from '../../PageEventsBase'
import { IPageEvents } from '../../utils/interfaces'

function Company(_: unknown, ref: Ref<IPageEvents>) {
  const formik = useFormik2<CompanyData>(y.object<CompanyData>({
    name: y.string().required("company name is required"),
    address: y.string().max(80, "not more than 80 letters allowed"),
    contact: y.string()
  }), {
    name: "",
    address: "",
    contact: ""
  })

  usePageEvents(ref, new class myEvents extends PageEventsBase {
    override onLoad(arg: unknown): void {
      formik.setValues(JSON.parse(arg as string))
    }
    override onSave() {
      return JSON.stringify(formik.values)
    }
    override async onValidate(): Promise<boolean> {
      const ret = await formik.validateForm()
      return Object.keys(ret).length === 0
    }
  })

  return (
    <Layout
      name={<TextField name="name" value={formik.values["name"]} onChange={formik.handleChange} onBlur={formik.handleBlur} />}
      address={<TextField name="address" value={formik.values["address"]} onChange={formik.handleChange} onBlur={formik.handleBlur} />}
      error={{
        name: formik.errors["name"] as string,
        address: formik.errors["address"] as string
      }}
    />
  )
}

export default React.forwardRef(Company)