import { useState } from "react"

function Todoadd({addToList}) {
    const [value, setValue] = useState('');
    const handleChange = (e) => setValue(e.target.value);
    let onKeyDownHandler = e => {
        if (e.keyCode === 13) {
            addToList(value)
        }
      };
    return (
        <div>
            <input type="text" value={value} onChange={handleChange} onKeyDown={onKeyDownHandler}/>
        </div>
    )
}

export default Todoadd