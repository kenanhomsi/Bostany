import { Modal } from "flowbite-react";
import { useDispatch } from "react-redux";
import { PopUpParams } from "../../Types";
import { useAppSelector } from "../../redux/store";

const PopUpModal: React.FC<PopUpParams> = ({
    title,
    closeAction,
    children,
    PopSize,
    type,
}) => {
    const isOpen = useAppSelector((state) => state.popUpState);
    const showModal = isOpen[type];
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(closeAction());
    };

    return (
        <Modal
            show={showModal}
            onClose={handleClose}
            size={PopSize}
            popup
            dir="rtl"
            className="self-center   !px-8 !py-5 z-[100000] "
            theme={{
                content: {
                    inner: ' rounded-[40px] relative flex max-h-[90dvh] flex-col bg-white shadow dark:bg-gray-700'
                },
                header: {
                    close: {
                        base: "mr-auto inline-flex items-center rounded-full bg-transparent p-1.5 text-xl  text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
                        icon: "h-6 w-6"
                    }
                }
            }}
        >
            <Modal.Header className="!px-8 !pt-6 pb-0  ">
                <h1 className="text-center  font-medium text-2xl text-black mb-10">
                    {title}
                </h1>
            </Modal.Header>
            <Modal.Body className=" overflow-visible">{children}</Modal.Body>
        </Modal>
    );
};

export default PopUpModal;
