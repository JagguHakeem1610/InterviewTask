import { useState } from "react";
import { Button } from "@chakra-ui/react";


export const Counter = (props) => {

  const [state, setState] = useState(1);
  return (
    <div style={{ display: "flex" }}>
      <div>
        
        <Button 
          colorScheme="teal"
          variant="outline"
          onClick={() => setState((prev) => state - 1)}>
          -
        </Button>
      </div>
      <div>
        <p>&nbsp;&nbsp;&nbsp;{ state}&nbsp;&nbsp;&nbsp;</p>
      </div>
      <div>
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => setState((prev) => state + 1)}
        >
          +
        </Button>
      </div>
    </div>
  );
};
