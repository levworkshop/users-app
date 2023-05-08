import { StatusEnum } from "../App";

interface StatusProps {
    type: StatusEnum;
}

function getStatusColor(type: StatusEnum): string {
    switch (type) {
        case StatusEnum.active:
            return "text-bg-success";
        case StatusEnum.expired:
            return "text-bg-warning";
        case StatusEnum.banned:
            return "text-bg-danger";
        default:
            return "text-bg-secondary";
    }
}

function Status({ type }: StatusProps) {
    return (
        <span className={`badge ${getStatusColor(type)}`}>
            {type}
        </span>
    );
}

export default Status;
