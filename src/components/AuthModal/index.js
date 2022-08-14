import React from "react";
import { useNavigate } from "react-router-dom";

import Lottie from "react-lottie";

import { Button, Modal } from "@mui/material";
import animation from "../../assets/Json/modelAnimation.json";
import Input from "../../commons/Input";

import "./style.css";

function AuthModal({
  openModal,
  handleCloseModal,
  setRegisterEmail,
  setRegisterPassword,
  setLoginEmail,
  setLoginPassword,
  register,
  login,
}) {
  const navigate = useNavigate();

  const handleNavigate = (url) => {
    if (url) {
      navigate(url);
    }
    handleCloseModal();
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
  };

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          display: "flex",
          padding: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="ModelCardStyleContainer">
          <h2>Please, login or register </h2>
          <div>
            <Lottie options={defaultOptions} height={90} width={90} />
          </div>
          <div>
            <div className="auth_login_form-container">
              {/* <div className="register-form-container">
                <Input
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  width={250}
                  placeholder="Email"
                />
                <Input
                  style={{ marginTop: 7 }}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  width={250}
                  placeholder="password"
                  type="password"
                />
                <Button
                  style={{ marginTop: 10, marginBottom: 10 }}
                  onClick={register}
                >
                  Register
                </Button>
              </div> */}
              <div className="login_form_container">
                <Input
                  onChange={(e) => setLoginEmail(e.target.value)}
                  width={250}
                  placeholder="Email"
                />
                <Input
                  style={{ marginTop: 7 }}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  width={250}
                  placeholder="password"
                  type="password"
                />
                <Button
                  style={{ marginTop: 10, marginBottom: 10 }}
                  onClick={login}
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
          <button onClick={() => handleNavigate()} className="CloseModal">
            cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default AuthModal;
