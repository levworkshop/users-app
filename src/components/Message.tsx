function Message() {
    return (
        <div className="alert alert-success my-2 alert-dismissible" role="alert">
            A simple success alert—check it out!

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