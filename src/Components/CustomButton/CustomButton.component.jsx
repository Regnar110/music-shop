import './custombutton.styles.scss'
import GoogleButtonSvg from '../../Assets/CustomButton/google.svg'

const CustomButton = ({name, google, ...otherProps}) => {
    return (
        <>
            {
                google ?  // jest to <div> z tego względu że nie ma on zatwierdzać formy w której się znajduje!
                (
                    <div className='custom-google-button' {...otherProps}>
                        <img src={GoogleButtonSvg}/><span>Login with Google</span>
                    </div>
                )
                :
                (
                    <button className='custom-button' {...otherProps}>
                        {name}
                    </button>
                )
            }
        </>
    )
}

export default CustomButton