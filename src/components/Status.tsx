import { StatusEnum } from "../App";

interface Props {
    type: StatusEnum;
}

function Status({ type }: Props) {
    function getBadgeCss() {
        switch (type) {
            case 'active':
                return 'bg-success';
            case 'expired':
                return 'bg-warning';
            case 'banned':
                return 'bg-danger';
            default:
                return 'bg-secondary';
        }
    }

    function handleClick(type: StatusEnum) {
        console.log(`You clicked status: ${type}`);
    }

    return (
        <span
            onClick={() => handleClick(type)}
            className={`badge ${getBadgeCss()} text-capitalize`}
        >
            {type}
        </span>
    );
}

export default Status;