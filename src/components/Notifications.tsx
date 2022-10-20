import React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { BellIcon } from "@heroicons/react/24/outline";
import { Avatar } from "@mui/material";

const Notifications = () => {
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
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "notifications" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Badge color="error" variant="dot">
              <BellIcon className="w-6 text-c4 dark:text-c6" />
            </Badge>
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
            "bg-c9 dark:bg-c2  rounded-xl text-c7 p-2 pr-8 w-[90%] md:w-[40%]  md:ml-[60px] md:mt-8 ",
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

            // "&:before": {
            //   content: '""',
            //   display: "block",
            //   position: "absolute",
            //   top: 0,
            //   right: 14,
            //   width: 10,
            //   height: 10,
            //   bgcolor: "background.paper",
            //   transform: "translateY(-50%) rotate(45deg)",
            //   zIndex: 0,
            // },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div className="flex flex-col">
          <MenuItem className="flex gap-4">
            <Avatar />
            <p className="text-base text-c4 dark:text-c7 font-DmSans">
              Notifications
            </p>
          </MenuItem>
        </div>
      </Menu>
    </React.Fragment>
  );
};

export default Notifications;
