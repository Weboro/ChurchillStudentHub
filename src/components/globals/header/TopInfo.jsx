import { topInfoData } from "@/constDatas/topInfoData";
import Link from "next/link";

const TopInfo = () => {
  return (
    <ul className="flex flex-col lg:flex-row gap-4 text-[14px] font-semibold text-[#424242]">
      {topInfoData.map((item, index) => (
        <li className="" key={index}>
          <Link target="blank" href={item.redirect}>
            <p className="flex gap-1 items-center cursor-pointer">
              <span className="block">{item.title}</span>
              <span className="block">{item.icon}</span>
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TopInfo;
