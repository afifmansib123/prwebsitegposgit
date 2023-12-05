import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faLine,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import lineQRCodeImage from '../public/images/L_gainfriends_2dbarcodes_BW.png'

const Footer = () => (
  <div className="grid grid-cols-[42%_2%_55%] bg-black text-white h-40 p-6 content-center justify-stretch lg:px-12 mt-4">
    <div className="flex flex-col">
      <div>
        <h1 className="text-2xl font-bold">ช่วงเวลาการติดต่อ</h1>
      </div>
      <div className="mt-2">
        <p>ศูนย์บริการลูกค้า: 02-114-8678</p>
        <p>จันทร์ - ศุกร์: 09:00-18:00 น.</p>
        <p>เสาร์-อาทิตย์และวันหยุดนักขัตฤกษ์: 10:00-19:00 น.</p>
      </div>
    </div>
    <view className="h-32 w-px bg-white mx-2"></view>
    <div className="flex flex-col ml-4">
      <h1 className="text-2xl font-bold">ช่องทางการในติดตามเรา</h1>
      <div className="grid grid-cols-2">
        <div className="flex flex-col mt-2">
          <Link href={"https://www.facebook.com/GposTH"} target="_blank">
            <FontAwesomeIcon icon={faSquareFacebook} />
            <span className="ml-2 text-lg">GposTH</span>
          </Link>
          <Link href={"https://www.youtube.com/@GposThailand"} target="_blank">
            <FontAwesomeIcon icon={faYoutube} />
            <span className="ml-2 text-lg">GposThailand</span>
          </Link>
          <Link href={"https://lin.ee/Mh7mvqw"} target="_blank">
            <FontAwesomeIcon icon={faLine} />
            <span className="ml-2 text-lg">@Gpos</span>
          </Link>
        </div>
        <div>
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
