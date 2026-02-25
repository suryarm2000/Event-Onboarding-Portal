function Payment({values, handleChange}){

    return(
        <div>
            <h2>Payment Information</h2>
                <div className="payment-row">
                    <div className="ticket-section">
                        <label className="input-field ticket-input-section">
                            <p className="form-text">Number of Tickets</p>
                            <input className="input-box tickets" type="text" name="Tickets" value={values.Tickets} onChange={handleChange} />
                        </label>
                    </div>
                    <div className="pay-method">
                        <p className="form-text">Payment Method</p>
                        <div className="radio-payment">
                            <label className="radio">
                                <input className="radio-input" type="radio" name="PaymentMethod" value="creditcard" checked={values.PaymentMethod === "creditcard"} onChange={handleChange} />
                                <p className="form-text">Credit Card</p>
                            </label>
                            <label className="radio">
                                <input className="radio-input" type="radio" name="PaymentMethod" value="debitcard" checked={values.PaymentMethod === "debitcard"} onChange={handleChange} />
                                <p className="form-text">Debit Card</p>
                            </label>
                            <label className="radio">
                                <input className="radio-input" type="radio" name="PaymentMethod" value="cash" checked={values.PaymentMethod === "cash"} onChange={handleChange} />
                                <p className="form-text">Cash</p>
                            </label>
                            <label className="radio">
                                <input className="radio-input" type="radio" name="PaymentMethod" value="check" checked={values.PaymentMethod === "check"} onChange={handleChange} />
                                <p className="form-text">Check</p>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="confirm-grid">
                    <p className="form-text payment-para">
                        I understand that participation in this event may involve some degree of risk. I release WebminarPros LLC from any liability for injury, loss, or damage to personal property.
                    </p>
                    <label className="sign-input-section">
                        <p className="form-text">Signature</p>
                        <input className="input-box sign" type="text" name="Sign" value={values.Sign} onChange={handleChange} />
                    </label>
                    <label className="radio confirm-section">
                        <input className="radio-confirm" type="radio" name="Confirm" value="confirm" checked={values.Confirm === "confirm"} onChange={handleChange} />
                        <p className="form-text">Yes, I understand</p>
                    </label>
                    <label className="payment-inputs date-signed-input-section">
                        <p className="form-text">Date Signed</p>
                        <input className="input-box" type="date" name="DateSigned" value={values.DateSigned} onChange={handleChange} />
                    </label>
                </div>
            <div className="submit-section">
                <button className="button-submit" type="submit" disabled={!values.Confirm} >Submit</button>
            </div>
        </div>
    )
}

export default Payment;