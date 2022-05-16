
import { useRef, useState } from "react"

const menuDOM = () => {

  const [ content, setContent ] = useState({});

  const [ suggestions, setSuggestions ] = useState([]);

  const menuSearchRef = useRef(null);

  return {
    states: { 
      content, setContent,
      suggestions, setSuggestions
    },
    refs:{ menuSearchRef }
  }

}

export default menuDOM;