import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCaretDown } from '@fortawesome/fontawesome-free-solid'
import { useState } from 'react'


function DropDown({selected,setSelected,options})
{
    const [isActive,setIsActive]=useState(false);

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e)=>setIsActive(!isActive)}>
                {selected}
                <span><FontAwesomeIcon icon={faCaretDown} /></span>
            </div>
            { isActive&&(<div className="dropdown-content">
                {options.map(option=>
                    <div className="dropdown-item" 
                         onClick={(e)=>{setSelected(option); setIsActive(false);}}
                    >
                        {option}
                    </div>)}
              </div>)
            }
        </div>
    )
}

export default DropDown