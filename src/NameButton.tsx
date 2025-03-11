import React, {useState} from "react";
import {Button} from "react-bootstrap";
import './NameButton.css';

export function NameButton(): React.JSX.Element{
    const [selected,setSelected]=useState<string>("");
    function nameSelect(name:string):void{
        if (name===selected){
            setSelected("")
        } else{
            setSelected(name);
        }
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
                You Selected {selected}
            </div>
        </div>
    )
}