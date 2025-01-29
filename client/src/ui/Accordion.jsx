import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import { useState } from "react";

function Accordion({ title, children }) {
  const [isopen, setIsopen] = useState(false);
  return (
    <div className="">
      <div className="flex justify-between ">
        <h5>{title}</h5>
        {isopen ? (
          <ArrowUp2
            size="32"
            color="#FF8A65"
            onClick={() => setIsopen(false)}
            className="cursor-pointer"
          />
        ) : (
          <ArrowDown2
            size="32"
            color="#FF8A65"
            onClick={() => setIsopen(true)}
            className="cursor-pointer"
          />
        )}
      </div>
      {isopen && <div>{children}</div>}
    </div>
  );
}

export default Accordion;
