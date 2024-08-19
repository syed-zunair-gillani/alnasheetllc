import React, { useEffect, useState } from "react";
import Image from "next/image";
import SideBar from "@/components/servicespage/sideBar";
import { BsFolder2Open } from "react-icons/bs";
import { PiFilesLight } from "react-icons/pi";
import { PiShareFatLight } from "react-icons/pi";
import { client } from "../../config/client";
import { QServicesFromCat } from "../../config/query";
import { gql } from "@apollo/client";

function Slug({ service }: any) {

  const [servicesFromCategory, setServicesFromCategory] = useState()
  console.log("🚀 ~ Slug ~ servicesFromCategory:", servicesFromCategory)

  useEffect(() => {
    (async () => {
      const id = service?.service_category?.[0];
      const variables = {
        id: id,
      };
      const response = await fetch( `${process.env.NEXT_PUBLIC_WP_BACKEND_URL}/graphql`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: QServicesFromCat,
            variables: variables,
          }),
        }
      );

      const responseData = await response.json();
      setServicesFromCategory(responseData?.data?.sCategory?.services?.nodes)

    })();
  }, [service]);
  return (
    <>
      {/* <PageBanner /> */}
      <section className="mt-6 mb-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[70%_27%] py-8 gap-10">
            <div>
              <Image
                src={service?.featured_media_src_url}
                width={500}
                height={500}
                alt="Picture of the author"
                className="w-full rounded-xl"
              />
              <section>
                <h2 className="font-bold text-[#172554] text-4xl my-4">
                  {service?.title?.rendered}
                </h2>
                <div className="flex gap-5 items-center">
                  <div className="flex items-center text-lg gap-2 group cursor-pointer">
                    <BsFolder2Open className="text-2xl" />
                    <span className="mt-1 text-[#172554]/50 group-hover:text-[#172554]">
                      Services
                    </span>
                  </div>
                  <div className="text-[#172554]">|</div>
                  <div className="flex items-center text-lg gap-2 group cursor-pointer">
                    <PiFilesLight className="text-3xl" />
                    <span className="mt-1 text-[#172554]/50 group-hover:text-[#172554]">
                      Service Detail
                    </span>
                  </div>
                  <div className="text-[#172554]">|</div>
                  <div className="flex items-center text-lg gap-2 cursor-pointer group">
                    <PiShareFatLight className="text-[26px]" />
                    <span className="mt-1 text-[#172554]/50 group-hover:text-[#172554]">
                      Share
                    </span>
                  </div>
                </div>
              </section>
              <section className="mt-5 content">
                <div
                  className=""
                  dangerouslySetInnerHTML={{
                    __html: service?.content?.rendered,
                  }}
                />
              </section>
            </div>
            <SideBar servicesFromCategory={servicesFromCategory}/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Slug;

export async function getServerSideProps({ params }: any) {
  const slug = params?.slug;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WP_BACKEND_API_URL}/services?slug=${slug}`
  );
  const service = await response.json();

  return {
    props: {
      service: service[0],
    },
  };
}
