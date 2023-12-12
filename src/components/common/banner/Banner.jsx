import { BannerWrapper, InfoWrapper, ImgWrapper, Title, Description, SubTitle } from './styles';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';

const Banner = ({ bannerData, showBtn = true }) => {
  return (
    <BannerWrapper
      style={{
        backgroundColor: bannerData?.bgColor && bannerData?.bgColor,
        color: bannerData.txtColor,
      }}
    >
      <InfoWrapper>
        {bannerData.title && <Title> {bannerData.title}</Title>}
        {bannerData.subTitle && <SubTitle> {bannerData.subTitle}</SubTitle>}
        {bannerData.caption && <Description>{bannerData.caption}</Description>}
        {showBtn && bannerData.category && (
          <Link
            style={{ fontSize: '1.2rem', color: bannerData.txtColor }}
            to={`/${bannerData.category}`}
          >
            {bannerData.btnText} <ArrowRightOutlined />
          </Link>
        )}
      </InfoWrapper>
      {bannerData?.image && <ImgWrapper src={bannerData?.image} alt={bannerData.name}></ImgWrapper>}
    </BannerWrapper>
  );
};

export default Banner;
