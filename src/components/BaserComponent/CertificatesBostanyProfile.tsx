import { PiCertificateFill } from "react-icons/pi"
import { ProfileDateType } from "../../Types"

const CertificatesBostanyProfile = ({ BostanyData }: { BostanyData: ProfileDateType }) => {
    return (
        <div className="flex flex-col gap-4 text-BaserOnSurfase">
            <span className="text-[22px] font-semibold ">الشهادات</span>
            {
                BostanyData.Certificates?.map((certificate) => (
                    <div className="p-6 rounded-3xl bg-BaserSurfaceContainer flex justify-between">
                        <div className="flex gap-4 items-center">
                            <PiCertificateFill className=" text-BostanyPrimary w-8 h-8" />
                            <span className="text-base font-medium text-[#191C1B]">{certificate.title}</span>
                        </div>
                        <div className=" flex gap-3 text-sm font-normal items-center text-dark">
                            <p>{certificate.university}</p>
                            <p>{certificate.year}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CertificatesBostanyProfile