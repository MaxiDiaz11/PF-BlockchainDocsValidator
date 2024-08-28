
import { UiContext } from "@/app/context";
import { useContext } from "react";
import { Button, Typography } from "../../../../node_modules/@mui/material/index";


interface SuccessRequestComponentProps {
    message?: string
}


const ModalSuccessRequestComponent : React.FC<SuccessRequestComponentProps>= () => {
    const { closeModal } = useContext(UiContext);


    return(
        <>
            Succefully Request
            <Typography>
                message
            </Typography>
            <Button
                onClick={closeModal}
            >
                Close Modal
            </Button>
        </>
    )

}

export default ModalSuccessRequestComponent;