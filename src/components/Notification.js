// const Notification = ({message, type}) => message ?
//  <div className="errorNotification">{message}</div>
//  : null

//TODO: refactor?
const Notification = ({ notification, setNotification }) => {
  const hideNotification = () => {
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }
  const showNotification = () => (
    <div className={notification.type}>{notification.text}</div>
  )

  if (notification) {
    return (
      <div>
        {showNotification()}
        {hideNotification()}
      </div>
    )
  } else {
    return null
  }
}
export default Notification
