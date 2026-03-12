import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import getStyles from './PreviewAddedServices.styles';
import DashboardHeader from 'common/components/dashboardHeader';
import { SeekerAppNavigationProp } from 'features/seeker/types/seekerNavigationTypes';
import CustomText from 'common/components/text';
import { ChevronRight, MapPin, Star } from 'lucide-react-native';
import { Metrics } from 'theme/metrics';
import { LightTheme } from 'theme/colors';
import { CleaningIllustration } from 'assets/images';
import { CalendarTickIcon } from 'assets/svg';
import { useTheme } from 'common/helperFunctions';
import ServiceListItem from 'features/seeker/components/home/serviceListItem';
import Button from 'common/components/button';

type Props = {
  navigation: SeekerAppNavigationProp<'PreviewAddedServices'>;
};

const PreviewAddedServices: React.FC<Props> = ({ navigation }) => {
  const styles = getStyles();
  const theme = useTheme();
  const handleBackNavigation = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <DashboardHeader onBackPress={handleBackNavigation} />
      <ScrollView style={styles.subContainer}>
        <View style={styles.rowBox}>
          <CustomText>Assigned Provider</CustomText>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.row}
            onPress={() => navigation.navigate('AvailableProviders')}
          >
            <CustomText style={styles.changePartnerLabel}>
              Change Partner
            </CustomText>
            <ChevronRight size={Metrics._15} color={LightTheme.primary} />
          </TouchableOpacity>
        </View>
        <View style={styles.providerContainer}>
          <Image source={CleaningIllustration} style={styles.providerImage} />
          <View style={styles.providersDetails}>
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
          </View>
        </View>
        <CustomText style={styles.header}>Home Cleaning</CustomText>
        <View style={styles.subHeading}>
          <View style={styles.reviewsContainer}>
            <Star fill={theme.grey7} stroke={theme.grey7} size={Metrics._14} />
            <CustomText style={styles.subHeadingText}>4.3 reviews</CustomText>
          </View>
          <View style={styles.bookingContainer}>
            <CalendarTickIcon />
            <CustomText style={styles.subHeadingText}>
              1.2 K bookings
            </CustomText>
          </View>
        </View>
        <View style={styles.servicesContainer}>
          <ServiceListItem
            title="Basic home cleaning"
            rating={4.3}
            price={100}
            desc={`Sweeping, mopping, dusting,\nsurface wipedowns, bathrooms`}
          />
          <ServiceListItem
            title="Deep cleaning"
            rating={4.3}
            price={200}
            desc={`Includes baseboards, behind\nfurniture, window sills`}
          />
        </View>
        <CustomText style={styles.additionalServicesTitle}>
          Add on services
        </CustomText>
        <View style={styles.servicesContainer}>
          <ServiceListItem
            title="Fridge/oven cleaning"
            rating={4.3}
            price={100}
            isSelectionMode={false}
          />
          <ServiceListItem
            title="Pet hair removal"
            rating={4.3}
            price={100}
            isSelectionMode={false}
          />
        </View>
      </ScrollView>
      <Button title='Add to Cart' onPress={() => navigation.navigate("ServiceDetails")} style={styles.button} />
    </View>
  );
};

export default PreviewAddedServices;
