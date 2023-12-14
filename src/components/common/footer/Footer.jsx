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
import defaultTheme from '../../../theme';

const Footer = () => {
  const items = useSelector((state) => state.items);
  const allCategories = [...new Set(items.map((item) => item.category))];

  const socialMediaStyles = {
    paddingRight: '15px',
    marginTop: '10px',
    fontSize: '25px',
  };

  const listStyles = { listStyleType: 'none', padding: '0' };

  return (
    <FooterContainer>
      <InfoColumn style={{ flex: '1.5' }}>
        <Logo color={defaultTheme.colors.lightGray} />
        <p style={{ paddingRight: '50px' }}>
          Explore our wide range of products and discover the perfect fit for your needs. Shop with
          confidence, backed by our quality guarantee. Join our community today and experience the
          convenience of seamless online shopping. Your satisfaction is our priority!
        </p>
        <SocialMedia>
          <a href="https://github.com/dvnishshanka">
            <FacebookFilled style={socialMediaStyles} className={styles.socialMedia} />
          </a>
          <a href="https://github.com/dvnishshanka">
            <SkypeFilled className={styles.socialMedia} style={socialMediaStyles} />
          </a>
          <a href="https://github.com/dvnishshanka">
            <InstagramFilled style={socialMediaStyles} className={styles.socialMedia} />
          </a>
        </SocialMedia>
      </InfoColumn>
      <InfoColumn>
        <Title> PRODUCTS</Title>
        <ul style={listStyles}>
          {allCategories.map((category, index) => {
            return (
              <li key={index}>
                <NavLink to={`/${category}`} style={{ textDecoration: 'none' }}>
                  {category}
                </NavLink>
              </li>
            );
          })}
          <li key="sale">
            <NavLink to={`/sale`} style={{ textDecoration: 'none' }}>
              Sale %
            </NavLink>
          </li>
        </ul>
      </InfoColumn>
      <InfoColumn>
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
