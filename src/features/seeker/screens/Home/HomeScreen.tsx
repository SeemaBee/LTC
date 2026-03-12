import React, { useState } from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomText from 'common/components/text';
import { SeekerAppNavigationProp } from 'features/seeker/types/seekerNavigationTypes';
import getStyles, { featureContainer } from './HomeScreen.styles';
import {
  AgentLogo,
  Booking,
  ChildcareIcon,
  ElderlyCareIcon,
  NotificationIcon,
  NursingAssistantIcon,
  PersonalSupportWorkerIcon,
  Professional,
  WalletFilled,
  YogaIcon,
} from 'assets/svg';
import SearchBox from 'common/components/searchBox';
import ServiceCard from 'features/seeker/components/home/serviceCard';
import { Image2 } from 'assets/images';
import ProviderCard from 'features/seeker/components/home/providerCard';
import { Metrics } from 'theme/metrics';
import { MapPin } from 'lucide-react-native';
import { useTheme } from 'common/helperFunctions';

type Props = {
  navigation: SeekerAppNavigationProp<'Home'>;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const styles = getStyles();
  const theme = useTheme();
  const [searchText, setSearchText] = useState<string>('');
  return (
    <View style={styles.parentContainer}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View>
            <View style={styles.pinRow}>
              <MapPin fill={theme.black1} color={theme.white} />
              <CustomText>Mohali Walk</CustomText>
            </View>
            <CustomText>Sector 62, Sahibzada ajit singh nagar</CustomText>
          </View>
          <NotificationIcon />
        </View>
        <SearchBox onChange={text => setSearchText(text)} val={searchText} />
        <ScrollView contentContainerStyle={styles.contentStyle} showsVerticalScrollIndicator={false}>
          <CustomText style={styles.title}>
            All Services in One Place
          </CustomText>
          <CustomText style={styles.desc}>
            Trusted home services at your doorstep.
          </CustomText>
          <View style={styles.servicesRow}>
            <ServiceCard
              label={`Personal Support Worker`}
              icon={PersonalSupportWorkerIcon}
              onPress={() =>
                navigation.navigate('CartStack', {
                  screen: 'BookingSchedule',
                })
              }
            />
            <ServiceCard
              label="Childcare at Home"
              icon={ChildcareIcon}
              onPress={() => navigation.navigate('ServiceList')}
            />
            <ServiceCard label="Nursing Assistant" icon={NursingAssistantIcon} />
            <ServiceCard
              label="At-Home Yoga"
              icon={YogaIcon}
            />
            <ServiceCard label="Elderly Care" icon={ElderlyCareIcon} />
          </View>
          <View style={styles.bookButtonContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ExploreServices')}
              activeOpacity={0.8}
              style={styles.bookButtonBox}
            >
              <CustomText style={styles.buttonText}>Book a Service</CustomText>
            </TouchableOpacity>
          </View>
          <CustomText style={styles.title}>Recommended Services</CustomText>
          <CustomText style={styles.desc}>
            Top-rated providers trusted by your neighbors.
          </CustomText>
          <FlatList
            data={['1', '2', '3', '4']}
            renderItem={item => <ProviderCard />}
            keyExtractor={item => item}
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{
              gap: Metrics._18,
              marginVertical: Metrics._24,
            }}
          />
          <CustomText style={styles.title}>How It Works</CustomText>
          <CustomText style={styles.desc}>
            Choose, schedule, and let experts handle the rest.
          </CustomText>
          <View style={styles.row}>
            <View style={styles.stepBox}>
              <View style={styles.countView}>
                <CustomText style={styles.count}>1</CustomText>
              </View>
              <CustomText style={styles.countText}>
                {`Choose Your\nService`}
              </CustomText>
            </View>
            <View style={styles.stepBox}>
              <View style={styles.countView}>
                <CustomText style={styles.count}>2</CustomText>
              </View>
              <CustomText
                style={styles.countText}
              >{`Book in\nMinutes`}</CustomText>
            </View>
            <View style={styles.stepBox}>
              <View style={styles.countView}>
                <CustomText style={styles.count}>3</CustomText>
              </View>
              <CustomText style={styles.countText}>
                {`Get Matched with\na Professional`}
              </CustomText>
            </View>
          </View>
          <ImageBackground
            source={Image2}
            style={styles.imageBackground}
            resizeMode="contain"
          >
            <CustomText style={styles.glowTitle}>Glow Up at Home</CustomText>
            <CustomText style={styles.glowDesc}>
              Salon-quality grooming delivered to your doorstep.
            </CustomText>
            <TouchableOpacity
              onPress={() => navigation.navigate('ExploreServices')}
              activeOpacity={0.8}
              style={styles.bookButtonBox}
            >
              <CustomText style={styles.buttonText}>Book a Service</CustomText>
            </TouchableOpacity>
          </ImageBackground>
          <CustomText style={styles.title}>Why Users Love Us</CustomText>
          <CustomText style={styles.desc}>
            Here's what makes our service seekers trust us.
          </CustomText>
          <View style={styles.row}>
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
          <View style={styles.offerContainer}>
            <CustomText style={styles.offerTitle}>
              Get <CustomText style={styles.offer}>20% Off</CustomText> on Your
              First Service
            </CustomText>
            <CustomText style={styles.offerDescription}>
              Applicable on salon, home cleaning, yoga & more.
            </CustomText>
            <View style={styles.bookButtonContainer}>
              <TouchableOpacity
                onPress={() => {}}
                activeOpacity={0.8}
                style={styles.bookButtonBox}
              >
                <CustomText style={styles.buttonText}>
                  Grab the Offer
                </CustomText>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity activeOpacity={0.9} style={styles.agentContainer}>
        <AgentLogo />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
