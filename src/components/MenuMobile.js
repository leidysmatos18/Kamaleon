import { React, useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


const MenuMobile = ({LinkMenu,redirecionar}) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="right"
      >
        <List>
          {LinkMenu.filter((e) => e.title).map((e,i)=>(
            <ListItemButton key={i}>
              <ListItemText
                onClick={()=>redirecionar(e.page, e.redired)}
              >{e.title}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon sx={{ color: "#fff" }} />
      </IconButton>
    </>
  );
};

export default MenuMobile;
