import React, { useState } from "react";
import { Box, InputBase, List, ListItem, ListItemText } from "@mui/material";

interface SearchResult {
  label: string;
  value: string;
}

const SearchBox: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    const results: SearchResult[] = [
      { label: "Result 1", value: "result1" },
      { label: "Result 2", value: "result2" },
      { label: "Result 3", value: "result3" },
      { label: "Result 4", value: "result4" },
      { label: "Result 5", value: "result5" },
      { label: "Result 6", value: "result6" },
      { label: "Result 7", value: "result7" },
      { label: "Result 8", value: "result8" },
      { label: "Result 9", value: "result9" },
      { label: "Result 10", value: "result10" },
      { label: "Result 11", value: "result11" },
      { label: "Result 12", value: "result12" },
      { label: "Result 13", value: "result13" },
      { label: "Result 14", value: "result14" },
      { label: "Result 15", value: "result15" },
    ];
    if (value.trim() !== "") {
     
      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([...results]);
      setShowResults(false);
    }
  };

  const handleResultClick = (result: SearchResult) => {
    setSearchTerm(result.label);
    setShowResults(false);
  };

  return (
    <Box position="relative" width="100%"className="relative w-[90%] px-3 py-1 border rounded-md shadow-sm border-primary-light bg-base transition-transform duration-300 ease-in-out focus-within:w-[100%] focus-within:scale-x-105">
      <InputBase
        placeholder="Search..."
        fullWidth
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={() => setShowResults(true)}
        onBlur={() => setShowResults(false)}
      />
      {showResults && (
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            zIndex: 10,
            maxHeight: "200px", 
            overflowY: "auto",
            bgcolor: "background.paper", 
            border: "1px solid", 
          }}
        >
          <List className="w-full overflow-y-auto">
            {searchResults.map((result) => (
              <ListItem
                key={result.value}
                onClick={() => handleResultClick(result)}
                sx={{ cursor: "pointer" }}
              >
                <ListItemText primary={result.label} className="text-primary-dark"/>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default SearchBox;
