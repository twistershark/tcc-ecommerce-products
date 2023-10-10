import React from "react";
import { HomeHero } from "./components/hero";
import { Link } from "../../components/link";
import { PromotionalCategories } from "./components/promotional-categories";
import { HighlightProducts } from "./components/highlight-products";
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="pl-mx-auto pl-max-w-2xl sm:pl-px-6 sm:pl-py-24 lg:pl-max-w-7xl lg:pl-px-0 lg:pl-py-8 pl-flex pl-flex-col pl-items-center pl-gap-8">
      <HomeHero />

      <div className="pl-text-center">
        <h3 className="pl-text-black pl-font-serif pl-text-lg pl-font-bold">
          NOVOS MODELOS
        </h3>
        <Link to="/produtos">COMPRAR AGORA</Link>
      </div>

      <PromotionalCategories />

      <hr className="pl-w-full pl-h-[1px] pl-border-[#CCC]" />

      <HighlightProducts />

      <Button
        variant="outline"
        className="pl-max-w-xs pl-mt-4"
        onClick={() => navigate("/produtos")}
      >
        Ver Todos
      </Button>
    </div>
  );
}
