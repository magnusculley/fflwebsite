import React, {useState} from "react";
import {Button} from "react-bootstrap";
import './NameButton.css';
import { MagnusPortfolio } from "./MagnusPortfolio";

export function NameButton(): React.JSX.Element{
    const [selected,setSelected]=useState<string>("");
    function nameSelect(name:string):void{
        if (name===selected){
            setSelected("")
        } else{
            setSelected(name);
        }
    }
    let portfolio;
    if (selected==="magnus"){
        portfolio=<MagnusPortfolio/>;
    } else if (selected==="ben"){
        portfolio="B";
    } else if (selected==="alex"){
        portfolio="A";
    } else{
        portfolio="";
    }
    return(
        <div>
            <div className="button-container">
                <Button className="name-button" onClick={()=>nameSelect("magnus")} id="magnus">
                    Magnus</Button>
                <Button className="name-button" onClick={()=>nameSelect("ben")} id="ben">
                    Ben</Button>
                <Button className="name-button" onClick={()=>nameSelect("alex") }id="alex">
                    Alex</Button>
            </div>
            <div>
                {portfolio}
            </div>
            
        </div>
    )
}