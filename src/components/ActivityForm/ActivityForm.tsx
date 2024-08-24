import { ActivityType } from "../../App";

type ActivitiesListPropsType = {
    activity: ActivityType;
};

const ActivitiyForm = ({ activity }: ActivitiesListPropsType) => {
    return (
        <div className="activity-form">
            <div style={{ color: "black" }}>Hello</div>
        </div>
    );
};

export default ActivitiyForm;
