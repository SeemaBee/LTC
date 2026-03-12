import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import getStyles from './Cart.styles';
import CustomText from 'common/components/text';
import DashboardHeader from 'common/components/dashboardHeader';
import { SeekerAppNavigationProp } from 'features/seeker/types/seekerNavigationTypes';
import { ChevronRight, MapPin, Pencil, Star } from 'lucide-react-native';
import { Metrics } from 'theme/metrics';
import { LightTheme } from 'theme/colors';
import { CleaningIllustration } from 'assets/images';
import AddedServices from 'features/seeker/components/home/AddedServices';
import { Coupon, SmallHome, Time } from 'assets/svg';
import AvailableSlots from 'features/seeker/components/cart/AvailableSlots';

type Props = {
  navigation: SeekerAppNavigationProp<'Cart'>;
};

const Cart = ({ navigation }: Props) => {
  const styles = getStyles();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <View style={styles.container}>
      <DashboardHeader
        text="Your Cart"
        showBackIcon={false}
      />
      <ScrollView
        style={styles.subContainer}
        showsVerticalScrollIndicator={false}
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
        <View style={styles.serviceDetailsContainer}>
          <View style={styles.titleContainer}>
            <CustomText style={styles.title}>Basic Home Cleaning</CustomText>
            <CustomText style={styles.price}>$ 200</CustomText>
          </View>
          <CustomText style={styles.serviceAdded}>Services added</CustomText>
          <AddedServices title="Fridge/oven cleaning" price={80} />
        </View>
        <View style={styles.offersContainer}>
          <View style={styles.row}>
            <Coupon />
            <CustomText style={styles.couponText}>
              Coupons and offers
            </CustomText>
          </View>
          <ChevronRight size={Metrics._18} color={LightTheme.primary} />
        </View>
        <CustomText style={styles.paymentText}>Payment summary</CustomText>
        <View style={styles.rowBox}>
          <CustomText style={styles.itemTotal}>Item total</CustomText>
          <CustomText style={styles.itemTotal}>$ 200</CustomText>
        </View>
        <View style={styles.taxFee}>
          <CustomText style={styles.itemTotal}>Taxes and Fee</CustomText>
          <CustomText style={styles.itemTotal}>$ 10</CustomText>
        </View>
        <View style={styles.separator} />
        <View style={styles.rowBox}>
          <CustomText style={styles.totalAmount}>Total amount</CustomText>
          <CustomText style={styles.totalAmount}>$ 210</CustomText>
        </View>
        <View style={styles.separator} />
        <View style={styles.rowBox}>
          <CustomText style={styles.totalAmount}>Amount to pay</CustomText>
          <CustomText style={styles.totalAmount}>$ 210</CustomText>
        </View>
        <View style={styles.separator} />
        <CustomText style={styles.addressText}>Address</CustomText>
        <View style={styles.addressContainer}>
          <View style={styles.row}>
            <SmallHome />
            <CustomText style={styles.address}>
              Sector 62, sahibzada ajit singh nagar....
            </CustomText>
          </View>
          <Pencil
            size={Metrics._18}
            fill={LightTheme.grey7}
            stroke={LightTheme.white}
          />
        </View>
        <View style={styles.serviceDetailsContainer}>
          <CustomText style={styles.addressText}>
            Scheduled Appointment
          </CustomText>
          <View style={styles.addressContainer}>
            <View style={styles.row}>
              <Time />
              <CustomText style={styles.address}>
                Fri, Dec 12 - 9:30 AM
              </CustomText>
            </View>
            <Pencil
              size={Metrics._18}
              fill={LightTheme.grey7}
              stroke={LightTheme.white}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.editAction}
          onPress={() =>
            navigation.navigate('HomeStack', { screen: 'ServiceList' })
          }
        >
          <CustomText style={styles.editPackage}>Edit package</CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.slotAction}
          onPress={() => setShowPopup(true)}
        >
          <CustomText style={styles.selectSlot}>Select slot</CustomText>
        </TouchableOpacity>
      </View>

      {showPopup && (
        <AvailableSlots
          show={showPopup}
          handleClose={() => setShowPopup(false)}
        />
      )}
    </View>
  );
};

export default Cart;
