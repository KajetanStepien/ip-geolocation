import { useState, useEffect } from "react";
import { Input } from "./components/Input";
import { IpSection } from "./components/IpSection";
import { Map } from "./components/Map";
import { ErrorAlert } from "./components/ErrorAlert";

function App() {
  const [ipAddress, setIpAddress] = useState(null);
  const [ipAddressInfo, setIpAddressInfo] = useState({});
  const [error, setError] = useState(false);

  if (ipAddress === null) {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((res) => {
        setIpAddress(res.ip);
      });
  }

  useEffect(() => {
    if (ipAddress != null) {
      fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_pBaXyglRLym9mDG3Gx0UeT8fB4pjF&ipAddress=${ipAddress}`
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.location.city || res.isp) {
            setIpAddressInfo(res);
          } else {
            setError(true);
            setTimeout(() => {
              setError(false);
            }, 5000);
          }
        })
        .catch((e) => console.error(e.message));
    }
  }, [ipAddress]);

  return (
    <>
      <header className="flex flex-col items-center justify-center relative bg-[url('/images/pattern-bg-desktop.png')] lg:bg-[url('/images/pattern-bg-desktop.png')] lg:bg-cover lg:bg-no-repeat w-[100vw] h-[35vh]">
        <ErrorAlert opacity={error ? "opacity-100" : "opacity-0"} />
        <h1 className="lg:text-3xl font-[500] text-white text-2xl">
          IP Address Tracker
        </h1>
        <Input setIpAddress={setIpAddress} />
      </header>
      <main className="h-[65vh] relative flex justify-center lg:bg-gray-300">
        <IpSection ipAddressInfo={ipAddressInfo} />
        {ipAddressInfo.location ? (
          <Map xyz={[ipAddressInfo.location.lat, ipAddressInfo.location.lng]} />
        ) : (
          "Loading..."
        )}
      </main>
    </>
  );
}
export default App;
