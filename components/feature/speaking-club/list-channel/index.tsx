"use client";
import NextImage from "next/image";
import { Channel } from "@/gql/graphql";
import { useLazyQuery } from "@apollo/client";
import { Avatar, Button } from "@mui/material";
import React, { useEffect } from "react";
import { capitalizeWords } from "@/components/utils";
import { Phone } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { GET_SPEAKING_CLUB } from "@/graphql/query/speaking-club";

function index() {
  const router = useRouter();
  const [getSpeakingClub, { data, loading, refetch }] =
    useLazyQuery(GET_SPEAKING_CLUB);
  const { data: user } = useSession();

  useEffect(() => {
    (async () => {
      await getSpeakingClub({
        variables: {
          paginationDto: {
            page: 1,
            pageSize: 20,
          },
        },
      });
    })();
  }, [getSpeakingClub]);

  return (
    <div style={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto" }}>
      {loading ? (
        <>Loading...</>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data?.getSpeakingClub?.data?.map((channel: Channel) => (
            <section
              key={channel.id}
              className="rounded-lg bg-muted-foreground/10 p-6 flex flex-col gap-6 items-center justify-center flex-grow"
            >
              <header className="flex gap-3 items-center w-full">
                <Avatar sx={{ width: 50, height: 50, cursor: "pointer" }}>
                  <NextImage
                    src={user?.user?.image ?? ""}
                    alt={user?.user?.name ?? ""}
                    width={50}
                    height={50}
                  />
                </Avatar>
                <div className="flex flex-col ml-3">
                  <div className="flex gap-2 items-center">
                    <div className="font-bold ">
                      {capitalizeWords(channel.language as string)}
                    </div>
                    <div className="italic">
                      {capitalizeWords(channel.level as string)}
                    </div>
                  </div>
                  <div className="text-sx text-muted-foreground">
                    {capitalizeWords(channel.name as string)}
                  </div>
                </div>
              </header>
              <div className="w-full">
                <div className="rounded-full border border-dashed border-primary w-[100px] h-[100px]"></div>
              </div>
              <Button
                variant="outlined"
                startIcon={<Phone />}
                onClick={() => router.push(`/speaking-club/${channel.id}`)}
              >
                Join and talk now
              </Button>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

export default index;
