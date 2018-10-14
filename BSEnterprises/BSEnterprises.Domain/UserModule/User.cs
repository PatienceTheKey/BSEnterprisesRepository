namespace BSEnterprises.Domain.UserModule
{
    public class User
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Gstin { get; set; }
        public string Pan { get; set; }
        public string ContactNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string TermsAndCondition { get; set; }
        public string BankName { get; set; }
        public string IfscCode { get; set; }
        public string AccountNumber { get; set; }
        public string State { get; set; }
        public string Subject { get; set; }

        public void Modify(string name, string gstin, string pan, string contactNumber, string email, string address,
                            string termsAndCondition, string bankName, string ifscCode, string accountNumber,  string state
                            )
        {

            Name = name;
            
            Gstin = gstin;
            Pan = pan;
            ContactNumber = contactNumber;
            Email = email;
            Address = address;
            TermsAndCondition = termsAndCondition;
            BankName = bankName;
            IfscCode = ifscCode;
            AccountNumber = accountNumber;
            State = state;
            
        }
    }

    
}