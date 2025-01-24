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
    
    const delayPara = (index,nextWord)=>{
        setTimeout(function () {
            setResultData(prev=>prev+nextWord)
        },index*75)
    }

    const newChat = ()=>{
        setLoading(false)
        setShowResult(false)
    }

    const onSent = async (prompt)=>{

        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response ;
        if(prompt !== undefined){
            response = await run(prompt);
            setRecentPrompt(prompt)
        }
        else{
            setPreviousPrompts(prev=>[...prev,input])
            response = await run(input)
            setRecentPrompt(input)
        }
        let responseArray = response.split("**");
        let newResponse = "";
        for(let i=0; i<responseArray.length; i++)
        {
            if(i === 0 || i%2!== 1){
                newResponse += responseArray[i];
            }
            else{
                newResponse += "<b>" + responseArray[i] +"</b>";
            }
        }

        let newResponse2 = newResponse.split("*").join("</br>");
        let newResponseArray = newResponse2.split(" ");
        for(let i=0;i<newResponseArray.length;i++)
        {
            const nextWord = newResponseArray[i];
            delayPara(i,nextWord+" ");
        }
        setLoading(false)
        setInput("")
    }
    
    // useEffect(() => {
    //     onSent("What is react js");
    // }, []); 
    
    const contextValue ={
        previousPrompts,
        setPreviousPrompts, 
        onSent, 
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    }
    
    return(
        <Context.Provider value = {contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
