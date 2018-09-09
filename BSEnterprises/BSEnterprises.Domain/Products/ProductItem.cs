namespace BSEnterprises.Domain.Products
{
    public class ProductItem
    {
        public int Id { get; set; }
        public string Name { get; set; }        

        public Product Product {get; set;}

        protected ProductItem()
        {

        }

        private ProductItem( string name)
        {
            Name = name;
        }

        public static ProductItem Add(string name)
        {
            return new ProductItem(name);
        }

    }

}