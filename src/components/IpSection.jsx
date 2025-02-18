import { IpContentItem } from "./IpContentItem";

export function IpSection({ ipAddressInfo }) {
  return (
    <section className="z-1000 w-[85vw] absolute transform -translate-y-1/2 flex flex-col items-center lg:flex-row justify-center p-2 mt-14 md:mt-0 lg:mt-16 xl:mt-8 bg-white rounded-3xl">
      <IpContentItem
        title="IP ADDRESS"
        content={ipAddressInfo.ip ? ipAddressInfo.ip : "Loading..."}
      />
      <IpContentItem
        title="LOCATION"
        content={
          ipAddressInfo.location
            ? `${ipAddressInfo.location.city}, ${ipAddressInfo.location.region} ${ipAddressInfo.location.postalCode}`
            : "Loading..."
        }
      />
      <IpContentItem
        title="TIMEZONE"
        content={
          ipAddressInfo.location
            ? `UTC ${ipAddressInfo.location.timezone}`
            : "Loading..."
        }
      />
      <IpContentItem
        title="ISP"
        content={ipAddressInfo.location ? `${ipAddressInfo.isp}` : "Loading..."}
      />
    </section>
  );
}
