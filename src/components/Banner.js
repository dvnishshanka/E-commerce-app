import styled from "styled-components";

const BannerWrapper = styled.div`
  display: flex;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //   background-image: url("https://images.unsplash.com/photo-1515023677547-593d7638cbd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  //   background-image: url("https://images.unsplash.com/flagged/photo-1553802922-2eb2f7f2c65b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  height: 500px;
  width: 100vw;
  background-image: url("https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-119094.jpg?w=1380&t=st=1700607016~exp=1700607616~hmac=7bb4c8f68fbbe8339e3ff761ca03c61c0de1bcb229c85cd53f9423ee4a8c6082");
  background-size: cover;
  background-position: bottom;
  // color: white;
`;
const ImgWrapper = styled.img`
  width: 100%;
  flex: 1;
  height: 80vh;
`;

const Banner = () => {
  return (
    <BannerWrapper>
      {/* <ImgWrapper
        src="https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-119094.jpg?w=1380&t=st=1700607016~exp=1700607616~hmac=7bb4c8f68fbbe8339e3ff761ca03c61c0de1bcb229c85cd53f9423ee4a8c6082"
        alt="banner with blue handbag"
      ></ImgWrapper> */}
      {/* <ImgWrapper
        src="https://images.unsplash.com/photo-1587467512961-120760940315?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="banner with blue handbag"
      ></ImgWrapper>  */}
      <InfoWrapper>
        <h1>LET'S EXPLORE UNIQUE CLOTHES.</h1>
        <p>Live for Influential and Innovative fashion!</p>
        <button>SHOP NOW</button>
      </InfoWrapper>
      {/* <ImgWrapper
        src="https://images.unsplash.com/photo-1654707634802-a8282d72950e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="banner with blue handbag"
      ></ImgWrapper>
      <ImgWrapper
        src="https://images.unsplash.com/photo-1587467512961-120760940315?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="banner with blue handbag"
      ></ImgWrapper> */}
    </BannerWrapper>
  );
};

export default Banner;
