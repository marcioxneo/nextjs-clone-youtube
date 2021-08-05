import { ThemeProvider } from '@material-ui/core/styles';
import { createdTheme } from 'src/theme';
import useSettings from 'src/hooks/useSettings';

function MyThemeProvider({ children }) {
  const { settings } = useSettings();
  const theme = createdTheme({ theme: settings.theme });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default MyThemeProvider;
