import React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Avatar, Divider } from "@mui/material";

const ChooseCurrency = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Currency">
          <IconButton
            className="p-0"
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "notifications" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <p className=" text-sm text-c2 font-semibold dark:text-c6">USD</p>
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
          className:
            "bg-c9 dark:bg-c2 rounded-xl text-c7 p-2  w-[70%] ml-[40px] mt-8 md:w-[35%]   md:ml-[60px] md:mt-10 ",
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
        <div className="flex flex-col ml-6 md:ml-2 relative ">
          <MenuItem className="flex gap-4 hover:c4 dark:hover:bg-c3 rounded-xl ">
            <button className="flex gap-4 justify-around font-DmSans">
              <p className="text-c2 dark:text-c7">USD</p>
              <p className="text-c4 dark:text-c5 font-DmSans text-base">
                (US Dollar)
              </p>
              <CheckCircleIcon className="w-6 absolute right-2 hover:text-[#145CE6]" />
            </button>
          </MenuItem>
          <Divider className="bg-c4 " variant="middle" />
          <MenuItem className="flex gap-4 hover:c4 dark:hover:bg-c3 rounded-xl">
            <button className="flex gap-4 font-DmSans">
              <p className=" text-c2 dark:text-c6">GBP</p>
              <p className="text-c4 dark:text-c5 font-DmSans text-base">
                (British Pounds)
              </p>
              <CheckCircleIcon className="w-6  absolute right-2 hover:text-[#145CE6]" />
            </button>
          </MenuItem>
          <Divider className="bg-c4 " variant="middle" />
          <MenuItem className="flex gap-4 hover:c4 dark:hover:bg-c3 rounded-xl">
            <button className="flex gap-4 font-DmSans">
              <p className=" text-c2 dark:text-c6">AUD</p>
              <p className="text-c4 dark:text-c5 font-DmSans ">
                (Aust.. Dollar)
              </p>
              <CheckCircleIcon className="w-6  absolute right-2 hover:text-[#145CE6] " />
            </button>
          </MenuItem>
        </div>
      </Menu>
    </React.Fragment>
  );
};

export default ChooseCurrency;
