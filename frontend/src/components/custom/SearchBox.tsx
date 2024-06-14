import React from "react";
import { Box, InputBase, InputBaseProps } from "@mui/material";

const SearchBox = React.forwardRef<HTMLInputElement, InputBaseProps>(
  (props, ref) => {
    return (
      <Box className="relative w-[90%] px-3 py-1 border rounded-md shadow-sm focus:border-primary-light hover:border-primary-light active:border-primary-light bg-base transition-transform duration-300 ease-in-out focus-within:w-[100%] focus-within:scale-x-105">
        <InputBase ref={ref} className="w-full" {...props} />
      </Box>
    );
  }
);

export default SearchBox;
