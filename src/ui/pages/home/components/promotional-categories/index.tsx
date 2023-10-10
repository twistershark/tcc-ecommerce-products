import React from "react";
import { Link } from "../../../../components/link";
import ManCategoryCover from "../../../../assets/images/man-category.png";
import WomanCategoryCover from "../../../../assets/images/woman-category.png";

export function PromotionalCategories() {
  return (
    <div className="pl-flex pl-gap-8 pl-justify-between">
      <div>
        <img src={ManCategoryCover} />
        <div className="pl-text-center">
          <h3 className="pl-text-black pl-font-serif pl-text-lg pl-font-bold">
            TENDÊNCIAS MASCULINAS
          </h3>
          <Link to="/produtos">COMPRAR AGORA</Link>
        </div>
      </div>

      <div>
        <img src={WomanCategoryCover} />
        <div className="pl-text-center">
          <h3 className="pl-text-black pl-font-serif pl-text-lg pl-font-bold">
            NOVA COLEÇÃO 2023
          </h3>
          <Link to="/produtos">COMPRAR AGORA</Link>
        </div>
      </div>
    </div>
  );
}
