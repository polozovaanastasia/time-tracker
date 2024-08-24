import { IconButton } from "@mui/material";
import { ActivityType } from "../../App";
import EditIcon from "@mui/icons-material/Edit";
import CookieSharpIcon from "@mui/icons-material/CookieSharp";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import { v1 } from "uuid";
import ActivitiyForm from "../ActivityForm/ActivityForm";

type ActivitiesListPropsType = {
    activities: Array<ActivityType>;
};

type ActivitiesListMode = "add new activity" | "change activities";

const ActivitiesList = ({ activities }: ActivitiesListPropsType) => {
    const [mode, setMode] = useState<ActivitiesListMode | null>(null);
    const [activity, setActivity] = useState<ActivityType | null>(null);

    const addActivity = () => {
        setMode("add new activity");

        const newActivity: ActivityType = {
            id: v1(),
            title: "",
        };

        setActivity(newActivity);
    };

    return (
        <div className="activity-list">
            {!mode ? (
                <>
                    {activities.map((ac) => (
                        <div key={ac.id} className="activity-list__item">
                            <div className="activity-list__item-edit">
                                <IconButton sx={{ color: "white" }}>
                                    <EditIcon />
                                </IconButton>
                            </div>
                            <div className="activity-list__icon">
                                <CookieSharpIcon sx={{ fontSize: 90 }} />
                            </div>
                            <div className="activity-list__title">
                                {ac.title}
                            </div>
                        </div>
                    ))}
                    <div
                        className="activity-list__item-add"
                        onClick={addActivity}
                    >
                        <AddCircleOutlineIcon sx={{ fontSize: 90 }} />
                    </div>
                </>
            ) : (
                activity && <ActivitiyForm activity={activity} />
            )}
        </div>
    );
};

export default ActivitiesList;
