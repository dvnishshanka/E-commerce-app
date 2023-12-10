import {
  BannerWrapper,
  InfoWrapper,
  ImgWrapper,
  Title,
  Description,
  SubTitle,
} from "./styles";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";

const Banner = ({ bannerData }) => {
  return (
    <BannerWrapper
      style={{
        backgroundColor: bannerData.bgColor && bannerData.bgColor,
        color: bannerData.txtColor,
        // backgroundImage: `url(${bannerData.bgImage})`,
      }}
    >
      <InfoWrapper>
        {bannerData.title && <Title> {bannerData.title}</Title>}
        {bannerData.subTitle && <SubTitle> {bannerData.subTitle}</SubTitle>}
        {bannerData.caption && <Description>{bannerData.caption}</Description>}
        <Link style={{ fontSize: "1.2rem", color: bannerData.txtColor }}>
          {bannerData.btnText} <ArrowRightOutlined />
        </Link>
      </InfoWrapper>
      {bannerData?.image && (
        <ImgWrapper src={bannerData?.image} alt={bannerData.name}></ImgWrapper>
      )}
    </BannerWrapper>
  );
};

export default Banner;
