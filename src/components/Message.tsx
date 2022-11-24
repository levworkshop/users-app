import { useEffect, useState } from "react";
import { IUser } from "./Table";

interface Props {
    type: 'warning' | 'success' | 'info'; // ...
    children?: React.ReactNode;
    user?: IUser;
    showButton: boolean;
}

function Message({ type, children, user, showButton }: Props) {
    const [show, setShow] = useState(true);

    // function doSomething() {}
    // useEffect(doSomething);

    // useEffect(() => { }); // on first render and everytime on re-render
    // useEffect(() => { }, []); // on first render (onload component)
    // useEffect(() => { }, [prop]); // dependent on props value for example

    useEffect(() => {
        setShow(user ? true : false);
    }, [user]);

    function getCssByType(): string {
        switch (type) {
            case 'warning':
                return 'alert-warning';
            case 'success':
                return 'alert-success';
            default:
                return 'alert-secondary';
        }
    }

    function handleShow(): string {
        if (!showButton) return 'd-block';
        return show ? 'd-block' : 'd-none';
    }

    return (
        <div
            className={`alert ${getCssByType()} ${handleShow()} my-2 alert-dismissible`}
            role="alert"
        >
            {children}

            {
                showButton &&
                <button
                    onClick={() => setShow(false)}
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                ></button>
            }

        </div>
    );
}

export default Message;