const Notification = ({ message }) => {
  if (!message) {
    return null;
  }

  return (
    <div className='notification'>
      <p className='notification-message'>{message}</p>
    </div>
  );
};

export default Notification;
