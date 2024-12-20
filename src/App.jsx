import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import {username, tag, location, avatar, stats} from "../src/userData.json";
import friends from "../src/components/FriendList";

const App = () => {
 return (
 <>
 <Profile
 name={username}
 tag={tag}
 location={location}
 image={avatar}
 stats={stats}
 />
 <FriendList friends={friends} />
 </>
 );
};

export default App;