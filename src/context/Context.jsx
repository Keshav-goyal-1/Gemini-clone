import { createContext ,useEffect, useState} from "react";
import run from "../config/gemini.js";

export const Context = createContext();


const ContextProvider = (props)=>{

    const [input,setInput] = useState("");
    const [recentPrompt , setRecentPrompt] = useState("");
    const [previousPrompts , setPreviousPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")
    
    const onSent = async (prompt)=>{
        await run(prompt)
    }
    
    // useEffect(() => {
    //     onSent("What is react js");
    // }, []); 
    
    const contextValue ={
        
    }
    
    return(
        <Context.Provider value = {contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
