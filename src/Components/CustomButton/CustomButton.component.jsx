import './custombutton.styles.scss'

const CustomButton = ({name, ...otherProps}) => {
    console.log(otherProps)
    return (
        <div className='custom-button' {...otherProps}>
            {name}
        </div>
    )
}

export default CustomButton