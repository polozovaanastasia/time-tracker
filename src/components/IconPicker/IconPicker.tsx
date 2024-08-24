import React from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { Home, Search, Person } from "@mui/icons-material";

type IconKey = "home" | "search" | "person";

const iconMapping: Record<IconKey, JSX.Element> = {
    home: <Home />,
    search: <Search />,
    person: <Person />,
};

interface IconPickerProps {
    selectedIcon: IconKey;
    onChange?: (icon: IconKey) => void;
}

const IconPicker: React.FC<IconPickerProps> = ({ selectedIcon, onChange }) => {
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const value = event.target.value as IconKey;
        // onChange(value);
    };

    return (
        <FormControl fullWidth>
            <InputLabel>Выберите иконку</InputLabel>
            <Select value={selectedIcon}>
                {Object.entries(iconMapping).map(([key, icon]) => (
                    <MenuItem key={key} value={key}>
                        {icon}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default IconPicker;
