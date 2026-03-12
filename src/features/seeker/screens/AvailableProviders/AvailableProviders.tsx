import { FlatList, View } from 'react-native';
import React, { useState } from 'react';
import getStyles from './AvailableProviders.styles';
import { SeekerAppNavigationProp } from 'features/seeker/types/seekerNavigationTypes';
import AvailableProvidersItem from 'features/seeker/components/home/AvailableProvidersItem';
import DashboardHeader from 'common/components/dashboardHeader';
import Button from 'common/components/button';

type Props = {
  navigation: SeekerAppNavigationProp<'AvailableProviders'>;
};

const AvailableProviders = ({ navigation }: Props) => {
  const styles = getStyles();
  const [selectedProvider, setSelectedProvider] = useState<number | null>(null);
  const handleNavigation = () => {
    navigation.navigate('UserProfile');
  };
  const handleSelect = (index: number) => {
    setSelectedProvider(index);
  };
  return (
    <View style={styles.container}>
      <DashboardHeader
        text="Providers Available"
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.subContainer}>
        <FlatList
          data={['1', '2', '3', '4', '5', '6', '7', '8']}
          renderItem={item => (
            <AvailableProvidersItem
              selected={selectedProvider === item.index}
              handleNavigate={handleNavigation}
              handleSelect={() => handleSelect(item.index)}
            />
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item}
        />
        <Button
          title="Continue"
          onPress={() => navigation.navigate('PreviewAddedServices')}
        />
      </View>
    </View>
  );
};

export default AvailableProviders;
