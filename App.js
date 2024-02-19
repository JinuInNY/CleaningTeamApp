import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope, faL, faUser} from '@fortawesome/free-solid-svg-icons';
import globalStyle from './assets/styles/globalStyle';
import UserStory from './components/UserStory/UserStory';
import UserPost from './components/UserPosts/UserPost';

const App = () => {
  const userStories = [
    {
      firstName: '집',
      id: 1,
      profileImage: require('./assets/images/profiles/default_profile.png'),
    },
    {
      firstName: '종로3가',
      id: 2,
      profileImage: require('./assets/images/profiles/default_profile.png'),
    },
    {
      firstName: '을지로',
      id: 3,
      profileImage: require('./assets/images/profiles/default_profile.png'),
    },
    {
      firstName: '회사',
      id: 4,
      profileImage: require('./assets/images/profiles/default_profile.png'),
    },
    {
      firstName: 'Nana',
      id: 5,
      profileImage: require('./assets/images/profiles/default_profile.png'),
    },
    {
      firstName: 'Jina',
      id: 6,
      profileImage: require('./assets/images/profiles/default_profile.png'),
    },
    {
      firstName: 'Adam',
      id: 7,
      profileImage: require('./assets/images/profiles/default_profile.png'),
    },
    {
      firstName: 'H',
      id: 8,
      profileImage: require('./assets/images/profiles/default_profile.png'),
    },
    {
      firstName: 'Joon',
      id: 9,
      profileImage: require('./assets/images/profiles/default_profile.png'),
    },
    {
      firstName: 'Chen',
      id: 10,
      profileImage: require('./assets/images/profiles/default_profile.png'),
    },
  ];

  const userPosts = [
    {
      firstName: 'jin',
      lastName: 's',
      location: 'Boston, MA',
      image: require('./assets/images/posts/default_post.png'),
      profileImage: require('./assets/images/profiles/default_profile.png'),
      likes: 1201,
      comments: 24,
      bookmarks: 80,
      id: 1,
    },
    {
      firstName: 'adam',
      lastName: 's',
      location: 'Boston, MA',
      image: require('./assets/images/posts/default_post.png'),
      profileImage: require('./assets/images/profiles/default_profile.png'),
      likes: 121,
      comments: 4,
      bookmarks: 0,
      id: 2,
    },
    {
      firstName: 'seph',
      lastName: 's',
      location: 'Boston, MA',
      image: require('./assets/images/posts/default_post.png'),
      profileImage: require('./assets/images/profiles/default_profile.png'),
      likes: 1,
      comments: 2,
      bookmarks: 0,
      id: 3,
    },
    {
      firstName: 'jinqwe',
      lastName: 's',
      location: 'awe, MA',
      image: require('./assets/images/posts/default_post.png'),
      profileImage: require('./assets/images/profiles/default_profile.png'),
      likes: 11,
      comments: 22,
      bookmarks: 11,
      id: 4,
    },
    {
      firstName: 'jin',
      lastName: 's',
      location: 'Boston, MA',
      image: require('./assets/images/posts/default_post.png'),
      profileImage: require('./assets/images/profiles/default_profile.png'),
      likes: 1201,
      comments: 24,
      bookmarks: 80,
      id: 5,
    },
  ];

  const userPostPageSize = 2;
  const [userPostCurrentPage, setUserPostCurrentPage] = useState(1);
  const [userPostRenderData, setUserPostRenderData] = useState([]);
  const [isLoadingUserPost, setIsLoadingUserPost] = useState(false);

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderData, setUserStoriesRenderData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    console.log('currentPage', currentPage);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize; //exclude last

    if (startIndex >= database.length) {
      return [];
    }

    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPost(true);
    const getInitialDataPost = pagination(userPosts, 1, userPostPageSize);
    setUserPostRenderData(getInitialDataPost);
    setIsLoadingUserPost(false);
  }, []);

  return (
    <SafeAreaView>
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={globalStyle.header}>
                <Title title={'SPARK'} />
                <TouchableOpacity style={globalStyle.messageIcon}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    color={'#898DAE'}
                    size={20}
                  />
                  <View style={globalStyle.messagecNumContainer}>
                    <Text style={globalStyle.messageNum}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={globalStyle.userStoryContainer}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (isLoadingUserStories) {
                      return;
                    }
                    setIsLoadingUserStories(true);
                    const contentToAppend = pagination(
                      userStories,
                      userStoriesCurrentPage + 1,
                      userStoriesPageSize,
                    );
                    if (contentToAppend.length > 0) {
                      setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                      setUserStoriesRenderData(prev => [
                        ...prev,
                        ...contentToAppend,
                      ]);
                    }
                    setIsLoadingUserStories(false);
                  }}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={userStoriesRenderData}
                  renderItem={({item}) => (
                    <UserStory
                      key={'userStory' + item.id}
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                    />
                  )}
                />
              </View>
            </>
          }
          showsVerticalScrollIndicator={false}
          onEndReached={() => {
            //When user scrolling too past, it doesn't do
            //anything to prevent over-load. so it's
            //doing nothing when It's already loading new page and scrolling.
            if (isLoadingUserPost) {
              return;
            }

            setIsLoadingUserPost(true);
            const contentToAppendPost = pagination(
              userPosts,
              userPostCurrentPage + 1,
              userPostPageSize,
            );

            if (contentToAppendPost.length > 0) {
              setUserPostCurrentPage(userPostCurrentPage + 1);
              setUserPostRenderData(prev => [...prev, ...contentToAppendPost]);
            }
            setIsLoadingUserPost(false);
          }}
          onEndReachedThreshold={0.5}
          data={userPostRenderData}
          renderItem={({item}) => (
            <UserPost
              firstName={item.firstName}
              lastName={item.lastName}
              image={item.image}
              likes={item.likes}
              comments={item.comments}
              bookmarks={item.bookmarks}
              profileImage={item.profileImage}
              location={item.location}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
