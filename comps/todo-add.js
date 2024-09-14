import { useState } from "react"

function Todoadd({addToList}) {
    const [value, setValue] = useState('');
    const handleChange = (e) => setValue(e.target.value);
    let onKeyDownHandler = e => {
        if (e.keyCode === 13 && value != "") {
            addToList(value);
            setValue('')
        }
      };
    return (
        <div>
            <input type="text" placeholder="Note..." className="form-control" value={value} onChange={handleChange} onKeyDown={onKeyDownHandler}/>
        </div>
    )
}

export default Todoadd