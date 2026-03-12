import Header from 'common/components/header';
import CustomText from 'common/components/text';
import { Keyboard, ScrollView, View } from 'react-native';
import getStyles from './ServiceList.styles';
import { Star } from 'lucide-react-native';
import { useTheme } from 'common/helperFunctions';
import { CalendarTickIcon } from 'assets/svg';
import { Metrics } from 'theme/metrics';
import ServiceListItem from 'features/seeker/components/home/serviceListItem';
import Button from 'common/components/button';
import { SeekerAppNavigationProp } from 'features/seeker/types/seekerNavigationTypes';
import { useState } from 'react';
import SearchBox from 'common/components/searchBox';

type Props = {
  navigation: SeekerAppNavigationProp<"ServiceList">
}

const ServiceList = ({ navigation }: Props) => {
  const theme = useTheme();
  const styles = getStyles();
  const [searchText, setSearchText] = useState<string>("");
  return (
    <View style={styles.container}>
      <Header onBackPress={() => navigation.goBack()} headerStyle={styles.customHeaderStyle} />
      <View style={styles.subContainer} onStartShouldSetResponder={() => {
        Keyboard.dismiss();
        return false;
      }}>
        <SearchBox onChange={text => setSearchText(text)} val={searchText} />
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
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
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
        <Button title='Continue' onPress={() => navigation.navigate("AvailableProviders")} />
      </View>
    </View>
  );
};

export default ServiceList;
