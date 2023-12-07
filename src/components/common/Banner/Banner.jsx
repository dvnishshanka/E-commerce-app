import { PrimaryBtn } from "../button";
import {
  BannerWrapper,
  InfoWrapper,
  ImgWrapper,
  Title,
  Description,
  SubTitle,
} from "./styles";
import jewelleryBanner from "../../../assets/images/jewellery-banner.jpg";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";

const Banner = ({ bannerData }) => {
  return (
    <BannerWrapper
      style={{
        backgroundColor: bannerData.bgColor,
        color: bannerData.txtColor,
      }}
    >
      <InfoWrapper>
        <Title> {bannerData.title}</Title>
        <SubTitle> {bannerData.subTitle}</SubTitle>
        <Description>{bannerData.caption}</Description>
        <Link style={{ fontSize: "1.2rem", color: bannerData.txtColor }}>
          {bannerData.btnText} <ArrowRightOutlined />
        </Link>
      </InfoWrapper>
      <ImgWrapper src={bannerData.image} alt={bannerData.name}></ImgWrapper>
    </BannerWrapper>
  );
};

export default Banner;
