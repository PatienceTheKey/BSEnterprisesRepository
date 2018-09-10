namespace BSEnterprises.Domain.Engineers
{
    public class Engineer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public Engineer()
        {
            
        }
        public Engineer(string name)
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