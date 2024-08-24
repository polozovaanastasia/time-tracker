import { v1 } from "uuid";
import "./App.css";
import ActivitiesList from "./components/ActivitiesList/ActivitiesList";

export type ActivityType = {
    id: string;
    title: string;
};
type DateType = {
    day: number;
    month: number;
    year: number;
};
type SessionType = {
    startTime: Date;
    endTime: Date;
    duration: number;
    date: DateType;
};

type SessionsStateType = {
    [key: string]: Array<SessionType>;
};

const App = () => {
    // моки данных:
    const activitiesId1 = v1();
    const activitiesId2 = v1();
    const activitiesId3 = v1();
    const activities: Array<ActivityType> = [
        { id: activitiesId1, title: "study." },
        { id: activitiesId2, title: "work." },
        { id: activitiesId3, title: "walk." },
    ];
    const sessions: SessionsStateType = {
        [activitiesId1]: [
            {
                startTime: new Date("2024-08-23T09:00:00"),
                endTime: new Date("2024-08-23T10:30:00"),
                duration: 5400000, // 1 час 30 минут в миллисекундах
                date: {
                    day: 23,
                    month: 8,
                    year: 2024,
                },
            },
            {
                startTime: new Date("2024-08-24T14:00:00"),
                endTime: new Date("2024-08-24T15:45:00"),
                duration: 6300000, // 1 час 45 минут в миллисекундах
                date: {
                    day: 24,
                    month: 8,
                    year: 2024,
                },
            },
        ],
        [activitiesId2]: [
            {
                startTime: new Date("2024-08-23T11:00:00"),
                endTime: new Date("2024-08-23T12:30:00"),
                duration: 5400000, // 1 час 30 минут в миллисекундах
                date: {
                    day: 23,
                    month: 8,
                    year: 2024,
                },
            },
        ],
        [activitiesId2]: [
            {
                startTime: new Date("2024-08-23T17:00:00"),
                endTime: new Date("2024-08-23T17:45:00"),
                duration: 2700000, // 45 минут в миллисекундах
                date: {
                    day: 23,
                    month: 8,
                    year: 2024,
                },
            },
        ],
    };
    return (
        <div className="app">
            <header className="app__header">
                {/* <IconPicker selectedIcon="home" /> */}
            </header>
            <main className="app__main">
                <ActivitiesList activities={activities} />
                {/* <div className="activity-form"></div> */}
            </main>
        </div>
    );
};

export default App;
