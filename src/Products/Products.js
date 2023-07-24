import "./Products.css";
import Card from "./../Components/Card";
import FullData from "../DB/data";

function Products() {
  return (
    <section className="card-container">
      {FullData.map((data) => (
        <div>
          <Card 
          img={data.img}
          title={data.title}
          reviews={data.reviews}
          prevPrice={data.prevPrice}
          newPrice={data.newPrice}
          company={data.company}
          color={data.color}
          category={data.category}
          />
        </div>
      ))}
    </section>
  );
}

export default Products;
