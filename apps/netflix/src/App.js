import { useAuthContext } from "@asgardeo/auth-react";
import { HomePage, LandingPage } from "./pages";
import { Loader } from  "./components";

function App() {

  const { state } = useAuthContext();

  if (state.isLoading) {
    return <Loader />;
  }

  return (
    <div className="App">
      {
        state.isAuthenticated
          ? <HomePage />
          : <LandingPage />
      }
    </div>
  );
}

export default App;
