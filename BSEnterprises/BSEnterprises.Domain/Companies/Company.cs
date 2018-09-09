namespace BSEnterprises.Domain.Companies
{
    public class Company
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public Company()
        {
            
        }
        public Company(string name)
        {
            Name = name;
        }
    }
}