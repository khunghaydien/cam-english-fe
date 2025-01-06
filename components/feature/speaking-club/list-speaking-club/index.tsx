"use client";
import NextImage from "next/image";
import { SpeakingRoom } from "@/gql/graphql";
import { useQuery, useSubscription } from "@apollo/client";
import { Avatar, Button } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { capitalizeWords, getTextEllipsis } from "@/components/utils";
import { Phone } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { GET_SPEAKING_CLUB } from "@/graphql/query/speaking-club";
import {
  FilterSpeakingClubDto,
  selectSpeakingClub,
  setPagination,
  SpeakingClubState,
} from "@/stores/reducers/speaking-club.reducer";
import { useDispatch, useSelector } from "react-redux";
import { SPEAKING_CLUB_SUBSCRIPTION } from "@/graphql/subscription/speaking-club";
import { initialOrderByDto, initialPaginationDto } from "@/consts";
import { isEmpty } from "lodash";
import { AppDispatch } from "@/stores";
import { ImSpinner2 } from "react-icons/im";
import { useSession } from "next-auth/react";

const formatFilterSpeakingClub = (
  filterSpeakingClubDto: FilterSpeakingClubDto
) => {
  return {
    ...(filterSpeakingClubDto.name && { name: filterSpeakingClubDto.name }),
    ...(!isEmpty(filterSpeakingClubDto.level) && {
      level: filterSpeakingClubDto.level?.map(({ value }) => value),
    }),
    ...(!isEmpty(filterSpeakingClubDto.language) && {
      language: filterSpeakingClubDto.language?.map(({ value }) => value),
    }),
    ...(!isEmpty(filterSpeakingClubDto.type) && {
      type: filterSpeakingClubDto.type?.map(({ value }) => value),
    }),
  };
};

const useGetSpeakingClub = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: subscriptionSpeakingRoom } = useSubscription(
    SPEAKING_CLUB_SUBSCRIPTION
  );
  const [speakingClub, setSpeakingClub] = useState<SpeakingRoom[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  const { filterSpeakingClubDto }: SpeakingClubState =
    useSelector(selectSpeakingClub);

  const { refetch } = useQuery(GET_SPEAKING_CLUB, {
    variables: {
      orderByDto: initialOrderByDto,
      paginationDto: initialPaginationDto,
      filterSpeakingClubDto: formatFilterSpeakingClub(filterSpeakingClubDto),
    },
  });

  useEffect(() => {
    const fetchSpeakingClub = async () => {
      try {
        setLoading(true);
        const res = await refetch({
          orderByDto: initialOrderByDto,
          paginationDto: initialPaginationDto,
          filterSpeakingClubDto: formatFilterSpeakingClub(
            filterSpeakingClubDto
          ),
        });
        if (res?.data) {
          setSpeakingClub(res?.data?.getSpeakingClub?.data);
          dispatch(setPagination(res?.data?.getSpeakingClub?.pagination));
        }
      } catch (error) {
        console.error("Error fetching speaking club data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSpeakingClub();
  }, [filterSpeakingClubDto]);

  useEffect(() => {
    if (subscriptionSpeakingRoom)
      setSpeakingClub((prev) => [subscriptionSpeakingRoom, ...prev]);
  }, [subscriptionSpeakingRoom]);

  return {
    data: speakingClub,
    loading,
    refetch,
  };
};

function index() {
  const { data: userSession } = useSession();
  const router = useRouter();
  const { loading, data, refetch } = useGetSpeakingClub();
  const { pagination, filterSpeakingClubDto }: SpeakingClubState =
    useSelector(selectSpeakingClub);
  const dispatch = useDispatch<AppDispatch>();
  const [speakingClub, setSpeakingClub] = useState<SpeakingRoom[]>([]);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    setSpeakingClub(data);
  }, [data]);

  const handleScroll = useCallback(
    async (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
      const scrollArea = e.currentTarget;
      const position = scrollArea.scrollTop + scrollArea.clientHeight;
      if (
        scrollAreaRef &&
        scrollAreaRef.current &&
        position === scrollAreaRef.current.scrollHeight &&
        pagination?.totalPages > pagination?.currentPage
      ) {
        try {
          setFetching(true);
          const res = await refetch({
            orderByDto: initialOrderByDto,
            paginationDto: {
              ...initialPaginationDto,
              page: pagination?.currentPage + 1,
            },
            filterSpeakingClubDto: formatFilterSpeakingClub(
              filterSpeakingClubDto
            ),
          });
          if (res?.data) {
            dispatch(setPagination(res?.data?.getSpeakingClub?.pagination));
            setSpeakingClub([
              ...speakingClub,
              ...res?.data?.getSpeakingClub?.data,
            ]);
          }
        } catch (error) {
        } finally {
          setFetching(false);
        }
      }
    },
    [pagination, speakingClub]
  );
  
  return (
    <div
      ref={scrollAreaRef}
      style={{ height: "calc(100vh - 177px)", overflowY: "auto" }}
      onScroll={handleScroll}
    >
      {isEmpty(userSession?.user) ? (
        <div className="flex items-center justify-center w-full h-full">
          You need login first
        </div>
      ) : loading ? (
        <div className="flex items-center justify-center w-full h-full">
          <ImSpinner2 className="animate-spin text-primary w-12 h-12" />
        </div>
      ) : isEmpty(speakingClub) ? (
        <div className="flex items-center justify-center w-full h-full">
          No data
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {speakingClub?.map((speakingRoom: SpeakingRoom, index: number) => (
              <section
                key={index}
                className="rounded-lg bg-muted-foreground/10 p-6 flex flex-col gap-6 items-center justify-center flex-grow"
              >
                <header className="flex gap-3 items-center w-full">
                  <Avatar sx={{ width: 50, height: 50, cursor: "pointer" }}>
                    <NextImage
                      src={speakingRoom?.host?.image ?? ""}
                      alt={speakingRoom?.host?.name ?? ""}
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
                      {getTextEllipsis(speakingRoom.name, 20)}
                    </div>
                  </div>
                </header>
                <div className="w-full flex items-center justify-center gap-3">
                  <div className="rounded-full border border-dashed border-primary w-[100px] h-[100px]"></div>
                  <div className="rounded-full border border-dashed border-primary w-[100px] h-[100px]"></div>
                  <div className="rounded-full border border-dashed border-primary w-[100px] h-[100px]"></div>
                </div>
                <Button
                  variant="outlined"
                  startIcon={<Phone />}
                  onClick={() =>
                    router.push(`/speaking-club/${speakingRoom.id}`)
                  }
                >
                  Join and talk now
                </Button>
              </section>
            ))}
          </div>
          {fetching && (
            <div className="flex justify-center mt-6">
              <ImSpinner2 className="animate-spin text-primary w-12 h-12" />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default index;
