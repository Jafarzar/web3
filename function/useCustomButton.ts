import { useState, useEffect } from "react";

type CustomButtonProps = {
  write?: () => void;
  status: string;
  isLoading: boolean;
};

type CustomButtonState = {
  disabled: boolean;
  buttonText: string;
};

export const useCustomButton = ({
  write,
  status,
  isLoading,
}: CustomButtonProps): CustomButtonState => {
  const [disabled, setDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Mint NFT");

  useEffect(() => {
    if (status === "loading") {
      setDisabled(true);
      setButtonText("Minting...");
    } else if (isLoading) {
      setDisabled(true);
      setButtonText("On approval");
    } else if (
      status === "idle" ||
      status === "error" ||
      (status === "success" && !isLoading)
    ) {
      setDisabled(false);
      setButtonText("Mint NFT");
    }
  }, [status, isLoading]);

  const handleClick = (): void => {
    if (write) {
      write();
    }
  };

  return {
    disabled,
    buttonText,
  };
};
