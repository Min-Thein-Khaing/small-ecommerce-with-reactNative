import * as Icons from 'lucide-react-native';
import { LucideProps } from 'lucide-react-native';

const ICON_MAPPING = {
  'home': 'Home',
  'send': 'Send', // Lucide မှာ 'Send' ပါ၊ Paperplane က Lucide မှာ မရှိပါဘူး
  'cart': 'ShoppingCart',
  'code': 'CodeXml',
  'shopping-cart': 'ShoppingCart',
  'star':'Star',
  
} as const; // 'as const' ထည့်ပေးမှ နာမည်တွေကို string အသေအဖြစ် မှတ်မှာပါ

export type IconName = keyof typeof ICON_MAPPING;

interface IconProp extends LucideProps {
  name: IconName; // string လို့ မထားဘဲ mapping ထဲက နာမည်ပဲ ဖြစ်ရမယ်လို့ ကန့်သတ်လိုက်တာပါ
  color?: string;
  size?: number;
}

const CustomIcon = ({ name, color = 'black', size = 24, ...props }: IconProp) => {
  // Mapping ထဲကနေ Lucide Name ကို ယူမယ်
  const lucideName = ICON_MAPPING[name];

  // Icons object ထဲကနေ Component ကို ဆွဲထုတ်မယ်
  // ဒီနေရာမှာ 'as keyof typeof Icons' ဆိုပြီး type casting လုပ်ပေးရပါမယ်
  const LucideIcon = Icons[lucideName as keyof typeof Icons] as React.FC<LucideProps>;

  if (!LucideIcon) return null;

  return <LucideIcon color={color} size={size} {...props} />;
};
export default CustomIcon;

