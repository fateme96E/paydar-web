import { useState } from "react"
import { fetchEventSource } from '@microsoft/fetch-event-source';
import { GetToken } from "../Api/HandleToken";

export default function useChatGPT() {

    const [data, setData] = useState('');
    const [done, setDone] = useState(false);
    const [start, setStart] = useState(false);

    
    let headers = {
        'Authorization': `${GetToken()}`
    }

    async function prompt(query) {
        setData('')
        setDone(false)
        setStart(true)
        const url = `http://194.59.170.201:5555/api/gpt/chatBotSearch?query=${query}`;        

        let timer = setTimeout(() => {
            setDone(true);
        }, 5000); 

        await fetchEventSource(url, {
            headers: headers,
            openWhenHidden: true,
            onmessage(event) {
                setStart(false)
                let data2 = event.data ? JSON.parse(event.data) : "";
                clearTimeout(timer);
                timer = setTimeout(() => {
                    setDone(true);    
                }, 3000); 
                setData(prev => prev + data2) 
            },

            onerror(error) {            
                throw error;
            }
        });
    }

    return {
        data,
        done,
        start,
        setData,
        setDone,
        prompt
    }
}
