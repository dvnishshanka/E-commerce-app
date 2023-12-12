import styles from './styles.module.css';
import { FooterContainer, InfoColumn, Title, SocialMedia } from './styles';
import Logo from '../logo';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
  PrinterOutlined,
  InstagramFilled,
  FacebookFilled,
  SkypeFilled,
} from '@ant-design/icons';

const Footer = () => {
  const items = useSelector((state) => state.items);
  const allCategories = [...new Set(items.map((item) => item.category))];

  const socialMediaStyles = {
    paddingRight: '15px',
    fontSize: '25px',
  };

  const listStyles = { listStyleType: 'none', padding: '0' };

  return (
    <FooterContainer>
      <InfoColumn style={{ flex: '2' }}>
        <Title>
          <Logo style={{ marginTop: '0' }} />
        </Title>
        <p style={{ paddingRight: '50px' }}>
          Explore our wide range of products and discover the perfect fit for your needs. Shop with
          confidence, backed by our quality guarantee. Enjoy hassle-free returns, secure checkout,
          and swift delivery to your doorstep. Join our community today and experience the
          convenience of seamless online shopping. Your satisfaction is our priority!
        </p>
        <SocialMedia>
          <FacebookFilled style={socialMediaStyles} className={styles.socialMedia} />
          <SkypeFilled className={styles.socialMedia} style={socialMediaStyles} />
          <InstagramFilled style={socialMediaStyles} className={styles.socialMedia} />
        </SocialMedia>
      </InfoColumn>
      <InfoColumn style={{ flex: '1' }}>
        <Title> PRODUCTS</Title>
        <ul style={listStyles}>
          {allCategories.map((category, index) => {
            return (
              <li key={index}>
                <NavLink to={`/${category}`}>{category}</NavLink>
              </li>
            );
          })}
          <li key="sale">
            <NavLink to={`/sale`}>Sale %</NavLink>
          </li>
        </ul>
      </InfoColumn>
      <InfoColumn style={{ flex: '1.5' }}>
        <Title>CONTACTS</Title>
        <ul style={listStyles}>
          <li>
            <HomeOutlined style={{ paddingRight: '10px' }} />
            Berlin, 10678, Germany
          </li>
          <li>
            <MailOutlined style={{ paddingRight: '10px' }} />
            info@flexicart.de
          </li>
          <li>
            <PhoneOutlined style={{ paddingRight: '10px' }} />
            +49 0123 405 5673
          </li>
          <li>
            <PrinterOutlined style={{ paddingRight: '10px' }} />
            +49 0123 405 5674
          </li>
        </ul>
      </InfoColumn>
    </FooterContainer>
  );
};

export default Footer;
