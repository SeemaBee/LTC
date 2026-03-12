import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeScreen from './src/common/components/safeScreen';
import CommonNavigator from 'common/navigation/CommonNavigator';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import store, { persistor } from 'common/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <StatusBar barStyle={'dark-content'} />
          <SafeScreen>
            <NavigationContainer>
              <CommonNavigator />
              <Toast visibilityTime={2000} position="bottom" />
            </NavigationContainer>
          </SafeScreen>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
export default App;
