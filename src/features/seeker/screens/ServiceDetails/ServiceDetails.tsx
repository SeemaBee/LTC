import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import React from 'react';
import getStyles from './ServiceDetails.styles';
import { SeekerAppNavigationProp } from 'features/seeker/types/seekerNavigationTypes';
import CustomText from 'common/components/text';
import { ChevronRight, CircleCheck, Clock5, MapPin, Star } from 'lucide-react-native';
import { LightTheme } from 'theme/colors';
import { Metrics } from 'theme/metrics';
import { CleaningIllustration } from 'assets/images';
import { Booking, Professional, WalletFilled } from 'assets/svg';
import ServiceDetailsItem from 'features/seeker/components/home/ServiceDetailsItem';
import { featureContainer } from '../Home/HomeScreen.styles';
import RatingReviewItem from 'features/seeker/components/home/RatingReviewItem';
import DashboardHeader from 'common/components/dashboardHeader';
import { useTheme } from 'common/helperFunctions';

type Props = {
  navigation: SeekerAppNavigationProp<'ServiceDetails'>;
};

const ServiceDetails = ({ navigation }: Props) => {
  const styles = getStyles();
  const services = [
    'Sweeping',
    'Mopping',
    'Dusting',
    'Surface wipedowns',
    'Window & furniture dusting',
    'Bathrooms',
  ];
  const bringing = [
    'Cleaning tools',
    'Gloves & mask',
    'Basic cleaning products',
  ];
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <DashboardHeader
        text="Service Detail"
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.subContainer}
      >
        <View style={styles.rowBox}>
          <CustomText>Assigned Provider</CustomText>
          <TouchableOpacity
            activeOpacity={1}
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
        <Image source={CleaningIllustration} style={styles.bannerImage} />
        <CustomText style={styles.title}>Basic Home Cleaning</CustomText>
        <View style={styles.ratingTimeStyle}>
          <View style={styles.row}>
            <Star
              size={Metrics._14}
              fill={LightTheme.grey7}
              stroke={LightTheme.white}
            />
            <CustomText style={styles.reviewLabel}>4.3 reviews</CustomText>
          </View>
          <View style={styles.distanceRow}>
            <Clock5 size={Metrics._14} stroke={LightTheme.grey7} />
            <CustomText style={styles.reviewLabel}>3 hrs</CustomText>
          </View>
        </View>
        <CustomText style={styles.price}>$ 200</CustomText>
        <View style={styles.separator} />
        <View>
          <CustomText style={styles.title}>What’s Included</CustomText>
          {services.map((el, ind) => {
            return (
              <View key={ind} style={styles.featuresContainer}>
                <CircleCheck
                  fill={theme.primary}
                  stroke={theme.white}
                  size={Metrics._24}
                />
                <CustomText style={styles.featuresText}>{el}</CustomText>
              </View>
            );
          })}
        </View>
        <View style={styles.separator} />
        <CustomText style={styles.title}>Added Services</CustomText>
        <View style={styles.addedServicesContainer}>
          <ServiceDetailsItem
            title="Fridge/oven cleaning"
            rating={4.3}
            price={200}
          />
          <ServiceDetailsItem
            title="Pet hair removal"
            rating={4.5}
            price={100}
          />
        </View>
        <View style={styles.serviceHighlightsContainer}>
          <CustomText style={styles.title}>Service Highlights</CustomText>
          <View style={styles.servicesRow}>
            <View style={featureContainer(true)}>
              <Professional />
              <CustomText
                style={styles.centeredText}
              >{`Verified\nProfessionals`}</CustomText>
            </View>
            <View style={featureContainer(true)}>
              <Booking />
              <CustomText
                style={styles.centeredText}
              >{`Easy\nBooking`}</CustomText>
            </View>
            <View style={featureContainer(false)}>
              <WalletFilled width={Metrics._20} height={Metrics._20} />
              <CustomText
                style={styles.centeredText}
              >{`Secure\nPayments`}</CustomText>
            </View>
          </View>
        </View>
        <View style={styles.bringContainer}>
          <CustomText style={styles.title}>What They Bring</CustomText>
          {bringing.map((el, ind) => {
            return (
              <View key={ind} style={styles.featuresContainer}>
                <View style={styles.dot} />
                <CustomText style={styles.featuresText}>{el}</CustomText>
              </View>
            );
          })}
        </View>
        <View style={styles.lovedOnesContainer}>
          <CustomText style={styles.knowText}>
            Let your loved ones know about this
          </CustomText>
          <TouchableOpacity activeOpacity={0.8} style={styles.shareAction}>
            <CustomText style={styles.shareLabel}>Share the service</CustomText>
          </TouchableOpacity>
        </View>
        <View style={styles.ratingsContainer}>
          <CustomText style={styles.title}>Ratings & Reviews</CustomText>
          <View style={styles.rateCountContainer}>
            <Star
              size={Metrics._18}
              fill={LightTheme.primary}
              stroke={LightTheme.white}
              style={styles.starStyles}
            />
            <View>
              <CustomText style={styles.rateCount}>4.8</CustomText>
              <CustomText style={styles.reviewCount}>120 reviews</CustomText>
            </View>
          </View>
          <CustomText style={styles.title}>All reviews</CustomText>
        </View>
        <RatingReviewItem
          title={'Akshay Singh'}
          day="Dec 12, 2025"
          desc="Amazing service! The cleaner was on time and super professional. My home looks fresh and spotless."
        />
        <RatingReviewItem
          title={'Akshay Singh'}
          day="Dec 12, 2025"
          desc="Amazing service! The cleaner was on time and super professional. My home looks fresh and spotless."
        />
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.footerView}>
          <View style={styles.footerContent}>
            <CustomText style={styles.title}>$1500</CustomText>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.cartAction}
              onPress={() => navigation.navigate('CartStack')}
            >
              <CustomText style={styles.viewCart}>View Cart</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ServiceDetails;
