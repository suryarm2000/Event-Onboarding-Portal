import { useState } from "react";
import dayjs from "dayjs";
import About from "./components/About";
import Participant from "./components/Participant";
import Payment from "./components/Payment";
import Footer from "./components/Footer";

function Page(){

    const [inputs, setInputs] = useState({
        Name: "",
        DateOfBirth: "",
        Gender: "",
        Email: "",
        Number: "",
        Platform: "",
        OtherText: "",
        Tickets: "",
        PaymentMethod: "",
        Confirm: "",
        Sign: "",
        DateSigned: "",
        nameReplacement: "Digital Marketing Masterclass",
        dateReplacement: "October 15, 2028"
    });

    function handleChange(e){
        const target = e.target;
        const name = target.name;
        const value = target.type === "checkbox"? target.checked : target.value;
        if(name === "Name"){
            const fullName = value.replace(/[^a-zA-Z. ]/g, "");
            setInputs((prev) => ({
                ...prev,
                [name] : fullName,
                "nameReplacement" : fullName === "" ? "Digital Marketing Masterclass" : fullName
            }));
            return;
        }
        if(name === "DateOfBirth"){
            const dateOfBirth = dayjs(value).format("MMMM D, YYYY")
            setInputs((prev) => ({
                ...prev,
                [name] : value,
                "dateReplacement" : value === "" ? "October 15, 2028" : dateOfBirth
            }))
        }
        if(name === "Number"){
            const phoneNumber = value.replace(/\D/g, "").slice(0, 10);
            setInputs((prev) => ({
                ...prev,
                [name] : phoneNumber
            }));
            return;
        }
        if(name === "Email"){
            const emailInput = value.replace(/\s/g, "").toLowerCase();
            setInputs((prev) => ({
                ...prev,
                [name] : emailInput
            }));
            return;
        }
        if(name === "Tickets"){
            const ticketsNumber = value.replace(/\D/g, "").slice(0, 4);
            setInputs((prev) => ({
                ...prev,
                [name] : ticketsNumber
            }));
            return;
        }
        setInputs((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("INPUTS DATA:", inputs);
        let canSubmit = true;
        let toFill = [];
        let message = "Please Fill ";
        for(const [key, value] of Object.entries(inputs)){
            if(value === ""){
                if(key === "othertext"){
                    if(inputs.Platform === "other"){
                        canSubmit = false;
                        toFill.push(key)
                    }
                }else{
                    canSubmit = false;
                    toFill.push(key);
                }
            }
        }
        let len = toFill.length;
        for(let i = 0; i < len; i++){
            if(i+1 < len){
                if(i+2 < len){
                    message += toFill[i] + ", ";
                }else{
                    message += toFill[i] + " and "
                }
            }else{
                message += toFill[i] + ".";
            }
        }
        if(!canSubmit){
            alert(message);
        }
    }

    return(
        <div className="page">
            <About values={inputs} />
            <hr />
            <form onSubmit={handleSubmit}>
                <Participant values={inputs} handleChange={handleChange} />
                <hr />
                <Payment values={inputs} handleChange={handleChange} />
            </form>
            <hr />
            <Footer />
        </div>
    );
}

export default Page;