import { FormikHelpers, FormikValues, useFormik } from "formik"

export function useFormik2<T>(
  schema: object,
  initial: T,
  validate?: (arg: T) => Promise<void>,
  submit?: (v: T, a: FormikHelpers<FormikValues>) => Promise<void>
) {
  const initialValues = initial as FormikValues
  return useFormik({
    onReset(v, h) {
      h.setValues(initialValues)
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: schema,
    initialValues: initialValues,
    validate: (v) => validate?.(v as T),
    onSubmit: (v, a) => {
      if (submit) return submit(v as T, a)

      return new Promise<void>((r) => r())
    }
  })
}

export default useFormik2

