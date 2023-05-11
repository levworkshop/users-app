import { ReactNode, useState } from "react";

interface Props {
    type: 'warning' | 'success' | 'info'; // ...
    children: ReactNode;
    onClose?: Function;
}

function Message({ type, children, onClose }: Props) {
    const [show, setShow] = useState(true);

    function getCssByType(): string {
        switch (type) {
            case "warning":
                return 'alert-warning';
            case "success":
                return 'alert-success';
            case "info":
                return 'alert-info';
            default:
                return 'alert-secondary';
        }
    }

    function handleClick() {
        setShow(false);
        if (onClose) onClose();
    }

    return (
        <>
            {
                show &&
                <div
                    className={`alert ${getCssByType()} my-2 alert-dismissible`}
                    role="alert"
                >
                    {children}

                    <button
                        onClick={handleClick}
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                    />
                </div>
            }
        </>
    );
}

export default Message;