import { ScrollView, View } from 'react-native';
import getStyles from './ExploreServices.styles';
import DashboardHeader from 'common/components/dashboardHeader';
import { SeekerAppNavigationProp } from 'features/seeker/types/seekerNavigationTypes';
import ServicesItem from 'features/seeker/components/services/servicesItem';
import { Image1 } from 'assets/images';

type Props = {
  navigation: SeekerAppNavigationProp<'ExploreServices'>;
};

const ExploreServices: React.FC<Props> = ({ navigation }) => {
  const styles = getStyles();
  const goBack = () => navigation.goBack();
  return (
    <View style={styles.container}>
      <DashboardHeader text="Explore Services" onBackPress={goBack} />
      <ScrollView style={styles.subcontainer}>
        <ServicesItem title="Home Cleaning" price={200} serviceImage={Image1} showDetails={true} />
        <ServicesItem title="Salon at Home" price={200} serviceImage={Image1} showDetails={true} />
        <ServicesItem title="At-Home Yoga" price={200} serviceImage={Image1} showDetails={true} />
        <ServicesItem title="Tutoring" price={200} serviceImage={Image1} showDetails={true} />
      </ScrollView>
    </View>
  );
};

export default ExploreServices;
