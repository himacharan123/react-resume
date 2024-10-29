function InputForm() {
  return (
    <> 
      <div>
        <h2>Resume Form</h2>
        <dl>
          <h4>Genaral Information :</h4>
          <dt>
            Full Name : <input type="text" />
          </dt>
          <dt>
          Email : <input type="email" />
          </dt>
          <dt>
          Phone number : <input type="tel" />
          </dt>
        </dl>
      </div>
    </>
  );
}

export default InputForm;
