"use client";
import NextImage from "next/image";
import { Channel } from "@/gql/graphql";
import { GET_CHANNEL } from "@/graphql/query/channels";
import { useLazyQuery } from "@apollo/client";
import { Avatar, Button } from "@mui/material";
import React, { useEffect } from "react";
import { capitalizeWords } from "@/components/utils";
import { Phone } from "@mui/icons-material";
import { useRouter } from "next/navigation";

function index() {
  const router = useRouter();
  const [getChannel, { data, loading, refetch }] = useLazyQuery(GET_CHANNEL);

  useEffect(() => {
    (async () => {
      await getChannel({
        variables: {
          paginationDto: {
            page: 1,
            pageSize: 20,
          },
        },
      });
    })();
  }, []);

  return (
    <div style={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto" }}>
      {loading ? (
        <>Loading...</>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data?.getChannel?.data?.map(
            ({ id, name, level, language, type, host }: Channel) => (
              <section
                key={id}
                className="rounded-lg bg-muted-foreground/10 p-6 flex flex-col gap-6 items-center justify-center flex-grow"
              >
                <header className="flex gap-3 items-center w-full">
                  <Avatar sx={{ width: 50, height: 50, cursor: "pointer" }}>
                    <NextImage
                      src={data?.user?.image ?? ""}
                      alt={data?.user?.name ?? ""}
                      width={50}
                      height={50}
                    />
                  </Avatar>
                  <div className="flex flex-col ml-3">
                    <div className="flex gap-2 items-center">
                      <div className="font-bold ">
                        {capitalizeWords(language as string)}
                      </div>
                      <div className="italic">
                        {capitalizeWords(level as string)}
                      </div>
                    </div>
                    <div className="text-sx text-muted-foreground">
                      {capitalizeWords(name as string)}
                    </div>
                  </div>
                </header>
                <div className="w-full">
                  <div className="rounded-full border border-dashed border-primary w-[100px] h-[100px]"></div>
                </div>
                <Button
                  variant="outlined"
                  startIcon={<Phone />}
                  onClick={() => router.push(`/speaking-club/${name}`)}
                >
                  Join and talk now
                </Button>
              </section>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default index;
