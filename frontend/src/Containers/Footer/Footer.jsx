import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { images } from '../../Constants'
import { AppWrap, MotionWrap } from '../../Wrapper'
import { urlFor, client } from '../../client'
import './footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({...formData, [name]: value})
  }

  const handleSubmt = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .then(() => {
        setLoading(false)
        setIsFormSubmitted(true)
      })
  }
  
  return (
    <>
        <h2 className = 'head-text'>Have a Coffe and Chat with Me</h2>

        <div className = 'app__footer-cards'>
            <div className = 'app__footer-card'>
                <img src = {images.email} alt = 'email' />
                <a href = 'mailto:reghardt7@gmail.com' className = 'p-text'>reghardt7@gmail.com</a>
            </div>
            <div className = 'app__footer-card'>
                <img src = {images.mobile} alt = 'mobile' />
                <a href = 'tel: 0763421232' className = 'p-text'>0763421232</a>
            </div>
        </div>

        { !isFormSubmitted 
            ? <div className = 'app__footer-form app__flex'> 
                  <div className = 'app__flex'>
                      <input className = 'p-text' type = 'text' placeholder = 'Your Name' value = {name} name = 'name' onChange = {handleChangeInput}/>
                  </div>
                  <div className = 'app__flex'>
                      <input className = 'p-text' type = 'email' placeholder = 'Your Email' name = 'email' value = {email} onChange = {handleChangeInput}/>
                  </div>  
                  <div>
                      <textarea
                        className = 'p-text'
                        placeholder = 'Your Message'
                        value = {message}
                        name = 'message'
                        onChange = {handleChangeInput}
                      /> 
                  </div>
                  <motion.button 
                    type = 'button' 
                    className = 'p-text' 
                    onClick = {handleSubmt} 
                    whileHover = {{ scale: [1, 1.1] }}
                    transition = {{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    { loading ? 'Sending' : 'Send Message'}
                  </motion.button>  
              </div> 
            : <div>
                    <h3 className = 'head-text' id = 'thank-you'>Thank You for Getting In Touch</h3>
              </div>
        }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
