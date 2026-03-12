import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { CleaningIllustration } from 'assets/images';
import getStyles from 'features/seeker/screens/AvailableProviders/AvailableProviders.styles';
import CustomText from 'common/components/text';
import { MapPin, Star } from 'lucide-react-native';
import { Metrics } from 'theme/metrics';
import { LightTheme } from 'theme/colors';
import { useNavigation } from '@react-navigation/native';

type Props = {
  handleNavigate: () => void;
  handleSelect: () => void;
  selected: boolean;
};

const AvailableProvidersItem: React.FC<Props> = ({
  handleNavigate,
  handleSelect,
  selected
}) => {
  const styles = getStyles();
  return (
    <View style={[styles.itemContainer, selected && styles.selectedItem]}>
      <TouchableOpacity activeOpacity={0.8} onPress={handleNavigate}>
        <Image source={CleaningIllustration} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} onPress={handleSelect}>
        <CustomText style={styles.providersName}>Jane Cooper</CustomText>
        <View style={styles.row}>
          <View style={styles.row}>
            <Star
              size={Metrics._14}
              fill={LightTheme.grey7}
              stroke={LightTheme.white}
            />
            <CustomText style={styles.reviewLabel}>4.3 reviews</CustomText>
          </View>
          <View style={styles.distanceRow}>
            <MapPin
              size={Metrics._14}
              fill={LightTheme.grey7}
              stroke={LightTheme.white}
            />
            <CustomText style={styles.reviewLabel}>3 km away</CustomText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AvailableProvidersItem;
