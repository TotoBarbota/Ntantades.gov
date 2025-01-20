import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { SiTicktick } from "react-icons/si";

import { Routes } from "../../routes";
import "./Application.css";
import { useState } from "react";

function Application(props) {
  // type = 0 -> completed, type = 1 -> not completed, type = 2 -> on hold
  console.log("props are ", props);
  const navigate = useNavigate();
  const { approved } = props;
  console.log("aitisi type is ", approved);

  const buttonLabel =
    approved === 0
      ? "Αποδοχή"
      : approved === 1
      ? "Απορριώμα"
      : approved === 2
      ? "Αναμονη"
      : "";

  console.log("button label is ", buttonLabel);

  const typeClassName =
    approved === 0
      ? "type-icon-right"
      : approved === 1
      ? "type-icon-not-right"
      : approved === 2
      ? "type-icon-on-hold"
      : "";

  console.log("type class name is ", typeClassName);

  function routeToOptions() {
    navigate(Routes.Application, { replace: true });
  }

  // label on unicode symbolism to be accepted the greek language
  const typeSymbol =
    approved === 0 ? <SiTicktick /> : approved === 1 ? <IoMdClose /> : "";

  const typeLabel =
    approved === 0
      ? "\u0388\u03B3\u03BA\u03C5\u03C1\u03B7" // ������
      : approved === 1
      ? "\u039C\u03B7 \u0388\u03B3\u03BA\u03C5\u03C1\u03B7" // �� ������
      : approved === 2
      ? "\u03A3\u03B5 \u03B1\u03BD\u03B1\u03BC\u03BF\u03BD\u03AE"
      : ""; // �� �������

  return (
    <div className="application-container">
      <p className={typeClassName}>
        {typeSymbol} <b>{typeLabel}</b>
      </p>
      <Button
        label={buttonLabel}
        onClick={() => {
          if (approved === 0) {
            navigate(Routes.Application, { replace: true });
          }
        }}
      />
    </div>
  );
}

export default Application;
