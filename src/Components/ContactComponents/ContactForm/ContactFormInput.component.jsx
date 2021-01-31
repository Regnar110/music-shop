import './contactforminput.styles.scss'

const ContactFormInput = ({label, type, value,  ...otherProps}) => {
    return (
        <div className='form-group'>
            {
                type === 'textarea' ? 
                (   
                    <>
                        <textarea className='form-input-textarea' type={type} {...otherProps}/>
                        <label className={`form-textarea-label ${value.length ? 'shrink' : ''}`}>{label}</label>  
                    </>
                )
                :
                (   
                    <>
                        <input className='form-input ' type={type} {...otherProps}/>
                        <label className={`form-label ${value.length ? 'shrink' : '' }`}>{label}</label>  
                    </>
                )
            }

        </div>
    )   
}

export default ContactFormInput;