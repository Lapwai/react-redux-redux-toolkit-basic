import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Auth from "../src/components/Auth";
import Header from "../src/components/Header";
import UserProfile from "../src/components/UserProfile";
function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {!isAuth && <Auth></Auth>}
      {isAuth && <UserProfile></UserProfile>}
      {/* <Counter /> */}
    </>
  );
}

export default App;
