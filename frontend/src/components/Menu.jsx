import React from "react";
import styled from "styled-components";
import YTicon from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 160vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
  font-size: large;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: small;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
  display: flex;
  color: ${({ theme }) => theme.text};
`;

const Menu = ({ darkMode, setDarkMode }) => {
  const { currentUser } = useSelector((state) => state.user);
  const { t } = useTranslation();

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={YTicon} />
            YouTube
          </Logo>
        </Link>
        <Item>
          <HomeIcon /> {t("Home")}
        </Item>
        <Link to="trends" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <ExploreOutlinedIcon />
            {t("Explore")}
          </Item>
        </Link>
        <Link
          to="subscriptions"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <SubscriptionsOutlinedIcon />
            {t("Subscriptions")}
          </Item>
        </Link>
        <Hr />
        <Title>
          {t(" You")} <ChevronRightOutlinedIcon />
        </Title>

        <Item>
          <VideoLibraryOutlinedIcon />
          {t("Library")}
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          {t("History")}
        </Item>
        <Hr />
        {!currentUser && (
          <>
            <Login>
              Sign in to like videos, comment, and subscribe.
              <Link to="signin" style={{ textDecoration: "none" }}>
                <Button>
                  <AccountCircleOutlinedIcon />
                  {t("SIGN IN")}
                </Button>
              </Link>
            </Login>
            <Hr />
          </>
        )}
        <Item>
          <LibraryMusicOutlinedIcon />
          {t("Music")}
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          {t("Sports")}
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          {t("Gaming")}
        </Item>
        <Item>
          <MovieOutlinedIcon />
          {t("Movies")}
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          {t("News")}
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          {t("Live")}
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          {t("Settings")}
        </Item>
        <Item>
          <FlagOutlinedIcon />
          {t("Report")}
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          {t("Help")}
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} {t("Mode")}
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
