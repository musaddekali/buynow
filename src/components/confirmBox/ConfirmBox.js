import { useGlobalContext } from "../../context/context"

const ConfirmBox = () => {
    const { confirm, setConfirm } = useGlobalContext();

    const handleConfirm =(val) => { 
        setConfirm(val);
    }

    return (
        <div className={`modal ${confirm && 'd-block'}`} tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <p>Do you want to Delete this?</p>
                    </div>
                    <div className="d-flex justify-content-end p-2">
                        <button
                            onClick={() => handleConfirm(false)}
                            type="button"
                            className="btn secondary-btn me-3"
                        >
                            Cancle
                        </button>
                        <button
                            onClick={() => handleConfirm(true)}
                            type="button"
                            className="btn primary-btn"
                        >
                            Ok
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmBox