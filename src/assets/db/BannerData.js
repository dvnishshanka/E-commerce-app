import jewelleryBanner from '../../assets/images/jewellery-banner.jpg';
import handBagBanner from '../../assets/images/handbags.jpg';
import saleBanner from '../../assets/images/sale.jpg';
import watchBanner from '../../assets/images/watch.jpg';
import defaultBanner from '../../assets/images/default.jpg';

export const bannerData = {
  sale: {
    image: saleBanner,
    name: 'sale',
    category: 'sale',
    title: '🎊 Clearance Sale 🎊',
    subTitle: 'Last Chance to Bag Bargains!',
    caption:
      "Get ready for amazing savings! Find your favorites and save big. Hurry, shop now while stocks last! Don't miss out on incredible deals.",
    btnText: 'Shop now',
    bgColor: '#510102',
    imgColor: '#010101',
    txtColor: '#EAECEB',
  },

  "Jewellery": {
    image: jewelleryBanner,
    name: 'jewellery and other accessories',
    category: 'Jewellery',
    title: 'Jewellery Junction 💍',
    subTitle: 'Unlock Your Radiance',
    caption:
      'Adorn yourself in the allure of timeless elegance. Discover handcrafted jewelry that illuminates your style with every shimmering detail.',
    btnText: 'Shop now',
    bgColor: '#353644',
    imgColor: '#1E202F',
    txtColor: '#E4DFF5',
  },

  "Hand Bags": {
    image: handBagBanner,
    name: 'Hand Bags',
    category: 'Hand Bags',
    title: 'Bag Vogue 👝',
    subTitle: 'Elegance in Every Stitch',
    caption:
      'Explore our collection of exquisite handbags designed to complement your style and elevate your everyday elegance.',
    btnText: 'Discover now',
    bgColor: '#619F7A',
    imgColor: '#49799D',
    txtColor: '#EAECEB',
  },
  "Watches": {
    image: watchBanner,
    name: 'Watches',
    category: 'Watches',
    title: 'Ladies\' Watch Emporium ⌚',
    subTitle: 'Elegance on Your Wrist',
    caption:
      'Embrace sophistication in every tick. Explore our collection of exquisite ladies\' watches, blending style and precision to adorn your moments with grace',
    btnText: 'Discover now',
    bgColor: '#9b3743',
    imgColor: '#49799D',
    txtColor: '#EAECEB',
  },
  default: {
    image: defaultBanner,
    name: 'default',
    title: 'Discover Your Style, Shop with Ease 👜',
    subTitle: '',
    caption: 'Explore Trendy Collections & Unbeatable Deals.',
    btnText: 'Discover now',
    bgColor: '#FDE51F',
    imgColor: '#A19CDE',
    txtColor: '#272822',
  },
};
