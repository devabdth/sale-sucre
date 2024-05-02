import { faFacebookSquare, faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const UpgradePage= () => {
    return <section className="w-full flex flex-col items-center justify-center gap-4 lg:px-28 px-4 py-5">
        <div className="fixed top-0 w-full h-[12vh] bg-gradient-to-b from-primary to-[rgba(255,255,255,0)]"></div>
        <Image
            src="/upgrade.png" alt="Upgrade Plan Illustration"
            width={2048} height={2048}
            className="w-[1024px] h-[480px] object-contain object-center -mt-[5vh]"
        ></Image>
        <h1 className="-mt-[5vh] font-bold text-2xl text-primary font-secondary text-center">To Get the Full access to Solid's Website, Contact <Link className="underline" href="https://tregurus.com">TreGurus</Link></h1>
        <div className="flex flex-row items-center justify-center gap-12">
            <div className="items-center justify-center flex flex-row gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-secondary" width={24} height={24} />
                <p className="font-bold text-primary font-secondary">info@tregurus.com</p>
            </div>
            <div className="items-center justify-center flex flex-row gap-2">
                <FontAwesomeIcon icon={faPhone} className="text-secondary" width={24} height={24} />
                <p className="font-bold font-secondary text-primary">+20 112 916 4522</p>
            </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-3">
            <Link href="www.facebook.com/treguruseg"><FontAwesomeIcon icon={faFacebookSquare} className="text-secondary rounded-full" width={24} height={24} /></Link>
            <Link href="www.instagram.com/treguruseg"><FontAwesomeIcon icon={faInstagramSquare} className="text-secondary rounded-full" width={24} height={24} /></Link>
            <Link href="www.linkedin.com/treguruseg"><FontAwesomeIcon icon={faLinkedin} className="text-secondary rounded-full" width={24} height={24} /></Link>
        </div>
    </section>
}



export default UpgradePage;
