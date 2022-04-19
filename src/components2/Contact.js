import React, {useState,useEffect} from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'

const initialValues = {
  name:'',
  email:'',
  comment:''
}


const validationSchema = Yup.object({
    name:Yup.string().required('Required!'),
    email:Yup.string().required('Required!').email('Invalid email format!'),
    comment:Yup.string().required('Required!')
})

function Contact() {
  const [isMessgSumitted, setIsMessgSumitted] = useState(null)
  const [isMessgAdded, setisMessgAdded] = useState(null)
  const [userName, setUserName] = useState('')

  const onSubmit = (values,form) => {
    console.log('values',values)
    setIsMessgSumitted(true)
    setisMessgAdded(true)
    setUserName(values.name)
    form.resetForm()
    console.log(form)
  }
  useEffect(() => {
    setTimeout(() => {
      setIsMessgSumitted(false)
      setisMessgAdded(false)
    },10000)
    console.log('is submited?',isMessgSumitted)
  },[isMessgSumitted])
  return (
    <div className='flex flex-wrap bg-black'>
      <div className='md:w-[750px] my-4 mx-4 md:mx-10'>
          <h1 className='text-white text-center text-3xl tracking-wider pt-6'>Contact Us</h1>
          <p className='tracking-wider text-center'>We'd love to hear from you! Send us a question or comment with the form below and we'll be in touch with you as soon as possible.</p>
          <div>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}>
              <Form>
                <div className='md:flex md:justify-around mt-6'>
                  <div className='form-control md:pr-4'>
                    <label htmlFor='name' className='label'>Full Name</label>
                    <Field type='text' name='name' className='formEleStyles' />
                    <ErrorMessage name='name'>
                      {
                        errorMsg => {
                          return (
                            <div className='flex mt-2 items-center'>
                              <img src={`${process.env.PUBLIC_URL}/images/icons/error.png`} className='flex-shrink-0 mr-2 w-[15px] h-[15px]' alt='logo'/>
                              <span className='error'>{errorMsg}</span>
                            </div>
                          )
                        }
                      }
                    </ErrorMessage>
                  </div>
                  <div className='form-control md:pl-4'>
                    <label htmlFor='email' className='label'>E-mail</label>
                    <Field type='text' name='email' className='formEleStyles'/>
                    <ErrorMessage name='email' className='error'>
                      {
                        errorMsg => {
                          return (
                            <div className='flex mt-2 items-center'>
                              <img src={`${process.env.PUBLIC_URL}/images/icons/error.png`} className='flex-shrink-0 mr-2 w-[15px] h-[15px]' alt='logo'/>
                              <span className='error'>{errorMsg}</span>
                            </div>
                          )
                        }
                      }
                    </ErrorMessage>
                  </div>
                </div>
                <div className='form-control'>
                  <label htmlFor='comment' className='label'>Message</label>
                  <Field as='textarea' name='comment' placeholder='Message' className='border-2 border-orange-400 md:border-green-400 p-4 w-full md:h-[130px] rounded-md'/>
                  <ErrorMessage name='comment' className='error'>
                    {
                      errorMsg => {
                        return (
                          <div className='flex mt-2 items-center'>
                            <img src={`${process.env.PUBLIC_URL}/images/icons/error.png`} className='flex-shrink-0 mr-2 w-[15px] h-[15px]' alt='logo'/>
                            <span className='error'>{errorMsg}</span>
                          </div>
                        )
                      }
                    }
                  </ErrorMessage>
                </div>
                <div className='flex flex-wrap justify-between mt-2 items-center'>
                  <button className='transition ease-in-out duration-500 uppercase border-2 border-orange-400 md:border-green-400 bg-white rounded-full py-2 px-4 mr-4 hover:bg-orange-400 md:hover:bg-green-400 hover:text-white' type='submit'>
                    submit
                  </button>
                  <div className='flex-grow'>
                    <div className={`${isMessgSumitted ? 'block' : 'hidden'} relative animate-pulse duration-200 mt-2 md:mt-0 bg-gradient-to-t ${isMessgSumitted ? 'from-green-400 via-green-400 to-green-600 rounded-lg' : 'from-red-400 via-red-400 to-red-600 rounded-lg'} text-center text-white`}>
                      <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setIsMessgSumitted(false)} className="text-red h-4 w-4 absolute right-4 top-2 hover:shadow-xl hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                          {
                            isMessgAdded ? <p className='p-2 text-sm'>Mr/Mrs. {userName}, your message has been submitted sucessfully!</p> : <p className='p-2 text-sm'>Something went wrong! Please try agian.</p>
                          }
                    </div>  
                  </div> 
                </div>
              </Form>
            </Formik>
          </div>
      </div>
      <div className='bg-gradient-to-bl from-green-400 via-green-200 to-orange-400  flex-grow '>
      <div className='md:w-[400px] md:h-[400px] px-4 py-6 mx-auto'>
            <h1 className='uppercase text-black tracking-wider text-xl font-semibold md:mt-4'>Find us</h1>
            <p className='mb-4 text-black tracking-wider'>With more then 40 offices in the United States, We are close than you think. We also offer a wide varienty of online support services through our website such as email support, live chat, and ability to submit a case online. And if you ever require emergency services, we are avaliable 24 hours a day, seven days a week.</p>

            <a className='px-4 py-2 rounded-md hover:cursor-pointer bg-orange-400 md:bg-green-400 text-white uppercase shadow-xl hover:shadow-inner'>location</a>
        </div>
      </div>
    </div>
  )
}

export default Contact