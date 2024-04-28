import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Mic from "./Mic.jsx";
import Upload from "./Upload";
import LanguageSelector from "./lng-selector";
import { useTranslation } from "react-i18next";
import { useSpeechRecognition } from "react-speech-recognition";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 20px;
  color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
  border: none;
  width: 100%;
  background-color: transparent;
  outline: none;
  cursor: text;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;

const Navbar = () => {
  const [openV, setOpenV] = useState(false);
  const [q, setQ] = useState("");
  const [inputValue, setInputValue] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { transcript } = useSpeechRecognition();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  // useEffect(() => {
  //   if (transcript) {
  //     setInputValue(transcript);
  //   }
  // }, [transcript]);

  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <Input
              placeholder={t("Search")}
              onChange={(e) => setQ(e.target.value)}
              //value={inputValue}
            />
            <SearchOutlinedIcon onClick={() => navigate(`/search?q=${q}`)} />
            <Mic />
          </Search>
          {currentUser ? (
            <User>
              <VideoCallOutlinedIcon onClick={() => setOpenV(true)} />
              <Avatar src={currentUser.img} handleClick />
              {currentUser.name}
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Typography sx={{ p: 2 }}>
                  The content of the Popover.
                </Typography>
              </Popover>
            </User>
          ) : (
            <Link to="signin" style={{ textDecoration: "none" }}>
              <Button>
                <AccountCircleOutlinedIcon />
                {t("SIGN IN")}
              </Button>

              <LanguageSelector />
            </Link>
          )}
        </Wrapper>
      </Container>
      {openV && <Upload setOpenV={setOpenV} />}
    </>
  );
};

export default Navbar;
