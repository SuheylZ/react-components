# Experimental React Components 

This project made with Vite, a new build system for various JS libraries. You can learn more about it at [Vite](https://vitejs.dev/). All the components use [MUI](https://mui.com/). This library contains the following components

- ### Book 
  A wizard like interface where components are displayed one at a time and can be navigated by using the back and next buttons provided. Clicking the next button will trigger the validation so unless the errors are corrected, you will not be able to navigate to the other component i.e. the page of the book. This is how it is used. 

```ts
    <Book title="My Book">
      <Page id="1" title="Page 1" component={ <Person />}       />
      <Page id="2" title="Page 2" component={ <>Second Page</>} />
      <Page id="3" title="Page 3" component={ <>Third Page</> } />
    </Book>
```

 If you want the validation to be invoked when next button is pressed. use the `usePageRef()` and pass the ref to your component as forwarded ref, and pass it to the page to connect it to the Book.  

In the page where you use the book:
```ts
    const ref = usePageRef()
 
    return (
      <Book title="My Book">
        <Page id="1" title="Page 1" component={ <Person ref={ref} />} handler={ref} />
        <Page id="2" title="Page 2" component={ <>Second Page</>} />
        <Page id="3" title="Page 3" component={ <>Third Page</> } />
      </Book>
    )
```

In the component which is displayed on the page, use the `usePageHandler()`

```ts
export function Person(props: unknown, ref: Ref<IPageHandler>) {

  const formik = useFormik({
    validationSchema: schema,
    initialValues: {
      name: "",
      description: ""
    } as PersonData,
    onSubmit: () => { }
  })

  usePageHandler(ref,
    new class MyEvents extends PageEventsBase{
      override async validate(){
        const ret = await formik.validateForm()
        return new Promise<boolean>(r => r(Object.keys(ret).length === 0))  //if the error object is empty? go next!
      }
    })
```

if you want to save the data of the component, use the `save():unknown` and `load(object:unknown):void` like below

```ts
export function Person(props: unknown, ref: Ref<IPageHandler>) {

   // other code formik etc

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
```