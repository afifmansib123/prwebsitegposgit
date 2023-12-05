import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faLine,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import lineQRCodeImage from "../public/images/L_gainfriends_2dbarcodes_BW.png";

const Footer = () => (
  <div className="grid grid-cols-[47%_4%_49%] bg-black text-white content-center justify-stretch p-6 h-40 md:h-48 md:px-12 md:py-6 mt-6 lg:px-80 lg:h-40 lg:py-6">
    <div className="flex flex-col">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">ช่วงเวลาการติดต่อ</h1>
      </div>
      <div className="mt-2">
        <a href="tel: 02-114-8678" className="text-lg md:text-xl">ศูนย์บริการลูกค้า: 02-114-8678</a>
        <p className="text-lg md:text-xl">จันทร์ - ศุกร์: 09:00-18:00 น.</p>
        <p className="text-lg md:text-xl">เสาร์-อาทิตย์, วันหยุดนักขัตฤกษ์: 10:00-19:00 น.</p>
      </div>
    </div>
    <view className="h-32 md:h-40 lg:h-36 w-px bg-white mx-2 mr-6"></view>
    <div className="flex flex-col ml-4">
      <h1 className="text-2xl md:text-3xl font-bold">ช่องทางการในติดตามเรา</h1>
      <div className="grid grid-cols-2">
        <div className="flex flex-col mt-2">
          <Link href={"https://www.facebook.com/GposTH"} target="_blank">
            <FontAwesomeIcon icon={faSquareFacebook} />
            <span className="ml-2 text-lg md:text-2xl">GposTH</span>
          </Link>
          <Link href={"https://www.youtube.com/@GposThailand"} target="_blank">
            <FontAwesomeIcon icon={faYoutube} />
            <span className="ml-2 text-lg md:text-2xl">GposThailand</span>
          </Link>
          <Link href={"https://lin.ee/Mh7mvqw"} target="_blank">
            <FontAwesomeIcon icon={faLine} />
            <span className="ml-2 text-lg md:text-2xl">@Gpos</span>
          </Link>
        </div>
        <div className="mt-2">
          <Image
            src={lineQRCodeImage}
            className="float-right max-h-24 max-w-[6rem]"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
