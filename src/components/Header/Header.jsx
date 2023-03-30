import React from "react";
import { Image, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { headerItems } from "../../utils/utils";

const Header = () => {
  const navigate = useNavigate();

  const onMenuClick = (item) => {
    navigate(`/${item.key}`);
  };

  return (
    <div className="appHeader">
      <Menu mode="horizontal" onClick={onMenuClick} items={headerItems} />
      <Image
        className="logo"
        preview={false}
        src={"https://www.leomax.ru/new/img/logo/LEOMAX-GREEN.svg"}
      />
    </div>
  );
};

export default Header;
