namespace BSEnterprises.Domain.Companies
{
    public class Company
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }

        public Company()
        {
            
        }
        public Company(string name)
        {
            Name = name;
            IsActive = true;
        }
        public void Modify(string name)
        {
            Name = name;
            IsActive = true;
        }
        public void Delete()
        {
            IsActive = false;
        }
    }
}