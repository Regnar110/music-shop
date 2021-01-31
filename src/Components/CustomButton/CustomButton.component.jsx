import './custombutton.styles.scss'

const CustomButton = ({name, ...otherProps}) => {
    return (
        <button className='custom-button' {...otherProps}>
            {name}
        </button>
    )
}

export default CustomButton