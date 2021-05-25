import './style.css'

const ErrorPopup = (props) => {
  const { closePopup } = props
  return (
    <div className='backdrop'>
      <div className='popup'>
        <h1>Something went wrong!</h1>
        <p>The task is already added to the list</p>
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  )
}

export default ErrorPopup