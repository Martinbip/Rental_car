import { useEffect, useState, useCallback, useRef } from "react";
import debounce from "lodash/debounce";
import { NominatimResponse } from "@/app/types";
import { Input } from "@/components/ui/input";
interface ComboboxLocationProps {
  setFormValue: (id: string, value: any) => void;
}
export function ComboboxLocation({ setFormValue }: ComboboxLocationProps) {
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<NominatimResponse[]>([]);
  const [query, setQuery] = useState("");

  const fetchSuggestions = async (query: string) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${query}`
      );
      if (!response.ok) throw new Error("Failed to fetch suggestions");
      const data = (await response.json()) as NominatimResponse[];
      console.log("API response data:", data);
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    }
  };

  const debouncedFetchSuggestions = useCallback(
    debounce((query: string) => {
      if (query) {
        fetchSuggestions(query);
      } else {
        console.log("No query, clearing suggestions");
        setSuggestions([]);
      }
    }, 300),
    []
  );

  function onInputChange(value: string) {
    if (value) {
      setOpen(true);
    } else {
      setOpen(false);
    }
    setQuery(value);
    debouncedFetchSuggestions(value);
  }

  const handleItemClick = (item: NominatimResponse) => {
    console.log("Selected:", item);
    setQuery(item.display_name);
    setFormValue("locationLatLon", [+item.lat, +item.lon]);
    setFormValue("location", item.display_name);
    setFormValue(
      "cityOrProvince",
      item.address.state ? item.address.state : item.address.city
    );
    setOpen(false);
  };

  return (
    <div className="relative w-full mx-auto">
      <Input
        type="text"
        placeholder="Enter Address"
        value={query}
        onChange={(e) => onInputChange(e.target.value)}
        className=""
        onClick={() => setOpen(true)}
      />
      {open && (
        <ul className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.place_id}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              onClick={() => handleItemClick(suggestion)}
            >
              {suggestion.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
