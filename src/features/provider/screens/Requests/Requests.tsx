import { FlatList, View } from 'react-native';
import getStyles from './Requests.style';
import Header from 'common/components/header';
import { useEffect, useState } from 'react';
import JobCard from 'features/provider/components/requests/jobCard';
import Tabs from 'features/provider/components/requests/tabs';
import { ProviderAppNavigationProp } from 'features/provider/types/providerNavigationTypes';
import Loader from 'common/components/loader';
import {
  getAcceptedRequestsData,
  getRequestsData,
} from 'features/provider/apis/requestsScreenApis';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
import { setProviderNewRequests } from 'common/redux/features/provider/providerNewRequestsSlice';
import { RootState } from 'common/redux/store';
import { setProviderAcceptedRequests } from 'common/redux/features/provider/providerAcceptedRequests.slice';

interface Props {
  navigation: ProviderAppNavigationProp<'Jobs'>;
}

const Requests: React.FC<Props> = ({ navigation }) => {
  const styles = getStyles();
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const newRequests = useSelector((state: RootState) => state.providerRequests);

  const getData = async () => {
    setIsLoading(true);
    try {
      const [newRequestsRes, acceptedRequestsRes] = await Promise.all([
        getRequestsData(),
        getAcceptedRequestsData(),
      ]);
      if (newRequestsRes.data.status) {
        dispatch(setProviderNewRequests(newRequestsRes.data.data));
      }
      if (acceptedRequestsRes.data.status) {
        dispatch(setProviderAcceptedRequests(acceptedRequestsRes.data.data));
      }
    } catch (error: any) {
      const errorMessage = error?.message || 'Something went wrong.';
      Toast.show({
        type: 'error',
        text1: 'JackLap',
        text2: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Header text="Request" showBackIcon={false} />
      <View style={styles.subContainer}>
        <View style={styles.row}>
          <Tabs
            selected={selectedTab === 0}
            handleClick={() => setSelectedTab(0)}
            text="New Requests"
          />
          <Tabs
            selected={selectedTab === 1}
            handleClick={() => setSelectedTab(1)}
            text="Accepted"
          />
        </View>
        <FlatList
          data={newRequests}
          keyExtractor={(_, index) => index.toString()}
          renderItem={item => (
            <JobCard
              item={item.item}
              onPress={() => navigation.navigate('JobDetail')}
            />
          )}
          contentContainerStyle={styles.contentStyle}
          showsVerticalScrollIndicator={false}
        />
      </View>
      {isLoading && <Loader show={isLoading} />}
    </View>
  );
};

export default Requests;
