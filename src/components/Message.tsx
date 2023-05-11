import { ReactNode } from "react";

interface Props {
    type: 'warning' | 'success' | 'info'; // ...
    children: ReactNode;
}

function Message({ type, children }: Props) {
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

    return (
        <div
            className={`alert ${getCssByType()} my-2 alert-dismissible`}
            role="alert"
        >
            {children}

            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
            />
        </div>
    );
}

export default Message;