import React from 'react';
import {Scene,Router} from 'react-native-router-flux';
import entrance from './src/screens/entrance';
import main from './src/screens/main';


const App = () => (
    <Router navigationBarStyle={{ backgroundColor: '#ADD8E6' }}>
        <Scene key="root">
        <Scene key="entrance" initial　component={entrance} title="entrance" left={()=>null}/>
        <Scene key="main" component={main} title="main" left={()=>null}/>
        </Scene>
    </Router>
);

export default App;