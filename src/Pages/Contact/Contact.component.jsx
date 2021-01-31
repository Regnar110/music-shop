import { useState } from 'react'

import './contact.styles.scss'
import BreakFromTop from '../../Components/BreakFromTop/BreakFromTop.component'
import ContactFormInput from '../../Components/ContactComponents/ContactForm/ContactFormInput.component'
import CustomButton from '../../Components/CustomButton/CustomButton.component'

const Contact = () => { //NAME, EMAIL, SUBJECT, TEXT

    const [sender, setSender] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit message')
    }

    const handleFieldChange = event => {
        
        const targetName = event.target.name
        if(targetName === 'sender') {
            setSender(event.target.value)
        }else if(targetName === 'email') {
            setEmail(event.target.value)
        }else if(targetName === 'subject') {
            setSubject(event.target.value)
        } else if(targetName === 'message') {
            setMessage(event.target.value)
        }
    }

    return(
        <div className='contact'>
            <BreakFromTop breakHeight={'120px'}/>
            <h2>Send us a message</h2>
            <form className='contact-form' onSubmit={handleSubmit}>
                <ContactFormInput name='sender' label={'Name'} type='text' value={sender} onChange={handleFieldChange} required/>
                <ContactFormInput name='email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" label={'E-mail'} type='email' value={email} onChange={handleFieldChange} required/>
                <ContactFormInput name='subject' label={'Subject'} type='text' value={subject} onChange={handleFieldChange} required/>
                <ContactFormInput name='message' label={'Message'} type='textarea' value={message} onChange={handleFieldChange} required/>
                <CustomButton name='Send message' type='submit'/>
            </form>
            
        </div>
    )
}

export default Contact;