import Option from "../otpion/Option";
import style from './optionList.module.css';

const OptionList = ({options}) => {
  return (
    <ul className={`${style.optionList} flex-column`}>
        {options.map((option)=> 
            <Option
                key={option.text}
                path={option.path}
                text={option.text}
            >
                {option.icon}
            </Option>)
        }
    </ul>
  )
}

export default OptionList;