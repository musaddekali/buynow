import { useEffect } from 'react';
import { useGlobalContext } from '../../context/context';
import { FaTimes } from 'react-icons/fa';
import './alert.css';

function Alert() {
  const { showAlert, alert } = useGlobalContext();

  useEffect(() => {
    let timeId = setTimeout(() => {
      showAlert('', false);
    }, 3000);
    return () => clearTimeout(timeId);
  }, [showAlert])

  return (
    <div className="alert">
      {alert.msg}
      <div
        onClick={() => showAlert('', false)}
        className="alert-close"
      >
        <span>
          <FaTimes />
        </span>
      </div>
    </div>
  )
}

export default Alert;