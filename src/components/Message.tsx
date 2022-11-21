// enum IType {
//     warning = 'Warning',
//     success = 'Success'
// }

interface Props {
    text: string;
    type: 'warning' | 'success' | 'info'; // ...
}

function Message({ text, type }: Props) {
    function getCssByType() {
        switch (type) {
            case 'warning':
                return 'alert-warning';
            case 'success':
                return 'alert-success';
            default:
                return 'alert-secondary';
        }
    }

    return (
        <div className={`alert ${getCssByType()} my-2`} role="alert">
            {text}
        </div>
    );
}

export default Message;