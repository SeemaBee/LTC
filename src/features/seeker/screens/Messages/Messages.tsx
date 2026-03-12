import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import getStyles from './Messages.styles';
import DashboardHeader from 'common/components/dashboardHeader';
import Input from 'common/components/input';
import { Search } from 'lucide-react-native';
import { useTheme } from 'common/helperFunctions';
import { User } from 'assets/images';
import CustomText from 'common/components/text';
import { Metrics } from 'theme/metrics';
import { useNavigation } from '@react-navigation/native';
import { SeekerStackParamList } from 'features/seeker/types/seekerNavigationTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Card = () => {
  const styles = getStyles();
  const navigation = useNavigation<NativeStackNavigationProp<SeekerStackParamList>>();
  const handleNavigate = () => {
    navigation.navigate('ChatScreen');
  };
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={handleNavigate}
    >
      <View>
        <Image source={User} style={styles.profileImg} />
        <View style={styles.dot} />
      </View>
      <View style={styles.userNameAndTime}>
        <View style={styles.flx}>
          <CustomText style={styles.username}>Smith Mathew</CustomText>
          <CustomText style={styles.time}>3 days ago</CustomText>
        </View>
        <View style={styles.flx}>
          <CustomText numberOfLines={1} style={styles.userMessage}>
            Hi, David. Hope you’re doing ....
          </CustomText>
          <View style={styles.countContainer}>
            <CustomText style={styles.count}>6</CustomText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Messages = () => {
  const styles = getStyles();
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <DashboardHeader text="Messages" />
      <View style={styles.subContainer}>
        <Input
          placeholder="Search"
          leftIcon={<Search stroke={theme.black1} size={Metrics._15} />}
        />
        <FlatList
          data={[1, 2, 3]}
          keyExtractor={(_, index) => index.toString()}
          renderItem={() => <Card />}
          contentContainerStyle={{ gap: Metrics._18 }}
        />
      </View>
    </View>
  );
};

export default Messages;
