function Participant({values, handleChange}){

    return(
        <div>
            <h2>Participant Information</h2>
                <div className="form-row name-dob-section">
                    <label className="input-field name-input-section">
                        <p className="form-text">Full Name</p>
                        <input className="input-box name" type="text" name="Name" value={values.Name} onChange={handleChange} />
                    </label>
                    <label className="input-field dob-input-section">
                        <p className="form-text">Date of Birth</p>
                        <input className="input-box dob" type="date" name="DateOfBirth" value={values.DateOfBirth} onChange={handleChange}/>
                    </label>
                </div>
                <div className="form-row">
                    <div className="gender-select">
                        <p className="form-text">Gender</p>
                        <label className="radio">
                            <input className="radio-input" type="radio" name="Gender" value="male" checked={values.Gender === "male"} onChange={handleChange} />
                            <p className="form-text">Male</p>
                        </label>
                        <label className="radio">
                            <input className="radio-input" type="radio" name="Gender" value="female" checked={values.Gender === "female"} onChange={handleChange} />
                            <p className="form-text">Female</p>
                        </label>
                    </div>
                    <div className="name-email-section">
                        <label className="input-field number-input-section">
                            <p className="form-text">Phone Number</p>
                            <input className="input-box number" type="text" name="Number" value={values.Number} onChange={handleChange} />
                        </label>
                        <label className="input-field email-input-section">
                            <p className="form-text">Email</p>
                            <input className="input-box email" type="email" name="Email" value={values.Email} onChange={handleChange} />
                        </label>
                    </div>
                </div>
                <div className="social-media-section">
                    <p className="form-text">Where did you hear about this virtual event?</p>
                    <div className="social-radio">
                        <label className="radio">
                            <input className="radio-input" type="radio" name="Platform" value="facebook" checked={values.Platform === "facebook"} onChange={handleChange} />
                            <p className="form-text">Facebook</p>
                        </label>
                        <label className="radio">
                            <input className="radio-input" type="radio" name="Platform" value="youtube" checked={values.Platform === "youtube"} onChange={handleChange} />
                            <p className="form-text">Youtube</p>
                        </label>
                        <label className="radio">
                            <input className="radio-input" type="radio" name="Platform" value="instagram" checked={values.Platform === "instagram"} onChange={handleChange} />
                            <p className="form-text">Instagram</p>
                        </label>
                        <label className="radio">
                            <input className="radio-input" type="radio" name="Platform" value="twitter" checked={values.Platform === "twitter"} onChange={handleChange} />
                            <p className="form-text">Twitter</p>
                        </label>
                        <label className="radio other">
                            <input className="radio-input" type="radio" name="Platform" value="other" checked={values.Platform === "other"} onChange={handleChange} />
                            <p className="form-text">Other:</p>
                            <input className="input-box othertext" type="text" name="OtherText" value={values.OtherText} onChange={handleChange} disabled={values.Platform !== "other"} />
                        </label>              
                    </div>
                </div>
        </div>
    );
}

export default Participant;