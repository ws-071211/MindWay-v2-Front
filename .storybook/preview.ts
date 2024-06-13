import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from '@emotion/react';
import '../styles/globals.css'
import { theme } from '../styles/theme';

export const decorators = [
  withThemeFromJSXProvider({
  themes: {
    theme: theme
  },
  Provider: ThemeProvider,
})];