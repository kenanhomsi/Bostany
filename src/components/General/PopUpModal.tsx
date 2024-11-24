import { Modal } from "flowbite-react";
import { useDispatch } from "react-redux";
import { PopUpParams } from "../../Types";
import { useAppSelector } from "../../redux/store";

const PopUpModal: React.FC<PopUpParams> = ({
    title,
    closeIconState,
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
                    inner: ' rounded-[40px] relative flex  flex-col bg-white shadow dark:bg-gray-700'
                },
                header: {
                    close: {
                        base: `${closeIconState && ' !hidden'} h-fit   mr-auto inline-flex items-center rounded-full bg-[#CAC5CA] text-[#1D1B1E] p-[8px] text-[15px]  text-gray-400 hover:bg- hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white`,
                        icon: "h-6  w-6"
                    }
                }
            }}
        >
            <Modal.Header className="!px-10 !pt-10 pb-6  ">
                <h1 className="text-center  font-semibold text-xl text-dark mb-8">
                    {title}
                </h1>
            </Modal.Header>
            <Modal.Body className=" overflow-visible">{children}</Modal.Body>
        </Modal>
    );
};

export default PopUpModal;
