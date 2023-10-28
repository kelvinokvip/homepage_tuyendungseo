"use client";
import BannerComponent from "@/components/pages/Home/Banner";
import UsedByComponent from "@/components/pages/Home/UsedBy";
import GoodWhat from "@/components/pages/Home/GoodWhat";
import LastSectionComponent from "@/components/pages/Home/LastSection";
import PlacePostComponent from "@/components/pages/Home/PlacePost";
import { useCheckAuth } from "@/utils/useCheckAuth";
import React from "react";
import Privacy from "@/components/pages/Home/Privacy";
import IntroduceComponent from "@/components/pages/Home/Introduce";

export default function Home() {
  // const { user } = useCheckAuth();
  // console.log('user:', user)
  useCheckAuth();
  return (
    <>
      <BannerComponent />
      <UsedByComponent />
      <IntroduceComponent />
      <Privacy />
      <GoodWhat />
      {/* <PlacePostComponent /> */}
      <LastSectionComponent />
    </>
  );
}
