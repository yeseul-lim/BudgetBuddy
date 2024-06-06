import React from "react";
import './addAccount.css';

const AddAccount = () => {
    return (
        <div className="addAccount-container">
            <div className="addAccount-box">
                <div className="findyourbank">Find Your Bank</div>
                <section className="add-account-section">
                    <div className="find-bank">
                        <div className="bank-images">
                            <img src="/Chase.png" alt="Bank 1" />
                            <img src="/BOA.png" alt="Bank 2" />
                            <img src="/wellsfargo.png" alt="Bank 3" />
                            <img src="/amex.png" alt="Bank 4" />
                            <img src="/citi.png" alt="Bank 5" />
                            <img src="/usbank.png" alt="Bank 6" />
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