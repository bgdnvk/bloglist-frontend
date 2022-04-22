const Notification = ({message}) => message ?
 <div className="errorNotification">{message}</div>
 : null

export default Notification