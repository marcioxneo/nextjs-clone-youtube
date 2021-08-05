import { useContext } from 'react';
import SettingsContext from 'src/contexts/SettingsContext';

export const useSettings = () => useContext(SettingsContext);

export default useSettings;
