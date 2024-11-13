"use client";
import {
  Avatar,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import React from "react";
import NextImage from "next/image";
import { Logout } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useMounted } from "@/components/hook";
import dynamic from "next/dynamic";

const SwitchTheme = dynamic(() => import("./switch-theme"), {
  ssr: false,
  suspense: true,
});

const SwitchLanguage = dynamic(() => import("./switch-language"), {
  ssr: false,
  suspense: true,
});

function AccountMenu() {
  const mounted = useMounted();
  const { data } = useSession();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const router = useRouter();
  if (!mounted) return null;

  return (
    <>
      <Tooltip title="Account settings">
        <Avatar
          sx={{ width: 40, height: 40, cursor: "pointer" }}
          onClick={handleClick}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <NextImage
            src={data?.user?.image ?? ""}
            alt={data?.user?.name ?? ""}
            width={40}
            height={40}
          />
        </Avatar>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          sx={{
            height: "100%",
          }}
          onClick={() =>
            router.push(`/profile/${data?.user?.email?.split("@")[0]}`)
          }
        >
          <Avatar sx={{ width: 50, height: 50, cursor: "pointer" }}>
            <NextImage
              src={data?.user?.image ?? ""}
              alt={data?.user?.name ?? ""}
              width={50}
              height={50}
            />
          </Avatar>
          <div className="flex flex-col ml-3">
            <div className="font-bold text-lg">{data?.user?.name}</div>
            <div className="text-sx text-muted-foreground">
              {data?.user?.email}
            </div>
          </div>
        </MenuItem>
        <Divider />

        <SwitchTheme />
        <div className="h-3 w-full"></div>
        <SwitchLanguage />

        <Divider />
        <MenuItem
          onClick={() =>
            signOut({
              redirect: false,
            })
          }
          sx={{
            mt: "8px",
          }}
        >
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}

export default AccountMenu;
