import React, { useEffect, useState } from "react";
import { ProjectType } from "../../../domain/interfaces";
import useProjectModel from "../../../domain/models/Projects";

type Props = {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
};

const CardStack = ({ id, title, description, image }: Props) => {
  return (
    <section
      style={{
        margin: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexWrap: "wrap",
        width: 100,
        alignItems: "center",
        textAlign:'center',
        padding: 10,
      }}
    >
      <h3>{title}</h3>
      <img src={image} alt={title} style={{ width: 60, height: 60 }} />
    </section>
  );
};

export default CardStack;
