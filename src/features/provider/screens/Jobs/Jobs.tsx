import { FlatList, View } from 'react-native';
import getStyles from './Jobs.style';
import Header from 'common/components/header';
import Tabs from 'features/provider/components/requests/tabs';
import { useEffect, useState } from 'react';
import JobCard from 'features/provider/components/requests/jobCard';
import { ProviderAppNavigationProp } from 'features/provider/types/providerNavigationTypes';
import Loader from 'common/components/loader';
import {
  getCompletedJobsData,
  getInProgressJobsData,
  getUpcomingJobs,
} from 'features/provider/apis/jobs';
import { useDispatch, useSelector } from 'react-redux';
import { setProviderUpcomingJobs } from 'common/redux/features/provider/upcomingJobsSlice';
import Toast from 'react-native-toast-message';
import { RootState } from 'common/redux/store';

interface Props {
  navigation: ProviderAppNavigationProp<'Jobs'>;
}

const Jobs: React.FC<Props> = ({ navigation }) => {
  const styles = getStyles();
  const [selectedTab, setSelectedTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const upcomingJobs = useSelector(
    (state: RootState) => state.providerUpcomingJobs,
  );
  const inProgressjobs = useSelector(
    (state: RootState) => state.providerUpcomingJobs,
  );
  const completedJobs = useSelector(
    (state: RootState) => state.providerUpcomingJobs,
  );

  const getData = async () => {
    setIsLoading(true);
    try {
      const [upcomingJobs, inProgressJobs, completedJobs] = await Promise.all([
        getUpcomingJobs(),
        getInProgressJobsData(),
        getCompletedJobsData(),
      ]);

      if (upcomingJobs.data.status) {
        dispatch(setProviderUpcomingJobs(upcomingJobs.data.data));
      }
      if (inProgressJobs.data.status) {
        dispatch(setProviderUpcomingJobs(inProgressJobs.data.data));
      }
      if (completedJobs.data.status) {
        dispatch(setProviderUpcomingJobs(completedJobs.data.data));
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
      <Header text="Jobs" showBackIcon={false} />
      <View style={styles.subContainer}>
        <View style={styles.row}>
          <Tabs
            selected={selectedTab === 0}
            handleClick={() => setSelectedTab(0)}
            text="Upcoming"
          />
          <Tabs
            selected={selectedTab === 1}
            handleClick={() => setSelectedTab(1)}
            text="In Progress"
          />
          <Tabs
            selected={selectedTab === 2}
            handleClick={() => setSelectedTab(2)}
            text="Completed Jobs"
          />
        </View>
        <FlatList
          data={
            selectedTab === 0
              ? upcomingJobs
              : selectedTab === 1
              ? inProgressjobs
              : completedJobs
          }
          keyExtractor={(_, index) => index.toString()}
          renderItem={(item) => (
            <JobCard
              item={item.item}
              onPress={() => navigation.navigate('UpcomingJob')}
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

export default Jobs;
