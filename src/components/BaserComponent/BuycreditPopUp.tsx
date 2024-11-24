import { useDispatch } from "react-redux";
import { CloseBuycredit } from "../../redux/Slices/PopUpSlice";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { PiCreditCard } from "react-icons/pi";
import { PiInfo } from "react-icons/pi";
import { useLocation } from "react-router-dom";

const BuycreditPopUp = () => {
    const Dashboard = useLocation().pathname.split('/')[1]
    const BuyCreditSchema = Yup.object().shape({
        name: Yup.string().required('اسم صاحب البطاقة مطلوب'),
        creditCardNumber: Yup.number().required('رقم البطاقة مطلوب'),
        ExpiryMount: Yup.string().required('شهر الانتهاء مطلوب'),
        ExpiryYear: Yup.string().required('سنة الانتهاء مطلوب'),
        code: Yup.string().required(' الكود السري مطلوب')
    })
    const dispatch = useDispatch();

    const HandleCancel = () => {
        dispatch(CloseBuycredit())
    }
    const handleBuying = () => {
        dispatch(CloseBuycredit())
    }
    return (
        <div className="flex flex-col w-full gap-5">
            <div className="">
                <Formik
                    initialValues={{
                        name: '',
                        creditCardNumber: '',
                        ExpiryMount: '',
                        ExpiryYear: '',
                        code: ''
                    }}
                    validationSchema={BuyCreditSchema}
                    onSubmit={(value) => alert(value)}
                >
                    {({ isSubmitting, isValid }) => (
                        <Form className="flex flex-col gap-3">
                            <div className="flex flex-col gap-2 relative">
                                <label className="text-baser font-medium text-BaserOnSurfase" htmlFor="name">اسم صاحب البطاقة</label>
                                <Field
                                    type='text'
                                    id="name"
                                    name="name"
                                    className={`w-full py-4  rounded-3xl px-6 border-none  bg-BaserSurface focus:ring-0 focus:outline ${Dashboard == 'Baser' ? 'focus:outline-BaserPrimary' : ' focus:outline-BostanyPrimary'}  `}
                                    placeholder="محمد احمد"
                                />
                                <ErrorMessage
                                    name="name"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <div className="flex flex-col  gap-2 relative">
                                <label className="text-baser font-medium text-BaserOnSurfase" htmlFor="creditCardNumber">رقم البطاقة</label>
                                <Field
                                    type='number'
                                    id="creditCardNumber"
                                    name="creditCardNumber"
                                    className={`w-full py-4 text-dark  rounded-3xl px-10 border-none  bg-BaserSurface focus:ring-0 focus:outline ${Dashboard == 'Baser' ? 'focus:outline-BaserPrimary' : ' focus:outline-BostanyPrimary'}`}
                                    placeholder="0000 0000 0000 0000"
                                />
                                <PiCreditCard className="w-5 h-5 absolute top-[60px]  text-dark right-3" />
                                <ErrorMessage
                                    name="creditCardNumber"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <div className="flex flex-col gap-3 relative">
                                <label className="text-baser font-medium text-BaserOnSurfase" htmlFor="ExpiryMount">تاريخ الانتهاء</label>
                                <Field
                                    type='text'
                                    id="ExpiryMount"
                                    name="ExpiryMount"
                                    className={`w-full py-4  text-dark rounded-3xl px-6 border-none  bg-BaserSurface focus:ring-0 focus:outline ${Dashboard == 'Baser' ? 'focus:outline-BaserPrimary' : ' focus:outline-BostanyPrimary'}`}
                                    placeholder="الشهر"
                                />
                                <ErrorMessage
                                    name="ExpiryMount"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                                <Field
                                    type='text'
                                    id="ExpiryYear"
                                    name="ExpiryYear"
                                    className={`w-full py-4 text-dark  rounded-3xl px-6 border-none  bg-BaserSurface focus:ring-0 focus:outline ${Dashboard == 'Baser' ? 'focus:outline-BaserPrimary' : ' focus:outline-BostanyPrimary'}`}
                                    placeholder="السنة"
                                />
                                <ErrorMessage
                                    name="ExpiryYear"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <div className="flex flex-col gap-2 relative">
                                <label className="text-baser font-medium text-BaserOnSurfase" htmlFor="code">الكود السري</label>
                                <Field
                                    type='text'
                                    id="code"
                                    name="code"
                                    className={`w-full py-4 text-dark  rounded-3xl px-6 border-none  bg-BaserSurface focus:ring-0 focus:outline ${Dashboard == 'Baser' ? 'focus:outline-BaserPrimary' : ' focus:outline-BostanyPrimary'}`}
                                    placeholder="CVC"
                                />
                                <PiInfo className="w-5 h-5 absolute top-[50px]  cursor-pointer    text-dark left-4" />
                                <ErrorMessage
                                    name="code"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <div className="w-full flex gap-5 px-4 border-t border-[#938F94]/50 pt-5 mt-5  ">
                                <button onClick={handleBuying} disabled={!isValid} className={` ${Dashboard == 'Baser' ? !isValid ? 'bg-BaserPrimary/50 hover:!bg-BaserPrimary/50' : 'bg-BaserPrimary hover:!bg-BaserPrimary' : !isValid ? 'bg-BostanyPrimary/50 hover:!bg-BostanyPrimary/50' : 'bg-BostanyPrimary hover:!bg-BostanyPrimary'} text-white rounded-full !h-14  w-full `} >{isSubmitting ? '..Loading' : 'تاكيد الدفع'}</button>
                                <button onClick={HandleCancel} className={` ${Dashboard == 'Baser' ? 'text-BaserPrimary' : ' text-BostanyPrimary'} w-full rounded-full !h-14 border-[#938F94]/50 border `} >الغاء</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

        </div >
    )
}

export default BuycreditPopUp