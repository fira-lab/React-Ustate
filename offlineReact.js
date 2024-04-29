import React from 'react'


const [Form, stateForm] = useState(0);


const offlineReact = () => {
  return (
    <div>
        <label>Click this button</label>
      <button onClick={stateForm +1}/> 
    </div>
  )
}

export default offlineReact
