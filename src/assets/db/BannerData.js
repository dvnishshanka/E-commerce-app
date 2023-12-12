import jewelleryBanner from '../../assets/images/jewellery-banner.jpg';
import ladiesDressBanner from '../../assets/images/dress-banner.jpg';
import saleBanner from '../../assets/images/sale.jpg';
import defaultBanner from '../../assets/images/default.jpg';

export const bannerData = {
  sale: {
    image: saleBanner,
    name: 'sale',
    title: '🎊 Clearance Sale 🎊',
    subTitle: 'Last Chance to Bag Bargains!',
    caption:
      "Get ready for amazing savings! Find your favorites and save big. Hurry, shop now while stocks last! Don't miss out on incredible deals.",
    btnText: 'Shop now',
    bgColor: '#510102',
    imgColor: '#010101',
    txtColor: '#EAECEB',
  },

  jewelery: {
    image: jewelleryBanner,
    name: 'jewellery and other accessories',
    title: 'Elegance Redefined 💍',
    subTitle: 'Unlock Your Radiance',
    caption:
      'Adorn yourself in the allure of timeless elegance. Discover handcrafted jewelry that illuminates your style with every shimmering detail.',
    btnText: 'Shop now',
    bgColor: '#353644',
    imgColor: '#1E202F',
    txtColor: '#E4DFF5',
  },

  "women's clothing": {
    image: ladiesDressBanner,
    name: 'clothing',
    title: 'Elevate Your Wardrobe 👗',
    subTitle: ' Where Style Meets Comfort',
    caption:
      'Find your perfect fit from our range of trendy apparel crafted to celebrate your unique style.',
    btnText: 'Discover now',
    bgColor: '#8BB1C8',
    imgColor: '#49799D',
    txtColor: '#272822',
  },
  default: {
    image: defaultBanner,
    name: 'default',
    title: 'Discover Your Style, Shop with Ease',
    subTitle: '',
    caption: 'Explore Trendy Collections & Unbeatable Deals.',
    btnText: 'Discover now',
    bgColor: '#FDE51F',
    imgColor: '#A19CDE',
    txtColor: '#272822',
  },
};
