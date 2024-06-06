import React, { useState } from "react";
import './addAccount.css';

const AddAccount = () => {
    const [droppedImage, setDroppedImage] = useState(null);

    const handleDragStart = (e, id) => {
        e.dataTransfer.setData("text/plain", id);
    };

    const handleDrop = (e) => {
        const id = e.dataTransfer.getData("text");
        setDroppedImage(id);
        e.preventDefault();
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const getImagePath = (id) => {
        const imageMap = {
            "1": "/Chase.png",
            "2": "/BOA.png",
            "3": "/wellsfargo.png",
            "4": "/amex.png",
            "5": "/citi.png",
            "6": "/usbank.png"
        };
        return imageMap[id];
    };

    return (
        <div className="addAccount-container">
            <div className="addAccount-box">
                <div className="findyourbank">Find Your Bank</div>
                <section className="add-account-section">
                    <div className="find-bank">
                        <div className="bank-images">
                            <img src="/Chase.png" alt="Bank 1" draggable onDragStart={(e) => handleDragStart(e, "1")} />
                            <img src="/BOA.png" alt="Bank 2" draggable onDragStart={(e) => handleDragStart(e, "2")} />
                            <img src="/wellsfargo.png" alt="Bank 3" draggable onDragStart={(e) => handleDragStart(e, "3")} />
                            <img src="/amex.png" alt="Bank 4" draggable onDragStart={(e) => handleDragStart(e, "4")} />
                            <img src="/citi.png" alt="Bank 5" draggable onDragStart={(e) => handleDragStart(e, "5")} />
                            <img src="/usbank.png" alt="Bank 6" draggable onDragStart={(e) => handleDragStart(e, "6")} />
                        </div>
                        <div
                            className="drop-box"
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                        >
                            {droppedImage ? <img src={getImagePath(droppedImage)} alt="Dropped" /> : "Drop here"}
                        </div>
                    </div>
                    <div className="sign-in">
                        <label htmlFor="bankingUsername">Banking Username</label>
                        <input type="text" id="bankingUsername" name="bankingUsername" />
                        <label htmlFor="bankingPassword">Banking Password</label>
                        <input type="text" id="bankingPassword" name="bankingPassword" />
                        <button type="submit" className="submit-button">Submit</button>
                        <div className="submit-text">Your sign-on information is secured by encryption and will only be
                            shared with your financial institution.</div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AddAccount;