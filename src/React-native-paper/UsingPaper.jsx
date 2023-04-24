// import { View, Text } from 'react-native'
// import React from 'react'
// import { Button } from 'react-native-paper'

// const UsingPaper = () => {
//   return (
//     <View>
//       <Button icon="camera" mode='contained' onPress={()=>{"Pressed..."}}>
//         2333

//       </Button>

//     </View>
//   )
// }

// export default UsingPaper

handleSubscriberSelection = (subscribers, streamId) => {
  console.log('handleSubscriberSelection', streamId);
  let subscriberToSwap = subscribers.indexOf(streamId);
  let currentSubscribers = subscribers;
  let temp = currentSubscribers[subscriberToSwap];
  currentSubscribers[subscriberToSwap] = currentSubscribers[0];
  currentSubscribers[0] = temp;
  this.setState((prevState) => {
    const newStreamProps = {...prevState.streamProperties};
    for (let i = 0; i < currentSubscribers.length; i += 1) {
      if (i === 0) {
        newStreamProps[currentSubscribers[i]] = {
          ...prevState.streamProperties[currentSubscribers[i]],
        };
        newStreamProps[
          currentSubscribers[i]
        ].preferredResolution = mainSubscribersResolution;
      } else {
        newStreamProps[currentSubscribers[i]] = {
          ...prevState.streamProperties[currentSubscribers[i]],
        };
        newStreamProps[
          currentSubscribers[i]
        ].preferredResolution = secondarySubscribersResolution;
      }
    }
    console.log('mainSubscriberStreamId', streamId);
    console.log('streamProperties#2', newStreamProps);
    return {
      mainSubscriberStreamId: streamId,
      streamProperties: newStreamProps,
    };
  });
};