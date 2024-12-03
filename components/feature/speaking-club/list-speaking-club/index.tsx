"use client";
import NextImage from "next/image";
import { SpeakingRoom } from "@/gql/graphql";
import { useLazyQuery, useSubscription } from "@apollo/client";
import { Avatar, Button } from "@mui/material";
import React, { useEffect } from "react";
import { capitalizeWords } from "@/components/utils";
import { Phone } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { GET_SPEAKING_CLUB } from "@/graphql/query/speaking-club";
import {
  selectSpeakingClub,
  SpeakingClubState,
} from "@/stores/reducers/speaking-club.reducer";
import { useSelector } from "react-redux";
import { SPEAKING_CLUB_SUBSCRIPTION } from "@/graphql/subscription/speaking-club";

const useGetSpeakingClub = () => {
  const [getSpeakingClub, { data, loading, refetch }] =
    useLazyQuery(GET_SPEAKING_CLUB);
  const { data: newSpeakingRoom } = useSubscription(SPEAKING_CLUB_SUBSCRIPTION);
  const {
    filterSpeakingClubDto,
    paginationDto,
    orderByDto,
  }: SpeakingClubState = useSelector(selectSpeakingClub);

  useEffect(() => {
    (async () => {
      await getSpeakingClub({
        variables: {
          paginationDto: paginationDto,
          orderByDto: orderByDto,
          filterSpeakingClubDto: {
            name: filterSpeakingClubDto.name,
            level: filterSpeakingClubDto.level?.map(({ value }) => value),
            language: filterSpeakingClubDto.language?.map(({ value }) => value),
            type: filterSpeakingClubDto.type?.map(({ value }) => value),
          },
        },
      });
    })();
  }, [filterSpeakingClubDto]);
  return { data, loading };
};

function index() {
  const router = useRouter();
  const { data: user } = useSession();
  const { loading, data } = useGetSpeakingClub();
  return (
    <div style={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto" }}>
      {loading ? (
        <>Loading...</>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data?.getSpeakingClub?.data?.map((speakingRoom: SpeakingRoom) => (
            <section
              key={speakingRoom.id}
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
                      {capitalizeWords(speakingRoom.language as string)}
                    </div>
                    <div className="italic">
                      {capitalizeWords(speakingRoom.level as string)}
                    </div>
                  </div>
                  <div className="text-sx text-muted-foreground">
                    {capitalizeWords(speakingRoom.name as string)}
                  </div>
                </div>
              </header>
              <div className="w-full">
                <div className="rounded-full border border-dashed border-primary w-[100px] h-[100px]"></div>
              </div>
              <Button
                variant="outlined"
                startIcon={<Phone />}
                onClick={() => router.push(`/speaking-club/${speakingRoom.id}`)}
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
