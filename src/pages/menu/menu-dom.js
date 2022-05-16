
import { useRef, useState } from "react"

const menuDOM = () => {
  
  const [ suggestions, setSuggestions ] = useState([]);

  const menuSearchRef = useRef(null);

  return {
    states: {
      suggestions, setSuggestions
    },
    refs:{ menuSearchRef }
  }

}

export default menuDOM;