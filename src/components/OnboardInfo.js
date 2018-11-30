/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Emoji from "./Emoji";

export default function OnboardInfo() {
  return (
    <div className="info one-half column">
      <h3>
        Welcome to Emojiful <Emoji symbol="👋" />
      </h3>
      <p>Emojiful is a spaced repetition app for learing emoji quickly</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sem
        justo, suscipit eu massa quis, aliquet hendrerit sapien. Vivamus in
        tristique lorem. Suspendisse id est lacus. Fusce nisl ligula, volutpat a
        vestibulum nec, tempus eget tellus.
      </p>
      <p>Please login or register to get started.... </p>
      <Emoji symbol="💯" />
    </div>
  );
}
