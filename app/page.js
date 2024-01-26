"use client";
import GlobalApi from "@/shared/GlobalApi";
import BusinessList from "@/components/Home/BusinessList";
import CategoryList from "@/components/Home/CategoryList";
import GoogleMapView from "@/components/Home/GoogleMapView";
import RangeSelect from "@/components/Home/RangeSelect";
import SkeltonLoading from "@/components/SkeltonLoading";
import { UserLocationContext } from "@/context/UserLocationContext";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { data: session,status } = useSession();
  const [category, setCategory] = useState();
  const [radius, setRadius] = useState(2500);
  const [businessList, setBusinessList] = useState([]);
  const [businessListOrg, setBusinessListOrg] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  useEffect(() => {

    if (status === "authenticated") {
     
    }else{
      router.push("/Login");
    }

  }, [session]);

  useEffect(() => {
    getGooglePlace();
  }, [category, radius]);

  const getGooglePlace = () => {
    if (category) {
      setLoading(true);

      GlobalApi.getGooglePlace(
        category,
        radius,
        userLocation.lat,
        userLocation.lng
      ).then((resp) => {
         console.log(resp.data.product.results);
        setBusinessList(resp.data.product.results);
        setBusinessListOrg(resp.data.product.results);
        setLoading(false);
      });
    }
  };

  if (status === "authenticated") {
    return (
      <>
        <div className="grid  grid-cols-1 md:grid-cols-1  lg:p-8 gap-4 font-primary">
          <div className="p-3">
            <CategoryList onCategoryChange={(value) => setCategory(value)} />
           
          </div>
        </div>
        <div className=" col-span-3 ml-10 mr-10 mb-5">
          <GoogleMapView businessList={businessList} />
          <div
            className="md:relative mx-2 w-[92%] 
             bottom-3 relative md:bottom-3"
          >
            {!loading ? (
              <BusinessList businessList={businessList} />
            ) : (
              <div id="mapas" className="flex gap-3">
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <SkeltonLoading key={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
  
}
