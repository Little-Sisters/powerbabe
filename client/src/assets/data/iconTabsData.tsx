// data/styleSwitchersData.ts
import BottomsIcon from '../icons/BottomsIcon';
import SkinIcon from '../icons/SkinIcon';
import TopIcon from '../icons/TopIcon';
import EyeBrowIcon from '../icons/eyebrowstyle';
import EyeIcon from '../icons/eyestyle';
import HairIcon from '../icons/hairstyle';
import LipsIcon from '../icons/lipsIcon';

export const styleSwitchersData = (skinColors, hairstyleData, eyestyleData, eyebrowstyleData, lipstyleData, topStylesData, bottomStyleData) => [
  {
    feature: 'skincolor',
    stylesAndColors: skinColors,
    icon: <SkinIcon color="#000000" />,
  },
  {
    feature: 'hairstyle',
    stylesAndColors: hairstyleData,
    icon: <HairIcon color="#000000" />,
  },
  {
    feature: 'eyestyle',
    stylesAndColors: eyestyleData,
    icon: <EyeIcon color="#000000" />,
  },
  {
    feature: 'eyebrowstyle',
    stylesAndColors: eyebrowstyleData,
    icon: <EyeBrowIcon color="#000000" />,
  },
  {
    feature: 'lipstyle',
    stylesAndColors: lipstyleData,
    icon: <LipsIcon color="#000000" />,
  },
  {
    feature: 'topstyle',
    stylesAndColors: topStylesData,
    icon: <TopIcon color="#000000" />,
  },
  {
    feature: 'bottomstyle',
    stylesAndColors: bottomStyleData,
    icon: <BottomsIcon color="#000000" />,
  },
];
