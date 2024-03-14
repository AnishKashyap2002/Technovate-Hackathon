import React from "react";

import { itemCards } from "@/constants/items";
import ItemCard from "./Item";

const Items = () => {
    return (
        <div className="flex flex-wrap justify-center gap-10">
            {itemCards.map((item) => (
                <ItemCard
                    item={item}
                    key={Math.random()}
                />
            ))}
        </div>
    );
};

export default Items;
