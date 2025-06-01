import { theme, colorSchemes, themes } from '@/utils/theme/colors';
import { useColorScheme } from 'nativewind';
import { View } from 'react-native';

type ThemeProps = {
  children: React.ReactNode;
  themes?: themes;
};

export function Theme({ children, themes = 'brand' }: ThemeProps) {
  const { colorScheme } = useColorScheme();
  const scheme = (colorScheme || 'light') as colorSchemes;

  return (
    <View style={theme[themes][scheme]} className="flex-1">
      {children}
    </View>
  );
}
