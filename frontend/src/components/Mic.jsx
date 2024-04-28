import React from "react";
import MicOffRoundedIcon from "@mui/icons-material/MicOffRounded";
import MicRoundedIcon from "@mui/icons-material/MicRounded";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useState from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Mic = () => {
  const [listen, setListen] = useState(false);
  const [openM, setOpenM] = useState(false);
  const { transcript, startListening, stopListening } = useSpeechRecognition();

  const startLis = () => {
    setListen(true);
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  };
  const stopLis = () => {
    setListen(false);
    SpeechRecognition.stopListening();
  };

  const handleOpen = () => setOpenM(true);
  const handleClose = () => setOpenM(false);

  return (
    <>
      <Button onClick={handleOpen}>
        <MicIcon />
      </Button>
      <Modal open={openM} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Start Speaking
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {transcript}
          </Typography>
          {listen ? (
            <MicOffRoundedIcon onClick={startLis} />
          ) : (
            <MicRoundedIcon onClick={stopLis} />
          )}
          <MicIcon />
        </Box>
      </Modal>
    </>
  );
};

export default Mic;
