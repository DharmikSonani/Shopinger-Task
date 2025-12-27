/**
 * @format
 */

import { Appearance, AppRegistry, Text, TextInput } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { ReduxPersistor, ReduxStore } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

Appearance.setColorScheme('light');

const Wrapper = () => {
    return (
        <SafeAreaProvider>
            <Provider store={ReduxStore}>
                <PersistGate persistor={ReduxPersistor}>
                    <App />
                </PersistGate>
            </Provider>
        </SafeAreaProvider>
    )
}

AppRegistry.registerComponent(appName, () => Wrapper);
