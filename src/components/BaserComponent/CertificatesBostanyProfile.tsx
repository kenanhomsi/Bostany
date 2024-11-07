import { PiCertificateFill } from "react-icons/pi"

const CertificatesBostanyProfile = ({ Certificates }: {
    Certificates: {
        year: string;
        issuer: string;
        cartificate: string;
    }[]
}) => {
    return (
        <div className="flex flex-col gap-4 text-BaserOnSurfase">
            <span className="text-[22px] font-semibold ">الشهادات</span>
            {
                Certificates.map((certificate) => (
                    <div className="p-6 rounded-3xl bg-BaserSurfaceContainer flex justify-between">
                        <div className="flex gap-4 items-center">
                            <PiCertificateFill className=" text-BostanyPrimary w-8 h-8" />
                            <span className="text-base font-medium text-[#191C1B]">{certificate.cartificate}</span>
                        </div>
                        <div className=" flex gap-3 text-sm font-normal items-center text-dark">
                            <p>{certificate.issuer}</p>
                            <p>{certificate.year}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CertificatesBostanyProfile