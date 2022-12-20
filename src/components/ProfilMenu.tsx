import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import avatar from "../asset/avatar.png";
import {
  ArrowLeftOnRectangleIcon,
  TagIcon,
  WalletIcon,
  UserCircleIcon,
  UserIcon,
  BookOpenIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";

const ProfilMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = async () => {
    await axios.get("http://localhost:4000/logout");
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <img src={avatar} alt="logo" />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          className: " bg-c9 dark:bg-c2 rounded-xl text-c7 p-2 pr-8 ",
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 3.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div className="flex flex-col ">
          <MenuItem className="flex gap-4 hover:bg-c7 rounded-2xl dark:hover:bg-c3">
            <UserCircleIcon className="h-6 text-c4 dark:text-c5" />
            <p className="text-base text-c2 dark:text-c7 font-DmSans">
              My Profile
            </p>
          </MenuItem>
          <MenuItem className="flex gap-4 hover:bg-c7 rounded-2xl dark:hover:bg-c3">
            <UserIcon className="h-6 text-c4 dark:text-c5" />
            <p className="text-base text-c2 dark:text-c7 font-DmSans">
              Manage account
            </p>
          </MenuItem>
          <MenuItem className="flex gap-4 hover:bg-c7 rounded-2xl dark:hover:bg-c3">
            <BookOpenIcon className="h-6 text-c4 dark:text-c5" />
            <p className="text-base text-c2 dark:text-c7 font-DmSans">
              Booking
            </p>
          </MenuItem>
          <MenuItem className="flex gap-4 hover:bg-c7 rounded-2xl dark:hover:bg-c3">
            <WalletIcon className="h-6 text-c4 dark:text-c5" />
            <p className="text-base text-c2 dark:text-c7 font-DmSans">
              My wallet
            </p>
          </MenuItem>
          <MenuItem className="flex gap-4 hover:bg-c7 rounded-2xl dark:hover:bg-c3">
            <TagIcon className="h-6 text-c4 dark:text-c5" />
            <p className="text-base text-c2 dark:text-c7 font-DmSans">
              My Rewards
            </p>
          </MenuItem>
          <MenuItem className="flex gap-4 hover:bg-c7 rounded-2xl dark:hover:bg-c3">
            <div className="flex gap-4" onClick={logout}>
              <ArrowLeftOnRectangleIcon className="h-6 text-c4 dark:text-c5" />
              <p className="text-base text-c2 dark:text-c7 font-DmSans">
                Sign out
              </p>
            </div>
          </MenuItem>
        </div>
      </Menu>
    </React.Fragment>
  );
};

export default ProfilMenu;
