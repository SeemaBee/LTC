import { ScrollView, View } from 'react-native';
import React from 'react';
import getStyles from './Services.styles';
import DashboardHeader from 'common/components/dashboardHeader';
import { SeekerAppNavigationProp } from 'features/seeker/types/seekerNavigationTypes';
import ServicesItem from 'features/seeker/components/services/servicesItem';
import { Image1, Image2, Image3, Image4 } from 'assets/images';

type Props = {
  navigation: SeekerAppNavigationProp<'Services'>;
}

const Services = ({ navigation }: Props) => {
  const styles = getStyles();
  return (
    <View style={styles.container}>
      <DashboardHeader text='Services' showBackIcon={false} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.subContainer}>
        <ServicesItem
          title='Home Cleaning'
          price={200}
          serviceImage={Image1}
        />
        <ServicesItem
          title='Salon at Home'
          price={100}
          serviceImage={Image2}
        />
        <ServicesItem
          title='At-Home Yoga'
          price={500}
          serviceImage={Image3}
        />
        <ServicesItem
          title='Tutoring'
          price={150}
          serviceImage={Image4}
        />
        <ServicesItem
          title='Nanny'
          price={100}
          serviceImage={Image1}
        />
        <ServicesItem
          title='Carless driver'
          price={400}
          serviceImage={Image2}
        />
      </ScrollView>
    </View>
  );
};

export default Services;
