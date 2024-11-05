import React, { useContext } from "react";
import toastError from "../../errors/toastError";
import { Checkbox } from "@material-ui/core";
import { ForwardMessageContext } from "../../context/ForwarMessage/ForwardMessageContext";

const SelectMessageCheckbox = ({ message }) => {
    const [isChecked, setIsChecked] = React.useState(false);
    const { 
        showSelectMessageCheckbox,
        setSelectedMessages,
        selectedMessages,
    } = useContext(ForwardMessageContext);

    const handleSelectMessage = (e, message) => {
        let updatedList = [...selectedMessages];

        if (e.target.checked) {
            setIsChecked(true);
            updatedList.push(message);
        } else {
            const index = updatedList.findIndex((m) => m.id === message.id);
            if (index !== -1) {
                updatedList.splice(index, 1);
            }
            setIsChecked(false);
        }

        setSelectedMessages(updatedList);
    };

    React.useEffect(() => {
        const isMessageSelected = selectedMessages.some((m) => m.id === message.id);
        setIsChecked(isMessageSelected);
    }, [selectedMessages, message]);

    if (showSelectMessageCheckbox) {
        return (
            <Checkbox 
                color="primary" 
                checked={isChecked} 
                onChange={(e) => handleSelectMessage(e, message)} 
            />
        );
    } else {
        return null;
    }
};

export default SelectMessageCheckbox;
