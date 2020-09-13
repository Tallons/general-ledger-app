import React, {useState} from 'react';
import PropTypes from 'prop-types';
const Autocomplete = (props) => {

   let propTypes = {
    options: PropTypes.instanceOf(Array).isRequired
  };
  const [activeOption, setActiveOption] = useState(0),
       [filteredOptions, setFilteredOptions] = useState([]),
       [showOptions, setShowOptions] = useState(false),
       [userInput, setUserInput] = useState("")

   const onChange = (e) => {
      const { options } = props;
      setUserInput(e.currentTarget.value)
      setFilteredOptions(options.filter(
        option => option.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      ))
      setActiveOption(0)
      setShowOptions(true);
    },

    onClick = (e) => {
        setActiveOption(0)
        setFilteredOptions([])
        setShowOptions(false)
        setUserInput(e.currentTarget.innerText)
    },

    onKeyDown = (e) => {
      switch(e.keyCode){
         case 13:
            setActiveOption(0);
            setShowOptions(false);
            setUserInput(filteredOptions[activeOption]);
            break;
         case 38:
            if (activeOption) { setActiveOption(activeOption - 1) }
            break;
         case 40:
            if ((activeOption - 1) != filteredOptions.length) {setActiveOption(activeOption + 1) };
            break;
      }
   }


   console.log("userInput ",userInput)

   return (
      <>
        <div className="search">

          <input
            type="text"
            className="search-box"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />
          <input type="submit" value="" className="search-btn" />

          {
          showOptions && userInput ? (
     filteredOptions.length ? ( 
         <ul className="options">
           {filteredOptions.map((el, i) => {
               let className;
               if (i === activeOption) {
                  className = 'option-active';
               }
             return (
               <li className={className} key={el} onClick={() => onClick}>
                     {el}
               </li>
             );
           })}
         </ul>
     ) : (
      <div className="no-options">
           <em>No Option!</em>
         </div>
     ) ): null
     }

        </div>
      </>
   )
}
export default Autocomplete;