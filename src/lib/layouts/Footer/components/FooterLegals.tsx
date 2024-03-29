import React from "react";
import FooterTextButton, { FooterTextButtonProps } from "./FooterTextButton";
import FooterVSpace from "./FooterVSpace";
import FooterHeading from "./FooterHeading";
import FooterText from "./FooterText";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "src/lib/navigation/route_paths";
import { AppConstants } from "src/domain/constants/AppConstants";

const FooterLegals = () => {
  const navigate = useNavigate();

  const listOfLegals: FooterTextButtonProps[] = [
    {
      label: "Privacy Policy",
      onClick: () => {
        navigate(RoutePaths.PRIVACY_POLICY);
      },
    },

    {
      label: "Terms and conditions",
      onClick: () => {
        navigate(RoutePaths.TERMS_AND_CONDITIONS);
      },
    },
  ];

  const legalsMappedComponent = listOfLegals.map((item, index) => {
    return (
      <React.Fragment key={index}>
        <FooterVSpace />
        <FooterTextButton
          onClick={() => {
            item.onClick();
          }}
        >
          {item.label}
        </FooterTextButton>
      </React.Fragment>
    );
  });

  return (
    <>
      <FooterHeading>Legal</FooterHeading>
      {legalsMappedComponent}
      <FooterVSpace />
      <FooterVSpace />

      {/* <FooterHeading>Drop me an email</FooterHeading>
      <FooterVSpace />
      <FooterText>{AppConstants.CONTACT_US_EMAIL}</FooterText>
      <FooterVSpace />
      <FooterVSpace />

      <FooterHeading>Give me a ring or whatsapp</FooterHeading>
      <FooterVSpace />
      <FooterText>{AppConstants.CONTACT_US_PHONE}</FooterText> */}
    </>
  );
};

export default FooterLegals;
