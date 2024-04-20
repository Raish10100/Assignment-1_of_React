import {useState} from 'react'
 function Button(props){
    const [messageVisible,setMessageVisible] = useState(false);
    const onclickMessage = "Button clicked!";

   function handleClick(){
     setMessageVisible(true);
   }
    return (
        <>
            <button className="btn" onClick={handleClick} >{props.text}</button>;
            {messageVisible && <p className='onclickMessage'>{onclickMessage}</p>}
        </>
    )
}

export default Button
