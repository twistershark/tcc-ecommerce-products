import React from "react";
import { Button } from "../../../../components/button";
import HeroImage from "../../../../assets/images/hero.png";
import { useNavigate } from "react-router-dom";

export function HomeHero() {
  const navigate = useNavigate();

  return (
    <div className=" pl-relative pl-flex pl-items-center pl-justify-center pl-min-h-[775px] pl-w-full">
      <div className="pl-flex pl-flex-col pl-gap-8 pl-max-w-[446px] pl-items-center pl-ml-[300px]">
        <h1 className="pl-font-serif pl-text-white pl-text-center pl-text-5xl">
          ELEVE O SEU GUARDA-ROUPA
        </h1>
        <p className="pl-font-sans pl-text-white pl-text-center pl-font-medium pl-text-lg">
          Tendências da moda
        </p>
        <Button
          className="pl-max-w-[188px]"
          onClick={() => navigate("/produtos")}
        >
          Ver Produtos
        </Button>
      </div>
      <img
        src={HeroImage}
        className="pl-absolute -pl-z-10 pl-top-0 pl-left-0 pl-right-0 pl-bottom-0"
      />
    </div>
  );
}
