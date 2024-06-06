import React from "react";
import './account.css';

const Account = () => {
    return (
        <div className="account-container">
            <div className="account-box">
                <div className="account-title">Accounts</div>
                <section className="account-section">
                    <div className="account-wrapper">
                        <div className="two-left">
                            <div className="account">
                                <img src="/Chase.png" alt="Chase Bank" />
                                <div className="account-info">
                                    <div className="cardname">Chase Debit</div>
                                    <p>x0000</p>
                                    <p>Balance: $10000.00</p>
                                </div>
                            </div>
                            <div className="account">
                                <img src="/BOA.png" alt="BOA Bank" />
                                <div className="account-info">
                                    <div className="cardname">BOA Debit</div>
                                    <p>x1234</p>
                                    <p>Balance: $15,000.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="two-right">
                            <div className="account">
                                <img src="/Chase.png" alt="Chase Bank" />
                                <div className="account-info">
                                    <div className="cardname">Chase Credit</div>
                                    <p>x0000</p>
                                    <p>Balance: $250.87</p>
                                </div>
                            </div>
                            <div className="account">
                                <img src="/BOA.png" alt="BOA Bank" />
                                <div className="account-info">
                                    <div className="cardname">BOA Credit</div>
                                    <p>x1234</p>
                                    <p>Balance: $1,180.98</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <button className="add-account-button">+ Add Account</button>
        </div>
    );
};

export default Account;