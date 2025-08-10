import Header from "./components/header";
import FirstDetail from "./components/firstDetail";
import SecondDetail from "./components/secondDetail";
import ThirdDetail from "./components/thirdDetail";
import HowItWorks from "./components/Howitworks";

function App() {
  return (
    <>
      <Header />
      {/* Smaller padding on mobile, larger on desktop */}
      <div className="pt-16 sm:pt-24 lg:pt-32">
        <FirstDetail />
      </div>

      <div className="pt-16 sm:pt-24 lg:pt-32">
        <SecondDetail />
      </div>

      <div className="pt-16 sm:pt-24 lg:pt-32">
        <ThirdDetail />
      </div>
      <div className="pt-16 sm:pt-24 lg:pt-32">
        <HowItWorks />
      </div>
    </>
  );
}

export default App;
