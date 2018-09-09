namespace BSEnterprises.Domain.Engineers
{
    public class Engineer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Engineer()
        {
            
        }
        public Engineer(string name)
        {
            Name = name;
        }

    }
}