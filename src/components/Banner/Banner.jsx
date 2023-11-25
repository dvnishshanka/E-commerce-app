import { BannerWrapper, InfoWrapper } from "./styles";

const Banner = () => {
  return (
    <BannerWrapper>
      {/* <ImgWrapper
    //     src="https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-119094.jpg?w=1380&t=st=1700607016~exp=1700607616~hmac=7bb4c8f68fbbe8339e3ff761ca03c61c0de1bcb229c85cd53f9423ee4a8c6082"
    //     alt="banner with blue handbag"
    //   ></ImgWrapper> */}
      <InfoWrapper>
        <h1>LET'S EXPLORE UNIQUE CLOTHES.</h1>
        <p>Live for Influential and Innovative fashion!</p>
        <button>SHOP NOW</button>
      </InfoWrapper>
    </BannerWrapper>
  );
};

export default Banner;
