import { StatusType } from "../App";

interface StatusProps {
    type: StatusType;
}

function getStatusColor(type: StatusType): string {
    switch (type) {
        case "Active":
            return "text-bg-success";
        case "Expired":
            return "text-bg-warning";
        case "Banned":
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
