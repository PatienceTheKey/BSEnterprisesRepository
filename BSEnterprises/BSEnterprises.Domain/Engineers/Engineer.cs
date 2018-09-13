namespace BSEnterprises.Domain.Engineers
{
    public class Engineer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ContactNumber { get; set; }
        public string Address { get; set; }
        public bool IsActive { get; set; }
        public Engineer()
        {
            
        }
        public Engineer(string name, string contactNumber, string address)
        {
            Name = name;
            ContactNumber = contactNumber;
            Address = address;
            IsActive = true;
        }
        public void Modify(string name, string contactNumber, string address)
        {
            Name = name;
            ContactNumber = contactNumber;
            Address = address;
            IsActive = true;
        }

        public void Delete()
        {
            IsActive = false;
        }

    }
}